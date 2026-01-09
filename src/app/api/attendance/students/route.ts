import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const attendanceSchema = z.object({
  school_id: z.string().uuid(),
  student_id: z.string().uuid(),
  class_id: z.string().uuid(),
  section_id: z.string().uuid(),
  date: z.string(),
  status: z.enum(['present', 'absent', 'late', 'half_day', 'leave']),
  check_in_time: z.string().optional(),
  check_out_time: z.string().optional(),
  remarks: z.string().optional(),
  marked_by: z.string().uuid(),
})

const bulkAttendanceSchema = z.object({
  school_id: z.string().uuid(),
  class_id: z.string().uuid(),
  section_id: z.string().uuid(),
  date: z.string(),
  marked_by: z.string().uuid(),
  attendance: z.array(z.object({
    student_id: z.string().uuid(),
    status: z.enum(['present', 'absent', 'late', 'half_day', 'leave']),
    check_in_time: z.string().optional(),
    check_out_time: z.string().optional(),
    remarks: z.string().optional(),
  })),
})

// GET - Get student attendance
export async function GET(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const { searchParams } = new URL(request.url)

    const studentId = searchParams.get('student_id')
    const classId = searchParams.get('class_id')
    const sectionId = searchParams.get('section_id')
    const date = searchParams.get('date')
    const startDate = searchParams.get('start_date')
    const endDate = searchParams.get('end_date')
    const schoolId = searchParams.get('school_id')

    let query = supabase
      .from('student_attendance')
      .select(`
        *,
        students (id, first_name, last_name, admission_number, roll_number),
        classes (id, name),
        sections (id, name)
      `)

    if (schoolId) {
      query = query.eq('school_id', schoolId)
    }

    if (studentId) {
      query = query.eq('student_id', studentId)
    }

    if (classId) {
      query = query.eq('class_id', classId)
    }

    if (sectionId) {
      query = query.eq('section_id', sectionId)
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

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching attendance:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Mark attendance (single or bulk)
export async function POST(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const body = await request.json()

    // Check if bulk attendance
    if (body.attendance && Array.isArray(body.attendance)) {
      const validatedData = bulkAttendanceSchema.parse(body)

      const records = validatedData.attendance.map(item => ({
        school_id: validatedData.school_id,
        class_id: validatedData.class_id,
        section_id: validatedData.section_id,
        date: validatedData.date,
        marked_by: validatedData.marked_by,
        student_id: item.student_id,
        status: item.status as 'present' | 'absent' | 'late' | 'half_day' | 'leave',
        check_in_time: item.check_in_time,
        check_out_time: item.check_out_time,
        remarks: item.remarks,
      }))

      // Upsert to handle re-marking attendance
      const { data, error } = await supabase
        .from('student_attendance')
        .upsert(records, {
          onConflict: 'student_id,date',
          ignoreDuplicates: false,
        })
        .select()

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }

      return NextResponse.json({
        data,
        message: `Attendance marked for ${records.length} students`
      }, { status: 201 })
    }

    // Single attendance
    const validatedData = attendanceSchema.parse(body)

    const { data, error } = await supabase
      .from('student_attendance')
      .upsert(validatedData, {
        onConflict: 'student_id,date',
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
    console.error('Error marking attendance:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
