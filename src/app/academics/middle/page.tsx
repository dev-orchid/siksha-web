import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: 'Middle School - {SITE_CONFIG.name}',
  description: 'Middle school education program (Class 6-8) at {SITE_CONFIG.name}.',
};

export default function MiddlePage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/academics">Academics</Link>
          <span>/</span>
          <span>Middle School</span>
        </div>
        <h1>Middle School</h1>
        <p>Developing critical thinking from Class 6 to Class 8</p>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Bridging to Excellence</h2>
              <p className="text-[#4a4a4a] mb-4">
                Middle School at MIPS is a crucial transitional phase where students develop
                advanced academic skills and begin to explore their interests and strengths.
                Our program focuses on building strong subject knowledge while nurturing
                independent thinking and self-discipline.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Classes 6-8 form the foundation for secondary education. Students are introduced
                to specialized subjects and more complex concepts while developing essential
                study skills and time management abilities.
              </p>
              <p className="text-[#4a4a4a]">
                Our experienced teachers guide students through this important phase, preparing
                them for the academic rigor of senior secondary education.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
                alt="Middle School Students"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Subjects Offered</h2>
            <p>Comprehensive curriculum for holistic development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { subject: 'English', desc: 'Literature, grammar, writing skills, communication' },
              { subject: 'Hindi', desc: 'Literature, grammar, creative writing' },
              { subject: 'Mathematics', desc: 'Algebra, geometry, arithmetic, problem-solving' },
              { subject: 'Science', desc: 'Physics, Chemistry, Biology fundamentals' },
              { subject: 'Social Science', desc: 'History, Geography, Civics, Economics' },
              { subject: 'Sanskrit', desc: 'Optional third language' },
              { subject: 'Computer Science', desc: 'Programming basics, digital literacy' },
              { subject: 'Physical Education', desc: 'Sports, fitness, health education' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2 text-[#0E2034]">{item.subject}</h3>
                <p className="text-sm text-[#4a4a4a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Program Highlights</h2>
            <p>Key features of our middle school program</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🔬', title: 'Science Labs', desc: 'Hands-on experiments in well-equipped laboratories' },
              { icon: '💻', title: 'Computer Education', desc: 'Programming, applications, and digital skills' },
              { icon: '📊', title: 'Regular Testing', desc: 'Unit tests, periodic assessments, and term exams' },
              { icon: '📚', title: 'Library Access', desc: 'Extensive collection of reference books and journals' },
              { icon: '🎯', title: 'Olympiad Preparation', desc: 'Coaching for national and international olympiads' },
              { icon: '🗣️', title: 'Communication Skills', desc: 'Debates, elocution, and public speaking' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{feature.icon}</span>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-[#4a4a4a]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2>Assessment Pattern</h2>
              <p>Comprehensive evaluation system</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#0E2034]">Scholastic Areas</h3>
                  <ul className="space-y-2 text-[#4a4a4a]">
                    <li>• Periodic Tests (3 per year)</li>
                    <li>• Half Yearly Examination</li>
                    <li>• Annual Examination</li>
                    <li>• Subject Enrichment Activities</li>
                    <li>• Notebook Assessment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#0E2034]">Co-Scholastic Areas</h3>
                  <ul className="space-y-2 text-[#4a4a4a]">
                    <li>• Work Education</li>
                    <li>• Art Education</li>
                    <li>• Health & Physical Education</li>
                    <li>• Discipline Assessment</li>
                    <li>• Co-curricular Activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
