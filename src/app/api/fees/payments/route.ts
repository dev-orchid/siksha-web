import { NextRequest, NextResponse } from 'next/server'
import { createApiClient } from '@/lib/supabase/server'
import { z } from 'zod'

const paymentSchema = z.object({
  school_id: z.string().uuid(),
  invoice_id: z.string().uuid(),
  receipt_number: z.string().min(1),
  payment_date: z.string(),
  amount: z.number().positive(),
  payment_mode: z.enum(['cash', 'cheque', 'upi', 'bank_transfer', 'card', 'online']),
  reference_number: z.string().optional(),
  bank_name: z.string().optional(),
  cheque_number: z.string().optional(),
  cheque_date: z.string().optional(),
  remarks: z.string().optional(),
  received_by: z.string().uuid(),
})

// GET - List payments
export async function GET(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const { searchParams } = new URL(request.url)

    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const invoiceId = searchParams.get('invoice_id')
    const studentId = searchParams.get('student_id')
    const schoolId = searchParams.get('school_id')
    const startDate = searchParams.get('start_date')
    const endDate = searchParams.get('end_date')
    const paymentMode = searchParams.get('payment_mode')

    const offset = (page - 1) * limit

    let query = supabase
      .from('fee_payments')
      .select(`
        *,
        fee_invoices (
          id,
          invoice_number,
          total_amount,
          net_amount,
          student_id,
          students (
            id,
            first_name,
            last_name,
            admission_number,
            classes (id, name),
            sections (id, name)
          )
        )
      `, { count: 'exact' })

    if (schoolId) {
      query = query.eq('school_id', schoolId)
    }

    if (invoiceId) {
      query = query.eq('invoice_id', invoiceId)
    }

    if (paymentMode) {
      query = query.eq('payment_mode', paymentMode)
    }

    if (startDate && endDate) {
      query = query.gte('payment_date', startDate).lte('payment_date', endDate)
    }

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Filter by student if specified
    let filteredData = data
    if (studentId && data) {
      filteredData = data.filter((item: any) => item.fee_invoices?.student_id === studentId)
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
    console.error('Error fetching payments:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Record payment
export async function POST(request: NextRequest) {
  try {
    const supabase = await createApiClient()
    const body = await request.json()

    const validatedData = paymentSchema.parse(body)

    // Get the invoice to validate payment amount
    const { data: invoice, error: invoiceError } = await supabase
      .from('fee_invoices')
      .select('*')
      .eq('id', validatedData.invoice_id)
      .single()

    if (invoiceError || !invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 })
    }

    if (invoice.status === 'paid') {
      return NextResponse.json(
        { error: 'This invoice has already been fully paid' },
        { status: 400 }
      )
    }

    if (validatedData.amount > invoice.balance_amount) {
      return NextResponse.json(
        { error: `Payment amount cannot exceed the balance amount of ${invoice.balance_amount}` },
        { status: 400 }
      )
    }

    // Create payment record
    const { data: payment, error: paymentError } = await supabase
      .from('fee_payments')
      .insert({
        ...validatedData,
        status: 'completed',
      })
      .select()
      .single()

    if (paymentError) {
      if (paymentError.code === '23505') {
        return NextResponse.json(
          { error: 'A payment with this receipt number already exists' },
          { status: 400 }
        )
      }
      return NextResponse.json({ error: paymentError.message }, { status: 500 })
    }

    // Update invoice amounts
    const newPaidAmount = invoice.paid_amount + validatedData.amount
    const newBalanceAmount = invoice.net_amount - newPaidAmount
    const newStatus = newBalanceAmount === 0 ? 'paid' : 'partial'

    const { error: updateError } = await supabase
      .from('fee_invoices')
      .update({
        paid_amount: newPaidAmount,
        balance_amount: newBalanceAmount,
        status: newStatus,
      })
      .eq('id', validatedData.invoice_id)

    if (updateError) {
      // Rollback: delete the payment
      await supabase.from('fee_payments').delete().eq('id', payment.id)
      return NextResponse.json({ error: updateError.message }, { status: 500 })
    }

    return NextResponse.json({
      data: payment,
      invoice: {
        paid_amount: newPaidAmount,
        balance_amount: newBalanceAmount,
        status: newStatus,
      }
    }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }
    console.error('Error recording payment:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
