import Link from 'next/link';

export const metadata = {
  title: 'Curriculum - Manas International Public School',
  description: 'Learn about our CBSE curriculum and teaching methodology at Manas International Public School.',
};

export default function CurriculumPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/academics">Academics</Link>
          <span>/</span>
          <span>Curriculum</span>
        </div>
        <h1>Our Curriculum</h1>
        <p>CBSE-aligned education for comprehensive learning</p>
      </section>

      {/* CBSE Overview */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-6 text-center">CBSE Curriculum</h2>
          <p className="text-lg text-[#4a4a4a] text-center mb-8">
            Manas International Public School is affiliated with the Central Board of Secondary Education (CBSE),
            New Delhi. Our curriculum is designed to provide a strong foundation in academics while nurturing
            creativity, critical thinking, and life skills.
          </p>
        </div>
      </section>

      {/* Subject Structure */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Subject Structure</h2>
            <p>Core and elective subjects across grades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl mb-4 text-[#0E2034]">Primary (Nursery - Class 5)</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>• English Language</li>
                <li>• Hindi</li>
                <li>• Mathematics</li>
                <li>• Environmental Studies (EVS)</li>
                <li>• General Knowledge</li>
                <li>• Computer Science</li>
                <li>• Art & Craft</li>
                <li>• Physical Education</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl mb-4 text-[#0E2034]">Middle (Class 6 - 8)</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>• English</li>
                <li>• Hindi</li>
                <li>• Sanskrit (Optional)</li>
                <li>• Mathematics</li>
                <li>• Science</li>
                <li>• Social Science</li>
                <li>• Computer Applications</li>
                <li>• Physical Education</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl mb-4 text-[#0E2034]">Secondary (Class 9 - 10)</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>• English</li>
                <li>• Hindi/Sanskrit</li>
                <li>• Mathematics</li>
                <li>• Science</li>
                <li>• Social Science</li>
                <li>• Information Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Secondary Streams */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Senior Secondary Streams (Class 11-12)</h2>
            <p>Choose your path to success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#0E2034] to-[#1a3a5c] text-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Science Stream</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Physics</li>
                <li>• Chemistry</li>
                <li>• Mathematics/Biology</li>
                <li>• English</li>
                <li>• Computer Science/Physical Education</li>
              </ul>
              <p className="mt-4 text-sm text-white/80">
                Ideal for: Engineering, Medical, Research careers
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#C4A35A] to-[#d4b36a] text-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Commerce Stream</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Accountancy</li>
                <li>• Business Studies</li>
                <li>• Economics</li>
                <li>• English</li>
                <li>• Mathematics/Informatics Practices</li>
              </ul>
              <p className="mt-4 text-sm text-white/80">
                Ideal for: Business, Finance, CA, Management
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#8B1538] to-[#6d1029] text-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Arts/Humanities</h3>
              <ul className="space-y-2 text-white/90">
                <li>• History</li>
                <li>• Political Science</li>
                <li>• Geography/Economics</li>
                <li>• English</li>
                <li>• Hindi/Sanskrit</li>
              </ul>
              <p className="mt-4 text-sm text-white/80">
                Ideal for: Law, Civil Services, Journalism
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Our Teaching Methodology</h2>
            <p>Modern approaches to effective learning</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Activity-Based Learning', desc: 'Hands-on activities to reinforce concepts' },
              { icon: '💻', title: 'Digital Learning', desc: 'Smart classrooms and e-learning resources' },
              { icon: '🧪', title: 'Practical Approach', desc: 'Lab experiments and real-world applications' },
              { icon: '🤝', title: 'Collaborative Learning', desc: 'Group projects and peer learning' },
              { icon: '📊', title: 'Regular Assessment', desc: 'Continuous evaluation and feedback' },
              { icon: '🎨', title: 'Creative Expression', desc: 'Art, music, and drama integration' },
              { icon: '🌍', title: 'Global Perspective', desc: 'International awareness and exposure' },
              { icon: '💡', title: 'Critical Thinking', desc: 'Problem-solving and analytical skills' },
            ].map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{method.icon}</span>
                <h4 className="font-semibold mb-2">{method.title}</h4>
                <p className="text-sm text-[#4a4a4a]">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
