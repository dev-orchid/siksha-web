import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: 'Science Labs - {SITE_CONFIG.name}',
  description: 'Explore our state-of-the-art science laboratories at {SITE_CONFIG.name}.',
};

export default function LabsPage() {
  const labs = [
    {
      name: 'Physics Laboratory',
      icon: '⚡',
      description: 'Well-equipped lab for mechanics, optics, electricity, and modern physics experiments',
      equipment: ['Optical benches', 'Electrical circuits', 'Mechanics apparatus', 'Measuring instruments'],
    },
    {
      name: 'Chemistry Laboratory',
      icon: '🧪',
      description: 'Modern lab with all essential chemicals, apparatus, and safety equipment',
      equipment: ['Bunsen burners', 'Chemical reagents', 'Glassware', 'Fume hood'],
    },
    {
      name: 'Biology Laboratory',
      icon: '🔬',
      description: 'Lab equipped for studying life sciences with specimens and microscopes',
      equipment: ['Microscopes', 'Preserved specimens', 'Anatomical models', 'Slides collection'],
    },
    {
      name: 'Computer Laboratory',
      icon: '💻',
      description: 'State-of-the-art computer lab with high-speed internet and latest software',
      equipment: ['Desktop computers', 'Printers', 'Projector', 'Software suite'],
    },
    {
      name: 'Language Laboratory',
      icon: '🎧',
      description: 'Audio-visual lab for improving language skills and pronunciation',
      equipment: ['Headphones', 'Audio system', 'Language software', 'Recording equipment'],
    },
    {
      name: 'Mathematics Laboratory',
      icon: '📐',
      description: 'Hands-on math learning with models and manipulatives',
      equipment: ['Geometric models', 'Measuring tools', 'Math kits', 'Calculators'],
    },
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
          <span>Science Labs</span>
        </div>
        <h1>Science Laboratories</h1>
        <p>Hands-on learning through experimentation</p>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Learning by Doing</h2>
              <p className="text-[#4a4a4a] mb-4">
                Our laboratories are the heart of practical education at MIPS. We believe
                that hands-on experience is essential for understanding scientific concepts
                and developing critical thinking skills.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                Each lab is equipped with modern instruments and maintained to the highest
                safety standards. Our trained lab assistants work alongside teachers to
                ensure effective practical sessions for all students.
              </p>
              <p className="text-[#4a4a4a]">
                Regular practical classes, project work, and experiments help students
                connect theoretical knowledge with real-world applications.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600"
                alt="Science Laboratory"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Our Laboratories</h2>
            <p>State-of-the-art facilities for practical learning</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labs.map((lab, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow">
                <span className="text-5xl mb-4 block">{lab.icon}</span>
                <h3 className="text-xl mb-3">{lab.name}</h3>
                <p className="text-[#4a4a4a] mb-4">{lab.description}</p>
                <h4 className="text-sm font-semibold text-[#0E2034] mb-2">Equipment:</h4>
                <ul className="space-y-1">
                  {lab.equipment.map((item, i) => (
                    <li key={i} className="text-sm text-[#4a4a4a] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8B1538] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-header">
            <h2>Lab Safety</h2>
            <p>Your safety is our priority</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#0E2034]">Safety Measures</h3>
                <ul className="space-y-2 text-[#4a4a4a]">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Fire extinguishers in all labs
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    First aid kits available
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Safety goggles and aprons
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Proper ventilation systems
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#0E2034]">Lab Rules</h3>
                <ul className="space-y-2 text-[#4a4a4a]">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Always follow teacher instructions
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Wear safety equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No eating or drinking in labs
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Report accidents immediately
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
