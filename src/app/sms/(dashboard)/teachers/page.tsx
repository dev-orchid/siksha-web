import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Phone,
  Mail,
} from 'lucide-react'

export const metadata = {
  title: 'Teachers | School Management System',
}

// Mock data
const teachers = [
  {
    id: '1',
    employeeId: 'EMP-001',
    name: 'Dr. Rajesh Kumar',
    designation: 'Senior Teacher',
    department: 'Science',
    subjects: ['Physics', 'Mathematics'],
    phone: '9876543210',
    email: 'rajesh@school.com',
    joiningDate: '2018-04-01',
    status: 'active',
  },
  {
    id: '2',
    employeeId: 'EMP-002',
    name: 'Mrs. Sunita Sharma',
    designation: 'Teacher',
    department: 'Languages',
    subjects: ['English', 'Hindi'],
    phone: '9876543211',
    email: 'sunita@school.com',
    joiningDate: '2020-07-15',
    status: 'active',
  },
  {
    id: '3',
    employeeId: 'EMP-003',
    name: 'Mr. Amit Singh',
    designation: 'Teacher',
    department: 'Mathematics',
    subjects: ['Mathematics'],
    phone: '9876543212',
    email: 'amit@school.com',
    joiningDate: '2019-01-10',
    status: 'active',
  },
  {
    id: '4',
    employeeId: 'EMP-004',
    name: 'Ms. Priya Patel',
    designation: 'Junior Teacher',
    department: 'Science',
    subjects: ['Chemistry', 'Biology'],
    phone: '9876543213',
    email: 'priya@school.com',
    joiningDate: '2022-06-01',
    status: 'on_leave',
  },
]

export default function TeachersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teachers</h1>
          <p className="text-gray-500 mt-1">Manage teaching staff</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" icon={<Download className="h-4 w-4" />}>
            Export
          </Button>
          <Link href="/sms/teachers/new">
            <Button icon={<Plus className="h-4 w-4" />}>Add Teacher</Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Teachers</p>
            <p className="text-2xl font-bold text-gray-900">56</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Active</p>
            <p className="text-2xl font-bold text-green-600">52</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">On Leave</p>
            <p className="text-2xl font-bold text-yellow-600">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Departments</p>
            <p className="text-2xl font-bold text-blue-600">6</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, employee ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option value="">All Departments</option>
                <option value="science">Science</option>
                <option value="mathematics">Mathematics</option>
                <option value="languages">Languages</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="on_leave">On Leave</option>
              </select>
              <Button variant="outline" icon={<Filter className="h-4 w-4" />}>
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Teachers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Teachers ({teachers.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-y border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Teacher
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Employee ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Subjects
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Contact
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
                {teachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-sm font-medium text-green-700">
                            {teacher.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {teacher.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {teacher.designation}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.employeeId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {teacher.subjects.map((subject) => (
                          <Badge key={subject} variant="info" size="sm">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Phone className="h-3 w-3" />
                          {teacher.phone}
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Mail className="h-3 w-3" />
                          {teacher.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={teacher.status === 'active' ? 'success' : 'warning'}
                      >
                        {teacher.status === 'active' ? 'Active' : 'On Leave'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/sms/teachers/${teacher.id}`}>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Eye className="h-4 w-4 text-gray-500" />
                          </button>
                        </Link>
                        <Link href={`/sms/teachers/${teacher.id}/edit`}>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Edit className="h-4 w-4 text-gray-500" />
                          </button>
                        </Link>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Trash2 className="h-4 w-4 text-red-500" />
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
