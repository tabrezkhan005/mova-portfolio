"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, 
  Linkedin, Twitter, Facebook, Instagram, MessageSquare,
  ChevronRight, Car, Calendar, User, ArrowRight
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Cursor from '../components/Cursor';

export default function ContactPage() {
  // State management
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // References and scroll effects
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroImageY = useTransform(heroScrollProgress, [0, 1], [0, 200]);
  const heroTextY = useTransform(heroScrollProgress, [0, 1], [0, 100]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormValues({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Contact information data
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Office",
      details: [
        "123 Mobility Drive, Tech Park",
        "Bangalore 560001, India"
      ],
      color: "bg-emerald-50"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        "+91 (080) 1234-5678",
        "+91 90000-12345"
      ],
      color: "bg-teal-50"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        "contact@mova.com",
        "support@mova.com"
      ],
      color: "bg-green-50"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 8:00 PM",
        "Saturday: 10:00 AM - 6:00 PM"
      ],
      color: "bg-emerald-50"
    }
  ];

  // FAQ items related to contact
  const [faqItems, setFaqItems] = useState([
    {
      question: "How quickly will I receive a response to my inquiry?",
      answer: "We strive to respond to all inquiries within 2 business hours during our working hours. For complex requests, our team will acknowledge receipt of your message and provide a detailed response within 24 hours.",
      isOpen: false
    },
    {
      question: "What information should I provide when contacting about a specific reservation?",
      answer: "Please include your reservation number, the pickup/return dates, vehicle details, and the specific query or change you're requesting. This helps us address your needs more efficiently.",
      isOpen: false
    },
    {
      question: "How can I request special accommodations for my rental?",
      answer: "You can mention any special requirements in the message field of our contact form, or call us directly. We offer child seats, GPS navigation, additional drivers, and various other accommodations with advance notice.",
      isOpen: false
    },
    {
      question: "Do you have after-hours support for emergencies?",
      answer: "Yes, we provide 24/7 emergency support for active rentals. The emergency contact number is provided with your rental confirmation and is available in our mobile app.",
      isOpen: false
    }
  ]);

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    const newFAQs = [...faqItems];
    newFAQs[index].isOpen = !newFAQs[index].isOpen;
    setFaqItems(newFAQs);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 text-gray-900">
      {/* Custom cursor with emerald trail */}
      <Cursor color="rgba(16, 185, 129, 0.25)" enableTrail={true} />
      
      {/* Global styles - matching other pages */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }

        .glass-light {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(16, 185, 129, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .text-gradient {
          background: linear-gradient(90deg, #059669, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        
        .bg-gradient-light {
          background: linear-gradient(135deg, #f0fdfa, #ecfdf5);
        }
        
        .card-border-light {
          position: relative;
        }
        
        .card-border-light::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, #10b981, transparent, #059669);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.3;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Refined light background with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50 z-0">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Refined circular accents */}
          <motion.div 
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-emerald-100 opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full border border-emerald-100 opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />

          {/* Subtle gradient accents */}
          <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-emerald-100/30 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-green-100/30 blur-3xl"></div>
          
          {/* Light radial gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-emerald-50/40 to-transparent opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left side - Content */}
            <motion.div 
              className="w-full md:w-1/2 pr-0 md:pr-12"
              style={{ y: heroTextY }}
            >
              <motion.div 
                className="mb-8 inline-flex items-center px-4 py-2 rounded-full glass-light border border-emerald-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mr-3"></div>
                <span className="text-gradient font-medium">We're Here To Help</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Get In <span className="text-gradient">Touch</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Have questions about our services or need assistance with a booking? 
                Our customer support team is ready to assist you 24/7.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.a 
                  href="#contact-form"
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-white font-medium shadow-lg shadow-emerald-500/20 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                  <MessageSquare className="w-5 h-5" />
                  <span className="relative">Send Message</span>
                </motion.a>
                
                <motion.a 
                  href="tel:+918012345678"
                  className="group flex items-center gap-2 px-8 py-4 glass-light border border-emerald-200 rounded-full text-gray-700 font-medium relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-100/0 via-emerald-100/50 to-emerald-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                  <Phone className="w-5 h-5" />
                  <span className="relative">Call Now</span>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Right side - Visual element */}
            <motion.div 
              className="w-full md:w-1/2 mt-16 md:mt-0"
              style={{ y: heroImageY }}
            >
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute -inset-10 rounded-full bg-emerald-100/20 animate-pulse-slow blur-3xl"></div>
                
                {/* Contact illustration/visualization */}
                <div className="relative rounded-2xl overflow-hidden card-border-light">
                  <div className="aspect-[4/3] relative bg-gradient-light rounded-2xl overflow-hidden shadow-2xl">
                    {/* Map visualization */}
                    <div className="absolute inset-0 bg-[#f8fefc] opacity-70"></div>
                    <div className="absolute inset-0">
                      <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Subtle map grid */}
                        <path d="M0 0 H800 V600 H0 Z" fill="#f8fefc" fillOpacity="0.1" />
                        <path d="M0 0 L800 0 L800 600 L0 600 Z" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" />
                        
                        {/* Map lines */}
                        {Array.from({ length: 10 }).map((_, i) => (
                          <React.Fragment key={`h-line-${i}`}>
                            <line 
                              x1="0" 
                              y1={60 * i} 
                              x2="800" 
                              y2={60 * i} 
                              stroke="rgba(16, 185, 129, 0.05)" 
                              strokeWidth="1" 
                            />
                            <line 
                              x1={80 * i} 
                              y1="0" 
                              x2={80 * i} 
                              y2="600" 
                              stroke="rgba(16, 185, 129, 0.05)" 
                              strokeWidth="1" 
                            />
                          </React.Fragment>
                        ))}

                        {/* Map location marker */}
                        <motion.g
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1, duration: 0.8 }}
                        >
                          <circle cx="400" cy="300" r="80" fill="rgba(16, 185, 129, 0.1)" />
                          <circle cx="400" cy="300" r="40" fill="rgba(16, 185, 129, 0.2)" />
                          <circle cx="400" cy="300" r="15" fill="rgba(16, 185, 129, 0.8)" />
                          
                          <motion.circle 
                            cx="400" 
                            cy="300" 
                            r="60" 
                            fill="transparent"
                            stroke="rgba(16, 185, 129, 0.3)"
                            strokeWidth="2"
                            animate={{ r: [60, 90, 60] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.g>
                        
                        {/* Route lines */}
                        <motion.path 
                          d="M400 300 L600 200 L700 250" 
                          stroke="rgba(16, 185, 129, 0.4)" 
                          strokeWidth="3"
                          strokeDasharray="8 8"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay: 1.2, duration: 1.5 }}
                        />
                        
                        <motion.path 
                          d="M400 300 L300 450 L150 400" 
                          stroke="rgba(16, 185, 129, 0.4)" 
                          strokeWidth="3"
                          strokeDasharray="8 8"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay: 1.4, duration: 1.5 }}
                        />
                        
                        <motion.path 
                          d="M400 300 L500 450 L650 500" 
                          stroke="rgba(16, 185, 129, 0.4)" 
                          strokeWidth="3"
                          strokeDasharray="8 8"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay: 1.6, duration: 1.5 }}
                        />
                      </svg>
                    </div>

                    {/* Abstract connected elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="relative z-10 flex flex-col items-center text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                      >
                        <div className="mb-6">
                          <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                              <MessageSquare className="w-8 h-8" />
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <h3 className="text-xl font-bold text-emerald-700 mb-2">24/7 Support</h3>
                          <p className="text-sm text-emerald-600 px-8 max-w-xs">Our team is always available to assist you with any inquiries</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className={`${item.color} rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]`}
                variants={itemVariants}
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 text-emerald-600">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                
                <div className="space-y-2 text-gray-600">
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="formGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#formGrid)" />
            </svg>
          </div>
          
          {/* Circular accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Send Us a <span className="text-gradient">Message</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Fill out the form below and our team will get back to you promptly
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6 items-start">
              {/* Contact Form */}
              <motion.div 
                className="md:col-span-3 glass-light rounded-2xl p-6 border border-emerald-100 shadow-lg card-border-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formValues.name}
                          onChange={handleChange}
                          className="block w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                          className="block w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formValues.phone}
                          onChange={handleChange}
                          className="block w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="subject"
                          name="subject"
                          value={formValues.subject}
                          onChange={handleChange}
                          className="block w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors appearance-none"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="Booking Inquiry">Booking Inquiry</option>
                          <option value="Vehicle Information">Vehicle Information</option>
                          <option value="Corporate Partnership">Corporate Partnership</option>
                          <option value="Customer Support">Customer Support</option>
                          <option value="Feedback">Feedback</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      rows={5}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="How can we help you today?"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="privacy-policy"
                      name="privacy-policy"
                      type="checkbox"
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-600">
                      I agree to the <a href="#" className="text-emerald-600 font-medium hover:text-emerald-700">Privacy Policy</a>
                    </label>
                  </div>

                  <div>
                    <motion.button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 shadow-lg ${
                        formStatus === 'submitting' 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:shadow-xl shadow-emerald-200/20 hover:translate-y-[-2px] transition-all duration-300'
                      }`}
                      whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                      whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
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
                    </motion.button>
                    
                    {formStatus === 'success' && (
                      <motion.p
                        className="text-emerald-600 text-sm font-medium text-center mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        Thank you for your message. We'll get back to you shortly!
                      </motion.p>
                    )}
                    
                    {formStatus === 'error' && (
                      <motion.p
                        className="text-red-600 text-sm font-medium text-center mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        There was an error sending your message. Please try again.
                      </motion.p>
                    )}
                  </div>
                </form>
              </motion.div>

              {/* Quick Contact Links & Social - Optimized Layout */}
              <motion.div 
                className="md:col-span-2 h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="h-full flex flex-col gap-4">
                  {/* Quick Contact */}
                  <div className="glass-light rounded-xl p-5 border border-emerald-100 shadow-lg card-border-light flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
                    
                    <div className="space-y-3">
                      <a href="tel:+918012345678" className="flex items-center group">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Call Us</p>
                          <p className="text-xs text-gray-600">+91 80 1234 5678</p>
                        </div>
                      </a>
                      
                      <a href="mailto:contact@mova.com" className="flex items-center group">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Email Us</p>
                          <p className="text-xs text-gray-600">contact@mova.com</p>
                        </div>
                      </a>
                      
                      <a href="#" className="flex items-center group">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Visit Us</p>
                          <p className="text-xs text-gray-600">123 Mobility Drive, Bangalore</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="glass-light rounded-xl p-5 border border-emerald-100 shadow-lg card-border-light">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: <Facebook className="w-4 h-4" />, name: "Facebook", url: "#", color: "hover:bg-blue-600" },
                        { icon: <Twitter className="w-4 h-4" />, name: "Twitter", url: "#", color: "hover:bg-sky-500" },
                        { icon: <Instagram className="w-4 h-4" />, name: "Instagram", url: "#", color: "hover:bg-pink-600" },
                        { icon: <Linkedin className="w-4 h-4" />, name: "LinkedIn", url: "#", color: "hover:bg-blue-700" }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          className="flex items-center p-2 border border-gray-200 rounded-lg hover:border-emerald-200 transition-colors duration-300"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center mr-2 text-gray-600 ${social.color} hover:text-white transition-colors duration-300`}>
                            {social.icon}
                          </div>
                          <span className="font-medium text-sm">{social.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Book Now Shortcut */}
                  <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    
                    <h3 className="text-lg font-bold mb-3 relative z-10">Ready to Book?</h3>
                    <p className="text-emerald-100 mb-4 relative z-10 text-sm">Skip the wait and reserve your premium vehicle now</p>
                    
                    <div className="relative z-10">
                      <motion.a 
                        href="/fleet" 
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-colors shadow-lg text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Car className="w-4 h-4" />
                        <span>Browse Fleet</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Frequently <span className="text-gradient">Asked Questions</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Find quick answers to common questions about contacting us
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <ChevronRight 
                    className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${item.isOpen ? 'transform rotate-90' : ''}`}
                  />
                </button>
                
                <motion.div 
                  className="overflow-hidden"
                  initial={false}
                  animate={{ 
                    height: item.isOpen ? 'auto' : 0,
                    opacity: item.isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 text-gray-600">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-8 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 text-center">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Ready to Experience Premium Mobility with MOVA?
              </motion.h2>
              
              <motion.p 
                className="text-emerald-100 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Browse our fleet, book your perfect vehicle, and experience unparalleled service
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <motion.a 
                  href="/fleet" 
                  className="px-6 py-3 bg-white text-emerald-700 hover:bg-emerald-50 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Browse Our Fleet
                </motion.a>
                
                <motion.a 
                  href="#contact-form" 
                  className="px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}