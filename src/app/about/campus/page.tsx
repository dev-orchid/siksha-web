import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Campus Tour - Manas International Public School',
  description: 'Explore the world-class campus and facilities at Manas International Public School.',
};

export default function CampusPage() {
  const facilities = [
    {
      title: 'Academic Blocks',
      description: 'Spacious, well-ventilated classrooms equipped with modern teaching aids and smart boards.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600',
    },
    {
      title: 'Science Laboratories',
      description: 'State-of-the-art physics, chemistry, and biology labs for hands-on learning experiences.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600',
    },
    {
      title: 'Computer Labs',
      description: 'Modern computer laboratories with high-speed internet and latest software.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
    },
    {
      title: 'Library',
      description: 'A comprehensive library with thousands of books, journals, and digital resources.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600',
    },
    {
      title: 'Sports Complex',
      description: 'Multi-sport facilities including cricket ground, basketball court, and athletics track.',
      image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600',
    },
    {
      title: 'Auditorium',
      description: 'A 500-seater auditorium for cultural programs, seminars, and school events.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
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
          <span>Campus Tour</span>
        </div>
        <h1>Campus Tour</h1>
        <p>Explore our world-class learning environment</p>
      </section>

      {/* Campus Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Our Campus</h2>
              <p className="text-[#4a4a4a] mb-4">
                Spread across 10 acres of lush green land in Dakshini, Dharampur, our campus provides
                the perfect environment for learning and growth. The campus is designed to inspire
                creativity, encourage exploration, and foster a sense of community.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Our infrastructure includes modern academic blocks, well-equipped laboratories,
                extensive sports facilities, and comfortable learning spaces. We continuously
                invest in upgrading our facilities to provide the best possible learning environment
                for our students.
              </p>
              <p className="text-[#4a4a4a]">
                The campus is secure with 24/7 CCTV surveillance and trained security personnel,
                ensuring the safety of all students and staff.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600"
                alt="Campus Aerial View"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Our Facilities</h2>
            <p>State-of-the-art infrastructure for holistic development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{facility.title}</h3>
                  <p className="text-[#4a4a4a]">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Additional Amenities</h2>
            <p>Everything your child needs for a complete educational experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚌', title: 'Transport', desc: 'Fleet of buses covering all major routes' },
              { icon: '🍽️', title: 'Cafeteria', desc: 'Hygienic food with nutritious meals' },
              { icon: '🏥', title: 'Medical Room', desc: 'First aid and medical assistance' },
              { icon: '📡', title: 'Wi-Fi Campus', desc: 'High-speed internet across campus' },
              { icon: '🎭', title: 'Activity Rooms', desc: 'Dedicated spaces for arts and crafts' },
              { icon: '🌳', title: 'Green Spaces', desc: 'Gardens and outdoor learning areas' },
              { icon: '🔒', title: 'Security', desc: '24/7 CCTV and security personnel' },
              { icon: '♿', title: 'Accessibility', desc: 'Ramps and facilities for all' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-[#4a4a4a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Visit CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0E2034] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Experience Our Campus
          </h2>
          <p className="text-white/90 mb-8">
            Schedule a visit to see our facilities firsthand and meet our dedicated team.
          </p>
          <Link href="/admissions/visit" className="btn bg-white text-[#0E2034] hover:bg-[#C4A35A] hover:text-white">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
