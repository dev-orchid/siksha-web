import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata = {
  title: 'Fee Structure - {SITE_CONFIG.name}',
  description: 'View the complete fee structure for all classes at {SITE_CONFIG.name}.',
};

export default function FeesPage() {
  const feeStructure = [
    { class: 'Nursery', admission: '5,000', annual: '18,000', monthly: '1,500' },
    { class: 'LKG - UKG', admission: '5,000', annual: '20,000', monthly: '1,800' },
    { class: 'Class 1-2', admission: '6,000', annual: '22,000', monthly: '2,000' },
    { class: 'Class 3-5', admission: '6,000', annual: '24,000', monthly: '2,200' },
    { class: 'Class 6-8', admission: '8,000', annual: '28,000', monthly: '2,500' },
    { class: 'Class 9-10', admission: '10,000', annual: '32,000', monthly: '3,000' },
    { class: 'Class 11-12 (Science)', admission: '12,000', annual: '38,000', monthly: '3,500' },
    { class: 'Class 11-12 (Commerce/Arts)', admission: '10,000', annual: '32,000', monthly: '3,000' },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/admissions">Admissions</Link>
          <span>/</span>
          <span>Fee Structure</span>
        </div>
        <h1>Fee Structure</h1>
        <p>Transparent and affordable education for all</p>
      </section>

      {/* Fee Table */}
      <section className="content-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="section-header">
            <h2>Fee Structure 2025-26</h2>
            <p>All amounts are in Indian Rupees (INR)</p>
          </div>
          <div className="table-wrapper bg-white rounded-lg shadow-lg overflow-hidden">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Admission Fee (One-time)</th>
                  <th>Annual Fee</th>
                  <th>Monthly Tuition</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index}>
                    <td className="font-medium">{fee.class}</td>
                    <td>₹{fee.admission}</td>
                    <td>₹{fee.annual}</td>
                    <td>₹{fee.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#4a4a4a] mt-4 text-center">
            * Fees are subject to revision. Please contact the school office for the latest information.
          </p>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="content-section alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Additional Fees</h2>
            <p>Optional services and their charges</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Transport</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>0-5 km: ₹800/month</li>
                <li>5-10 km: ₹1,000/month</li>
                <li>10-15 km: ₹1,200/month</li>
                <li>15+ km: ₹1,500/month</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Other Charges</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>Exam Fee: ₹500/term</li>
                <li>Computer Lab: ₹300/month</li>
                <li>Library Fee: ₹200/year</li>
                <li>Activity Fee: ₹500/year</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Uniform & Books</h3>
              <ul className="space-y-2 text-[#4a4a4a]">
                <li>Uniform Set: ₹2,000-3,000</li>
                <li>Books (Primary): ₹2,500-3,000</li>
                <li>Books (Middle): ₹3,000-4,000</li>
                <li>Books (Senior): ₹4,000-5,000</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="content-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <h2>Payment Options</h2>
            <p>Flexible payment methods for your convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💳', title: 'Online Payment', desc: 'Pay via debit/credit card or net banking' },
              { icon: '🏦', title: 'Bank Transfer', desc: 'Direct transfer to school account' },
              { icon: '📱', title: 'UPI', desc: 'Quick payment via UPI apps' },
              { icon: '📝', title: 'Cheque/DD', desc: 'In favor of MIPS, Jehanabad' },
            ].map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <span className="text-4xl mb-3 block">{option.icon}</span>
                <h4 className="font-semibold mb-2">{option.title}</h4>
                <p className="text-sm text-[#4a4a4a]">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className="content-section alt">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-header">
            <h2>Fee Concessions</h2>
            <p>We offer various discounts to support families</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {[
                { title: 'Sibling Discount', desc: '10% discount on tuition fee for second child, 15% for third child' },
                { title: 'Early Bird Discount', desc: '10% discount on admission fee for applications before February 28' },
                { title: 'Merit Scholarship', desc: 'Up to 50% fee waiver for students with exceptional academic performance' },
                { title: 'Staff Children', desc: '50% concession on tuition fee for children of school employees' },
                { title: 'Single Parent', desc: '15% concession for children of single parents/widows' },
              ].map((discount, index) => (
                <li key={index} className="flex gap-4 pb-4 border-b last:border-0">
                  <div className="w-10 h-10 bg-[#C4A35A] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">{discount.title}</h4>
                    <p className="text-[#4a4a4a]">{discount.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
