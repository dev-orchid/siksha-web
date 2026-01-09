import Link from 'next/link';

export const metadata = {
  title: 'Parent Portal - Manas International Public School',
  description: 'Access the parent portal for student information, grades, and school communications.',
};

export default function PortalPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Parent Portal</span>
        </div>
        <h1>Parent Portal</h1>
        <p>Access your child&apos;s academic information and school updates</p>
      </section>

      {/* Login Section */}
      <section className="content-section">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl text-center mb-6">Portal Login</h2>
            <form className="space-y-5">
              <div className="form-group">
                <label htmlFor="studentId">Student ID / Enrollment Number</label>
                <input
                  type="text"
                  id="studentId"
                  placeholder="Enter student ID"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#8B1538] hover:underline">Forgot Password?</a>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </form>
            <p className="text-center text-sm text-[#7F8588] mt-6">
              First time user?{' '}
              <a href="#" className="text-[#8B1538] hover:underline">Register here</a>
            </p>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="content-section alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-header">
            <h2>Portal Features</h2>
            <p>Everything you need to stay connected with your child&apos;s education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📊', title: 'Academic Progress', desc: 'View grades, report cards, and academic performance' },
              { icon: '📅', title: 'Attendance', desc: 'Track daily attendance and leave records' },
              { icon: '💰', title: 'Fee Management', desc: 'View fee details and make online payments' },
              { icon: '📝', title: 'Homework', desc: 'Access daily homework and assignments' },
              { icon: '📢', title: 'Announcements', desc: 'Stay updated with school news and notices' },
              { icon: '💬', title: 'Communication', desc: 'Connect with teachers and school administration' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4a4a4a]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl mb-4">Need Help?</h2>
          <p className="text-[#4a4a4a] mb-6">
            If you&apos;re having trouble accessing the portal or need assistance, please contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="btn btn-outline">
              Call: +91 9876 543 210
            </a>
            <a href="mailto:support@manasinternational.edu.in" className="btn btn-primary">
              Email Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
