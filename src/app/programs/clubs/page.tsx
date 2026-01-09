import Link from 'next/link';

export const metadata = {
  title: 'Clubs & Activities - Manas International Public School',
  description: 'Explore student clubs and activities at Manas International Public School.',
};

export default function ClubsPage() {
  const clubs = [
    { name: 'Science Club', icon: '🔬', desc: 'Experiments, projects, and scientific exploration', activities: ['Science exhibitions', 'Lab experiments', 'Field trips', 'Guest lectures'] },
    { name: 'Eco Club', icon: '🌱', desc: 'Environmental awareness and sustainability', activities: ['Tree plantation', 'Cleanliness drives', 'Recycling projects', 'Nature walks'] },
    { name: 'Literary Club', icon: '📚', desc: 'Reading, writing, and literary appreciation', activities: ['Book reviews', 'Creative writing', 'Poetry recitation', 'Story telling'] },
    { name: 'Debate Club', icon: '🎤', desc: 'Public speaking and argumentation skills', activities: ['Debates', 'Extempore', 'Mock parliament', 'Public speaking'] },
    { name: 'Math Club', icon: '🧮', desc: 'Mathematical problem-solving and puzzles', activities: ['Math olympiad prep', 'Puzzle solving', 'Math quiz', 'Vedic math'] },
    { name: 'Computer Club', icon: '💻', desc: 'Coding, technology, and digital skills', activities: ['Coding workshops', 'App development', 'Web design', 'Robotics'] },
    { name: 'Art Club', icon: '🎨', desc: 'Visual arts and creative expression', activities: ['Drawing competitions', 'Craft workshops', 'Art exhibitions', 'Poster making'] },
    { name: 'Social Service Club', icon: '🤝', desc: 'Community service and social awareness', activities: ['Donation drives', 'Awareness campaigns', 'Village visits', 'Blood donation'] },
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
          <span>Clubs & Activities</span>
        </div>
        <h1>Clubs & Activities</h1>
        <p>Student-led initiatives for growth and learning</p>
      </section>

      {/* Introduction */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Beyond the Classroom</h2>
          <p className="text-lg text-[#4a4a4a]">
            Our student clubs provide platforms for students to pursue their interests,
            develop leadership skills, and make meaningful contributions to the school
            community. Each club is guided by a faculty coordinator while being primarily
            student-driven.
          </p>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Our Clubs</h2>
            <p>Find your passion and join a community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{club.icon}</span>
                  <div>
                    <h3 className="text-xl">{club.name}</h3>
                    <p className="text-[#4a4a4a]">{club.desc}</p>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-[#0E2034] mb-2">Activities:</h4>
                <div className="flex flex-wrap gap-2">
                  {club.activities.map((activity, i) => (
                    <span key={i} className="px-3 py-1 bg-[#faf8f5] rounded-full text-sm text-[#4a4a4a]">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House System */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>House System</h2>
            <p>Building team spirit and healthy competition</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Ganga House', color: '#2196F3', desc: 'Blue house representing flow and purity' },
              { name: 'Yamuna House', color: '#4CAF50', desc: 'Green house representing growth' },
              { name: 'Kaveri House', color: '#FF9800', desc: 'Orange house representing energy' },
              { name: 'Narmada House', color: '#F44336', desc: 'Red house representing courage' },
            ].map((house, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center" style={{ borderTop: `4px solid ${house.color}` }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: house.color }}>
                  <span className="text-white font-bold text-xl">{house.name[0]}</span>
                </div>
                <h4 className="font-semibold mb-2">{house.name}</h4>
                <p className="text-sm text-[#4a4a4a]">{house.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4a4a4a] mt-8">
            Every student is assigned to a house upon admission. Houses compete in academics,
            sports, and cultural events throughout the year.
          </p>
        </div>
      </section>
    </>
  );
}
