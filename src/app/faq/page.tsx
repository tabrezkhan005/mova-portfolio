"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Search, Car, CreditCard, Shield,
  Clock, MapPin, FileText, Phone, ArrowRight,
  HelpCircle, MessageSquare
} from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ Categories
  const categories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'booking', name: 'Booking', icon: <Car className="w-5 h-5" /> },
    { id: 'payment', name: 'Payment', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'insurance', name: 'Insurance', icon: <Shield className="w-5 h-5" /> },
    { id: 'policies', name: 'Policies', icon: <FileText className="w-5 h-5" /> }
  ];

  // FAQ Data
  const faqData = [
    {
      id: 1,
      category: 'booking',
      question: "How do I book a vehicle with MOVA?",
      answer: "Booking with MOVA is simple! You can book through our website, mobile app, or by calling our 24/7 customer service. Just select your preferred vehicle, dates, and location, and we'll handle the rest. The entire process takes less than 5 minutes."
    },
    {
      id: 2,
      category: 'booking',
      question: "What documents do I need to rent a vehicle?",
      answer: "You'll need a valid driver's license (at least 1 year old), proof of identity (Aadhar card or passport), and a valid credit/debit card for payment. International travelers need to present an international driving permit along with their original license."
    },
    {
      id: 3,
      category: 'payment',
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI payments, net banking, and digital wallets like Paytm and Google Pay. Cash payments are also accepted at select locations."
    },
    {
      id: 4,
      category: 'payment',
      question: "Is a security deposit required?",
      answer: "Yes, a refundable security deposit is required at the time of pickup. The amount varies based on the vehicle category - typically ₹5,000 for hatchbacks, ₹10,000 for sedans/SUVs, and ₹20,000 for luxury vehicles. The deposit is fully refunded upon return of the vehicle in good condition."
    },
    {
      id: 5,
      category: 'insurance',
      question: "What is included in the rental price?",
      answer: "Our rental prices include comprehensive insurance, 24/7 roadside assistance, unlimited mileage, and basic maintenance. Additional services like GPS navigation, child seats, and additional drivers can be added for a small fee."
    },
    {
      id: 6,
      category: 'insurance',
      question: "What type of insurance coverage is provided?",
      answer: "All our rentals include basic collision damage waiver (CDW) and theft protection. You can upgrade to our premium protection plan which covers tire damage, windshield damage, and personal accident coverage for a nominal daily fee."
    },
    {
      id: 7,
      category: 'policies',
      question: "Can I cancel or modify my booking?",
      answer: "Yes! You can modify or cancel your booking up to 24 hours before your scheduled pickup time without any cancellation fees. Cancellations made within 24 hours may incur a fee of up to 25% of the booking value."
    },
    {
      id: 8,
      category: 'policies',
      question: "What happens if the vehicle breaks down?",
      answer: "All our vehicles are regularly maintained and come with 24/7 roadside assistance. If you experience any issues, simply call our emergency hotline. We'll arrange immediate assistance or provide a replacement vehicle at no extra cost."
    },
    {
      id: 9,
      category: 'booking',
      question: "Do you offer long-term rentals?",
      answer: "Yes! We offer flexible long-term rental options for businesses and individuals. Monthly rentals come with significant discounts (up to 30% off daily rates) and include free maintenance. Contact our sales team for customized packages."
    },
    {
      id: 10,
      category: 'policies',
      question: "What is your fuel policy?",
      answer: "We follow a 'same-to-same' fuel policy. You receive the vehicle with a full tank and are expected to return it with a full tank. If returned with less fuel, a refueling charge plus service fee will apply."
    },
    {
      id: 11,
      category: 'booking',
      question: "Can I pick up from one location and drop at another?",
      answer: "Yes, we offer one-way rentals between most major cities. One-way fees apply and vary based on the pickup and drop-off locations. You can check the exact fee during the booking process."
    },
    {
      id: 12,
      category: 'policies',
      question: "What is the minimum age requirement?",
      answer: "The minimum age to rent a vehicle is 21 years. Drivers under 25 may be subject to a young driver surcharge. For luxury vehicles, the minimum age is 25 years with at least 3 years of driving experience."
    }
  ];

  // Filter FAQs
  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#00252e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-[#00a8cc] text-sm font-medium mb-6"
            >
              Help Center
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            >
              Find answers to common questions about our car rental services,
              booking process, and policies.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="max-w-xl mx-auto relative"
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#00a8cc] outline-none shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-100 bg-gray-50 sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#00252e] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
              <p className="text-gray-500 mb-4">Try a different search term or category</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-6 py-2 bg-[#00252e] text-white rounded-lg hover:bg-[#003847] transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#00252e] pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00a8cc] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed pt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-[#00252e] mb-4"
            >
              Popular Topics
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600"
            >
              Quick links to help you find what you need
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Car className="w-8 h-8" />, title: "How to Book", link: "#" },
              { icon: <CreditCard className="w-8 h-8" />, title: "Payment Options", link: "#" },
              { icon: <Shield className="w-8 h-8" />, title: "Insurance Coverage", link: "#" },
              { icon: <MapPin className="w-8 h-8" />, title: "Pickup Locations", link: "#" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 mx-auto bg-[#00252e]/10 rounded-2xl flex items-center justify-center text-[#00252e] mb-4 group-hover:bg-[#00252e] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#00252e]">{item.title}</h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#00252e] rounded-3xl p-10 sm:p-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-300 mb-6">
                  Can&apos;t find the answer you&apos;re looking for? Our friendly support 
                  team is here to help you 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <button className="px-6 py-3 bg-[#00a8cc] hover:bg-[#00a8cc]/90 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Contact Us
                    </button>
                  </Link>
                  <a href="tel:+919000012345">
                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      +91 90000-12345
                    </button>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 bg-[#00a8cc]/20 rounded-full flex items-center justify-center">
                    <div className="w-28 h-28 bg-[#00a8cc]/30 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-12 h-12 text-[#00a8cc]" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#d4a853] rounded-full animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#00a8cc] rounded-full animate-pulse delay-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
