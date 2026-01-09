import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#8B1538] to-[#6d1029]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
          Begin Your Journey With Us
        </h2>
        <p className="text-lg text-white/90 mb-10">
          Admissions are now open for the academic year 2025-26. Join the Manas International Public School family
          and give your child the gift of quality education.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href="/admissions/process"
            className="btn bg-white text-[#0E2034] border-white hover:bg-[#C4A35A] hover:text-white hover:border-[#C4A35A]"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="btn bg-transparent text-white border-white hover:bg-white hover:text-[#0E2034]"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
