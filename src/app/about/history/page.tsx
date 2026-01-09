import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: 'Our History - {SITE_CONFIG.name}',
  description: 'Explore the rich history and journey of {SITE_CONFIG.name}.',
};

export default function HistoryPage() {
  const timeline = [
    {
      year: '1999',
      title: 'Foundation',
      description: '{SITE_CONFIG.name} was founded with a vision to provide quality education in Jehanabad district.',
    },
    {
      year: '2005',
      title: 'CBSE Affiliation',
      description: 'Received affiliation from the Central Board of Secondary Education (CBSE), marking a significant milestone.',
    },
    {
      year: '2010',
      title: 'Campus Expansion',
      description: 'Major campus expansion including new academic blocks, science laboratories, and sports facilities.',
    },
    {
      year: '2015',
      title: 'Digital Initiative',
      description: 'Launched comprehensive digital learning program with smart classrooms and computer labs.',
    },
    {
      year: '2020',
      title: 'Excellence Award',
      description: 'Recognized for academic excellence and awarded Best School in the district.',
    },
    {
      year: '2024',
      title: 'Silver Jubilee',
      description: 'Celebrating 25 years of excellence in education with over 10,000 successful alumni.',
    },
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
          <span>Our History</span>
        </div>
        <h1>Our History</h1>
        <p>A journey of excellence spanning over two decades</p>
      </section>

      {/* Story Section */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl mb-6">Our Story</h2>
              <p className="text-[#4a4a4a] mb-4">
                {SITE_CONFIG.name} began its journey in 1999 with a simple yet powerful vision:
                to provide quality education that transforms lives. Founded by a group of passionate educators
                and visionaries, the school started with just a handful of students and a dream.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Located in the peaceful village of Dakshini, Dharampur, our school has grown from humble
                beginnings to become one of the most respected educational institutions in Jehanabad district.
                Over the years, we have remained true to our founding principles while continuously evolving
                to meet the changing needs of education.
              </p>
              <p className="text-[#4a4a4a]">
                Today, we stand proud as a comprehensive school offering education from Nursery to Grade 12,
                with state-of-the-art facilities and a dedicated team of educators committed to nurturing
                the leaders of tomorrow.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600"
                alt="School Campus"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our history</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0E2034] hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-sm font-bold text-[#8B1538]">{item.year}</span>
                      <h3 className="text-xl mt-2 mb-3">{item.title}</h3>
                      <p className="text-[#4a4a4a]">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#0E2034] rounded-full flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Our Achievements</h2>
            <p>Milestones that define our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '10,000+', label: 'Alumni Worldwide' },
              { number: '25+', label: 'Years of Excellence' },
              { number: '100+', label: 'Awards Won' },
              { number: '98%', label: 'Board Exam Success' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl font-bold text-[#8B1538] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.number}
                </div>
                <div className="text-[#4a4a4a]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
