import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: `Support Us - ${SITE_CONFIG.name}`,
  description: `Support the mission of ${SITE_CONFIG.name} through donations and partnerships.`,
};

export default function SupportPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Support Us</span>
        </div>
        <h1>Support Our Mission</h1>
        <p>Help us create better educational opportunities for every child</p>
      </section>

      {/* Why Support */}
      <section className="content-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Make a Difference</h2>
              <p className="text-[#4a4a4a] mb-4">
                At {SITE_CONFIG.name}, we believe that quality education should be
                accessible to every child, regardless of their economic background. Your support
                helps us provide scholarships, upgrade facilities, and enhance learning experiences
                for our students.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Every contribution, big or small, makes a meaningful impact on the lives of our
                students and helps us continue our mission of nurturing future leaders.
              </p>
              <p className="text-[#4a4a4a]">
                Join us in building a brighter future for our children and community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0E2034] to-[#1a3a5c] p-8 rounded-lg text-white text-center">
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Your Support Provides
              </h3>
              <ul className="space-y-3 text-left">
                {[
                  'Scholarships for deserving students',
                  'Modern learning equipment and technology',
                  'Library books and educational resources',
                  'Sports equipment and facilities',
                  'Infrastructure improvements',
                  'Teacher training programs',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C4A35A]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="content-section alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-header">
            <h2>Ways to Support</h2>
            <p>Choose how you&apos;d like to make an impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💝',
                title: 'One-time Donation',
                desc: 'Make a single contribution to support our immediate needs and ongoing programs.',
                action: 'Donate Now',
              },
              {
                icon: '🔄',
                title: 'Monthly Giving',
                desc: 'Become a sustaining supporter with a recurring monthly donation.',
                action: 'Join Monthly',
              },
              {
                icon: '🎓',
                title: 'Sponsor a Student',
                desc: 'Fully or partially sponsor a deserving student\'s education for a year.',
                action: 'Sponsor Now',
              },
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <span className="text-5xl mb-4 block">{option.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-[#4a4a4a] mb-6">{option.desc}</p>
                <a href="#donate" className="btn btn-primary">
                  {option.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="content-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-header">
            <h2>Corporate Partnerships</h2>
            <p>Partner with us to create lasting impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-[#0E2034]">CSR Initiatives</h3>
              <p className="text-[#4a4a4a] mb-4">
                Fulfill your corporate social responsibility through meaningful partnerships
                that align with your organization&apos;s values and make a real difference in education.
              </p>
              <ul className="space-y-2 text-sm text-[#4a4a4a]">
                <li>• Infrastructure development projects</li>
                <li>• Technology and digital learning initiatives</li>
                <li>• Scholarship programs for underprivileged students</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-[#0E2034]">Skills & Mentorship</h3>
              <p className="text-[#4a4a4a] mb-4">
                Share your expertise with our students through guest lectures, workshops,
                internship opportunities, and mentorship programs.
              </p>
              <ul className="space-y-2 text-sm text-[#4a4a4a]">
                <li>• Career guidance sessions</li>
                <li>• Industry exposure visits</li>
                <li>• Employee volunteering programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donate" className="py-16 bg-gradient-to-br from-[#8B1538] to-[#6d1029]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Make a Donation
            </h2>
            <p className="text-white/90">
              Your generosity helps us continue our mission of providing quality education.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <label htmlFor="donorName">Full Name *</label>
                  <input type="text" id="donorName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" />
                </div>
                <div className="form-group">
                  <label htmlFor="donorEmail">Email Address *</label>
                  <input type="email" id="donorEmail" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="donorPhone">Phone Number</label>
                <input type="tel" id="donorPhone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" />
              </div>
              <div className="form-group">
                <label>Donation Amount *</label>
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {['₹1,000', '₹5,000', '₹10,000', '₹25,000'].map((amount, index) => (
                    <button key={index} type="button" className="py-3 border-2 border-[#0E2034] rounded-lg font-semibold hover:bg-[#0E2034] hover:text-white transition-colors">
                      {amount}
                    </button>
                  ))}
                </div>
                <input type="text" placeholder="Or enter custom amount" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" />
              </div>
              <div className="form-group">
                <label htmlFor="purpose">Purpose of Donation</label>
                <select id="purpose" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]">
                  <option value="general">General Fund</option>
                  <option value="scholarship">Scholarship Fund</option>
                  <option value="infrastructure">Infrastructure Development</option>
                  <option value="technology">Technology & Learning</option>
                  <option value="sports">Sports & Activities</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Proceed to Payment
              </button>
              <p className="text-xs text-center text-[#7F8588]">
                All donations are eligible for tax benefits under Section 80G of the Income Tax Act.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact for Support */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl mb-4">Have Questions?</h2>
          <p className="text-[#4a4a4a] mb-6">
            For more information about supporting our school, please contact our development office.
          </p>
          <p className="text-[#4a4a4a]">
            <strong>Email:</strong> support@manasinternational.edu.in<br />
            <strong>Phone:</strong> +91 9876 543 210
          </p>
        </div>
      </section>
    </>
  );
}
