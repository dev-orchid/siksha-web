import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const staffAttendanceSchema = z.object({
  school_id: z.string().uuid(),
  academic_year_id: z.string().uuid(),
  staff_id: z.string().uuid(),
  date: z.string(),
  status: z.enum(['present', 'absent', 'late', 'half_day', 'on_leave', 'holiday']),
  check_in: z.string().optional(),
  check_out: z.string().optional(),
  remarks: z.string().optional(),
  marked_by: z.string().uuid(),
})

const bulkStaffAttendanceSchema = z.object({
  school_id: z.string().uuid(),
  academic_year_id: z.string().uuid(),
  date: z.string(),
  marked_by: z.string().uuid(),
  attendance: z.array(z.object({
    staff_id: z.string().uuid(),
    status: z.enum(['present', 'absent', 'late', 'half_day', 'on_leave', 'holiday']),
    check_in: z.string().optional(),
    check_out: z.string().optional(),
    remarks: z.string().optional(),
  })),
})

// GET - Get staff attendance
export async function GET(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const { searchParams } = new URL(request.url)

    const staffId = searchParams.get('staff_id')
    const departmentId = searchParams.get('department_id')
    const date = searchParams.get('date')
    const startDate = searchParams.get('start_date')
    const endDate = searchParams.get('end_date')
    const schoolId = searchParams.get('school_id')

    let query = supabase
      .from('staff_attendance')
      .select(`
        *,
        staff (id, first_name, last_name, employee_id, designation, department_id, departments(id, name))
      `)

    if (schoolId) {
      query = query.eq('school_id', schoolId)
    }

    if (staffId) {
      query = query.eq('staff_id', staffId)
    }

    if (date) {
      query = query.eq('date', date)
    }

    if (startDate && endDate) {
      query = query.gte('date', startDate).lte('date', endDate)
    }

    const { data, error } = await query.order('date', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Filter by department if specified (since it's in the nested staff table)
    let filteredData = data
    if (departmentId && data) {
      filteredData = data.filter((item: any) => item.staff?.department_id === departmentId)
    }

    return NextResponse.json({ data: filteredData })
  } catch (error) {
    console.error('Error fetching staff attendance:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Mark staff attendance (single or bulk)
export async function POST(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const body = await request.json()

    // Check if bulk attendance
    if (body.attendance && Array.isArray(body.attendance)) {
      const validatedData = bulkStaffAttendanceSchema.parse(body)

      const records = validatedData.attendance.map(item => ({
        school_id: validatedData.school_id,
        academic_year_id: validatedData.academic_year_id,
        date: validatedData.date,
        marked_by: validatedData.marked_by,
        staff_id: item.staff_id,
        status: item.status,
        check_in: item.check_in,
        check_out: item.check_out,
        remarks: item.remarks,
      }))

      const { data, error } = await supabase
        .from('staff_attendance')
        .upsert(records, {
          onConflict: 'staff_id,date',
          ignoreDuplicates: false,
        })
        .select()

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }

      return NextResponse.json({
        data,
        message: `Attendance marked for ${records.length} staff members`
      }, { status: 201 })
    }

    // Single attendance
    const validatedData = staffAttendanceSchema.parse(body)

    const { data, error } = await supabase
      .from('staff_attendance')
      .upsert(validatedData, {
        onConflict: 'staff_id,date',
        ignoreDuplicates: false,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }
    console.error('Error marking staff attendance:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
