import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const sectionSchema = z.object({
  school_id: z.string().uuid(),
  class_id: z.string().uuid(),
  name: z.string().min(1),
  capacity: z.number().int().min(1).default(40),
  is_active: z.boolean().default(true),
})

// GET - List sections
export async function GET(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const { searchParams } = new URL(request.url)

    const schoolId = searchParams.get('school_id')
    const classId = searchParams.get('class_id')

    let query = supabase
      .from('sections')
      .select(`
        *,
        classes (id, name, grade_level)
      `)

    if (schoolId) {
      query = query.eq('school_id', schoolId)
    }

    if (classId) {
      query = query.eq('class_id', classId)
    }

    const { data, error } = await query.order('name')

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching sections:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create section
export async function POST(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const body = await request.json()

    const validatedData = sectionSchema.parse(body)

    const { data, error } = await supabase
      .from('sections')
      .insert(validatedData)
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This section already exists for the class' },
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
    console.error('Error creating section:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
