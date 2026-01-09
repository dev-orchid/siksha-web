'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function VisitPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    grade: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for scheduling a visit! We will contact you shortly to confirm.');
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/admissions">Admissions</Link>
          <span>/</span>
          <span>Schedule a Visit</span>
        </div>
        <h1>Schedule a Visit</h1>
        <p>Experience our campus firsthand</p>
      </section>

      {/* Visit Info */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl mb-6">Visit Our Campus</h2>
              <p className="text-[#4a4a4a] mb-6">
                We invite you to visit Manas International Public School and experience our vibrant
                learning environment firsthand. During your visit, you&apos;ll have the opportunity to:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Tour our state-of-the-art facilities',
                  'Meet with our principal and faculty',
                  'Observe classes in session',
                  'Learn about our curriculum and programs',
                  'Get answers to all your questions',
                  'Experience our school culture',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#4a4a4a]">
                    <svg className="w-5 h-5 text-[#8B1538]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-[#faf8f5] p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Visit Hours</h3>
                <ul className="space-y-2 text-[#4a4a4a]">
                  <li><strong>Monday - Friday:</strong> 9:00 AM - 3:00 PM</li>
                  <li><strong>Saturday:</strong> 9:00 AM - 12:00 PM</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
                <p className="mt-4 text-sm text-[#7F8588]">
                  * Prior appointment is required for campus visits
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-6">Book Your Visit</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                  <label htmlFor="parentName">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="childName">Child&apos;s Name *</label>
                    <input
                      type="text"
                      id="childName"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="grade">Grade Applying For *</label>
                    <select
                      id="grade"
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    >
                      <option value="">Select Grade</option>
                      <option value="nursery">Nursery</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
                        <option key={grade} value={`class-${grade}`}>Class {grade}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="preferredDate">Preferred Date *</label>
                    <input
                      type="date"
                      id="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Time *</label>
                    <select
                      id="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    >
                      <option value="">Select Time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Any specific questions or requests?</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Schedule Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>How to Reach Us</h2>
            <p>Find us easily with these directions</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl mb-4">Our Address</h3>
              <p className="text-[#4a4a4a] mb-4">
                <strong>Manas International Public School</strong><br />
                Dakshini, P.O- Dharampur,<br />
                Dist - Jehanabad (Bihar)-804417
              </p>
              <p className="text-[#4a4a4a]">
                <strong>Phone:</strong> +91 9876 543 210<br />
                <strong>Email:</strong> info@manasinternational.edu.in
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl mb-4">Directions</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>• From Jehanabad Bus Stand: 15 km via NH-83</li>
                <li>• From Gaya Junction: 45 km via NH-83</li>
                <li>• From Patna Junction: 60 km via NH-83</li>
                <li>• Nearest Railway Station: Jehanabad (15 km)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
