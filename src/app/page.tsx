'use client';

import Image from 'next/image';
import Link from 'next/link';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

/**
 * MOVA Car Rental - Demo Landing Page
 * Features: Glass morphism design, responsive layout, compelling content
 * Sections: Hero, Features, Fleet Preview, CTA, Testimonials
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium car rental experience */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient with glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-700/85 to-purple-800/90"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>

        {/* Animated background patterns for visual depth */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300/10 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Hero Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Drive Your
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Perfect Ride
            </span>
          </h1>

          {/* Hero Subheading */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience premium car rental with MOVA. From luxury sedans to rugged SUVs,
            find your ideal vehicle with competitive rates and exceptional service.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <InteractiveHoverButton
              variant="signup"
              className="px-12 py-4 text-lg font-bold tracking-wide"
            >
              Book Your Ride
            </InteractiveHoverButton>
            <InteractiveHoverButton
              variant="login"
              className="px-12 py-4 text-lg font-bold tracking-wide text-white border-white/30 hover:border-white/50"
            >
              View Our Fleet
            </InteractiveHoverButton>
          </div>

          {/* Hero Statistics - Trust indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Premium Vehicles</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section - Why choose MOVA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose MOVA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional car rental experiences with premium vehicles,
              competitive pricing, and unmatched customer service.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Premium Fleet */}
            <div className="glass rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Fleet</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from our extensive collection of luxury sedans, SUVs, sports cars,
                and eco-friendly vehicles, all meticulously maintained.
              </p>
            </div>

            {/* Feature 2: Best Prices */}
            <div className="glass rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy competitive rates with no hidden fees. Our Drive & Save program
                offers exclusive discounts for longer rentals.
              </p>
            </div>

            {/* Feature 3: 24/7 Support */}
            <div className="glass rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196l2.196 2.196M21.804 12l-2.196 2.196M12 21.804l-2.196-2.196M2.196 12l2.196-2.196" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated customer support team is available round-the-clock
                to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From economy cars to luxury vehicles, we have the perfect ride for every occasion and budget.
            </p>
            <Link href="/fleet">
              <InteractiveHoverButton variant="signup" className="px-8 py-3">
                View Full Fleet
              </InteractiveHoverButton>
            </Link>
          </div>

          {/* Fleet Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Economy Category */}
            <div className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Economy</h3>
              <p className="text-gray-600 text-sm">Starting at $29/day</p>
            </div>

            {/* Luxury Category */}
            <div className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white font-bold">L</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury</h3>
              <p className="text-gray-600 text-sm">Starting at $89/day</p>
            </div>

            {/* SUV Category */}
            <div className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SUV</h3>
              <p className="text-gray-600 text-sm">Starting at $59/day</p>
            </div>

            {/* Sports Category */}
            <div className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sports</h3>
              <p className="text-gray-600 text-sm">Starting at $149/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust MOVA for their car rental needs.
            Book now and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <InteractiveHoverButton
              variant="signup"
              className="px-12 py-4 text-lg font-bold bg-white text-blue-600 hover:bg-gray-100"
            >
              Book Now
            </InteractiveHoverButton>
            <Link href="/contact">
              <InteractiveHoverButton
                variant="login"
                className="px-12 py-4 text-lg font-bold text-white border-white/30 hover:border-white/50"
              >
                Contact Us
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/logo/movalogo.png"
                  alt="MOVA Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                MOVA is your trusted partner for premium car rental services.
                We provide exceptional vehicles and customer experiences across the nation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link href="/fleet" className="block text-gray-400 hover:text-white transition-colors">Our Fleet</Link>
                <Link href="/drivensave" className="block text-gray-400 hover:text-white transition-colors">Drive & Save</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 1-800-MOVA-CAR</p>
                <p>✉️ info@mova.com</p>
                <p>📍 123 Rental Ave, City, ST 12345</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MOVA Car Rental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
