import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E2034] to-[#1a3a5c] z-0"></div>

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E2034]/70 to-[#0E2034]/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-5">
        <p className="text-sm uppercase tracking-[4px] text-[#C4A35A] mb-5 animate-fade-in-up">
          Welcome to Manas International Public School
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Knowledge <em className="text-[#C4A35A] italic">and</em> Values
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Nurturing minds from Nursery through Grade 12
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/admissions/process" className="btn btn-primary">
            Apply for Admission
          </Link>
          <Link href="/about/campus" className="btn btn-secondary">
            Explore Our Campus
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center text-white/70 animate-bounce">
        <span className="block text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
