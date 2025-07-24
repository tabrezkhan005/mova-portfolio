'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

/**
 * Professional Header Component for Mova Car Rental Website
 * Features: Glassmorphism design, responsive navigation, professional buttons
 * Layout: Logo (left) -> Navigation (center) -> Login/Signup (right)
 */
export default function Header() {
  // State management for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/8 border-b border-white/15 shadow-2xl">
      {/* Glassmorphism gradient overlay for enhanced visual depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Left positioned for professional layout */}
          <div className="flex-shrink-0 z-10">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo/movalogo.png"
                alt="Mova Car Rental Logo"
                width={140}
                height={45}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Professional Desktop Navigation - Center positioned */}
          <nav className="hidden md:flex items-center space-x-10 z-10">
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 font-semibold text-lg tracking-wide transition-all duration-300 relative group"
            >
              About Us
              {/* Professional underline animation */}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link
              href="/fleet"
              className="text-gray-800 hover:text-blue-600 font-semibold text-lg tracking-wide transition-all duration-300 relative group"
            >
              Our Fleet
              {/* Professional underline animation */}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link
              href="/drivensave"
              className="text-gray-800 hover:text-blue-600 font-semibold text-lg tracking-wide transition-all duration-300 relative group"
            >
              Drive & Save
              {/* Professional underline animation */}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-blue-600 font-semibold text-lg tracking-wide transition-all duration-300 relative group"
            >
              Contact
              {/* Professional underline animation */}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

                    {/* Professional Login/Signup Buttons with Interactive Hover Animation */}
          <div className="hidden md:flex items-center space-x-6 z-10">
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
          <div className="md:hidden z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group p-3 rounded-xl text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-all duration-300 hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30"
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

        {/* Professional Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 backdrop-blur-lg bg-white/12 border-b border-white/20 shadow-2xl">
            {/* Enhanced glassmorphism overlay for mobile menu */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5"></div>

            <div className="relative px-6 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <Link
                href="/about"
                className="block px-4 py-3 text-gray-800 hover:text-blue-600 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/fleet"
                className="block px-4 py-3 text-gray-800 hover:text-blue-600 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Fleet
              </Link>
              <Link
                href="/drivensave"
                className="block px-4 py-3 text-gray-800 hover:text-blue-600 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Drive & Save
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-800 hover:text-blue-600 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Login/Signup Buttons with Interactive Hover Animation */}
              <div className="flex flex-col space-y-4 pt-4 border-t border-white/20">
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
    </header>
  );
}
