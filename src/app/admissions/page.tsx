import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: `Admissions - ${SITE_CONFIG.name}`,
  description: `Learn about the admission process, fees, and how to apply to ${SITE_CONFIG.name}.`,
};

export default function AdmissionsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Admissions</span>
        </div>
        <h1>Admissions</h1>
        <p>Begin your journey with {SITE_CONFIG.name}</p>
      </section>

      {/* Welcome Section */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Welcome to Admissions</h2>
              <p className="text-[#4a4a4a] mb-4">
                Thank you for considering {SITE_CONFIG.name} for your child&apos;s education.
                We are committed to providing a nurturing environment where every student can thrive
                academically, socially, and emotionally.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Our admission process is designed to be simple and transparent. We look for students
                who are eager to learn, curious about the world, and ready to be part of our
                vibrant community.
              </p>
              <p className="text-[#4a4a4a] mb-6">
                Admissions are now open for the academic year 2025-26. We encourage you to begin
                the application process early to secure your child&apos;s place.
              </p>
              <Link href="/admissions/process" className="btn btn-primary">
                Start Application
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
                alt="Students"
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
            <h2>Admission Information</h2>
            <p>Everything you need to know about joining MIPS</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/admissions/process" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Admission Process</h3>
              <p className="text-sm text-[#4a4a4a]">Step-by-step guide to apply</p>
            </Link>

            <Link href="/admissions/fees" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Fee Structure</h3>
              <p className="text-sm text-[#4a4a4a]">Transparent fee details</p>
            </Link>

            <Link href="/admissions/scholarships" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Scholarships</h3>
              <p className="text-sm text-[#4a4a4a]">Financial aid programs</p>
            </Link>

            <Link href="/admissions/visit" className="card p-8 text-center hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Schedule a Visit</h3>
              <p className="text-sm text-[#4a4a4a]">Tour our campus</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Important Dates 2025-26</h2>
            <p>Mark your calendar for these key admission dates</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { date: 'January 15, 2025', event: 'Admission Portal Opens' },
                { date: 'February 28, 2025', event: 'Last Date for Early Applications (10% discount)' },
                { date: 'March 15, 2025', event: 'Entrance Tests (for Class 6 & above)' },
                { date: 'March 25, 2025', event: 'Results Declaration' },
                { date: 'April 1-15, 2025', event: 'Fee Payment & Document Submission' },
                { date: 'April 1, 2025', event: 'Academic Session Begins' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 bg-white p-5 rounded-lg shadow">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm font-semibold text-[#8B1538]">{item.date}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
