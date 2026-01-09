'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    content: "Manas International Public School has been instrumental in shaping my child's future. The teachers are dedicated and the environment is nurturing. We couldn't have asked for a better school.",
    author: 'Priya Sharma',
    role: 'Parent of Grade 8 Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    content: "The school's emphasis on both academics and extracurricular activities helped me develop into a well-rounded individual. I'm now pursuing engineering at IIT Delhi.",
    author: 'Rahul Verma',
    role: 'Alumni, Batch of 2022',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    content: 'I love my school! The teachers make learning fun, and I have made so many friends. My favorite part is the science lab where we do exciting experiments.',
    author: 'Ananya Patel',
    role: 'Grade 6 Student',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <h2>Voices From Our Community</h2>
          <p>Hear from our students, parents, and alumni</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-10 shadow-lg transition-all duration-500 ${
                activeIndex === index ? 'block animate-fade-in-up' : 'hidden'
              }`}
            >
              <div className="mb-8">
                <svg className="w-12 h-12 text-[#C4A35A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-lg text-[#4a4a4a] italic leading-relaxed mt-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <span className="text-sm text-[#7F8588]">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full border-2 border-[#0E2034] transition-colors ${
                  activeIndex === index ? 'bg-[#0E2034]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
