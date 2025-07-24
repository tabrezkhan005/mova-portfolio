'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

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
            {/* Primary Glass Layer - Main backdrop blur and transparency */}
            <div className="absolute inset-0 backdrop-blur-xl bg-white/25 border-b border-white/30 shadow-2xl"></div>

            {/* Secondary Glass Layer - Enhanced depth and gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/15 to-white/20"></div>

            {/* Tertiary Glass Layer - Subtle color tint for brand integration */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/10 via-transparent to-transparent"></div>
          </>
        )}

        {/* Content Container with proper z-index */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full py-4">
            {/* Logo Section - Left positioned for professional layout */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo/mova.png"
                  alt="Mova Car Rental Logo"
                  width={140}
                  height={45}
                  className="h-19 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
                  priority
                />
              </Link>
            </div>

            {/* Professional Desktop Navigation - Center positioned */}
            <nav className="hidden md:flex items-center space-x-10">
              <Link
                href="/about"
                className={`font-semibold text-lg tracking-wide transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                About Us
                {/* Professional underline animation */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'bg-gradient-to-r from-white to-blue-200'
                }`}></span>
              </Link>
              <Link
                href="/fleet"
                className={`font-semibold text-lg tracking-wide transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Our Fleet
                {/* Professional underline animation */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'bg-gradient-to-r from-white to-blue-200'
                }`}></span>
              </Link>
              <Link
                href="/drivensave"
                className={`font-semibold text-lg tracking-wide transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Drive & Save
                {/* Professional underline animation */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'bg-gradient-to-r from-white to-blue-200'
                }`}></span>
              </Link>
              <Link
                href="/contact"
                className={`font-semibold text-lg tracking-wide transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Contact
                {/* Professional underline animation */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'bg-gradient-to-r from-white to-blue-200'
                }`}></span>
              </Link>
            </nav>

            {/* Professional Login/Signup Buttons with Interactive Hover Animation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Login Button - Subtle interactive hover design */}
              <InteractiveHoverButton variant="login">
                Login
              </InteractiveHoverButton>

              {/* Signup Button - Premium interactive hover design */}
              <InteractiveHoverButton variant="signup">
                Sign Up
              </InteractiveHoverButton>
            </div>

            {/* Professional Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`group p-3 rounded-xl focus:outline-none transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-blue-600 hover:bg-white/30 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-lg'
                    : 'text-white hover:text-blue-200 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 shadow-lg'
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
              {/* Mobile Menu Glass Layers */}
              <div className="absolute inset-0 backdrop-blur-xl bg-white/30 border-b border-white/40 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-white/15"></div>

              <div className="relative px-6 py-6 space-y-4">
                {/* Mobile Navigation Links */}
                <Link
                  href="/about"
                  className={`block px-4 py-3 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/30 backdrop-blur-sm border border-transparent hover:border-white/30 ${
                    isScrolled
                      ? 'text-gray-800 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/fleet"
                  className={`block px-4 py-3 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/30 backdrop-blur-sm border border-transparent hover:border-white/30 ${
                    isScrolled
                      ? 'text-gray-800 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Fleet
                </Link>
                <Link
                  href="/drivensave"
                  className={`block px-4 py-3 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/30 backdrop-blur-sm border border-transparent hover:border-white/30 ${
                    isScrolled
                      ? 'text-gray-800 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drive & Save
                </Link>
                <Link
                  href="/contact"
                  className={`block px-4 py-3 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/30 backdrop-blur-sm border border-transparent hover:border-white/30 ${
                    isScrolled
                      ? 'text-gray-800 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Login/Signup Buttons with Interactive Hover Animation */}
                <div className="flex flex-col space-y-4 pt-4 border-t border-white/30">
                  <InteractiveHoverButton variant="login" className="w-full">
                    Login
                  </InteractiveHoverButton>
                  <InteractiveHoverButton variant="signup" className="w-full">
                    Sign Up
                  </InteractiveHoverButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
