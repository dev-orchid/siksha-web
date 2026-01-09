import Link from 'next/link';

export const metadata = {
  title: 'Mission & Vision - Manas International Public School',
  description: 'Discover the mission, vision and core values that guide Manas International Public School.',
};

export default function MissionPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/about">About</Link>
          <span>/</span>
          <span>Mission & Vision</span>
        </div>
        <h1>Mission & Vision</h1>
        <p>Our guiding principles for excellence in education</p>
      </section>

      {/* Mission Section */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2 className="text-3xl mb-6">Our Mission</h2>
              <p className="text-xl text-[#4a4a4a] leading-relaxed">
                To provide quality education that nurtures intellectual curiosity, fosters creativity,
                and builds character. We are committed to creating a learning environment where every
                student can discover their potential, develop critical thinking skills, and grow into
                responsible citizens who contribute positively to society.
              </p>
            </div>

            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C4A35A] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h2 className="text-3xl mb-6">Our Vision</h2>
              <p className="text-xl text-[#4a4a4a] leading-relaxed">
                To be a leading educational institution that inspires excellence, innovation, and
                integrity. We envision a school where students are empowered to become lifelong
                learners, global citizens, and compassionate leaders who make a positive difference
                in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that define who we are</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in everything we do, encouraging students to give their best effort in academics, sports, and character development.',
                icon: '⭐',
              },
              {
                title: 'Integrity',
                description: 'We foster honesty, ethical behavior, and moral courage. Our students learn to stand by their principles and act with integrity in all situations.',
                icon: '🛡️',
              },
              {
                title: 'Respect',
                description: 'We cultivate respect for self, others, and the environment. Our diverse community celebrates differences and promotes inclusivity.',
                icon: '🤝',
              },
              {
                title: 'Innovation',
                description: 'We encourage creative thinking and embrace new ideas. Our students are prepared to adapt and innovate in a rapidly changing world.',
                icon: '💡',
              },
              {
                title: 'Compassion',
                description: 'We nurture empathy and kindness. Our students learn to care for others and contribute to the well-being of their community.',
                icon: '❤️',
              },
              {
                title: 'Responsibility',
                description: 'We instill a sense of accountability and civic duty. Our students understand their role in building a better society.',
                icon: '🎯',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-[#4a4a4a]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Motto */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Our Motto</h2>
          <p className="text-4xl font-bold text-[#8B1538] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            &ldquo;Knowledge and Values&rdquo;
          </p>
          <p className="text-lg text-[#4a4a4a]">
            Our motto encapsulates our commitment to providing education that goes beyond textbooks.
            We believe that true education combines academic knowledge with strong moral values,
            preparing students not just for exams, but for life.
          </p>
        </div>
      </section>
    </>
  );
}
