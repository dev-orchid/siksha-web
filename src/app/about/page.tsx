import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: `About Us - ${SITE_CONFIG.name}`,
  description: `Learn about ${SITE_CONFIG.name} - our mission, vision, history, and commitment to excellence in education.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
        <h1>About Us</h1>
        <p>Discover the story behind {SITE_CONFIG.name}</p>
      </section>

      {/* Introduction */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Welcome to {SITE_CONFIG.name}</h2>
              <p className="text-[#4a4a4a] mb-4">
                {SITE_CONFIG.name}, located in the serene environs of Dharampur, Jehanabad, Bihar,
                stands as a beacon of quality education in the region. Since our establishment, we have been
                committed to providing holistic education that nurtures young minds and prepares them for the
                challenges of tomorrow.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Our institution believes in the philosophy that every child is unique and possesses immense
                potential. We strive to create an environment where students can discover their talents,
                develop their skills, and grow into responsible citizens who contribute positively to society.
              </p>
              <p className="text-[#4a4a4a]">
                With state-of-the-art facilities, experienced faculty, and a curriculum that balances academic
                rigor with co-curricular activities, we ensure that our students receive a well-rounded education
                that prepares them for success in all walks of life.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600"
                alt="School Building"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Explore More About Us</h2>
            <p>Learn more about our school&apos;s foundation and values</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about/mission" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Mission & Vision</h3>
              <p className="text-sm text-[#4a4a4a]">Our guiding principles and aspirations</p>
            </Link>

            <Link href="/about/history" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Our History</h3>
              <p className="text-sm text-[#4a4a4a]">The journey of excellence through the years</p>
            </Link>

            <Link href="/about/leadership" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Leadership</h3>
              <p className="text-sm text-[#4a4a4a]">Meet our dedicated leadership team</p>
            </Link>

            <Link href="/about/campus" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Campus Tour</h3>
              <p className="text-sm text-[#4a4a4a]">Explore our world-class facilities</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
