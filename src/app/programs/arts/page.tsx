import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: 'Arts & Culture - {SITE_CONFIG.name}',
  description: 'Explore our arts and cultural programs at {SITE_CONFIG.name}.',
};

export default function ArtsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/programs">Programs</Link>
          <span>/</span>
          <span>Arts & Culture</span>
        </div>
        <h1>Arts & Culture</h1>
        <p>Nurturing creativity and cultural appreciation</p>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Creative Expression</h2>
              <p className="text-[#4a4a4a] mb-4">
                Our Arts & Culture program provides students with opportunities to explore
                various art forms and express their creativity. We believe that artistic
                expression is essential for cognitive development and emotional well-being.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                From music and dance to visual arts and drama, our programs are designed
                to help students discover their artistic talents and appreciate the rich
                cultural heritage of India.
              </p>
              <p className="text-[#4a4a4a]">
                Students showcase their talents at various events throughout the year,
                including Annual Day, cultural competitions, and community performances.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600"
                alt="Cultural Performance"
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
            <h2>Our Programs</h2>
            <p>Diverse offerings for creative minds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <span className="text-5xl mb-4 block">🎵</span>
              <h3 className="text-xl mb-3">Music</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>• Vocal music (Classical & Light)</li>
                <li>• Keyboard and Harmonium</li>
                <li>• Tabla and Percussion</li>
                <li>• School choir and band</li>
                <li>• Music theory and appreciation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <span className="text-5xl mb-4 block">💃</span>
              <h3 className="text-xl mb-3">Dance</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>• Classical dance forms (Bharatanatyam, Kathak)</li>
                <li>• Folk dances of India</li>
                <li>• Contemporary and Western dance</li>
                <li>• Group choreography</li>
                <li>• Dance competitions preparation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <span className="text-5xl mb-4 block">🎭</span>
              <h3 className="text-xl mb-3">Drama & Theatre</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>• Acting and stage presence</li>
                <li>• Script writing</li>
                <li>• Annual play productions</li>
                <li>• Nukkad Natak (Street theatre)</li>
                <li>• Public speaking and expression</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <span className="text-5xl mb-4 block">🎨</span>
              <h3 className="text-xl mb-3">Visual Arts</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>• Drawing and sketching</li>
                <li>• Painting (watercolor, acrylic, oil)</li>
                <li>• Craft and paper art</li>
                <li>• Clay modeling and pottery</li>
                <li>• Digital art introduction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Cultural Events</h2>
            <p>Platforms to showcase talent</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Annual Day', desc: 'Grand cultural showcase', icon: '🎭' },
              { name: 'Saraswati Puja', desc: 'Cultural celebrations', icon: '🙏' },
              { name: 'Inter-House Competition', desc: 'House-wise cultural events', icon: '🏆' },
              { name: 'Art Exhibition', desc: 'Student artwork display', icon: '🖼️' },
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{event.icon}</span>
                <h4 className="font-semibold mb-1">{event.name}</h4>
                <p className="text-sm text-[#7F8588]">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
