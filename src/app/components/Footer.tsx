'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

/**
 * Professional Footer Component for Mova Car Rental Website
 * Features: Glassmorphism design, comprehensive links, social media, newsletter signup
 * Layout: Logo & description | Quick Links | Services | Contact Info | Newsletter
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Glassmorphism Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-800/90 to-gray-700/85"></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-emerald-900/10 via-transparent to-teal-900/10"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Border with Gradient */}
        <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* Company Info Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Link href="/" className="flex items-center group">
                  <Image
                    src="/logo/mova.png"
                    alt="Mova Car Rental Logo"
                    width={160}
                    height={52}
                    className="h-14 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-xl filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                    }}
                  />
                </Link>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Experience premium car rental services with Mova. We provide reliable, comfortable, and affordable vehicles for all your transportation needs.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                  { name: 'Instagram', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM12 16.624c-2.563 0-4.637-2.074-4.637-4.637S9.437 7.35 12 7.35s4.637 2.074 4.637 4.637S14.563 16.624 12 16.624zm4.875-8.362c-.6 0-1.087-.487-1.087-1.087s.487-1.087 1.087-1.087 1.087.487 1.087 1.087-.487 1.087-1.087 1.087z' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="group p-3 rounded-xl bg-white/5 hover:bg-emerald-500/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 hover:scale-110"
                    aria-label={social.name}
                  >
                    <svg className="h-5 w-5 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 relative" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {['About Us', 'Our Fleet', 'Drive & Save', 'Contact', 'Terms of Service', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, '').replace('&', '')}`}
                      className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group text-sm"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 relative" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {['Daily Rentals', 'Weekly Rentals', 'Monthly Rentals', 'Airport Pickup', 'Corporate Fleet', 'Luxury Vehicles'].map((service) => (
                  <li key={service}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group text-sm"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      {service}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 relative" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Stay Updated
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              </h3>
              
              {/* Newsletter Signup */}
              <form onSubmit={handleNewsletterSubmit} className="mb-6">
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 text-sm"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 text-sm relative overflow-hidden group"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                    <span className="relative">
                      {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                    </span>
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-300" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      123 Rental Street<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    +1 (234) 567-8900
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@mova.com" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    info@mova.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                © 2025 Mova Car Rental. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-xs">
                <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Terms
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Privacy
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Cookies
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}