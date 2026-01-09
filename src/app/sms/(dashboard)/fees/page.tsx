import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  Plus,
  Search,
  IndianRupee,
  TrendingUp,
  AlertCircle,
  FileText,
  Download,
  Eye,
  Printer,
} from 'lucide-react'

export const metadata = {
  title: 'Fee Collection | School Management System',
}

// Mock data
const recentPayments = [
  {
    id: '1',
    receiptNo: 'REC-2024-001',
    studentName: 'Rahul Kumar',
    class: 'Class 10-A',
    amount: 5000,
    paymentMode: 'UPI',
    date: '2024-12-30',
    status: 'paid',
  },
  {
    id: '2',
    receiptNo: 'REC-2024-002',
    studentName: 'Priya Sharma',
    class: 'Class 9-B',
    amount: 4500,
    paymentMode: 'Cash',
    date: '2024-12-30',
    status: 'paid',
  },
  {
    id: '3',
    receiptNo: 'REC-2024-003',
    studentName: 'Amit Singh',
    class: 'Class 8-A',
    amount: 3500,
    paymentMode: 'Card',
    date: '2024-12-29',
    status: 'paid',
  },
]

const pendingDues = [
  {
    id: '1',
    studentName: 'Vikash Kumar',
    class: 'Class 10-A',
    dueAmount: 15000,
    dueMonths: 3,
    lastPayment: '2024-09-15',
  },
  {
    id: '2',
    studentName: 'Sneha Patel',
    class: 'Class 9-C',
    dueAmount: 10000,
    dueMonths: 2,
    lastPayment: '2024-10-10',
  },
  {
    id: '3',
    studentName: 'Ravi Shankar',
    class: 'Class 7-B',
    dueAmount: 8500,
    dueMonths: 2,
    lastPayment: '2024-10-20',
  },
]

export default function FeesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Fee Collection</h1>
          <p className="text-gray-500 mt-1">Manage fee payments and track dues</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sms/fees/invoices">
            <Button variant="outline" icon={<FileText className="h-4 w-4" />}>
              Generate Invoices
            </Button>
          </Link>
          <Link href="/sms/fees/collect">
            <Button icon={<Plus className="h-4 w-4" />}>Collect Fee</Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Today&apos;s Collection</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">₹45,500</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-600">+12%</span>
                </div>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <IndianRupee className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">₹12,45,000</p>
                <p className="text-xs text-gray-500 mt-1">Target: ₹15,00,000</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <IndianRupee className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Pending</p>
                <p className="text-2xl font-bold text-red-600 mt-1">₹8,75,000</p>
                <p className="text-xs text-gray-500 mt-1">125 Students</p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Collection Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">83%</p>
                <p className="text-xs text-gray-500 mt-1">This academic year</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Fee Collection */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Fee Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search student by name or admission no..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="text-center py-8 text-gray-500">
                <IndianRupee className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <p className="text-sm">Search for a student to collect fee</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Dues */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Dues</CardTitle>
            <Link href="/sms/fees/dues">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {pendingDues.map((due) => (
                <div
                  key={due.id}
                  className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-gray-900">{due.studentName}</p>
                    <p className="text-sm text-gray-500">{due.class}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-red-600">
                      ₹{due.dueAmount.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">{due.dueMonths} months due</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Payments */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Payments</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" icon={<Download className="h-4 w-4" />}>
              Export
            </Button>
            <Link href="/sms/fees/payments">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-y border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Receipt No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Mode
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                      {payment.receiptNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {payment.studentName}
                        </p>
                        <p className="text-sm text-gray-500">{payment.class}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ₹{payment.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="default">{payment.paymentMode}</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(payment.date).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="success">Paid</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye className="h-4 w-4 text-gray-500" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Printer className="h-4 w-4 text-gray-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
