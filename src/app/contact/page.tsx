"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  MessageSquare, Linkedin, Twitter, Facebook, Instagram,
  ArrowRight, Headphones, Building
} from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Contact info
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Mobility Drive, Tech Park", "Bangalore 560001, India"],
      color: "bg-blue-50"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 (080) 1234-5678", "+91 90000-12345"],
      color: "bg-green-50"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["contact@mova.com", "support@mova.com"],
      color: "bg-purple-50"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat: 10:00 AM - 6:00 PM"],
      color: "bg-orange-50"
    }
  ];

  // Office locations
  const offices = [
    { city: "Bangalore", address: "Tech Park, Electronic City" },
    { city: "Mumbai", address: "BKC, Bandra East" },
    { city: "Delhi", address: "Connaught Place" },
    { city: "Chennai", address: "Anna Salai, T. Nagar" }
  ];

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
              Get in Touch
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              We&apos;d Love to Hear From You
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Have questions or need assistance? Our team is here to help you
              with all your car rental needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center text-[#00252e] mb-4`}>
                  {info.icon}
                </div>
                <h3 className="font-bold text-[#00252e] mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#00252e] mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 90000-12345"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    formStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-[#00252e] hover:bg-[#003847] text-white'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map/Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/img1.png"
                  alt="MOVA Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#00252e]/20" />
              </div>

              {/* Quick Support */}
              <div className="bg-[#00252e] rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#00a8cc]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-7 h-7 text-[#00a8cc]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Need Immediate Help?</h3>
                    <p className="text-gray-400 mb-4">
                      Our support team is available 24/7 to assist you with any urgent inquiries.
                    </p>
                    <a
                      href="tel:+919000012345"
                      className="inline-flex items-center gap-2 text-[#00a8cc] hover:underline font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      +91 90000-12345
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#00252e] mb-6 flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#00a8cc]" />
                  Our Offices
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-[#00252e] mb-1">{office.city}</h4>
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-bold text-[#00252e] mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:bg-blue-600" },
                    { icon: <Twitter className="w-5 h-5" />, href: "#", color: "hover:bg-sky-500" },
                    { icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:bg-pink-600" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:bg-blue-700" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-10 sm:p-16 text-center shadow-lg"
          >
            <MessageSquare className="w-16 h-16 text-[#00a8cc] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#00252e] mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Check out our frequently asked questions for instant answers to common queries about our services, booking process, and policies.
            </p>
            <Link href="/faq">
              <button className="px-8 py-4 bg-[#00252e] hover:bg-[#003847] text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center gap-2">
                Browse FAQs
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
