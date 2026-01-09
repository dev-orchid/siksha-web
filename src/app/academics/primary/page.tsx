import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: 'Primary School - {SITE_CONFIG.name}',
  description: 'Primary education program (Nursery to Class 5) at {SITE_CONFIG.name}.',
};

export default function PrimaryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/academics">Academics</Link>
          <span>/</span>
          <span>Primary School</span>
        </div>
        <h1>Primary School</h1>
        <p>Building strong foundations from Nursery to Class 5</p>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Early Learning Excellence</h2>
              <p className="text-[#4a4a4a] mb-4">
                Our Primary School program provides a nurturing environment where young learners
                develop foundational skills through play-based and activity-centered learning.
                We believe that early childhood education sets the stage for lifelong learning.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                From Nursery to Class 5, children are introduced to the joy of learning through
                interactive activities, creative expression, and hands-on experiences. Our
                trained educators understand child psychology and create engaging lessons that
                make learning fun and effective.
              </p>
              <p className="text-[#4a4a4a]">
                We focus on developing reading, writing, numeracy, and social skills while
                nurturing curiosity and creativity in every child.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
                alt="Primary School Students"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Grade Levels</h2>
            <p>Age-appropriate learning at every stage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { grade: 'Nursery', age: '3-4 years', focus: 'Play-based learning, basic motor skills, socialization' },
              { grade: 'LKG', age: '4-5 years', focus: 'Pre-reading, pre-writing, number recognition, phonics' },
              { grade: 'UKG', age: '5-6 years', focus: 'Reading readiness, basic math, creative activities' },
              { grade: 'Class 1-2', age: '6-8 years', focus: 'Foundational literacy, numeracy, environmental awareness' },
              { grade: 'Class 3-4', age: '8-10 years', focus: 'Subject knowledge, critical thinking, communication skills' },
              { grade: 'Class 5', age: '10-11 years', focus: 'Comprehensive learning, preparation for middle school' },
            ].map((level, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl mb-2 text-[#0E2034]">{level.grade}</h3>
                <p className="text-sm text-[#8B1538] mb-3">Age: {level.age}</p>
                <p className="text-[#4a4a4a]">{level.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Program Features</h2>
            <p>What makes our primary program special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎮', title: 'Play-Based Learning', desc: 'Learning through games and activities' },
              { icon: '📖', title: 'Story Time', desc: 'Daily reading sessions to build literacy' },
              { icon: '🎨', title: 'Art & Craft', desc: 'Creative expression through art activities' },
              { icon: '🎵', title: 'Music & Movement', desc: 'Songs, rhymes, and physical activities' },
              { icon: '🌱', title: 'Nature Exploration', desc: 'Learning about environment and nature' },
              { icon: '🧮', title: 'Math Fun', desc: 'Hands-on math activities and puzzles' },
              { icon: '💻', title: 'Digital Literacy', desc: 'Basic computer skills introduction' },
              { icon: '🤗', title: 'Social Skills', desc: 'Building friendships and teamwork' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{feature.icon}</span>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-[#4a4a4a]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Primary Section Facilities</h2>
            <p>Safe and stimulating learning environment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Colorful, child-friendly classrooms',
              'Dedicated play area with safe equipment',
              'Well-stocked library with picture books',
              'Art and activity rooms',
              'Clean and hygienic washrooms',
              'Trained caretakers and ayahs',
              'CCTV monitored premises',
              'Separate block for primary section',
              'Air-conditioned classrooms (Nursery-UKG)',
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
    </>
  );
}
