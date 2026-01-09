import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import {
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
} from 'lucide-react'

export const metadata = {
  title: 'Students | School Management System',
}

// Mock data for demonstration
const students = [
  {
    id: '1',
    admissionNumber: 'STU-2024-001',
    name: 'Rahul Kumar',
    class: 'Class 10',
    section: 'A',
    rollNumber: '01',
    gender: 'Male',
    phone: '9876543210',
    status: 'active',
  },
  {
    id: '2',
    admissionNumber: 'STU-2024-002',
    name: 'Priya Sharma',
    class: 'Class 10',
    section: 'A',
    rollNumber: '02',
    gender: 'Female',
    phone: '9876543211',
    status: 'active',
  },
  {
    id: '3',
    admissionNumber: 'STU-2024-003',
    name: 'Amit Singh',
    class: 'Class 9',
    section: 'B',
    rollNumber: '05',
    gender: 'Male',
    phone: '9876543212',
    status: 'active',
  },
  {
    id: '4',
    admissionNumber: 'STU-2024-004',
    name: 'Sneha Patel',
    class: 'Class 8',
    section: 'A',
    rollNumber: '12',
    gender: 'Female',
    phone: '9876543213',
    status: 'inactive',
  },
]

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-500 mt-1">Manage all students in your school</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" icon={<Upload className="h-4 w-4" />}>
            Import
          </Button>
          <Button variant="outline" icon={<Download className="h-4 w-4" />}>
            Export
          </Button>
          <Link href="/sms/students/new">
            <Button icon={<Plus className="h-4 w-4" />}>Add Student</Button>
          </Link>
        </div>
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
                  placeholder="Search by name, admission number..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Select
                options={[
                  { value: '', label: 'All Classes' },
                  { value: 'class-10', label: 'Class 10' },
                  { value: 'class-9', label: 'Class 9' },
                  { value: 'class-8', label: 'Class 8' },
                ]}
                className="w-32"
              />
              <Select
                options={[
                  { value: '', label: 'All Sections' },
                  { value: 'A', label: 'Section A' },
                  { value: 'B', label: 'Section B' },
                  { value: 'C', label: 'Section C' },
                ]}
                className="w-36"
              />
              <Select
                options={[
                  { value: '', label: 'All Status' },
                  { value: 'active', label: 'Active' },
                  { value: 'inactive', label: 'Inactive' },
                ]}
                className="w-32"
              />
              <Button variant="outline" icon={<Filter className="h-4 w-4" />}>
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Students ({students.length})</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-y border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Admission No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Roll No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">
                            {student.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {student.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {student.gender}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.admissionNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.class} - {student.section}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.rollNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={student.status === 'active' ? 'success' : 'danger'}
                      >
                        {student.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/sms/students/${student.id}`}>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Eye className="h-4 w-4 text-gray-500" />
                          </button>
                        </Link>
                        <Link href={`/sms/students/${student.id}/edit`}>
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

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1 to {students.length} of {students.length} results
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
