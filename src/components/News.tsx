import Link from 'next/link';
import Image from 'next/image';

const news = [
  {
    category: 'Events',
    date: 'December 20, 2024',
    title: 'Annual Day Celebration 2024',
    excerpt: 'A spectacular showcase of talent as students performed cultural programs, received awards, and celebrated another year of achievements.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    featured: true,
  },
  {
    category: 'Academics',
    date: 'December 15, 2024',
    title: 'Students Excel at State Science Fair',
    excerpt: 'Our students secured top positions at the state-level science exhibition with innovative projects.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
  },
  {
    category: 'Sports',
    date: 'December 10, 2024',
    title: 'Inter-School Sports Championship',
    excerpt: 'MIPS athletes bring home 15 medals from the regional inter-school sports championship.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400',
  },
];

const News = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <h2>School Notes</h2>
          <p>Latest news and updates from our campus</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                item.featured ? 'lg:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${item.featured ? 'h-72' : 'h-48'}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#8B1538] text-white text-xs font-semibold uppercase tracking-wider rounded">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <span className="text-sm text-[#7F8588]">{item.date}</span>
                <h3 className={`mt-2 mb-3 ${item.featured ? 'text-2xl' : 'text-xl'}`}>{item.title}</h3>
                <p className="text-[#4a4a4a] text-sm mb-4">{item.excerpt}</p>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 font-semibold text-[#8B1538] hover:gap-3 transition-all"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/news" className="btn btn-outline">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
