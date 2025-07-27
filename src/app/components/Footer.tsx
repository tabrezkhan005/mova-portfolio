'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Enhanced Premium Footer Component for Mova Car Rental
 * Features modern design elements matching the MOVA brand identity
 * Fixed: All navigation links and social media links with consistent hover effects
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  // Define navigation links with proper paths
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Drive & Save', href: '/offers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' }
  ];

  const services = [
    { name: 'Daily Rentals', href: '/rentals/daily' },
    { name: 'Weekly Rentals', href: '/rentals/weekly' },
    { name: 'Monthly Rentals', href: '/rentals/monthly' },
    { name: 'Airport Pickup', href: '/services/airport' },
    { name: 'Corporate Fleet', href: '/services/corporate' },
    { name: 'Luxury Vehicles', href: '/fleet/luxury' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/movacarrental',
      icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
      hoverColors: 'hover:from-blue-600 hover:to-blue-700'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/movacarrental',
      icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
      hoverColors: 'hover:from-sky-500 hover:to-sky-600'
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/movacarrental',
      icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
      hoverColors: 'hover:from-pink-500 hover:to-purple-600'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/movacarrental',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      hoverColors: 'hover:from-blue-700 hover:to-blue-800'
    }
  ];

  const footerLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 text-white">
      {/* Premium Geometric Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="footer-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
            
            {/* Company Info Section */}
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Link href="/" className="inline-block">
                  <div className="relative group">
                    <Image
                      src="/logo/mova.png"
                      alt="MOVA Car Rental"
                      width={180}
                      height={60}
                      className="transition-all duration-300 group-hover:scale-105"
                      style={{
                        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                      }}
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-300 mb-8 max-w-md leading-relaxed"
              >
                Premium mobility solutions for modern travelers. Experience exceptional service, pristine vehicles, and innovative technology with every rental.
              </motion.p>
              
              {/* Enhanced Social Media Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 ${social.hoverColors} transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg 
                      className="h-5 w-5 text-gray-300 group-hover:text-white transition-all duration-300 relative z-10" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path d={social.icon} />
                    </svg>
                    
                    {/* Enhanced hover effects */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-current/20 via-transparent to-current/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white font-medium text-lg mb-5 relative inline-block"
              >
                Quick Links
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              </motion.h3>
              
              <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-all duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 mr-2 transition-all duration-200"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white font-medium text-lg mb-5 relative inline-block"
              >
                Services
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              </motion.h3>
              
              <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                {services.map((service, index) => (
                  <motion.li 
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-emerald-400 transition-all duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 mr-2 transition-all duration-200"></span>
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white font-medium text-lg mb-5 relative inline-block"
              >
                Contact
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              </motion.h3>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 p-1.5 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg mr-3">
                    <svg className="h-4 w-4 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      123 Rental Street<br />
                      City, State 12345
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-center"
                >
                  <div className="flex-shrink-0 p-1.5 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg mr-3">
                    <svg className="h-4 w-4 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                    +1 (234) 567-8900
                  </a>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-center"
                >
                  <div className="flex-shrink-0 p-1.5 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg mr-3">
                    <svg className="h-4 w-4 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <a href="mailto:info@mova.com" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                    info@mova.com
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Newsletter & Subscribe */}
            <div className="lg:col-span-2">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white font-medium text-lg mb-5 relative inline-block"
              >
                Newsletter
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              </motion.h3>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-300 mb-4">
                  Subscribe for exclusive offers and updates
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 pr-10"
                      required
                    />
                    <AnimatePresence>
                      {isSubscribed && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-400"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                    <span className="relative">
                      {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                    </span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="mt-16 border-t border-gray-800 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mr-3 shadow-lg shadow-emerald-700/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">
                  © {year} MOVA Car Rental. All rights reserved.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs"
              >
                {footerLinks.map((link, index) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}