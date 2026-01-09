import Link from 'next/link';

export const metadata = {
  title: 'Admission Process - Manas International Public School',
  description: 'Learn about the step-by-step admission process at Manas International Public School.',
};

export default function ProcessPage() {
  const steps = [
    {
      number: 1,
      title: 'Online Registration',
      description: 'Fill out the online application form with accurate information about the student and parents/guardians.',
      details: ['Visit the admission portal', 'Create an account', 'Fill in student details', 'Upload required documents'],
    },
    {
      number: 2,
      title: 'Document Submission',
      description: 'Submit all required documents either online or at the school office.',
      details: ['Birth certificate', 'Previous school records', 'Transfer certificate (if applicable)', 'Passport-size photographs'],
    },
    {
      number: 3,
      title: 'Entrance Assessment',
      description: 'Students applying for Class 6 and above will need to appear for an entrance assessment.',
      details: ['Age-appropriate written test', 'Personal interaction/interview', 'Assessment of previous academic records'],
    },
    {
      number: 4,
      title: 'Results & Admission Offer',
      description: 'Shortlisted candidates will receive an admission offer via email and SMS.',
      details: ['Results announced within 10 days', 'Offer letter with fee details', '7 days to accept the offer'],
    },
    {
      number: 5,
      title: 'Fee Payment',
      description: 'Complete the admission by paying the required fees within the stipulated time.',
      details: ['Online payment options available', 'Bank transfer/DD accepted', 'EMI options for annual fees'],
    },
    {
      number: 6,
      title: 'Welcome to MIPS!',
      description: 'Receive welcome kit, uniform details, and orientation schedule.',
      details: ['Student ID card', 'Book list and supplies', 'Orientation program date', 'Class allocation'],
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
          <span>Admission Process</span>
        </div>
        <h1>Admission Process</h1>
        <p>Your step-by-step guide to joining MIPS</p>
      </section>

      {/* Process Steps */}
      <section className="content-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-[#4a4a4a] mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#4a4a4a]">
                        <svg className="w-4 h-4 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Required Documents</h2>
            <p>Please keep these documents ready for submission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#0E2034]">For New Admissions (Nursery to Class 1)</h3>
              <ul className="space-y-3">
                {[
                  'Birth Certificate (Original + Photocopy)',
                  'Aadhar Card of Child',
                  'Aadhar Card of Both Parents',
                  '4 Passport-size Photographs',
                  'Address Proof',
                  'Caste Certificate (if applicable)',
                ].map((doc, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#4a4a4a]">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#0E2034]">For Transfer Admissions (Class 2 & Above)</h3>
              <ul className="space-y-3">
                {[
                  'Transfer Certificate from Previous School',
                  'Report Card / Mark Sheet (Last 2 years)',
                  'Birth Certificate',
                  'Aadhar Card of Child & Parents',
                  '4 Passport-size Photographs',
                  'Character Certificate',
                  'Migration Certificate (for different board)',
                ].map((doc, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#4a4a4a]">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-gradient-to-br from-[#8B1538] to-[#6d1029]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Apply?
          </h2>
          <p className="text-white/90 mb-8">
            Start your application today and take the first step towards excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn bg-white text-[#0E2034] hover:bg-[#C4A35A] hover:text-white">
              Apply Online
            </a>
            <Link href="/contact" className="btn bg-transparent text-white border-white hover:bg-white hover:text-[#0E2034]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
