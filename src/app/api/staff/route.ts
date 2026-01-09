import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const staffSchema = z.object({
  school_id: z.string().uuid(),
  user_id: z.string().uuid().optional(),
  employee_id: z.string().min(1),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  date_of_birth: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  department_id: z.string().uuid().optional(),
  designation: z.string().min(1),
  qualification: z.string().optional(),
  experience_years: z.number().int().min(0).optional(),
  joining_date: z.string(),
  phone: z.string().optional(),
  email: z.string().email(),
  address: z.string().optional(),
  blood_group: z.string().optional(),
  emergency_contact: z.string().optional(),
  bank_account: z.string().optional(),
  bank_name: z.string().optional(),
  ifsc_code: z.string().optional(),
  pan_number: z.string().optional(),
  aadhar_number: z.string().optional(),
  staff_type: z.enum(['teaching', 'non-teaching', 'admin']).default('teaching'),
})

// GET - List staff with pagination and filters
export async function GET(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const { searchParams } = new URL(request.url)

    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const search = searchParams.get('search') || ''
    const departmentId = searchParams.get('department_id')
    const staffType = searchParams.get('staff_type')
    const status = searchParams.get('status')
    const schoolId = searchParams.get('school_id')

    const offset = (page - 1) * limit

    let query = supabase
      .from('staff')
      .select(`
        *,
        departments (id, name),
        schools (id, name),
        users (id, email, role)
      `, { count: 'exact' })

    if (schoolId) {
      query = query.eq('school_id', schoolId)
    }

    if (departmentId) {
      query = query.eq('department_id', departmentId)
    }

    if (staffType) {
      query = query.eq('staff_type', staffType)
    }

    if (status) {
      query = query.eq('status', status)
    }

    if (search) {
      query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,employee_id.ilike.%${search}%,email.ilike.%${search}%`)
    }

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      data,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching staff:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create new staff member
export async function POST(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const body = await request.json()

    const validatedData = staffSchema.parse(body)

    const { data, error } = await supabase
      .from('staff')
      .insert(validatedData)
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'A staff member with this employee ID already exists' },
          { status: 400 }
        )
      }
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
    console.error('Error creating staff:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
