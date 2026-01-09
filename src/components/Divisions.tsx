import Link from 'next/link';
import Image from 'next/image';

const divisions = [
  {
    label: 'Nursery - Grade 5',
    title: 'Primary School',
    description: 'Building strong foundations through play-based learning and discovery',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
    href: '/academics/primary',
  },
  {
    label: 'Grade 6 - Grade 8',
    title: 'Middle School',
    description: 'Developing critical thinking and preparing for academic excellence',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
    href: '/academics/middle',
  },
  {
    label: 'Grade 9 - Grade 12',
    title: 'Senior Secondary',
    description: 'Preparing future leaders with CBSE curriculum and career guidance',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
    href: '/academics/senior',
  },
];

const Divisions = () => {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <h2>Explore Our Programs</h2>
          <p>Comprehensive education tailored for every stage of development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2034]/80 to-transparent"></div>
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8B1538]">
                  {division.label}
                </span>
                <h3 className="text-xl mt-2 mb-3">{division.title}</h3>
                <p className="text-[#4a4a4a] text-sm mb-5">
                  {division.description}
                </p>
                <Link
                  href={division.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#0E2034] hover:text-[#8B1538] hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
