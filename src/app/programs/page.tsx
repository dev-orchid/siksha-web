import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: `Programs - ${SITE_CONFIG.name}`,
  description: `Explore co-curricular programs including sports, arts, clubs, and labs at ${SITE_CONFIG.name}.`,
};

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Sports',
      description: 'Comprehensive sports program with professional coaching',
      icon: '🏆',
      href: '/programs/sports',
      highlights: ['Cricket', 'Football', 'Basketball', 'Athletics'],
    },
    {
      title: 'Arts & Culture',
      description: 'Nurturing creativity through various art forms',
      icon: '🎨',
      href: '/programs/arts',
      highlights: ['Music', 'Dance', 'Drama', 'Visual Arts'],
    },
    {
      title: 'Clubs & Activities',
      description: 'Student-led clubs for diverse interests',
      icon: '🎯',
      href: '/programs/clubs',
      highlights: ['Science Club', 'Debate Club', 'Eco Club', 'Literary Club'],
    },
    {
      title: 'Science Labs',
      description: 'State-of-the-art laboratories for practical learning',
      icon: '🔬',
      href: '/programs/labs',
      highlights: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Lab'],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Programs</span>
        </div>
        <h1>Programs & Activities</h1>
        <p>Beyond academics - nurturing talents and interests</p>
      </section>

      {/* Introduction */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Holistic Development</h2>
          <p className="text-lg text-[#4a4a4a]">
            At {SITE_CONFIG.name}, we believe that education extends beyond textbooks.
            Our comprehensive co-curricular programs help students discover their passions, develop
            new skills, and grow into well-rounded individuals ready to take on the world.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Link key={index} href={program.href} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <span className="text-6xl mb-4 block">{program.icon}</span>
                <h3 className="text-2xl mb-3 group-hover:text-[#8B1538] transition-colors">{program.title}</h3>
                <p className="text-[#4a4a4a] mb-4">{program.description}</p>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-[#faf8f5] rounded-full text-sm text-[#4a4a4a]">
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Annual Events</h2>
            <p>Celebrating learning and achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Annual Day', month: 'December', icon: '🎭' },
              { name: 'Sports Day', month: 'November', icon: '🏃' },
              { name: 'Science Exhibition', month: 'September', icon: '🔬' },
              { name: 'Independence Day', month: 'August', icon: '🇮🇳' },
              { name: 'Republic Day', month: 'January', icon: '🎉' },
              { name: 'Children\'s Day', month: 'November', icon: '👧' },
              { name: 'Teachers\' Day', month: 'September', icon: '👩‍🏫' },
              { name: 'Farewell', month: 'February', icon: '🎓' },
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{event.icon}</span>
                <h4 className="font-semibold mb-1">{event.name}</h4>
                <p className="text-sm text-[#7F8588]">{event.month}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
