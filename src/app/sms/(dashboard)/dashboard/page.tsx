import { auth } from '@/lib/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import {
  Users,
  GraduationCap,
  IndianRupee,
  UserCheck,
  TrendingUp,
  Calendar,
} from 'lucide-react'

export const metadata = {
  title: 'Dashboard | School Management System',
}

export default async function DashboardPage() {
  const session = await auth()
  const user = session?.user

  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Teachers',
      value: '56',
      change: '+3%',
      icon: GraduationCap,
      color: 'bg-green-500',
    },
    {
      title: 'Fee Collection',
      value: '₹12,45,000',
      change: '+8%',
      icon: IndianRupee,
      color: 'bg-yellow-500',
    },
    {
      title: 'Today\'s Attendance',
      value: '92%',
      change: '+2%',
      icon: UserCheck,
      color: 'bg-purple-500',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome message */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.email?.split('@')[0]}!
        </h1>
        <p className="text-gray-500 mt-1">
          Here&apos;s what&apos;s happening at your school today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-600">{stat.change}</span>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick actions and recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="/sms/attendance/students"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <UserCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Mark Attendance</span>
              </a>
              <a
                href="/sms/fees"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <IndianRupee className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Collect Fees</span>
              </a>
              <a
                href="/sms/students/new"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Add Student</span>
              </a>
              <a
                href="/sms/whatsapp/send"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Send Notice</span>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'New student admission', time: '2 hours ago', user: 'Admin' },
                { action: 'Fee payment received', time: '3 hours ago', user: 'Accountant' },
                { action: 'Attendance marked for Class 10A', time: '4 hours ago', user: 'Teacher' },
                { action: 'Exam results uploaded', time: '5 hours ago', user: 'Admin' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">by {activity.user}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Parent-Teacher Meeting', date: 'Jan 15, 2025', type: 'Meeting' },
              { title: 'Annual Sports Day', date: 'Jan 20, 2025', type: 'Event' },
              { title: 'Unit Test 3', date: 'Jan 25, 2025', type: 'Exam' },
            ].map((event, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-primary">
                    {event.type}
                  </span>
                </div>
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{event.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
