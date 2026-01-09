'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 2500, label: 'Students Enrolled' },
  { number: 150, label: 'Expert Faculty' },
  { number: 25, label: 'Years of Excellence' },
  { number: 98, suffix: '%', label: 'Board Exam Pass Rate' },
  { number: 50, suffix: '+', label: 'Co-curricular Activities' },
  { number: 10, label: 'Acre Campus' },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const increment = stat.number / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.ceil(current);
            return newCounts;
          });
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[#0E2034] to-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            By The Numbers
          </h2>
          <p className="text-white/80">Our commitment to excellence reflected in our achievements</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-5">
              <div className="text-4xl md:text-5xl font-bold text-[#C4A35A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {counts[index]}
                {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
              </div>
              <div className="text-sm mt-3 uppercase tracking-wider text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
