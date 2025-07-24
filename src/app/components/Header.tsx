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
  const [isPassedHero, setIsPassedHero] = useState(false);

  // Handle scroll event for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      // Glass effect starts at 50px for visual feedback
      setIsScrolled(window.scrollY > 50);

      // Text color changes only after passing hero section (100vh)
      const heroSectionHeight = window.innerHeight;
      setIsPassedHero(window.scrollY > heroSectionHeight - 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 bg-transparent">
      {/* Dynamic Background Container */}
      <div className="relative w-full h-full">
        {/* Grayish Glass Effect Background - Only show when scrolled */}
        {isScrolled && (
          <>
            {/* Primary Gray Glass Layer - Main backdrop blur with gray transparency */}
            <div className="absolute inset-0 backdrop-blur-xl bg-gray-900/15 border-b border-gray-300/30 shadow-2xl"></div>

            {/* Secondary Gray Glass Layer - Enhanced depth with gray gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 via-gray-700/8 to-gray-800/10"></div>

            {/* Tertiary Gray Glass Layer - Subtle gray tint for professional appearance */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100/15 via-transparent to-transparent"></div>
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
                className={`font-medium text-lg tracking-wide transition-all duration-300 relative group ${
                  isPassedHero
                    ? 'text-gray-800 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-300'
                }`}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
              >
                About Us
                {/* Professional underline animation */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  isPassedHero
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                    : 'bg-gradient-to-r from-emerald-300 to-teal-300'
                }`}></span>
              </Link>
              <Link
                href="/fleet"
                className={`font-medium text-lg tracking-wide transition-all duration-300 relative group ${
                  isPassedHero
                    ? 'text-gray-800 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-300'
                }`}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
              >
                Our Fleet
                {/* Professional underline animation */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  isPassedHero
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                    : 'bg-gradient-to-r from-emerald-300 to-teal-300'
                }`}></span>
              </Link>
              <Link
                href="/drivensave"
                className={`font-medium text-lg tracking-wide transition-all duration-300 relative group ${
                  isPassedHero
                    ? 'text-gray-800 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-300'
                }`}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
              >
                Drive & Save
                {/* Professional underline animation */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  isPassedHero
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                    : 'bg-gradient-to-r from-emerald-300 to-teal-300'
                }`}></span>
              </Link>
              <Link
                href="/contact"
                className={`font-medium text-lg tracking-wide transition-all duration-300 relative group ${
                  isPassedHero
                    ? 'text-gray-800 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-300'
                }`}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
              >
                Contact
                {/* Professional underline animation */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  isPassedHero
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                    : 'bg-gradient-to-r from-emerald-300 to-teal-300'
                }`}></span>
              </Link>
            </nav>

            {/* MOVA Logo-Inspired Login/Signup Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Login Button - Clean minimalist design matching logo */}
              <button
                className={`px-6 py-2.5 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 relative group ${
                  isPassedHero
                    ? 'text-gray-800 hover:text-emerald-600 hover:bg-gray-50/50'
                    : 'text-white hover:text-emerald-300 hover:bg-white/10'
                } backdrop-blur-sm border border-transparent hover:border-emerald-400/30`}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}
              >
                Login
                {/* Subtle underline effect matching logo aesthetic */}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </button>

              {/* Signup Button - Premium design with logo's green accent */}
              <button
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 relative group overflow-hidden ${
                  isPassedHero
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 shadow-xl hover:shadow-emerald-400/30'
                } hover:scale-105 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-300/40`}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}
              >
                {/* Shimmer effect matching logo's modern aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                <span className="relative">Sign Up</span>
              </button>
            </div>

            {/* Professional Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`group p-3 rounded-xl focus:outline-none transition-all duration-300 ${
                  isPassedHero
                    ? 'text-gray-800 hover:text-emerald-600 hover:bg-gray-100/30 backdrop-blur-sm border border-gray-300/20 hover:border-gray-400/40 shadow-lg'
                    : 'text-white hover:text-emerald-300 hover:bg-gray-800/20 backdrop-blur-sm border border-gray-400/30 hover:border-gray-300/50 shadow-lg'
                }`}
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
              {/* Mobile Menu Gray Glass Layers */}
              <div className="absolute inset-0 backdrop-blur-xl bg-gray-900/20 border-b border-gray-300/40 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/12 to-gray-700/8"></div>

              <div className="relative px-6 py-6 space-y-4">
                {/* Mobile Navigation Links */}
                <Link
                  href="/about"
                  className={`block px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-gray-100/25 backdrop-blur-sm border border-transparent hover:border-gray-300/30 ${
                    isPassedHero
                      ? 'text-gray-800 hover:text-emerald-600'
                      : 'text-white hover:text-emerald-300'
                  }`}
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/fleet"
                  className={`block px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-gray-100/25 backdrop-blur-sm border border-transparent hover:border-gray-300/30 ${
                    isPassedHero
                      ? 'text-gray-800 hover:text-emerald-600'
                      : 'text-white hover:text-emerald-300'
                  }`}
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Fleet
                </Link>
                <Link
                  href="/drivensave"
                  className={`block px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-gray-100/25 backdrop-blur-sm border border-transparent hover:border-gray-300/30 ${
                    isPassedHero
                      ? 'text-gray-800 hover:text-emerald-600'
                      : 'text-white hover:text-emerald-300'
                  }`}
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drive & Save
                </Link>
                <Link
                  href="/contact"
                  className={`block px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 hover:bg-gray-100/25 backdrop-blur-sm border border-transparent hover:border-gray-300/30 ${
                    isPassedHero
                      ? 'text-gray-800 hover:text-emerald-600'
                      : 'text-white hover:text-emerald-300'
                  }`}
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile MOVA Logo-Inspired Login/Signup Buttons */}
                <div className="flex flex-col space-y-4 pt-4 border-t border-gray-300/30">
                  {/* Mobile Login Button */}
                  <button
                    className={`w-full px-6 py-3 rounded-xl font-medium text-base tracking-wide transition-all duration-300 relative group ${
                      isPassedHero
                        ? 'text-gray-800 hover:text-emerald-600 bg-white/10 hover:bg-gray-50/30'
                        : 'text-white hover:text-emerald-300 bg-white/10 hover:bg-white/20'
                    } backdrop-blur-sm border border-transparent hover:border-emerald-400/30`}
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300 group-hover:w-1/2"></span>
                  </button>

                  {/* Mobile Signup Button */}
                  <button
                    className={`w-full px-6 py-3 rounded-xl font-semibold text-base tracking-wide transition-all duration-300 relative group overflow-hidden ${
                      isPassedHero
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-emerald-500/25'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 shadow-xl hover:shadow-emerald-400/30'
                    } hover:scale-105 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-300/40`}
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                    <span className="relative">Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
