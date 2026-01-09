import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Community - Manas International Public School',
  description: 'Join our vibrant school community at Manas International Public School.',
};

export default function CommunityPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Community</span>
        </div>
        <h1>Our Community</h1>
        <p>A family of learners, educators, and supporters</p>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">The MIPS Family</h2>
              <p className="text-[#4a4a4a] mb-4">
                At Manas International Public School, we believe that education is a collaborative
                effort. Our community includes students, parents, teachers, staff, and alumni who
                all work together to create a nurturing and inspiring learning environment.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                We foster strong relationships between home and school, ensuring that every child
                receives the support they need to thrive academically and personally.
              </p>
              <p className="text-[#4a4a4a]">
                Through various events, meetings, and activities, we keep our community connected
                and engaged in the educational journey of our students.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600"
                alt="School Community"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parent Engagement */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Parent Engagement</h2>
            <p>Partners in your child&apos;s education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Parent-Teacher Meetings', desc: 'Regular meetings to discuss student progress and address concerns', icon: '👥' },
              { title: 'Parent Portal', desc: 'Online access to attendance, grades, and school updates', icon: '💻' },
              { title: 'WhatsApp Groups', desc: 'Class-wise groups for quick communication', icon: '📱' },
              { title: 'Open House Events', desc: 'Visit classrooms and interact with teachers', icon: '🏫' },
              { title: 'Parent Workshops', desc: 'Sessions on parenting, child development, and academics', icon: '📚' },
              { title: 'Volunteer Opportunities', desc: 'Participate in school events and activities', icon: '🤝' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[#4a4a4a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Alumni Network</h2>
            <p>Once a MIPSian, always a MIPSian</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl mb-4">Stay Connected</h3>
              <p className="text-[#4a4a4a] mb-6">
                Our alumni network keeps former students connected with their alma mater.
                Alumni contribute to the school through mentorship, career guidance sessions,
                and support for current students.
              </p>
              <h4 className="font-semibold mb-3">Alumni Benefits:</h4>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Annual alumni meet
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Networking opportunities
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Career guidance programs
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sibling admission priority
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">Notable Alumni</h3>
              <p className="text-[#4a4a4a] mb-6">
                Our alumni have gone on to achieve success in various fields including
                engineering, medicine, civil services, business, and arts. They serve
                as role models and mentors for current students.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '10,000+', label: 'Alumni Network' },
                  { stat: '25+', label: 'Years of Legacy' },
                  { stat: '50+', label: 'IIT/Medical Seats' },
                  { stat: '100+', label: 'Civil Servants' },
                ].map((item, index) => (
                  <div key={index} className="bg-[#faf8f5] p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#8B1538]">{item.stat}</div>
                    <div className="text-sm text-[#4a4a4a]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Upcoming Community Events</h2>
            <p>Join us at these events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { date: 'Jan 26', event: 'Republic Day Celebration', type: 'Cultural' },
              { date: 'Feb 15', event: 'Parent-Teacher Meeting', type: 'Meeting' },
              { date: 'Mar 1', event: 'Annual Sports Day', type: 'Sports' },
              { date: 'Mar 15', event: 'Science Exhibition', type: 'Academic' },
              { date: 'Apr 5', event: 'Alumni Meet 2025', type: 'Alumni' },
              { date: 'Apr 14', event: 'Annual Day', type: 'Cultural' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0E2034] rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-sm">{item.date.split(' ')[0]}</span>
                  <span className="text-xl font-bold">{item.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{item.event}</h4>
                  <span className="text-sm text-[#8B1538]">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
