import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Academics - Manas International Public School',
  description: 'Explore our comprehensive CBSE curriculum and academic programs at Manas International Public School.',
};

export default function AcademicsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Academics</span>
        </div>
        <h1>Academics</h1>
        <p>Excellence in education through comprehensive curriculum</p>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Academic Excellence</h2>
              <p className="text-[#4a4a4a] mb-4">
                At Manas International Public School, we follow the CBSE (Central Board of Secondary Education)
                curriculum, which is recognized for its comprehensive approach to education. Our academic
                program is designed to develop critical thinking, creativity, and a love for learning.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                We believe in a balanced approach that combines rigorous academics with co-curricular
                activities, ensuring the holistic development of every student. Our experienced faculty
                employs modern teaching methodologies to make learning engaging and effective.
              </p>
              <p className="text-[#4a4a4a]">
                From Nursery to Class 12, we provide a seamless educational journey that prepares
                students for higher education and successful careers.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
                alt="Students in classroom"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Our Academic Programs</h2>
            <p>Tailored education for every stage of development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/academics/curriculum" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Curriculum</h3>
              <p className="text-sm text-[#4a4a4a]">CBSE-aligned comprehensive curriculum</p>
            </Link>

            <Link href="/academics/primary" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl mb-2">Primary School</h3>
              <p className="text-sm text-[#4a4a4a]">Nursery to Class 5</p>
            </Link>

            <Link href="/academics/middle" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl mb-2">Middle School</h3>
              <p className="text-sm text-[#4a4a4a]">Class 6 to Class 8</p>
            </Link>

            <Link href="/academics/senior" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl mb-2">Senior Secondary</h3>
              <p className="text-sm text-[#4a4a4a]">Class 9 to Class 12</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Academic Highlights</h2>
            <p>What makes our academics stand out</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'CBSE Curriculum', desc: 'Following the nationally recognized CBSE pattern for consistent, quality education.' },
              { title: 'Smart Classrooms', desc: 'Interactive digital boards and modern teaching aids enhance learning experience.' },
              { title: 'Experienced Faculty', desc: 'Qualified and dedicated teachers with expertise in their subjects.' },
              { title: 'Small Class Size', desc: 'Maintaining optimal teacher-student ratio for personalized attention.' },
              { title: 'Regular Assessment', desc: 'Continuous evaluation system to track and improve student progress.' },
              { title: 'Remedial Classes', desc: 'Extra support for students who need additional help in subjects.' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border-l-4 border-[#8B1538]">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#4a4a4a]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
