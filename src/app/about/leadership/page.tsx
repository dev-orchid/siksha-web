import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Leadership - Manas International Public School',
  description: 'Meet the dedicated leadership team of Manas International Public School.',
};

export default function LeadershipPage() {
  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chairman',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      message: 'Education is the most powerful weapon which you can use to change the world. At MIPS, we are committed to providing that weapon to every child.',
    },
    {
      name: 'Mrs. Sunita Devi',
      role: 'Principal',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
      message: 'Our mission is to nurture not just bright students, but good human beings who will make a positive difference in society.',
    },
    {
      name: 'Mr. Amit Singh',
      role: 'Vice Principal',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300',
      message: 'We believe in creating an environment where every student feels valued, supported, and motivated to achieve their best.',
    },
  ];

  const departments = [
    { name: 'Mrs. Priya Sharma', role: 'Head of Primary Section', department: 'Primary Education' },
    { name: 'Mr. Vikram Mehta', role: 'Head of Middle School', department: 'Middle School' },
    { name: 'Dr. Anita Verma', role: 'Head of Senior Secondary', department: 'Senior Secondary' },
    { name: 'Mr. Suresh Yadav', role: 'Sports Director', department: 'Physical Education' },
    { name: 'Mrs. Kavita Gupta', role: 'Head of Arts', department: 'Arts & Culture' },
    { name: 'Dr. Rajan Mishra', role: 'Head of Science', department: 'Science Department' },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/about">About</Link>
          <span>/</span>
          <span>Leadership</span>
        </div>
        <h1>Our Leadership</h1>
        <p>Meet the visionaries guiding our institution</p>
      </section>

      {/* Leadership Team */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>School Leadership</h2>
            <p>Dedicated educators committed to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-72">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1">{leader.name}</h3>
                  <span className="text-[#8B1538] font-medium">{leader.role}</span>
                  <p className="text-[#4a4a4a] mt-4 italic">&ldquo;{leader.message}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500"
                alt="Principal"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6">Principal&apos;s Message</h2>
              <p className="text-[#4a4a4a] mb-4">
                Dear Parents and Students,
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Welcome to Manas International Public School! As the Principal, I am honored to lead
                an institution that has been shaping young minds for over two decades. Our school
                stands as a testament to the belief that quality education is the cornerstone of a
                progressive society.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                At MIPS, we believe in nurturing the whole child - intellectually, emotionally,
                physically, and socially. Our dedicated team of educators works tirelessly to create
                an environment where every student can thrive and discover their unique potential.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                We invite you to be a part of our journey as we continue to build leaders of tomorrow.
                Together, let us create a future filled with knowledge, values, and endless possibilities.
              </p>
              <p className="font-semibold text-[#0E2034]">
                Mrs. Sunita Devi<br />
                <span className="text-[#4a4a4a] font-normal">Principal</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Department Heads</h2>
            <p>Leading our academic departments with expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#8B1538]">
                <h3 className="text-lg font-semibold mb-1">{dept.name}</h3>
                <p className="text-[#8B1538] text-sm font-medium mb-2">{dept.role}</p>
                <p className="text-[#4a4a4a] text-sm">{dept.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
