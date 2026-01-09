'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { ArrowLeft, Save } from 'lucide-react'

export default function AddStudentPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Implement actual student creation
    setTimeout(() => {
      setLoading(false)
      router.push('/sms/students')
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/sms/students">
          <Button variant="ghost" size="sm" icon={<ArrowLeft className="h-4 w-4" />}>
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add New Student</h1>
          <p className="text-gray-500 mt-1">Fill in the details to register a new student</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Basic details about the student</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="First Name" placeholder="Enter first name" required />
                  <Input label="Last Name" placeholder="Enter last name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Date of Birth" type="date" required />
                  <Select
                    label="Gender"
                    options={[
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'Female' },
                      { value: 'other', label: 'Other' },
                    ]}
                    placeholder="Select gender"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Blood Group"
                    options={[
                      { value: 'A+', label: 'A+' },
                      { value: 'A-', label: 'A-' },
                      { value: 'B+', label: 'B+' },
                      { value: 'B-', label: 'B-' },
                      { value: 'AB+', label: 'AB+' },
                      { value: 'AB-', label: 'AB-' },
                      { value: 'O+', label: 'O+' },
                      { value: 'O-', label: 'O-' },
                    ]}
                    placeholder="Select blood group"
                  />
                  <Input label="Aadhaar Number" placeholder="Enter Aadhaar number" />
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
                <CardDescription>Class and admission details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input label="Admission Number" placeholder="STU-2024-XXX" required />
                  <Select
                    label="Class"
                    options={[
                      { value: 'nursery', label: 'Nursery' },
                      { value: 'lkg', label: 'LKG' },
                      { value: 'ukg', label: 'UKG' },
                      { value: 'class-1', label: 'Class 1' },
                      { value: 'class-2', label: 'Class 2' },
                      { value: 'class-3', label: 'Class 3' },
                      { value: 'class-4', label: 'Class 4' },
                      { value: 'class-5', label: 'Class 5' },
                      { value: 'class-6', label: 'Class 6' },
                      { value: 'class-7', label: 'Class 7' },
                      { value: 'class-8', label: 'Class 8' },
                      { value: 'class-9', label: 'Class 9' },
                      { value: 'class-10', label: 'Class 10' },
                      { value: 'class-11', label: 'Class 11' },
                      { value: 'class-12', label: 'Class 12' },
                    ]}
                    placeholder="Select class"
                  />
                  <Select
                    label="Section"
                    options={[
                      { value: 'A', label: 'Section A' },
                      { value: 'B', label: 'Section B' },
                      { value: 'C', label: 'Section C' },
                    ]}
                    placeholder="Select section"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Roll Number" placeholder="Enter roll number" />
                  <Input label="Admission Date" type="date" required />
                </div>
                <Input label="Previous School" placeholder="Enter previous school name (if any)" />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Address and contact details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input label="Address" placeholder="Enter full address" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input label="City" placeholder="Enter city" />
                  <Input label="State" placeholder="Enter state" />
                  <Input label="Pincode" placeholder="Enter pincode" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Phone Number" placeholder="Enter phone number" />
                  <Input label="Email" type="email" placeholder="Enter email address" />
                </div>
                <Input label="Emergency Contact" placeholder="Enter emergency contact number" />
              </CardContent>
            </Card>

            {/* Parent/Guardian Information */}
            <Card>
              <CardHeader>
                <CardTitle>Parent/Guardian Information</CardTitle>
                <CardDescription>Details of parents or guardians</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Father's Name" placeholder="Enter father's name" />
                  <Input label="Father's Phone" placeholder="Enter father's phone" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Mother's Name" placeholder="Enter mother's name" />
                  <Input label="Mother's Phone" placeholder="Enter mother's phone" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Father's Occupation" placeholder="Enter occupation" />
                  <Input label="Mother's Occupation" placeholder="Enter occupation" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Photo Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Student Photo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl text-gray-400">📷</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    Drag and drop or click to upload
                  </p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
                <CardDescription>Upload required documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <span className="text-sm">Birth Certificate</span>
                  <Button variant="outline" size="sm">
                    Upload
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <span className="text-sm">Aadhaar Card</span>
                  <Button variant="outline" size="sm">
                    Upload
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <span className="text-sm">Transfer Certificate</span>
                  <Button variant="outline" size="sm">
                    Upload
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <Button
                  type="submit"
                  className="w-full"
                  icon={<Save className="h-4 w-4" />}
                  loading={loading}
                >
                  Save Student
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push('/sms/students')}
                >
                  Cancel
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
