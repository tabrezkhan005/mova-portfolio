"use client";
// This file is part of the MOVA Next.js application, a premium mobility solution platform.
// The code below implements the About page with modern design elements and animations.

import React, { useState, useEffect, useRef } from 'react';
import {
  Car, Shield, Users, CheckCircle, ArrowRight,
  Zap, MapPin, Phone, Mail, Linkedin, Twitter, Instagram,
  Route, FileText, ChevronRight, Key, Calendar, Clock,
  Gauge, Wrench, Settings, Award, CreditCard, Fuel
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Cursor from '../../components/Cursor';

export default function AboutPage() {
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const fleetRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for hero section
  const heroImageY = useTransform(heroScrollProgress, [0, 1], [0, 200]);
  const heroTextY = useTransform(heroScrollProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Autoplay feature carousel
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % fleetCategories.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Dynamic journey steps with modern design
  const journeyProcess = [
    {
      title: "Smart Location",
      description: "AI-driven location intelligence with real-time availability across multiple zones",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      details: ["Predictive availability", "Zone optimization", "Real-time updates", "Smart suggestions"]
    },
    {
      title: "Route Intelligence",
      description: "Dynamic route planning optimized for efficiency, traffic conditions and environmental factors",
      icon: <Route className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      details: ["Traffic prediction", "Multi-stop optimization", "Eco-routing", "Time estimation"]
    },
    {
      title: "Vehicle Selection",
      description: "Precision vehicle selection based on your specific journey requirements and preferences",
      icon: <Car className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      details: ["Preference learning", "Vehicle analytics", "Feature matching", "Availability guarantee"]
    },
    {
      title: "Secure Access",
      description: "Enterprise-grade authentication and secure digital vehicle access with instant verification",
      icon: <Key className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      details: ["Biometric security", "Digital authorization", "Fraud prevention", "Instant verification"]
    },
    {
      title: "Smart Mobility",
      description: "Seamless journey management with continuous optimization and premium support",
      icon: <Gauge className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      details: ["Journey tracking", "Adaptive support", "Real-time adjustments", "Digital management"]
    }
  ];

  // Fleet categories for the premium fleet section
  const fleetCategories = [
    {
      title: "Premium Sedans",
      description: "Experience luxury and comfort with our premium sedan fleet, featuring high-end models from top manufacturers with advanced driver assistance and premium interiors",
      icon: <Car className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      metric: "Up to 5 passengers",
      highlight: "35+ premium models",
      image: "/images/premium-sedan.jpg"
    },
    {
      title: "Executive SUVs",
      description: "Versatile and spacious SUVs for business or family needs, with ample cargo space, all-wheel drive capabilities, and advanced safety features",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      metric: "Up to 7 passengers",
      highlight: "25+ luxury models",
      image: "/images/executive-suv.jpg"
    },
    {
      title: "Electric Vehicles",
      description: "Environmentally conscious and state-of-the-art electric vehicles with impressive range and fast-charging capabilities for emission-free travel",
      icon: <Zap className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      metric: "400+ km range",
      highlight: "Zero emissions",
      image: "/images/electric-vehicle.jpg"
    },
    {
      title: "Specialty Vehicles",
      description: "High-performance sports cars and specialty vehicles for those special occasions or when you just want to experience something extraordinary",
      icon: <Gauge className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      metric: "Premium experience",
      highlight: "15+ exclusive models",
      image: "/images/specialty-vehicle.jpg"
    }
  ];

  // Team members with focused profile design
  const teamMembers = [
    {
      id: 1,
      name: "Arjun Sharma",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      position: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b13c?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      position: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    }
  ];

  // Benefits of choosing MOVA
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Access vehicles anytime with our around-the-clock service"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Insurance",
      description: "Comprehensive coverage included with every rental"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Maintenance Guarantee",
      description: "All vehicles regularly serviced to highest standards"
    },
    {
      icon: <Fuel className="w-6 h-6" />,
      title: "Flexible Fuel Options",
      description: "Choose from electric, hybrid, or premium fuel vehicles"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 text-gray-900">
      <Cursor/>
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

      {/* Hero Section - Professional Light Theme */}
<section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      {/* Left side - Refined content */}
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
          <span className="text-gradient font-medium">Premium Mobility Solutions</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Redefining <br />
          <span className="text-gradient">Automotive</span> Experience
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          MOVA combines premium vehicles with intelligent technology to deliver
          an unparalleled mobility experience for the modern traveler.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.a
            href="#fleet"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-white font-medium shadow-lg shadow-emerald-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
            <Car className="w-5 h-5" />
            <span className="relative">Browse Our Fleet</span>
          </motion.a>

          <motion.a
            href="#journey"
            className="group flex items-center gap-2 px-8 py-4 glass-light border border-emerald-200 rounded-full text-gray-700 font-medium relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-100/0 via-emerald-100/50 to-emerald-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
            <span className="relative">Our Process</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div>
            <div className="text-3xl font-bold mb-1 text-gradient">97%</div>
            <div className="text-gray-500 text-sm">Customer satisfaction rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1 text-gradient">24/7</div>
            <div className="text-gray-500 text-sm">Premium support service</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side - Professional abstract visualization */}
      <motion.div
        className="w-full md:w-1/2 mt-16 md:mt-0"
        style={{ y: heroImageY }}
      >
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute -inset-10 rounded-full bg-emerald-100/20 animate-pulse-slow blur-3xl"></div>

          {/* Professional visualization container */}
          <div className="relative rounded-2xl overflow-hidden card-border-light">
            <div className="aspect-[4/3] relative bg-gradient-light rounded-2xl overflow-hidden shadow-2xl">
              {/* Professional abstract visualization */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-70"></div>

                {/* Abstract pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="diagonalPattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <rect width="4" height="10" fill="rgba(16, 185, 129, 0.3)" x="0" y="0"></rect>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonalPattern)"></rect>
                  </svg>
                </div>

                {/* Professional elements */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Circular elements */}
                  <motion.div
                    className="absolute w-80 h-80 rounded-full border-2 border-emerald-300/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  ></motion.div>

                  <motion.div
                    className="absolute w-60 h-60 rounded-full border border-emerald-300/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  ></motion.div>

                  <motion.div
                    className="absolute w-40 h-40 rounded-full border border-emerald-300/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  ></motion.div>

                  {/* MOVA Brand Feature */}
                  <motion.div
                    className="relative z-10 flex flex-col items-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <div className="w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm shadow-xl flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                        <div className="text-white">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 17H21V19H3V17H5M17 11V7C17 5.89543 16.1046 5 15 5H9C7.89543 5 7 5.89543 7 7V11M3 17C3 15.8954 3.89543 15 5 15H19C20.1046 15 21 15.8954 21 17M8 11H16M12 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">MOVA</h3>
                      <p className="text-sm text-emerald-600 px-8 max-w-xs">Premium mobility solutions for the modern world</p>
                    </div>
                  </motion.div>
                </div>

                {/* Professional data visualization elements */}
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  {['Performance', 'Comfort', 'Technology', 'Safety'].map((label, i) => (
                    <div key={i} className="text-center">
                      <div className="w-2 h-16 bg-gradient-to-t from-emerald-500 to-emerald-100 rounded-full mx-auto relative">
                        <div
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-emerald-500 shadow-lg"
                          style={{ bottom: `${(i+1) * 20}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 text-xs font-medium text-emerald-700">{label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Professional data points */}
              <div className="absolute inset-0 z-10">
                {/* Data points with labels */}
                {[
                  { x: '85%', y: '20%', label: 'PREMIUM FLEET' },
                  { x: '80%', y: '40%', label: 'ECO FRIENDLY' },
                  { x: '75%', y: '60%', label: 'SMART TECH' },
                  { x: '80%', y: '80%', label: 'CONCIERGE SERVICE' }
                ].map((point, i) => (
                  <motion.div
                    key={`data-${i}`}
                    className="absolute flex gap-2 items-center"
                    style={{
                      top: point.y,
                      right: '5%',
                      opacity: 0.8,
                    }}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.8 }}
                    transition={{ delay: 1.8 + (i * 0.15), duration: 0.8 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <div className="text-xs text-emerald-600 font-mono tracking-wider">
                      {point.label}
                    </div>
                  </motion.div>
                ))}

                {/* Interactive marker points */}
                {[
                  { x: '20%', y: '30%' },
                  { x: '30%', y: '70%' },
                  { x: '60%', y: '25%' }
                ].map((point, i) => (
                  <motion.div
                    key={`marker-${i}`}
                    className="absolute"
                    style={{
                      top: point.y,
                      left: point.x,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2 + (i * 0.2), duration: 0.5 }}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-emerald-400/50 animate-ping absolute"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 relative"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Benefit Highlights Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
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
              Why Choose <span className="text-gradient">MOVA</span>
            </motion.h2>

            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Experience the difference with our premium fleet and unparalleled service guarantees.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="glass-light rounded-2xl p-8 border border-emerald-100 h-full card-border-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center text-emerald-600 mb-6">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>

                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Process Section - Enhanced & Compact */}
<section id="journey" ref={journeyRef} className="py-20 relative overflow-hidden bg-gradient-to-b from-emerald-50 to-green-50">
  {/* Refined background elements */}
  <div className="absolute inset-0">
    {/* Minimal grid pattern */}
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="compactGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="0.5" fill="rgba(16, 185, 129, 0.2)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#compactGrid)" />
      </svg>
    </div>

    {/* Subtle floating elements */}
    <motion.div
      className="absolute top-10 left-10 w-64 h-64 bg-emerald-200/8 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 90, 180]
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-10 right-10 w-48 h-48 bg-green-200/8 rounded-full blur-3xl"
      animate={{
        scale: [1.1, 1, 1.1],
        rotate: [180, 90, 0]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Compact header section */}
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mb-6 inline-flex items-center px-5 py-2.5 rounded-full glass-light border border-emerald-200 shadow-sm"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2.5 animate-pulse"></div>
        <span className="text-gradient font-semibold text-sm tracking-wide">Seamless Experience</span>
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-2.5 animate-pulse"></div>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Your Journey <span className="text-gradient">With Us</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Five streamlined steps to unlock premium mobility experience.
      </motion.p>
    </motion.div>

    <div className="relative max-w-5xl mx-auto">
      {/* Compact connecting pathway */}
      <div className="absolute left-1/2 top-12 bottom-12 transform -translate-x-1/2 z-0">
        {/* Main connecting line */}
        <div className="relative w-0.5 h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-300/0 via-emerald-400/50 to-emerald-300/0 rounded-full"></div>

          {/* Moving pulse */}
          <motion.div
            className="absolute left-1/2 w-2 h-2 bg-emerald-500 rounded-full transform -translate-x-1/2 shadow-md shadow-emerald-500/50"
            animate={{
              y: ["0%", "100%", "0%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Compact Journey Steps */}
      <div className="space-y-16 relative">
        {journeyProcess.map((process, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Compact content card */}
            <motion.div
              className={`w-1/2 relative ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="glass-light rounded-2xl p-6 border border-emerald-100 shadow-lg shadow-emerald-500/5 overflow-hidden relative card-border-light group"
                whileHover={{
                  boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Subtle animated background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-emerald-500/20 via-transparent to-green-500/20"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Compact step indicator */}
                <motion.div
                  className={`absolute ${index % 2 === 0 ? 'top-4 left-4' : 'top-4 right-4'} w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500/15 to-green-600/15 flex items-center justify-center border border-emerald-300/25`}
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  <span className="text-emerald-600 font-bold text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold mb-3 text-gray-900"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                  >
                    <span className="text-gradient">{process.title}</span>
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-4 text-sm leading-relaxed"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + index * 0.05, duration: 0.5 }}
                  >
                    {process.description}
                  </motion.p>

                  {/* Compact feature list */}
                  <motion.div
                    className="grid grid-cols-2 gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  >
                    {process.details.slice(0, 4).map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-center text-gray-500 gap-2 text-xs group/detail"
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover/detail:shadow-sm group-hover/detail:shadow-emerald-500/50 transition-all duration-300"></div>
                        <span className="group-hover/detail:text-emerald-600 transition-colors duration-300 font-medium">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-12 h-12 bg-gradient-to-${index % 2 === 0 ? 'bl' : 'br'} from-emerald-500/5 to-transparent`}></div>
              </motion.div>
            </motion.div>

            {/* Compact Center Circle */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.4 + index * 0.1,
                duration: 0.6
              }}
            >
              <div className="relative">
                {/* Rotating ring */}
                <motion.div
                  className="absolute inset-0 w-16 h-16 rounded-full border border-emerald-300/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Main circle */}
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  {/* Inner circle */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500/90 to-green-600/90 flex items-center justify-center text-white">
                      <motion.div
                        className="text-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {process.icon}
                      </motion.div>
                    </div>
                  </div>

                  {/* Subtle pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </div>

                {/* Minimal corner elements */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-emerald-400/40"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-emerald-400/40"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-emerald-400/40"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-emerald-400/40"></div>
              </div>
            </motion.div>

            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>

      {/* Compact completion indicator */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="glass-light px-6 py-3 rounded-full border border-emerald-200 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600">
            <CheckCircle className="w-4 h-4" />
            <span className="font-semibold text-sm">Complete Experience</span>
            <motion.div
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Premium Fleet Section - Professional Redesign */}
<section id="fleet" ref={fleetRef} className="py-24 relative overflow-hidden bg-white">
  <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-100/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass-light border border-emerald-200"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <span className="text-gradient font-medium">Premium Fleet</span>
      </motion.div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
        Exceptional Vehicles
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Our meticulously maintained fleet offers a diverse range of premium vehicles
        to match your exact needs and preferences.
      </p>
    </motion.div>

    <div className="max-w-6xl mx-auto">
      {/* Fleet Category Tabs */}
      <div className="flex justify-center mb-16 gap-4 flex-wrap">
        {fleetCategories.map((category, idx) => (
          <motion.button
            key={idx}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeFeature === idx ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white' : 'glass-light text-gray-600 hover:text-gray-900 border border-emerald-100'}`}
            onClick={() => setActiveFeature(idx)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {category.title}
          </motion.button>
        ))}
      </div>

      {/* Fleet Category Display - Professional Redesign */}
      <div className="relative glass-light rounded-3xl overflow-hidden card-border-light min-h-[500px]">
        {fleetCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className={`absolute inset-0 ${idx === activeFeature ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: idx === activeFeature ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left side - Professional visualization */}
              <div className="relative overflow-hidden h-[350px] lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/30 to-transparent z-10"></div>

                {/* Professional abstract visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
                  <div className="relative w-full h-full p-8 flex items-center justify-center">
                    {/* Modern abstract representation */}
                    <div className="relative w-5/6 h-5/6">
                      {/* Premium visualization with brand elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Category specific icon (enlarged) */}
                        <div className="relative z-20">
                          <motion.div
                            className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center text-white">
                              {category.icon}
                            </div>
                          </motion.div>
                        </div>

                        {/* Concentric circles */}
                        <motion.div
                          className="absolute w-80 h-80 rounded-full border border-emerald-300/20"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          className="absolute w-64 h-64 rounded-full border border-emerald-300/30"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          className="absolute w-48 h-48 rounded-full border border-emerald-300/40"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />
                      </div>

                      {/* Vehicle class specifications */}
                      <motion.div
                        className="absolute top-[5%] left-[5%] bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md border border-emerald-100"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <Award className="w-3 h-3" />
                          </div>
                          <span className="text-xs font-medium text-gray-700">Premium Class</span>
                        </div>
                      </motion.div>

                      {/* Features indicators with lines connecting to center */}
                      {['Comfort', 'Performance', 'Technology', 'Design'].map((feature, i) => {
                        const angle = (i * Math.PI / 2) + (Math.PI / 4);
                        const x = Math.cos(angle) * 120;
                        const y = Math.sin(angle) * 120;

                        return (
                          <motion.div
                            key={feature}
                            className="absolute"
                            style={{
                              left: 'calc(50% + ' + x + 'px)',
                              top: 'calc(50% + ' + y + 'px)',
                              transform: 'translate(-50%, -50%)'
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                          >
                            {/* Line connecting to center */}
                            <div className="absolute top-1/2 left-1/2 w-[100px] h-[1px] bg-emerald-300/50"
                              style={{
                                transform: `rotate(${(angle + Math.PI) * (180 / Math.PI)}deg)`,
                                transformOrigin: 'left center',
                                width: '90px'
                              }}
                            />

                            {/* Feature indicator */}
                            <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm border border-emerald-100 whitespace-nowrap">
                              <span className="text-xs font-medium text-emerald-700">{feature}</span>
                            </div>
                          </motion.div>
                        );
                      })}

                      {/* Performance metrics visualization */}
                      <motion.div
                        className="absolute bottom-[10%] left-[50%] transform -translate-x-1/2 flex gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        {['Speed', 'Efficiency', 'Safety', 'Comfort'].map((metric, i) => (
                          <div key={metric} className="flex flex-col items-center">
                            <div className="w-1.5 h-16 bg-gradient-to-t from-emerald-500 to-emerald-100 rounded-full relative">
                              <motion.div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-emerald-500"
                                initial={{ bottom: '0%' }}
                                animate={{ bottom: `${(i+1) * 20}%` }}
                                transition={{ delay: 1 + (i * 0.1), duration: 0.5, type: "spring" }}
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-600 mt-2">{metric}</span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Dynamic highlights based on category */}
                <motion.div
                  className="absolute bottom-6 left-6 z-30 flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm text-sm font-medium text-emerald-700 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>24/7 Available</span>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm text-sm font-medium text-emerald-700 flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Fully Insured</span>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Vehicle details */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-500/10">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <p className="text-gray-600 text-lg mb-10">
                    {category.description}
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full glass-light border border-emerald-200 flex items-center justify-center text-emerald-600">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-lg text-gray-700">{category.metric}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full glass-light border border-emerald-200 flex items-center justify-center text-emerald-600">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-lg text-gray-700">{category.highlight}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full glass-light border border-emerald-200 flex items-center justify-center text-emerald-600">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <span className="text-lg text-gray-700">Premium insurance included</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="#"
                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-white font-medium shadow-lg shadow-emerald-500/20 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                    <span className="relative">Browse {category.title}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      

      {/* CTA Section */}
      <section id="cta" ref={ctaRef} className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-white to-green-100/30"></div>

          {/* Technical grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" className="opacity-50">
              <defs>
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>

          {/* Animated elements */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`cta-circle-${i}`}
              className="absolute rounded-full border border-emerald-300/20"
              style={{
                top: `${30 + (i * 20)}%`,
                left: `${20 + (i * 20)}%`,
                width: `${200 + (i * 100)}px`,
                height: `${200 + (i * 100)}px`,
                opacity: 0.3,
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 30 + (i * 10),
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto glass-light rounded-3xl p-12 border border-emerald-100 overflow-hidden relative card-border-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Technical design elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"></div>

            <div className="text-center relative z-10">
              <motion.div
                className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass-light border border-emerald-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-gradient font-medium">Ready to Drive?</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Experience <span className="text-gradient">Premium Mobility</span>
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg">
                Join thousands of satisfied customers who have transformed their transportation
                experience with MOVA&apos;s premium vehicle rental service.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="#contact"
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-white font-medium shadow-lg shadow-emerald-500/20 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                  <span className="relative">Reserve Now</span>
                  <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="#fleet"
                  className="group flex items-center gap-2 px-8 py-4 glass-light border border-emerald-200 rounded-full text-gray-700 font-medium relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-100/0 via-emerald-100/50 to-emerald-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                  <span className="relative">Explore Vehicles</span>
                </motion.a>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <div className="flex items-center text-gray-600 gap-3">
                    <div className="w-10 h-10 rounded-full glass-light border border-emerald-200 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span>+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center text-gray-600 gap-3">
                    <div className="w-10 h-10 rounded-full glass-light border border-emerald-200 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span>contact@mova.io</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center text-gray-600 gap-3">
                    <div className="w-10 h-10 rounded-full glass-light border border-emerald-200 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span>Bangalore, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
