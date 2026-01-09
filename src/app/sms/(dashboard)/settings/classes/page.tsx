'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  BookOpen,
  Users,
} from 'lucide-react'

// Mock data
const classes = [
  { id: '1', name: 'Nursery', gradeLevel: 0, sections: ['A', 'B'], students: 60, isActive: true },
  { id: '2', name: 'LKG', gradeLevel: 0, sections: ['A', 'B'], students: 65, isActive: true },
  { id: '3', name: 'UKG', gradeLevel: 0, sections: ['A', 'B', 'C'], students: 90, isActive: true },
  { id: '4', name: 'Class 1', gradeLevel: 1, sections: ['A', 'B', 'C'], students: 105, isActive: true },
  { id: '5', name: 'Class 2', gradeLevel: 2, sections: ['A', 'B', 'C'], students: 98, isActive: true },
  { id: '6', name: 'Class 3', gradeLevel: 3, sections: ['A', 'B'], students: 72, isActive: true },
  { id: '7', name: 'Class 4', gradeLevel: 4, sections: ['A', 'B'], students: 68, isActive: true },
  { id: '8', name: 'Class 5', gradeLevel: 5, sections: ['A', 'B'], students: 75, isActive: true },
  { id: '9', name: 'Class 6', gradeLevel: 6, sections: ['A', 'B'], students: 70, isActive: true },
  { id: '10', name: 'Class 7', gradeLevel: 7, sections: ['A', 'B'], students: 65, isActive: true },
  { id: '11', name: 'Class 8', gradeLevel: 8, sections: ['A', 'B'], students: 62, isActive: true },
  { id: '12', name: 'Class 9', gradeLevel: 9, sections: ['A', 'B'], students: 58, isActive: true },
  { id: '13', name: 'Class 10', gradeLevel: 10, sections: ['A', 'B'], students: 52, isActive: true },
  { id: '14', name: 'Class 11', gradeLevel: 11, sections: ['Science', 'Commerce'], students: 45, isActive: true },
  { id: '15', name: 'Class 12', gradeLevel: 12, sections: ['Science', 'Commerce'], students: 42, isActive: true },
]

const subjects = [
  { id: '1', name: 'English', code: 'ENG', classes: 15 },
  { id: '2', name: 'Hindi', code: 'HIN', classes: 15 },
  { id: '3', name: 'Mathematics', code: 'MAT', classes: 15 },
  { id: '4', name: 'Science', code: 'SCI', classes: 10 },
  { id: '5', name: 'Social Science', code: 'SST', classes: 10 },
  { id: '6', name: 'Computer Science', code: 'CS', classes: 8 },
  { id: '7', name: 'Physical Education', code: 'PE', classes: 15 },
]

export default function ClassesSettingsPage() {
  const [showAddClass, setShowAddClass] = useState(false)
  const [showAddSubject, setShowAddSubject] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/sms/settings">
          <Button variant="ghost" size="sm" icon={<ArrowLeft className="h-4 w-4" />}>
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Classes & Sections</h1>
          <p className="text-gray-500 mt-1">Manage classes, sections, and subjects</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{classes.length}</p>
                <p className="text-xs text-gray-500">Total Classes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {classes.reduce((sum, c) => sum + c.sections.length, 0)}
                </p>
                <p className="text-xs text-gray-500">Total Sections</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{subjects.length}</p>
                <p className="text-xs text-gray-500">Subjects</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Users className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {classes.reduce((sum, c) => sum + c.students, 0)}
                </p>
                <p className="text-xs text-gray-500">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Classes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Classes & Sections</CardTitle>
            <Button size="sm" icon={<Plus className="h-4 w-4" />} onClick={() => setShowAddClass(true)}>
              Add Class
            </Button>
          </CardHeader>
          <CardContent className="p-0 max-h-[500px] overflow-y-auto">
            <div className="divide-y divide-gray-200">
              {classes.map((cls) => (
                <div key={cls.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{cls.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-500">
                          Sections: {cls.sections.join(', ')}
                        </span>
                        <span className="text-xs text-gray-400">|</span>
                        <span className="text-sm text-gray-500">
                          {cls.students} students
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={cls.isActive ? 'success' : 'default'}>
                        {cls.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subjects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Subjects</CardTitle>
            <Button size="sm" icon={<Plus className="h-4 w-4" />} onClick={() => setShowAddSubject(true)}>
              Add Subject
            </Button>
          </CardHeader>
          <CardContent className="p-0 max-h-[500px] overflow-y-auto">
            <div className="divide-y divide-gray-200">
              {subjects.map((subject) => (
                <div key={subject.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{subject.name}</p>
                      <p className="text-sm text-gray-500">
                        Code: {subject.code} | {subject.classes} classes
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Class Modal */}
      <Modal
        open={showAddClass}
        onClose={() => setShowAddClass(false)}
        title="Add New Class"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowAddClass(false)}>
              Cancel
            </Button>
            <Button>Save Class</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input label="Class Name" placeholder="e.g., Class 1" />
          <Input label="Grade Level" type="number" placeholder="e.g., 1" />
          <Input label="Sections" placeholder="e.g., A, B, C" helperText="Comma separated section names" />
          <Input label="Capacity per Section" type="number" placeholder="e.g., 40" />
        </div>
      </Modal>

      {/* Add Subject Modal */}
      <Modal
        open={showAddSubject}
        onClose={() => setShowAddSubject(false)}
        title="Add New Subject"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowAddSubject(false)}>
              Cancel
            </Button>
            <Button>Save Subject</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input label="Subject Name" placeholder="e.g., Mathematics" />
          <Input label="Subject Code" placeholder="e.g., MAT" />
          <Input label="Description" placeholder="Optional description" />
        </div>
      </Modal>
    </div>
  )
}
