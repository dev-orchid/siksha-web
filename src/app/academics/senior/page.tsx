import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: 'Senior Secondary - {SITE_CONFIG.name}',
  description: 'Senior secondary education program (Class 9-12) at {SITE_CONFIG.name}.',
};

export default function SeniorPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/academics">Academics</Link>
          <span>/</span>
          <span>Senior Secondary</span>
        </div>
        <h1>Senior Secondary</h1>
        <p>Preparing for board exams and beyond (Class 9-12)</p>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Excellence in Senior Education</h2>
              <p className="text-[#4a4a4a] mb-4">
                Our Senior Secondary program prepares students for CBSE Board examinations
                and competitive entrance exams. With a focus on academic excellence and
                career guidance, we ensure students are well-prepared for their future.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Classes 9-10 lay the foundation for board exams, while Classes 11-12 offer
                specialized streams - Science, Commerce, and Humanities - allowing students
                to pursue their interests and career goals.
              </p>
              <p className="text-[#4a4a4a]">
                Our experienced faculty provides personalized attention, regular practice
                tests, and comprehensive study materials to help students achieve their
                academic potential.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600"
                alt="Senior Secondary Students"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary (9-10) */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Secondary School (Class 9-10)</h2>
            <p>Building the foundation for board success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl mb-4 text-[#0E2034]">Core Subjects</h3>
              <ul className="space-y-3 text-[#4a4a4a]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full"></span>
                  English (Language & Literature)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full"></span>
                  Hindi/Sanskrit
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full"></span>
                  Mathematics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full"></span>
                  Science (Physics, Chemistry, Biology)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full"></span>
                  Social Science (History, Geography, Economics, Political Science)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full"></span>
                  Information Technology (Optional)
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl mb-4 text-[#0E2034]">Key Features</h3>
              <ul className="space-y-3 text-[#4a4a4a]">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  CBSE Board Exam Preparation
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Regular Mock Tests & Practice Papers
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Practical Lab Sessions
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Career Counseling Sessions
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Doubt Clearing Sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Streams (11-12) */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Senior Secondary Streams (Class 11-12)</h2>
            <p>Specialized education for career-focused learning</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#0E2034] to-[#1a3a5c] text-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Science Stream</h3>
              <p className="text-white/80 mb-4">For aspiring engineers, doctors, and researchers</p>
              <h4 className="font-semibold mb-2">Subjects:</h4>
              <ul className="space-y-2 text-white/90 mb-6">
                <li>• Physics</li>
                <li>• Chemistry</li>
                <li>• Mathematics / Biology</li>
                <li>• English (Core)</li>
                <li>• Computer Science / Physical Education</li>
              </ul>
              <p className="text-sm text-white/70">
                Career paths: Engineering, Medicine, Research, IT, Architecture
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#C4A35A] to-[#d4b36a] text-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Commerce Stream</h3>
              <p className="text-white/80 mb-4">For future business leaders and finance experts</p>
              <h4 className="font-semibold mb-2">Subjects:</h4>
              <ul className="space-y-2 text-white/90 mb-6">
                <li>• Accountancy</li>
                <li>• Business Studies</li>
                <li>• Economics</li>
                <li>• English (Core)</li>
                <li>• Mathematics / Informatics Practices</li>
              </ul>
              <p className="text-sm text-white/70">
                Career paths: CA, MBA, Banking, Finance, Business
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#8B1538] to-[#6d1029] text-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Humanities Stream</h3>
              <p className="text-white/80 mb-4">For aspiring civil servants and social scientists</p>
              <h4 className="font-semibold mb-2">Subjects:</h4>
              <ul className="space-y-2 text-white/90 mb-6">
                <li>• History</li>
                <li>• Political Science</li>
                <li>• Geography / Economics</li>
                <li>• English (Core)</li>
                <li>• Hindi / Sanskrit</li>
              </ul>
              <p className="text-sm text-white/70">
                Career paths: Civil Services, Law, Journalism, Teaching
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Results */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Our Track Record</h2>
            <p>Consistent excellence in board examinations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stat: '98%', label: 'Pass Rate (2024)' },
              { stat: '45+', label: 'Students scored 90%+' },
              { stat: '12', label: 'Subject Toppers' },
              { stat: '100%', label: 'Science Stream Pass Rate' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-[#8B1538] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.stat}
                </div>
                <div className="text-[#4a4a4a]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
