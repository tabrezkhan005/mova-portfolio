"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Cursor from '../../components/Cursor'

// FAQ data
const faqData = [
  {
    question: "How do I book a vehicle with MOVA?",
    answer: "Booking with MOVA is simple! You can book through our website, mobile app, or by calling our 24/7 customer service. Just select your preferred vehicle, dates, and location, and we'll handle the rest."
  },
  {
    question: "What documents do I need to rent a vehicle?",
    answer: "You'll need a valid driver's license, proof of identity (Aadhar card or passport), and a valid credit/debit card for payment. For international travelers, an international driving permit may be required."
  },
  {
    question: "What is included in the rental price?",
    answer: "Our rental prices include comprehensive insurance, 24/7 roadside assistance, unlimited mileage, and basic maintenance. Additional services like GPS, child seats, and additional drivers can be added for a small fee."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes! You can modify or cancel your booking up to 24 hours before your scheduled pickup time without any cancellation fees. Late cancellations may incur a small fee."
  },
  {
    question: "What happens if the vehicle breaks down?",
    answer: "All our vehicles are regularly maintained and come with 24/7 roadside assistance. If you experience any issues, simply call our emergency hotline and we'll arrange immediate assistance or a replacement vehicle."
  },
  {
    question: "Do you offer long-term rentals?",
    answer: "Yes! We offer flexible long-term rental options for businesses and individuals. Contact our sales team for customized packages and competitive rates for extended periods."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Cursor />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-50/30 to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-200/20 rounded-full blur-xl animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-200/20 rounded-full blur-xl animate-pulse-slow delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass-light border border-emerald-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-gradient font-medium">Frequently Asked Questions</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Got <span className="text-gradient">Questions?</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Find answers to the most common questions about our car rental services,
              booking process, and policies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="glass-light rounded-xl border border-emerald-100 overflow-hidden shadow-lg card-border-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-emerald-50/50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-emerald-600" />
                      )}
                    </div>
                  </button>

                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="glass-light rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Our customer support team is here to help you 24/7.
                  Don&apos;t hesitate to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                  >
                    Contact Support
                  </a>
                  <a
                    href="tel:+918012345678"
                    className="inline-flex items-center justify-center px-6 py-3 border border-emerald-200 text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


