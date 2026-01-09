import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import {
  School,
  Calendar,
  BookOpen,
  Users,
  Bell,
  Shield,
  Database,
  Palette,
} from 'lucide-react'

export const metadata = {
  title: 'Settings | School Management System',
}

const settingsSections = [
  {
    title: 'School Profile',
    description: 'Update school information, logo, and contact details',
    icon: School,
    href: '/sms/settings/school',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Academic Year',
    description: 'Manage academic years and set current session',
    icon: Calendar,
    href: '/sms/settings/academic',
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Classes & Sections',
    description: 'Configure classes, sections, and subjects',
    icon: BookOpen,
    href: '/sms/settings/classes',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'User Management',
    description: 'Manage users, roles, and permissions',
    icon: Users,
    href: '/sms/settings/users',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Notifications',
    description: 'Configure email, SMS, and WhatsApp notifications',
    icon: Bell,
    href: '/sms/settings/notifications',
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Security',
    description: 'Password policies and session settings',
    icon: Shield,
    href: '/sms/settings/security',
    color: 'bg-gray-100 text-gray-600',
  },
  {
    title: 'Backup & Data',
    description: 'Database backup and data management',
    icon: Database,
    href: '/sms/settings/backup',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Appearance',
    description: 'Customize theme and branding',
    icon: Palette,
    href: '/sms/settings/appearance',
    color: 'bg-pink-100 text-pink-600',
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your school settings and preferences</p>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section) => (
          <Link key={section.title} href={section.href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${section.color}`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Info */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500">School Code</p>
              <p className="font-medium text-gray-900">MIPS-001</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Current Academic Year</p>
              <p className="font-medium text-gray-900">2024-2025</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Backup</p>
              <p className="font-medium text-gray-900">30 Dec 2024, 10:30 AM</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <p className="font-medium text-gray-900">1,234</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Staff</p>
              <p className="font-medium text-gray-900">56</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="font-medium text-gray-900">45</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
