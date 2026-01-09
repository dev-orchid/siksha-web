'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Select } from '@/components/ui/Select'
import {
  Save,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  Users,
} from 'lucide-react'

// Mock data
const students = [
  { id: '1', rollNo: '01', name: 'Rahul Kumar', status: 'present' },
  { id: '2', rollNo: '02', name: 'Priya Sharma', status: 'present' },
  { id: '3', rollNo: '03', name: 'Amit Singh', status: 'absent' },
  { id: '4', rollNo: '04', name: 'Sneha Patel', status: 'present' },
  { id: '5', rollNo: '05', name: 'Vikash Kumar', status: 'late' },
  { id: '6', rollNo: '06', name: 'Anjali Verma', status: 'present' },
  { id: '7', rollNo: '07', name: 'Ravi Shankar', status: 'present' },
  { id: '8', rollNo: '08', name: 'Pooja Kumari', status: 'leave' },
  { id: '9', rollNo: '09', name: 'Sunil Das', status: 'present' },
  { id: '10', rollNo: '10', name: 'Meera Gupta', status: 'present' },
]

type AttendanceStatus = 'present' | 'absent' | 'late' | 'half_day' | 'leave'

export default function StudentAttendancePage() {
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedSection, setSelectedSection] = useState('')
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  )
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>(
    students.reduce((acc, student) => {
      acc[student.id] = student.status as AttendanceStatus
      return acc
    }, {} as Record<string, AttendanceStatus>)
  )
  const [saving, setSaving] = useState(false)

  const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }))
  }

  const handleMarkAll = (status: AttendanceStatus) => {
    const newAttendance: Record<string, AttendanceStatus> = {}
    students.forEach((student) => {
      newAttendance[student.id] = status
    })
    setAttendance(newAttendance)
  }

  const handleSave = async () => {
    setSaving(true)
    // TODO: Save attendance to database
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSaving(false)
    alert('Attendance saved successfully!')
  }

  const stats = {
    present: Object.values(attendance).filter((s) => s === 'present').length,
    absent: Object.values(attendance).filter((s) => s === 'absent').length,
    late: Object.values(attendance).filter((s) => s === 'late').length,
    leave: Object.values(attendance).filter((s) => s === 'leave').length,
  }

  const getStatusColor = (status: AttendanceStatus) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-700 border-green-300'
      case 'absent':
        return 'bg-red-100 text-red-700 border-red-300'
      case 'late':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300'
      case 'half_day':
        return 'bg-orange-100 text-orange-700 border-orange-300'
      case 'leave':
        return 'bg-blue-100 text-blue-700 border-blue-300'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Attendance</h1>
          <p className="text-gray-500 mt-1">Mark daily attendance for students</p>
        </div>
        <Button
          icon={<Save className="h-4 w-4" />}
          onClick={handleSave}
          loading={saving}
        >
          Save Attendance
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Select
              label="Class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              options={[
                { value: 'class-10', label: 'Class 10' },
                { value: 'class-9', label: 'Class 9' },
                { value: 'class-8', label: 'Class 8' },
              ]}
              placeholder="Select Class"
            />
            <Select
              label="Section"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              options={[
                { value: 'A', label: 'Section A' },
                { value: 'B', label: 'Section B' },
                { value: 'C', label: 'Section C' },
              ]}
              placeholder="Select Section"
            />
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                Load Students
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-6 w-6 mx-auto text-gray-500 mb-2" />
            <p className="text-2xl font-bold">{students.length}</p>
            <p className="text-xs text-gray-500">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-6 w-6 mx-auto text-green-500 mb-2" />
            <p className="text-2xl font-bold text-green-600">{stats.present}</p>
            <p className="text-xs text-gray-500">Present</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <XCircle className="h-6 w-6 mx-auto text-red-500 mb-2" />
            <p className="text-2xl font-bold text-red-600">{stats.absent}</p>
            <p className="text-xs text-gray-500">Absent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-6 w-6 mx-auto text-yellow-500 mb-2" />
            <p className="text-2xl font-bold text-yellow-600">{stats.late}</p>
            <p className="text-xs text-gray-500">Late</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="h-6 w-6 mx-auto text-blue-500 mb-2" />
            <p className="text-2xl font-bold text-blue-600">{stats.leave}</p>
            <p className="text-xs text-gray-500">Leave</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Mark All:</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleMarkAll('present')}
              className="text-green-600 border-green-300 hover:bg-green-50"
            >
              Present
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleMarkAll('absent')}
              className="text-red-600 border-red-300 hover:bg-red-50"
            >
              Absent
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleMarkAll('late')}
              className="text-yellow-600 border-yellow-300 hover:bg-yellow-50"
            >
              Late
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Class 10 - Section A ({students.length} Students)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-y border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Roll No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {student.rollNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-medium text-primary">
                            {student.name.charAt(0)}
                          </span>
                        </div>
                        <span className="ml-3 text-sm text-gray-900">
                          {student.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        {(['present', 'absent', 'late', 'leave'] as AttendanceStatus[]).map(
                          (status) => (
                            <button
                              key={status}
                              onClick={() => handleStatusChange(student.id, status)}
                              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                                attendance[student.id] === status
                                  ? getStatusColor(status)
                                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                          )
                        )}
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
