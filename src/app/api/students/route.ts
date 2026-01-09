import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const studentSchema = z.object({
  school_id: z.string().uuid(),
  admission_number: z.string().min(1),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  date_of_birth: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  class_id: z.string().uuid(),
  section_id: z.string().uuid(),
  roll_number: z.string().optional(),
  blood_group: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  admission_date: z.string(),
  previous_school: z.string().optional(),
  transport_opted: z.boolean().default(false),
  hostel_opted: z.boolean().default(false),
})

// GET - List students with pagination and filters
export async function GET(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const { searchParams } = new URL(request.url)

    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const search = searchParams.get('search') || ''
    const classId = searchParams.get('class_id')
    const sectionId = searchParams.get('section_id')
    const status = searchParams.get('status')
    const schoolId = searchParams.get('school_id')

    const offset = (page - 1) * limit

    let query = supabase
      .from('students')
      .select(`
        *,
        classes (id, name),
        sections (id, name),
        schools (id, name)
      `, { count: 'exact' })

    if (schoolId) {
      query = query.eq('school_id', schoolId)
    }

    if (classId) {
      query = query.eq('class_id', classId)
    }

    if (sectionId) {
      query = query.eq('section_id', sectionId)
    }

    if (status) {
      query = query.eq('status', status)
    }

    if (search) {
      query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,admission_number.ilike.%${search}%`)
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
    console.error('Error fetching students:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create new student
export async function POST(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const body = await request.json()

    const validatedData = studentSchema.parse(body)

    const { data, error } = await supabase
      .from('students')
      .insert(validatedData)
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'A student with this admission number already exists' },
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
    console.error('Error creating student:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
