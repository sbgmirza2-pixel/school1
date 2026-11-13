'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-[#12151C] no-underline font-extrabold text-lg tracking-tight">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shrink-0">
            <Image 
              src="/logo.jpg" 
              alt="DevNixEdu Logo" 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain" 
            />
          </div>
          <span className="text-xl font-extrabold text-[#12151C]">DevNixEdu</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link href="/" className="hover:text-[#0077F5] transition">Home</Link>
          <Link href="/about-us" className="hover:text-[#0077F5] transition">About Us</Link>
          <Link href="/features" className="hover:text-[#0077F5] transition">Features</Link>
          <Link href="/pricing" className="hover:text-[#0077F5] transition">Pricing</Link>
          <Link href="/blog" className="hover:text-[#0077F5] transition">Blogs</Link>
          <Link href="/contact-us" className="hover:text-[#0077F5] transition">Contact Us</Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="/login" 
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#12151C] hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link 
            href="/contact-us" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0077F5] hover:bg-blue-600 shadow-md shadow-[#0077F5]/20 transition-all"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 bg-transparent border-0 cursor-pointer focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-xl">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-bold text-sm text-gray-700 hover:text-[#0077F5] py-2 no-underline border-b border-gray-50"
          >
            Home
          </Link>
          <Link 
            href="/about-us" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-bold text-sm text-gray-700 hover:text-[#0077F5] py-2 no-underline border-b border-gray-50"
          >
            About Us
          </Link>
          <Link 
            href="/features" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-bold text-sm text-gray-700 hover:text-[#0077F5] py-2 no-underline border-b border-gray-50"
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-bold text-sm text-gray-700 hover:text-[#0077F5] py-2 no-underline border-b border-gray-50"
          >
            Pricing
          </Link>
          <Link 
            href="/blog" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-bold text-sm text-gray-700 hover:text-[#0077F5] py-2 no-underline border-b border-gray-50"
          >
            Blogs
          </Link>
          <Link 
            href="/contact-us" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-bold text-sm text-gray-700 hover:text-[#0077F5] py-2 no-underline border-b border-gray-50"
          >
            Contact Us
          </Link>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link 
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold text-sm bg-gray-100 text-gray-800"
            >
              Login
            </Link>
            <Link 
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold text-sm bg-[#0077F5] text-white shadow-md shadow-[#0077F5]/20"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}