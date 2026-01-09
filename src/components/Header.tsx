'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: 'About',
      href: '/about',
      submenu: [
        { label: 'Mission & Vision', href: '/about/mission' },
        { label: 'Our History', href: '/about/history' },
        { label: 'Leadership', href: '/about/leadership' },
        { label: 'Campus Tour', href: '/about/campus' },
      ],
    },
    {
      label: 'Admissions',
      href: '/admissions',
      submenu: [
        { label: 'Admission Process', href: '/admissions/process' },
        { label: 'Fee Structure', href: '/admissions/fees' },
        { label: 'Scholarships', href: '/admissions/scholarships' },
        { label: 'Schedule a Visit', href: '/admissions/visit' },
      ],
    },
    {
      label: 'Academics',
      href: '/academics',
      submenu: [
        { label: 'Curriculum', href: '/academics/curriculum' },
        { label: 'Primary School', href: '/academics/primary' },
        { label: 'Middle School', href: '/academics/middle' },
        { label: 'Senior Secondary', href: '/academics/senior' },
      ],
    },
    {
      label: 'Programs',
      href: '/programs',
      submenu: [
        { label: 'Sports', href: '/programs/sports' },
        { label: 'Arts & Culture', href: '/programs/arts' },
        { label: 'Clubs & Activities', href: '/programs/clubs' },
        { label: 'Science Labs', href: '/programs/labs' },
      ],
    },
    { label: 'Community', href: '/community' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0E2034] py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-5">
            <Link href="/calendar" className="text-white/80 text-sm hover:text-white transition-colors">
              Calendar
            </Link>
            <Link href="/portal" className="text-white/80 text-sm hover:text-white transition-colors">
              Parent Portal
            </Link>
            <Link href="/careers" className="text-white/80 text-sm hover:text-white transition-colors">
              Careers
            </Link>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admissions/process"
              className="text-white text-sm font-semibold px-4 py-1.5 bg-[#C4A35A] rounded hover:bg-[#d4b36a] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/support"
              className="text-white text-sm font-semibold px-4 py-1.5 bg-[#C4A35A] rounded hover:bg-[#d4b36a] transition-colors"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0E2034] to-[#8B1538] rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#0E2034] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Manas International
              </h1>
              <span className="text-xs text-[#7F8588] uppercase tracking-wider">Public School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-1">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-3 text-[#1a1a1a] font-medium hover:text-[#8B1538] transition-colors"
                  >
                    {item.label}
                    {item.submenu && (
                      <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                  {item.submenu && (
                    <ul
                      className={`absolute top-full left-0 min-w-[220px] bg-white rounded-lg shadow-lg py-3 transition-all duration-200 ${
                        activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="block px-5 py-2.5 text-sm text-[#4a4a4a] hover:bg-[#f8f9fa] hover:text-[#8B1538] transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#0E2034] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              className="lg:hidden w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[300px] h-full bg-white p-6 transition-transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            &times;
          </button>
          <nav className="mt-16">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-3 text-lg font-medium border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8">
            <Link
              href="/admissions/process"
              className="btn btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
