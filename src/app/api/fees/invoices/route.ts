import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const invoiceSchema = z.object({
  school_id: z.string().uuid(),
  academic_year_id: z.string().uuid(),
  student_id: z.string().uuid(),
  invoice_number: z.string().min(1),
  invoice_date: z.string(),
  due_date: z.string(),
  fee_month: z.string().optional(),
  fee_period: z.string().optional(),
  items: z.array(z.object({
    fee_category_id: z.string().uuid(),
    description: z.string(),
    amount: z.number().positive(),
    discount: z.number().min(0).default(0),
  })),
  total_amount: z.number().positive(),
  discount_amount: z.number().min(0).default(0),
  late_fee: z.number().min(0).default(0),
  net_amount: z.number().positive(),
  remarks: z.string().optional(),
})

// GET - List invoices with filters
export async function GET(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const { searchParams } = new URL(request.url)

    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const studentId = searchParams.get('student_id')
    const classId = searchParams.get('class_id')
    const status = searchParams.get('status')
    const schoolId = searchParams.get('school_id')
    const startDate = searchParams.get('start_date')
    const endDate = searchParams.get('end_date')

    const offset = (page - 1) * limit

    let query = supabase
      .from('fee_invoices')
      .select(`
        *,
        students (
          id,
          first_name,
          last_name,
          admission_number,
          class_id,
          section_id,
          classes (id, name),
          sections (id, name)
        ),
        fee_invoice_items (
          id,
          fee_category_id,
          description,
          amount,
          discount,
          fee_categories (id, name)
        )
      `, { count: 'exact' })

    if (schoolId) {
      query = query.eq('school_id', schoolId)
    }

    if (studentId) {
      query = query.eq('student_id', studentId)
    }

    if (status) {
      query = query.eq('status', status)
    }

    if (startDate && endDate) {
      query = query.gte('invoice_date', startDate).lte('invoice_date', endDate)
    }

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Filter by class if specified
    let filteredData = data
    if (classId && data) {
      filteredData = data.filter((item: any) => item.students?.class_id === classId)
    }

    return NextResponse.json({
      data: filteredData,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching invoices:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create new invoice
export async function POST(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const body = await request.json()

    const validatedData = invoiceSchema.parse(body)

    // Start a transaction by using separate insert operations
    const { items, ...invoiceData } = validatedData

    // Insert invoice
    const { data: invoice, error: invoiceError } = await supabase
      .from('fee_invoices')
      .insert({
        school_id: invoiceData.school_id,
        academic_year_id: invoiceData.academic_year_id,
        student_id: invoiceData.student_id,
        invoice_number: invoiceData.invoice_number,
        invoice_date: invoiceData.invoice_date,
        due_date: invoiceData.due_date,
        fee_month: invoiceData.fee_month,
        fee_period: invoiceData.fee_period,
        total_amount: invoiceData.total_amount,
        discount_amount: invoiceData.discount_amount,
        late_fee: invoiceData.late_fee,
        net_amount: invoiceData.net_amount,
        paid_amount: 0,
        balance_amount: invoiceData.net_amount,
        status: 'unpaid',
        remarks: invoiceData.remarks,
      })
      .select()
      .single()

    if (invoiceError) {
      if (invoiceError.code === '23505') {
        return NextResponse.json(
          { error: 'An invoice with this number already exists' },
          { status: 400 }
        )
      }
      return NextResponse.json({ error: invoiceError.message }, { status: 500 })
    }

    // Insert invoice items
    if (items.length > 0) {
      const invoiceItems = items.map(item => ({
        invoice_id: invoice.id,
        fee_category_id: item.fee_category_id,
        description: item.description,
        amount: item.amount,
        discount: item.discount,
        net_amount: item.amount - item.discount,
      }))

      const { error: itemsError } = await supabase
        .from('fee_invoice_items')
        .insert(invoiceItems)

      if (itemsError) {
        // Rollback: delete the invoice
        await supabase.from('fee_invoices').delete().eq('id', invoice.id)
        return NextResponse.json({ error: itemsError.message }, { status: 500 })
      }
    }

    return NextResponse.json({ data: invoice }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }
    console.error('Error creating invoice:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
