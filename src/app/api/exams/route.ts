import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const examSchema = z.object({
  school_id: z.string().uuid(),
  academic_year_id: z.string().uuid(),
  exam_type_id: z.string().uuid(),
  name: z.string().min(1),
  start_date: z.string(),
  end_date: z.string(),
  classes: z.array(z.string().uuid()),
  description: z.string().optional(),
})

// GET - List exams
export async function GET(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const { searchParams } = new URL(request.url)

    const schoolId = searchParams.get('school_id')
    const academicYearId = searchParams.get('academic_year_id')
    const examTypeId = searchParams.get('exam_type_id')
    const status = searchParams.get('status')

    let query = supabase
      .from('exams')
      .select(`
        *,
        exam_types (id, name),
        academic_years (id, name, start_date, end_date),
        exam_schedules (
          id,
          subject_id,
          class_id,
          exam_date,
          start_time,
          end_time,
          max_marks,
          subjects (id, name),
          classes (id, name)
        )
      `)

    if (schoolId) {
      query = query.eq('school_id', schoolId)
    }

    if (academicYearId) {
      query = query.eq('academic_year_id', academicYearId)
    }

    if (examTypeId) {
      query = query.eq('exam_type_id', examTypeId)
    }

    if (status) {
      query = query.eq('status', status)
    }

    const { data, error } = await query.order('start_date', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching exams:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create exam
export async function POST(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const body = await request.json()

    const validatedData = examSchema.parse(body)

    const { classes, ...examData } = validatedData

    // Determine status based on dates
    const today = new Date().toISOString().split('T')[0]
    let status = 'upcoming'
    if (examData.start_date <= today && examData.end_date >= today) {
      status = 'ongoing'
    } else if (examData.end_date < today) {
      status = 'completed'
    }

    const { data, error } = await supabase
      .from('exams')
      .insert({
        ...examData,
        status,
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
    console.error('Error creating exam:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
