"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Car, Shield, Users, CheckCircle, ArrowRight, 
  Zap, MapPin, Phone, Mail, Linkedin, Twitter, Instagram, 
  Route, FileText, ChevronRight, Key, Calendar, Clock,
  Gauge, Wrench, Settings, Award, CreditCard, Fuel
} from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Cursor from '../components/Cursor';

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
    <div className="min-h-screen overflow-x-hidden bg-[#001A20] text-white">
      <Cursor />

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
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
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

        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .text-gradient {
          background: linear-gradient(90deg, #2B9D6F, #4BB6D6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        
        .bg-gradient-automotive {
          background: linear-gradient(135deg, #001A20, #003540);
        }
        
        .card-border {
          position: relative;
        }
        
        .card-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, #2B9D6F, transparent, #4BB6D6);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

      {/* Hero Section - Premium Automotive Design */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced background elements with circular brand motif */}
        <div className="absolute inset-0 bg-[#001A20] z-0">
          {/* Refined blueprint grid */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" className="opacity-20">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Brand-aligned circular elements */}
          <motion.div 
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-emerald-500/10 opacity-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full border border-emerald-500/10 opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />

          {/* MOVA brand circular motif */}
          <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-emerald-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-emerald-500/5 blur-3xl"></div>
          
          {/* Technical measurement lines */}
          <div className="absolute top-[30%] left-0 w-full h-px bg-emerald-500/10"></div>
          <div className="absolute top-[70%] left-0 w-full h-px bg-emerald-500/10"></div>
          
          <div className="absolute top-0 left-[30%] h-full w-px bg-emerald-500/10"></div>
          <div className="absolute top-0 left-[70%] h-full w-px bg-emerald-500/10"></div>

          {/* Radial gradient that mimics the MOVA logo circular shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full radial-gradient from-emerald-500/3 to-transparent opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left side - refined content */}
            <motion.div 
              className="w-full md:w-1/2 pr-0 md:pr-12"
              style={{ y: heroTextY }}
            >
              <motion.div 
                className="mb-8 inline-flex items-center px-4 py-2 rounded-full glass border border-emerald-500/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mr-3"></div>
                <span className="text-gradient font-medium">Premium Mobility Solutions</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Redefining <br />
                <span className="text-gradient">Automotive</span> Experience
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
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
                  className="group flex items-center gap-2 px-8 py-4 glass border border-emerald-500/40 rounded-full text-white font-medium relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                  <span className="relative">Our Process</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Statistics - Ultra Minimal */}
              <motion.div 
                className="mt-16 grid grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div>
                  <div className="text-3xl font-bold mb-1 text-gradient">97%</div>
                  <div className="text-gray-400 text-sm">Customer satisfaction rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1 text-gradient">24/7</div>
                  <div className="text-gray-400 text-sm">Premium support service</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right side - enhanced car visualization */}
            <motion.div 
              className="w-full md:w-1/2 mt-16 md:mt-0"
              style={{ y: heroImageY }}
            >
              <div className="relative">
                {/* Enhanced glow effects */}
                <div className="absolute -inset-10 rounded-full bg-emerald-500/5 animate-pulse-slow blur-3xl"></div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-emerald-500/10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                
                {/* Main car visualization container */}
                <div className="relative rounded-2xl overflow-hidden card-border">
                  <div className="aspect-[4/3] relative bg-gradient-automotive rounded-2xl overflow-hidden">
                    {/* Car blueprint visualization */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 1 }}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Circular brand-aligned element */}
                        <motion.div
                          className="absolute w-64 h-64 rounded-full border border-emerald-500/20"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        ></motion.div>
                        
                        {/* Inner circle */}
                        <motion.div
                          className="absolute w-48 h-48 rounded-full border border-emerald-500/30"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        ></motion.div>

                        {/* Car illustration with enhanced styling */}
                        <div className="relative w-[80%] h-[80%]">
                          <svg 
                            viewBox="0 0 800 500" 
                            className="w-full h-full text-emerald-500/30"
                            style={{ filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.2))" }}
                          >
                            {/* More detailed car silhouette */}
                            <g>
                              {/* Car body */}
                              <path 
                                d="M600,250 C670,250 720,270 720,320 C720,340 710,360 690,360 L650,360 C650,390 620,410 590,410 C560,410 530,390 530,360 L220,360 C220,390 190,410 160,410 C130,410 100,390 100,360 L80,360 C50,360 30,340 30,310 C30,270 70,250 100,250 L140,250 L180,170 C190,155 210,130 260,130 L440,130 C500,130 520,160 530,170 L570,250 L600,250 Z" 
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              />

                              {/* Windows */}
                              <path 
                                d="M210,170 L240,150 L450,150 L500,170" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                              />
                              
                              {/* Wheels */}
                              <circle cx="160" cy="360" r="50" fill="none" stroke="currentColor" strokeWidth="3" />
                              <circle cx="590" cy="360" r="50" fill="none" stroke="currentColor" strokeWidth="3" />
                              
                              {/* Wheel details */}
                              <circle cx="160" cy="360" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                              <circle cx="590" cy="360" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                              <circle cx="160" cy="360" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                              <circle cx="590" cy="360" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                              
                              {/* Spokes */}
                              {Array.from({ length: 8 }).map((_, i) => (
                                <React.Fragment key={`spoke-1-${i}`}>
                                  <line 
                                    x1="160" 
                                    y1="360" 
                                    x2={160 + 35 * Math.cos(i * Math.PI / 4)} 
                                    y2={360 + 35 * Math.sin(i * Math.PI / 4)} 
                                    stroke="currentColor" 
                                    strokeWidth="1" 
                                  />
                                  <line 
                                    x1="590" 
                                    y1="360" 
                                    x2={590 + 35 * Math.cos(i * Math.PI / 4)} 
                                    y2={360 + 35 * Math.sin(i * Math.PI / 4)} 
                                    stroke="currentColor" 
                                    strokeWidth="1" 
                                  />
                                </React.Fragment>
                              ))}

                              {/* Headlights */}
                              <path d="M80,260 Q70,280 80,300" fill="none" stroke="currentColor" strokeWidth="2" />
                              <path d="M670,260 Q680,280 670,300" fill="none" stroke="currentColor" strokeWidth="2" />
                              
                              {/* Additional details */}
                              <line x1="100" y1="280" x2="650" y2="280" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                              <rect x="350" y="190" width="50" height="20" rx="5" stroke="currentColor" strokeWidth="1" fill="none" />
                            </g>
                            
                            {/* MOVA brand circular element in the center */}
                            <circle cx="350" cy="280" r="35" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="350" cy="280" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
                          </svg>

                          {/* Technical measurement points and specs */}
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-px bg-emerald-500/20"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.5, duration: 1.5 }}
                          />
                          
                          {/* Data points with labels */}
                          {[
                            { x: '75%', y: '20%', label: 'TORQUE.780' },
                            { x: '85%', y: '40%', label: 'POWER.450' },
                            { x: '70%', y: '60%', label: 'ECO.MODE' },
                            { x: '80%', y: '80%', label: 'RANGE.500' }
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
                              <div className="text-xs text-emerald-400 font-mono tracking-wider">
                                {point.label}
                              </div>
                            </motion.div>
                          ))}
                          
                          {/* Circular data points */}
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
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50 animate-ping absolute"></div>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 relative"></div>
                              </div>
                            </motion.div>
                          ))}

                          {/* MOVA logo subtle integration */}
                          <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.15 }}
                            transition={{ delay: 2.5, duration: 1 }}
                          >
                            <div className="w-24 h-24 rounded-full border-2 border-emerald-500/30 flex items-center justify-center">
                              <Car className="w-12 h-12 text-emerald-500/50" />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefit Highlights Section - Car Rental Specific */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Why Choose <span className="text-gradient">MOVA</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Experience the difference with our premium fleet and unparalleled service guarantees.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="glass rounded-2xl p-8 border border-white/10 h-full card-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-400 mb-6">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Process Section - Refined & Polished */}
      <section id="journey" ref={journeyRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-[#001A20] to-[#00252e]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass border border-emerald-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-gradient font-medium">Seamless Experience</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Journey With Us
            </h2>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              From selecting your perfect vehicle to hitting the road, we've refined every 
              step to ensure an exceptional experience.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Elegant connecting line */}
            <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-emerald-500/0 via-emerald-500/60 to-emerald-500/0 transform -translate-x-1/2"></div>
            
            {/* Journey Steps - Without Numbering */}
            <div className="space-y-32 relative">
              {journeyProcess.map((process, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <motion.div 
                    className={`w-1/2 relative ${index % 2 === 0 ? 'text-right pr-16' : 'text-left pl-16'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="glass rounded-3xl p-8 border border-white/10 shadow-xl overflow-hidden relative card-border"
                    >
                      {/* Subtle animated background */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 200 200">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#2B9D6F" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#4BB6D6" stopOpacity="0.3" />
                            </linearGradient>
                          </defs>
                          <path 
                            fill="url(#gradient)"
                            d={`M${40 + Math.random() * 20},${20 + Math.random() * 20} 
                              C${60 + Math.random() * 40},${30 + Math.random() * 40} 
                              ${100 + Math.random() * 40},${50 + Math.random() * 60} 
                              ${140 + Math.random() * 40},${80 + Math.random() * 60} 
                              S${180 + Math.random() * 20},${160 + Math.random() * 20} 
                              ${120 + Math.random() * 40},${180 + Math.random() * 20} 
                              S${40 + Math.random() * 20},${140 + Math.random() * 40} 
                              ${40 + Math.random() * 20},${20 + Math.random() * 20}`}
                          />
                        </svg>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 relative z-10">
                        <span className="text-gradient">{process.title}</span>
                      </h3>
                      
                      <p className="text-gray-300 mb-8 relative z-10">
                        {process.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {process.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex} 
                            className="flex items-center text-gray-400 gap-2"
                            whileHover={{ color: "#2B9D6F", transition: { duration: 0.2 } }}
                          >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Center Circle */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <div className="w-14 h-14 rounded-full bg-[#001A20] flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/80 to-green-600/80 flex items-center justify-center text-white">
                          {process.icon}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Fleet Section - Instead of Technology */}
      <section id="fleet" ref={fleetRef} className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass border border-emerald-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-gradient font-medium">Premium Fleet</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Exceptional Vehicles
            </h2>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
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
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeFeature === idx ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white' : 'glass text-gray-300 hover:text-white border border-white/10'}`}
                  onClick={() => setActiveFeature(idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>
            
            {/* Fleet Category Display */}
            <div className="relative glass rounded-3xl overflow-hidden card-border min-h-[500px]">
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
                    {/* Left side - Vehicle showcase */}
                    <div className="relative overflow-hidden h-[350px] lg:h-full">
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent z-10"></div>
                      
                      {/* Placeholder for actual vehicle image */}
                      <div className="absolute inset-0 bg-gradient-automotive">
                        <div className="h-full w-full flex items-center justify-center">
                          {/* Replace with actual car image */}
                          <div className="w-3/4 h-3/4 relative">
                            <svg 
                              viewBox="0 0 800 400" 
                              className="w-full h-full text-emerald-500/30"
                            >
                              <path 
                                d="M700,250 C700,180 650,150 580,150 L500,150 L450,100 L200,100 L150,150 L100,150 C50,150 50,200 50,250 C20,250 0,270 0,300 C0,330 20,350 50,350 L100,350 C100,380 130,400 150,400 C180,400 200,380 200,350 L550,350 C550,380 580,400 600,400 C630,400 650,380 650,350 L700,350 C730,350 750,330 750,300 C750,270 730,250 700,250 Z" 
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="5"
                              />
                              
                              <circle cx="150" cy="350" r="40" fill="none" stroke="currentColor" strokeWidth="5" />
                              <circle cx="600" cy="350" r="40" fill="none" stroke="currentColor" strokeWidth="5" />
                              
                              <path d="M200,150 L230,120 L420,120 L450,150 Z" fill="none" stroke="currentColor" strokeWidth="3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Technical overlay elements */}
                      <div className="absolute inset-0 z-20 pointer-events-none">
                        {/* Circular elements */}
                        <motion.div 
                          className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full border border-emerald-500/20"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        
                        <motion.div 
                          className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full border border-emerald-500/30"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Specifications */}
                        <motion.div
                          className="absolute bottom-4 right-4 flex flex-col gap-2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        >
                          <div className="flex items-center gap-2 text-xs text-emerald-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <span>Premium Features</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-emerald-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <span>Enhanced Safety</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-emerald-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <span>Luxury Interior</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Right side - Vehicle details */}
                    <div className="p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-5 mb-8">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-600/20 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                            {category.icon}
                          </div>
                          <h3 className="text-3xl font-bold">{category.title}</h3>
                        </div>
                        
                        <p className="text-gray-300 text-lg mb-10">
                          {category.description}
                        </p>
                        
                        <div className="space-y-6 mb-10">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full glass border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                              <Users className="w-5 h-5" />
                            </div>
                            <span className="text-lg">{category.metric}</span>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full glass border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                              <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="text-lg">{category.highlight}</span>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full glass border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                              <CreditCard className="w-5 h-5" />
                            </div>
                            <span className="text-lg">Premium insurance included</span>
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

      {/* Team Section - Simplified with Profile Focus */}
      <section id="team" ref={teamRef} className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass border border-emerald-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-gradient font-medium">Leadership</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Team
            </h2>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Meet the visionaries behind MOVA who are redefining the mobility experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Simplified profile design with hover effect */}
                <div className="relative aspect-square rounded-2xl overflow-hidden card-border">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-white/90">{member.position}</p>
                  </div>
                  
                  {/* Profile image with color tint on hover */}
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center filter group-hover:brightness-90"
                    />
                  </div>
                  
                  {/* Technical elements on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    {/* Circular elements */}
                    <motion.div 
                      className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Grid lines */}
                    <div className="absolute inset-0">
                      <div className="h-px bg-white/20 absolute top-1/3 left-0 right-0"></div>
                      <div className="h-px bg-white/20 absolute top-2/3 left-0 right-0"></div>
                      <div className="w-px bg-white/20 absolute left-1/3 top-0 bottom-0"></div>
                      <div className="w-px bg-white/20 absolute left-2/3 top-0 bottom-0"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Refined & Polished */}
      <section id="cta" ref={ctaRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-[#001A20] to-teal-500/10"></div>
          
          {/* Technical grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" className="opacity-50">
              <defs>
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>
          
          {/* Animated elements */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`cta-circle-${i}`}
              className="absolute rounded-full border border-emerald-500/10"
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
            className="max-w-5xl mx-auto glass rounded-3xl p-12 border border-white/10 overflow-hidden relative card-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Technical design elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
            
            <div className="text-center relative z-10">
              <motion.div
                className="mb-6 inline-flex items-center px-4 py-2 rounded-full glass border border-emerald-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-gradient font-medium">Ready to Drive?</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience <span className="text-gradient">Premium Mobility</span>
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg">
                Join thousands of satisfied customers who have transformed their transportation
                experience with MOVA's premium vehicle rental service.
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
                  className="group flex items-center gap-2 px-8 py-4 glass border border-emerald-500/30 rounded-full text-white font-medium relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                  <span className="relative">Explore Vehicles</span>
                </motion.a>
              </div>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <div className="flex items-center text-gray-300 gap-3">
                    <div className="w-10 h-10 rounded-full glass border border-emerald-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span>+91 98765 43210</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="flex items-center text-gray-300 gap-3">
                    <div className="w-10 h-10 rounded-full glass border border-emerald-500/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span>contact@mova.io</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="flex items-center text-gray-300 gap-3">
                    <div className="w-10 h-10 rounded-full glass border border-emerald-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-400" />
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