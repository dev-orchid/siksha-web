import Link from 'next/link';

export const metadata = {
  title: 'Scholarships - Manas International Public School',
  description: 'Explore scholarship opportunities at Manas International Public School.',
};

export default function ScholarshipsPage() {
  const scholarships = [
    {
      title: 'Merit Scholarship',
      eligibility: 'Students scoring 90% and above in previous class',
      benefit: 'Up to 50% tuition fee waiver',
      icon: '🏆',
    },
    {
      title: 'Sports Excellence Award',
      eligibility: 'State/National level sports achievers',
      benefit: 'Up to 75% fee concession',
      icon: '🎯',
    },
    {
      title: 'Need-Based Financial Aid',
      eligibility: 'Economically weaker sections (EWS)',
      benefit: 'Up to 100% fee waiver based on assessment',
      icon: '🤝',
    },
    {
      title: 'Single Parent Support',
      eligibility: 'Children of single parents/widows',
      benefit: '25% concession on total fees',
      icon: '❤️',
    },
    {
      title: 'Defence Personnel Ward',
      eligibility: 'Children of serving/retired defence personnel',
      benefit: '20% concession on tuition fee',
      icon: '🎖️',
    },
    {
      title: 'Sibling Scholarship',
      eligibility: 'Multiple children from same family',
      benefit: '10-15% discount per additional child',
      icon: '👨‍👩‍👧‍👦',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/admissions">Admissions</Link>
          <span>/</span>
          <span>Scholarships</span>
        </div>
        <h1>Scholarships & Financial Aid</h1>
        <p>Making quality education accessible to all</p>
      </section>

      {/* Introduction */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Our Commitment to Access</h2>
          <p className="text-lg text-[#4a4a4a]">
            At Manas International Public School, we believe that financial constraints should never
            be a barrier to quality education. Our comprehensive scholarship and financial aid programs
            ensure that deserving students have the opportunity to learn and grow, regardless of their
            economic background.
          </p>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Available Scholarships</h2>
            <p>Various programs to support deserving students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <span className="text-5xl mb-4 block">{scholarship.icon}</span>
                <h3 className="text-xl mb-3">{scholarship.title}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-[#0E2034]">Eligibility:</span>
                    <p className="text-[#4a4a4a]">{scholarship.eligibility}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#8B1538]">Benefit:</span>
                    <p className="text-[#4a4a4a]">{scholarship.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-header">
            <h2>How to Apply</h2>
            <p>Simple steps to apply for scholarships</p>
          </div>
          <div className="space-y-6">
            {[
              { step: 1, title: 'Submit Application', desc: 'Fill out the scholarship application form along with your admission application.' },
              { step: 2, title: 'Provide Documents', desc: 'Submit relevant documents like income certificate, achievement certificates, or medical reports.' },
              { step: 3, title: 'Interview/Assessment', desc: 'Shortlisted candidates may be called for an interview or assessment.' },
              { step: 4, title: 'Receive Decision', desc: 'Scholarship decisions are communicated within 15 days of application.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#0E2034] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="bg-white p-6 rounded-lg shadow flex-1">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#4a4a4a]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="content-section alt">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-header">
            <h2>Required Documents</h2>
            <p>Documents needed for scholarship applications</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Completed scholarship application form',
                'Income certificate from competent authority',
                'Previous year mark sheets/report cards',
                'Achievement certificates (if applicable)',
                'Caste certificate (for reserved categories)',
                'Medical certificate (for disability quota)',
                'Death certificate (for single parent)',
                'Service certificate (for defence personnel)',
              ].map((doc, index) => (
                <li key={index} className="flex items-center gap-3 text-[#4a4a4a]">
                  <svg className="w-5 h-5 text-[#8B1538] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0E2034] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Need More Information?
          </h2>
          <p className="text-white/90 mb-8">
            Contact our admissions office for detailed information about scholarships and financial aid.
          </p>
          <Link href="/contact" className="btn bg-white text-[#0E2034] hover:bg-[#C4A35A] hover:text-white">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
