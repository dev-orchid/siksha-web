import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: 'Sports - {SITE_CONFIG.name}',
  description: 'Explore our comprehensive sports program at {SITE_CONFIG.name}.',
};

export default function SportsPage() {
  const sports = [
    { name: 'Cricket', icon: '🏏', desc: 'Professional coaching with practice pitches' },
    { name: 'Football', icon: '⚽', desc: 'Full-size ground with trained coaches' },
    { name: 'Basketball', icon: '🏀', desc: 'Indoor court with regular tournaments' },
    { name: 'Volleyball', icon: '🏐', desc: 'Multiple courts for practice and matches' },
    { name: 'Badminton', icon: '🏸', desc: 'Indoor facility with coaching' },
    { name: 'Table Tennis', icon: '🏓', desc: 'Multiple tables in recreation hall' },
    { name: 'Athletics', icon: '🏃', desc: '400m track with all field events' },
    { name: 'Chess', icon: '♟️', desc: 'Mind sports for strategic thinking' },
    { name: 'Kho-Kho', icon: '🎯', desc: 'Traditional Indian sport' },
    { name: 'Kabaddi', icon: '💪', desc: 'Building strength and teamwork' },
    { name: 'Yoga', icon: '🧘', desc: 'Daily yoga sessions for wellness' },
    { name: 'Swimming', icon: '🏊', desc: 'Coming soon with new facility' },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/programs">Programs</Link>
          <span>/</span>
          <span>Sports</span>
        </div>
        <h1>Sports Program</h1>
        <p>Building champions on and off the field</p>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Excellence in Sports</h2>
              <p className="text-[#4a4a4a] mb-4">
                At MIPS, we believe that sports play a crucial role in the overall development of
                a child. Our comprehensive sports program offers students opportunities to develop
                physical fitness, teamwork, leadership, and sportsmanship.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                With world-class facilities and professional coaches, we nurture athletic talent
                while emphasizing the importance of fair play and healthy competition.
              </p>
              <p className="text-[#4a4a4a]">
                Students are encouraged to participate in inter-house, inter-school, and district
                level competitions, helping them gain valuable competitive experience.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600"
                alt="Sports Ground"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sports Offered */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Sports We Offer</h2>
            <p>Diverse options for every interest</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sports.map((sport, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{sport.icon}</span>
                <h4 className="font-semibold mb-2">{sport.name}</h4>
                <p className="text-sm text-[#4a4a4a]">{sport.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Sports Facilities</h2>
            <p>State-of-the-art infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Large cricket ground with practice nets',
              'Football field with natural turf',
              'Basketball court (outdoor)',
              'Multi-purpose indoor hall',
              '400m athletic track',
              'Well-equipped gymnasium',
              'Volleyball and badminton courts',
              'Table tennis hall',
              'Yoga and meditation room',
            ].map((facility, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                <svg className="w-6 h-6 text-[#8B1538] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#4a4a4a]">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Recent Achievements</h2>
            <p>Our students making us proud</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'District Cricket Champions', year: '2024' },
              { title: 'State Athletics - 5 Medals', year: '2024' },
              { title: 'Inter-School Football Winners', year: '2023' },
              { title: 'District Kabaddi Runners-up', year: '2023' },
            ].map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">🏆</span>
                <h4 className="font-semibold mb-1">{achievement.title}</h4>
                <p className="text-sm text-[#7F8588]">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
