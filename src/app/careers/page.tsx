import Link from 'next/link';

export const metadata = {
  title: 'Careers - Manas International Public School',
  description: 'Explore career opportunities and join the Manas International Public School team.',
};

export default function CareersPage() {
  const openings = [
    {
      title: 'PGT Mathematics',
      department: 'Senior Secondary',
      type: 'Full-time',
      experience: '5+ years',
      qualifications: 'M.Sc. Mathematics, B.Ed.',
    },
    {
      title: 'TGT English',
      department: 'Middle School',
      type: 'Full-time',
      experience: '3+ years',
      qualifications: 'M.A. English, B.Ed.',
    },
    {
      title: 'PRT Science',
      department: 'Primary School',
      type: 'Full-time',
      experience: '2+ years',
      qualifications: 'B.Sc., B.Ed. / D.El.Ed.',
    },
    {
      title: 'Sports Coach (Cricket)',
      department: 'Sports Department',
      type: 'Full-time',
      experience: '3+ years',
      qualifications: 'Sports degree, NIS certification preferred',
    },
    {
      title: 'Lab Assistant',
      department: 'Science Department',
      type: 'Full-time',
      experience: '1+ years',
      qualifications: 'B.Sc. in relevant science field',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Careers</span>
        </div>
        <h1>Careers at MIPS</h1>
        <p>Join our team of dedicated educators and professionals</p>
      </section>

      {/* Why Join Us */}
      <section className="content-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-header">
            <h2>Why Work With Us?</h2>
            <p>Be part of an institution committed to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Growth', desc: 'Professional development and career advancement opportunities' },
              { icon: '💡', title: 'Innovation', desc: 'Freedom to implement creative teaching methodologies' },
              { icon: '🤝', title: 'Community', desc: 'Supportive and collaborative work environment' },
              { icon: '⚖️', title: 'Balance', desc: 'Work-life balance with reasonable working hours' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#4a4a4a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="content-section alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-header">
            <h2>Current Openings</h2>
            <p>Explore our available positions</p>
          </div>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0E2034] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-[#4a4a4a]">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-sm text-[#7F8588] mt-2">
                      <strong>Qualifications:</strong> {job.qualifications}
                    </p>
                  </div>
                  <a href="#apply" className="btn btn-primary whitespace-nowrap">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="content-section">
        <div className="max-w-2xl mx-auto px-4">
          <div className="section-header">
            <h2>Apply Now</h2>
            <p>Submit your application to join our team</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position Applying For *</label>
                  <select id="position" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]">
                    <option value="">Select Position</option>
                    {openings.map((job, index) => (
                      <option key={index} value={job.title}>{job.title}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="experience">Years of Experience *</label>
                <input type="text" id="experience" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" />
              </div>
              <div className="form-group">
                <label htmlFor="resume">Upload Resume (PDF only) *</label>
                <input type="file" id="resume" accept=".pdf" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="form-group">
                <label htmlFor="cover">Cover Letter</label>
                <textarea id="cover" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1538]" placeholder="Tell us why you'd be a great fit..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
