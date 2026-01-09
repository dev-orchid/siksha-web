import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const updateStaffSchema = z.object({
  first_name: z.string().min(1).optional(),
  last_name: z.string().min(1).optional(),
  date_of_birth: z.string().optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  department_id: z.string().uuid().optional().nullable(),
  designation: z.string().min(1).optional(),
  qualification: z.string().optional(),
  experience_years: z.number().int().min(0).optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  address: z.string().optional(),
  blood_group: z.string().optional(),
  emergency_contact: z.string().optional(),
  bank_account: z.string().optional(),
  bank_name: z.string().optional(),
  ifsc_code: z.string().optional(),
  pan_number: z.string().optional(),
  aadhar_number: z.string().optional(),
  staff_type: z.enum(['teaching', 'non-teaching', 'admin']).optional(),
  status: z.enum(['active', 'inactive', 'resigned', 'terminated']).optional(),
})

// GET - Get single staff member
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createApiClient()

    const { data, error } = await supabase
      .from('staff')
      .select(`
        *,
        departments (id, name),
        schools (id, name),
        users (id, email, role),
        class_teachers (
          class_id,
          section_id,
          classes (id, name),
          sections (id, name)
        ),
        subject_teachers (
          subject_id,
          class_id,
          section_id,
          subjects (id, name),
          classes (id, name),
          sections (id, name)
        )
      `)
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Staff member not found' }, { status: 404 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching staff:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT - Update staff member
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createApiClient()
    const body = await request.json()

    const validatedData = updateStaffSchema.parse(body)

    const { data, error } = await supabase
      .from('staff')
      .update(validatedData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Staff member not found' }, { status: 404 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }
    console.error('Error updating staff:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE - Delete staff member (soft delete)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createApiClient()

    const { data, error } = await supabase
      .from('staff')
      .update({ status: 'inactive' })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Staff member not found' }, { status: 404 })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: 'Staff member deleted successfully', data })
  } catch (error) {
    console.error('Error deleting staff:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
