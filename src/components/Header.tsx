'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * Professional Header Component for Mova Car Rental Website
 * Features: Dynamic glassmorphism design, responsive navigation, professional buttons
 * Layout: Logo (left) -> Navigation (center) -> Login/Signup (right)
 * Dynamic Effect: Transparent when at top, glass effect when scrolling
 */
export default function Header() {
  // State management for mobile menu toggle and scroll detection
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      // Glass effect starts at 50px for visual feedback
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 bg-transparent">
      {/* Dynamic Background Container */}
      <div className="relative w-full h-full">
        {/* Glass Effect Background - Only show when scrolled */}
        {isScrolled && (
          <>
            {/* Primary Glass Layer - Main backdrop blur */}
            <div className="absolute inset-0 backdrop-blur-xl bg-[#00252e]/80 border-b border-[#00a8cc]/20 shadow-2xl"></div>

            {/* Secondary Glass Layer - Enhanced depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00252e]/20 via-[#003847]/10 to-[#00252e]/20"></div>

            {/* Tertiary Glass Layer - Subtle tint for professional appearance */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>
          </>
        )}

        {/* Content Container with proper z-index */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full py-4">
            {/* Enhanced Logo Section - Left positioned for professional layout */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo/mova.png"
                  alt="Mova Car Rental Logo"
                  width={180}
                  height={58}
                  className="h-16 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-xl filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125"
                  priority
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))'
                  }}
                />
              </Link>
            </div>

            {/* Professional Desktop Navigation - Center positioned */}
            <nav className="hidden md:flex items-center space-x-10">
              <Link
                href="/about"
                className="font-medium text-lg tracking-wide transition-all duration-300 relative group text-white hover:text-[#00a8cc]"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
              >
                About Us
                {/* Professional underline animation */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full bg-[#00a8cc]"></span>
              </Link>
              <Link
                href="/fleet"
                className="font-medium text-lg tracking-wide transition-all duration-300 relative group text-white hover:text-[#00a8cc]"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
              >
                Our Fleet
                {/* Professional underline animation */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full bg-[#00a8cc]"></span>
              </Link>
              <Link
                href="/drivensave"
                className="font-medium text-lg tracking-wide transition-all duration-300 relative group text-white hover:text-[#00a8cc]"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
              >
                Drive & Save
                {/* Professional underline animation */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full bg-[#00a8cc]"></span>
              </Link>
              <Link
                href="/contact"
                className="font-medium text-lg tracking-wide transition-all duration-300 relative group text-white hover:text-[#00a8cc]"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
              >
                Contact
                {/* Professional underline animation */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full bg-[#00a8cc]"></span>
              </Link>
            </nav>

            {/* MOVA Logo-Inspired Login/Signup Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Login Button - Clean minimalist design matching logo */}
              <Link
                href="/auth"
                className="px-6 py-2.5 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 relative group text-white hover:text-[#00a8cc] hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-[#00a8cc]/30"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}
              >
                Login
                {/* Subtle underline effect matching logo aesthetic */}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#00a8cc] rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </Link>

              {/* Signup Button - Premium design with accent color */}
              <Link
                href="/auth"
                className="px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 relative group overflow-hidden bg-[#00a8cc] text-white hover:bg-[#00a8cc]/90 shadow-lg hover:shadow-[#00a8cc]/25 hover:scale-105 backdrop-blur-sm border border-[#00a8cc]/20 hover:border-[#00a8cc]/40"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}
              >
                {/* Shimmer effect matching logo's modern aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                <span className="relative">Sign Up</span>
              </Link>
            </div>

            {/* Professional Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group p-3 rounded-xl focus:outline-none transition-all duration-300 text-white hover:text-[#00a8cc] hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#00a8cc]/40 shadow-lg"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Professional Mobile Navigation Menu with Enhanced Glass Effect */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0">
              {/* Mobile Menu Glass Layers */}
              <div className="absolute inset-0 backdrop-blur-xl bg-[#00252e]/90 border-b border-[#00a8cc]/20 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#003847]/30 to-[#00252e]/50"></div>

              <div className="relative px-6 py-6 space-y-4">
                {/* Mobile Navigation Links */}
                <Link
                  href="/about"
                  className="block px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-[#00a8cc]/30 text-white hover:text-[#00a8cc]"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/fleet"
                  className="block px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-[#00a8cc]/30 text-white hover:text-[#00a8cc]"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Fleet
                </Link>
                <Link
                  href="/drivensave"
                  className="block px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-[#00a8cc]/30 text-white hover:text-[#00a8cc]"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drive & Save
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-[#00a8cc]/30 text-white hover:text-[#00a8cc]"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile MOVA Logo-Inspired Login/Signup Buttons */}
                <div className="flex flex-col space-y-4 pt-4 border-t border-white/20">
                  {/* Mobile Login Button */}
                  <Link
                    href="/auth"
                    className="w-full px-6 py-3 rounded-xl font-medium text-base tracking-wide transition-all duration-300 relative group text-white hover:text-[#00a8cc] bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-[#00a8cc]/30"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#00a8cc] rounded-full transition-all duration-300 group-hover:w-1/2"></span>
                  </Link>

                  {/* Mobile Signup Button */}
                  <Link
                    href="/auth"
                    className="w-full px-6 py-3 rounded-xl font-semibold text-base tracking-wide transition-all duration-300 relative group overflow-hidden bg-[#00a8cc] text-white hover:bg-[#00a8cc]/90 shadow-lg hover:shadow-[#00a8cc]/25 hover:scale-105 backdrop-blur-sm border border-[#00a8cc]/20 hover:border-[#00a8cc]/40"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                    <span className="relative">Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
