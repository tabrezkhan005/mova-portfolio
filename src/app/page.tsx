"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Car, Shield, Users, Star, ChevronLeft, ChevronRight, MapPin, Calendar, Clock, CheckCircle, Award, Zap, Phone, Mail, ArrowRight, Play, Sparkles } from 'lucide-react';

export default function MovaTechHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Premium Car Rentals",
      subtitle: "Experience luxury and comfort on every journey",
      cta: "Explore Premium Fleet"
    },
    {
      image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Sports & Luxury Collection",
      subtitle: "Drive your dream car today",
      cta: "Book Sports Car"
    },
    {
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Business Class Vehicles",
      subtitle: "Professional transportation solutions",
      cta: "View Business Fleet"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-16 h-16 text-emerald-500" />,
      title: "Fully Insured & Safe",
      description: "All vehicles come with comprehensive insurance coverage and safety certifications for your complete peace of mind.",
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: <Users className="w-16 h-16 text-blue-500" />,
      title: "24/7 Premium Support",
      description: "Round-the-clock customer service with dedicated support agents ready to assist you whenever you need help.",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Award className="w-16 h-16 text-purple-500" />,
      title: "Award-Winning Fleet",
      description: "Choose from our extensive collection of award-winning, well-maintained, and regularly serviced premium vehicles.",
      gradient: "from-purple-50 to-pink-50"
    }
  ];

  const carTypes = [
    {
      name: "Economy",
      price: "$29/day",
      originalPrice: "$39/day",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Great fuel economy", "Easy parking", "Perfect for city drives", "GPS Navigation"],
      popular: false,
      savings: "Save 25%"
    },
    {
      name: "Luxury",
      price: "$89/day",
      originalPrice: "$119/day",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Premium comfort", "Advanced features", "Prestige styling", "Concierge service"],
      popular: true,
      savings: "Save 30%"
    },
    {
      name: "SUV",
      price: "$59/day",
      originalPrice: "$79/day",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Spacious interior", "All-terrain capable", "Family friendly", "Extra storage"],
      popular: false,
      savings: "Save 20%"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b64c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "MovaTech provided exceptional service! The luxury car was immaculate and the booking process was seamless."
    },
    {
      name: "Michael Chen",
      role: "Tourism Enthusiast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Amazing experience! The SUV was perfect for our family trip. Professional service and great value for money."
    },
    {
      name: "Emily Rodriguez",
      role: "Event Planner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Outstanding fleet quality and customer support. MovaTech is now my go-to for all premium car rental needs."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Premium Vehicles" },
    { number: "50+", label: "Cities Covered" },
    { number: "24/7", label: "Customer Support" }
  ];

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % heroSlides.length;
    console.log('Next slide:', nextIndex);
    setIsTransitioning(true);
    setCurrentSlide(nextIndex);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    console.log('Previous slide:', prevIndex);
    setIsTransitioning(true);
    setCurrentSlide(prevIndex);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    // Keyboard navigation
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [heroSlides.length]);

  const goToSlide = (index: number) => {
    console.log('Go to slide:', index);
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out 0.3s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .text-gradient {
          background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
        }
      `}</style>



      {/* Hero Section - Fresh Modern Design */}
      <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '100vh' }}>
        {/* Clean Background with Subtle Overlays */}
        <div className="absolute inset-0">
          {/* Background Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={`slide-${index}`}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              style={{
                zIndex: index === currentSlide ? 1 : 0
              }}
            >
              <div
                className="h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Clean Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          ))}

          {/* Minimal Accent Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

                {/* Modern Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">

              {/* Modern Professional Headline */}
              <div className="mb-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[0.9] tracking-[-0.02em] animate-fade-in-up">
                  <span className="block font-extralight text-white/90 mb-2" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {heroSlides[currentSlide].title.split(' ')[0]}
                  </span>
                  <span className="block font-bold bg-gradient-to-r from-white via-teal-200 to-emerald-300 bg-clip-text text-transparent" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {heroSlides[currentSlide].title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
              </div>

              {/* Modern Subtitle */}
              <div className="mb-12">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200/90 max-w-4xl mx-auto leading-relaxed tracking-wide font-light animate-slide-in-right"
                   style={{
                     animationDelay: '0.3s',
                     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                     letterSpacing: '0.01em'
                   }}>
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>

                                           {/* Modern Search Bar */}
              <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Location Input */}
                    <div className="relative">
                      <label className="block text-white/90 text-sm font-medium mb-3 tracking-wide" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>Pick-up Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-300 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Enter location"
                          className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-teal-300 focus:bg-white/15 transition-all duration-300 font-medium"
                          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                        />
                      </div>
                    </div>

                    {/* Start Date */}
                    <div className="relative">
                      <label className="block text-white/90 text-sm font-medium mb-3 tracking-wide" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>Start Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-300 w-5 h-5" />
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white focus:outline-none focus:border-teal-300 focus:bg-white/15 transition-all duration-300 font-medium"
                          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                        />
                      </div>
                    </div>

                    {/* End Date */}
                    <div className="relative">
                      <label className="block text-white/90 text-sm font-medium mb-3 tracking-wide" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>End Date</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-300 w-5 h-5" />
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white focus:outline-none focus:border-teal-300 focus:bg-white/15 transition-all duration-300 font-medium"
                          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
                        />
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="relative">
                      <label className="block text-transparent text-sm font-medium mb-3 tracking-wide">Search</label>
                      <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-teal-500/30 hover:scale-105 backdrop-blur-sm border border-white/10"
                              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.02em' }}>
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Search Cars
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              {/* Modern Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <button className="group bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white px-10 py-5 rounded-2xl font-medium text-lg transition-all duration-300 flex items-center shadow-2xl hover:shadow-teal-500/25 hover:scale-105 backdrop-blur-sm border border-white/10"
                        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
                  <Car className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold tracking-wide">{heroSlides[currentSlide].cta}</span>
                </button>

                <button className="group border-2 border-white/20 hover:border-white/40 text-white px-10 py-5 rounded-2xl font-medium text-lg transition-all duration-300 flex items-center hover:bg-white/5 backdrop-blur-sm hover:scale-105"
                        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold tracking-wide">Watch Video</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Enhanced Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-5 rounded-full transition-all duration-200 border-2 shadow-2xl group backdrop-blur-md ${
            isTransitioning
              ? 'bg-teal-400/40 border-teal-300 cursor-not-allowed scale-95'
              : 'bg-teal-500/20 hover:bg-teal-500/40 active:bg-teal-500/60 border-teal-400/50 hover:border-teal-400 hover:shadow-teal-500/30 active:scale-90'
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className={`w-7 h-7 transition-transform duration-200 ${
            isTransitioning ? 'animate-pulse' : 'group-hover:scale-125 group-active:scale-75'
          }`} />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-5 rounded-full transition-all duration-200 border-2 shadow-2xl group backdrop-blur-md ${
            isTransitioning
              ? 'bg-teal-400/40 border-teal-300 cursor-not-allowed scale-95'
              : 'bg-teal-500/20 hover:bg-teal-500/40 active:bg-teal-500/60 border-teal-400/50 hover:border-teal-400 hover:shadow-teal-500/30 active:scale-90'
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className={`w-7 h-7 transition-transform duration-200 ${
            isTransitioning ? 'animate-pulse' : 'group-hover:scale-125 group-active:scale-75'
          }`} />
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                index === currentSlide
                  ? 'bg-teal-400 w-8 h-3 shadow-lg shadow-teal-400/50'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

            {/* Ultra-Modern Polished Stats Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Sophisticated gradient mesh */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100/20 via-transparent to-emerald-100/20"></div>

          {/* Geometric accent lines */}
          <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent"></div>
          <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>

          {/* Modern floating elements */}
          <div className="absolute top-16 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-16 left-20 w-40 h-40 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contemporary Header Design */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-400/50"></div>
              <div className="mx-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm">
                <span className="text-sm font-semibold text-slate-600 tracking-wide">SUCCESS METRICS</span>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-400/50"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              Numbers That <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Define Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the trust, quality, and satisfaction that sets MOVA apart in premium transportation
            </p>
          </div>

          {/* Revolutionary Stats Layout */}
          <div className="relative">
            {/* Primary Stats Row */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Featured Stat 1 - Large Card */}
              <div className="group relative">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-xl shadow-slate-900/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {stats[0].number}
                        </div>
                        <div className="text-sm text-slate-500 font-medium mt-1">MILESTONE REACHED</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{stats[0].label}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Building trust through exceptional service and premium vehicle experiences worldwide</p>
                    <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Stat 2 - Large Card */}
              <div className="group relative">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-xl shadow-slate-900/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                        <Car className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          {stats[1].number}
                        </div>
                        <div className="text-sm text-slate-500 font-medium mt-1">PREMIUM FLEET</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{stats[1].label}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Curated collection of luxury and economy vehicles maintained to the highest standards</p>
                    <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Stats Row - Compact Modern Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Compact Stat 3 */}
              <div className="group bg-white/80 backdrop-blur-xl rounded-xl border border-slate-200/50 shadow-lg shadow-slate-900/5 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2.5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        {stats[2].number}
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{stats[2].label}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 relative">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#gradient3)"
                          strokeWidth="2"
                          strokeDasharray="75, 100"
                          className="group-hover:stroke-dasharray-[85,100] transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#7c3aed" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-600">75%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Stat 4 */}
              <div className="group bg-white/80 backdrop-blur-xl rounded-xl border border-slate-200/50 shadow-lg shadow-slate-900/5 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2.5 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        {stats[3].number}
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{stats[3].label}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 relative">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#gradient4)"
                          strokeWidth="2"
                          strokeDasharray="100, 100"
                          className="group-hover:stroke-dasharray-[100,100] transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#dc2626" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-600">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Decorative Elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-emerald-700 text-sm font-semibold mb-4 tracking-wide"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Why Choose Us
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>Why Choose MovaTech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
               style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>Experience the difference with our premium car rental services designed for your comfort and convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className={`card-hover text-center p-10 rounded-3xl bg-gradient-to-br ${feature.gradient} shadow-xl border border-white/50`}>
                <div className="mb-8 flex justify-center animate-float">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed font-medium"
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Types Section */}
<section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div className="text-center mb-20">
     <span className="inline-block px-6 py-2 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full text-teal-700 text-sm font-semibold mb-4 tracking-wide"
           style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
       Our Fleet
     </span>
     <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight"
         style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>Premium Car Rentals</h2>
     <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>Discover our collection of well-maintained vehicles for your perfect journey</p>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {[
       {
         company: "Mahindra",
         name: "Bolero Neo",
         model: "N10 (O) 7 STR",
         price: "₹2,500",
         location: "Guntur, AP",
         image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400&h=300&fit=crop",
         popular: false
       },
       {
         company: "Tata Motors",
         name: "Nexon",
         model: "XZ+ (O) AT",
         price: "₹1,800",
         location: "Guntur, AP",
         image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
         popular: true
       },
       {
         company: "Maruti Suzuki",
         name: "Swift Dzire",
         model: "ZXI+ AGS",
         price: "₹1,200",
         location: "Guntur, AP",
         image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop",
         popular: false
       }
     ].map((car, index) => (
       <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border ${car.popular ? 'border-teal-200 ring-2 ring-teal-500/20' : 'border-gray-100'} hover:border-teal-300`}>
         {car.popular && (
           <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
             Popular
           </div>
         )}

         <div className="relative overflow-hidden">
           <div className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${car.image})` }}>
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
           </div>
         </div>

         <div className="p-6">
           <div className="mb-4">
             <div className="flex items-center justify-between mb-2">
               <span className="text-sm font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
                 {car.company}
               </span>
               <div className="flex items-center text-gray-500 text-sm">
                 <MapPin className="w-4 h-4 mr-1" />
                 {car.location}
               </div>
             </div>

             <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight"
                 style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>{car.name}</h3>
             <p className="text-sm text-gray-600 mb-3 font-medium"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>{car.model}</p>

             <div className="flex items-center justify-between">
               <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent tracking-tight"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                 {car.price}<span className="text-sm text-gray-500 font-normal">/day</span>
               </div>
             </div>
           </div>

           <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg ${
             car.popular
               ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600'
               : 'bg-gray-900 text-white hover:bg-teal-600'
           }`}
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
             View Details
             <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
           </button>
         </div>
       </div>
     ))}
   </div>

   <div className="text-center mt-16">
     <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
             style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
       View All Vehicles
       <ArrowRight className="w-5 h-5 ml-2" />
     </button>
   </div>
 </div>
</section>


            {/* Professional Car Rental Journey Map Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-teal-50 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-emerald-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-cyan-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-teal-200/25 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-xl rounded-full shadow-xl border border-teal-200/60 mb-8">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <MapPin className="w-6 h-6 text-teal-600 mr-3" />
              <span className="text-teal-700 font-bold text-lg tracking-wide"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>Your Journey Roadmap</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600">MOVA</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
               style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
              Experience our streamlined 5-step process designed for effortless car rentals with premium service at every touchpoint
            </p>
          </div>

                              {/* Professional Geographic Journey Map */}
          <div className="relative mb-24">
            <div className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/30 rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden relative backdrop-blur-sm" style={{ height: '600px' }}>

              {/* Professional Map Topographical Background */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
                  radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.06) 0%, transparent 35%),
                  radial-gradient(circle at 50% 75%, rgba(99, 102, 241, 0.05) 0%, transparent 30%),
                  radial-gradient(circle at 15% 65%, rgba(168, 85, 247, 0.04) 0%, transparent 25%),
                  linear-gradient(45deg, transparent 49%, rgba(148, 163, 184, 0.03) 50%, transparent 51%),
                  linear-gradient(-45deg, transparent 49%, rgba(148, 163, 184, 0.03) 50%, transparent 51%)
                `,
                backgroundSize: '500px 500px, 400px 400px, 350px 350px, 300px 300px, 100px 100px, 100px 100px'
              }}>
                {/* Professional Elevation contour lines */}
                <div className="absolute inset-0 opacity-12">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="absolute border border-slate-300/30 rounded-full" style={{
                      width: `${180 + i * 70}px`,
                      height: `${110 + i * 35}px`,
                      left: `${8 + i * 4}%`,
                      top: `${12 + i * 7}%`,
                      borderRadius: '50%'
                    }}></div>
                  ))}
                </div>
              </div>

              {/* Professional Map Grid Lines */}
              <div className="absolute inset-0 opacity-6">
                <div className="w-full h-full grid grid-cols-16 grid-rows-10 gap-0">
                  {[...Array(160)].map((_, i) => (
                    <div key={i} className="border border-slate-400/20"></div>
                  ))}
                </div>
              </div>

              {/* Professional Map Coordinate System */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 text-sm font-mono text-slate-700 border border-slate-200/50 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  <span className="font-semibold">MOVA Journey Map v2.0</span>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 text-sm font-mono text-slate-700 border border-slate-200/50 shadow-lg">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold">Scale: 1:15min</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                </div>
              </div>

                            {/* Professional Map Route Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="professionalRoadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#334155" stopOpacity="0.9"/>
                    <stop offset="25%" stopColor="#475569" stopOpacity="0.7"/>
                    <stop offset="50%" stopColor="#64748b" stopOpacity="0.6"/>
                    <stop offset="75%" stopColor="#475569" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#334155" stopOpacity="0.9"/>
                  </linearGradient>
                  <linearGradient id="roadHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.3"/>
                  </linearGradient>
                  <filter id="professionalRoadShadow">
                    <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="rgba(0,0,0,0.2)"/>
                    <feDropShadow dx="0" dy="2" stdDeviation="1" floodColor="rgba(0,0,0,0.1)"/>
                  </filter>
                </defs>

                {/* Road base shadow */}
                <path
                  d="M 100 300 Q 180 200 300 280 Q 450 380 600 300 Q 750 220 900 300 Q 1000 380 1100 300"
                  stroke="#1e293b"
                  strokeWidth="18"
                  fill="none"
                  opacity="0.1"
                  transform="translate(0, 3)"
                />

                {/* Main professional road path */}
                <path
                  d="M 100 300 Q 180 200 300 280 Q 450 380 600 300 Q 750 220 900 300 Q 1000 380 1100 300"
                  stroke="url(#professionalRoadGradient)"
                  strokeWidth="15"
                  fill="none"
                  filter="url(#professionalRoadShadow)"
                />

                {/* Road highlight edge */}
                <path
                  d="M 100 300 Q 180 200 300 280 Q 450 380 600 300 Q 750 220 900 300 Q 1000 380 1100 300"
                  stroke="url(#roadHighlight)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                  transform="translate(0, -1)"
                />

                {/* Professional center line */}
                <path
                  d="M 100 300 Q 180 200 300 280 Q 450 380 600 300 Q 750 220 900 300 Q 1000 380 1100 300"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="25,20"
                  opacity="0.9"
                />

                {/* Road edge lines */}
                <path
                  d="M 100 300 Q 180 200 300 280 Q 450 380 600 300 Q 750 220 900 300 Q 1000 380 1100 300"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="15,25"
                  opacity="0.4"
                  transform="translate(0, -6)"
                />
                <path
                  d="M 100 300 Q 180 200 300 280 Q 450 380 600 300 Q 750 220 900 300 Q 1000 380 1100 300"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="15,25"
                  opacity="0.4"
                  transform="translate(0, 6)"
                />
              </svg>

                                          {/* Map Landmarks/Stations */}
              <div className="absolute inset-0 z-20">

                {/* Professional Station 1: Vehicle Selection */}
                <div className="absolute group cursor-pointer" style={{ left: '8%', top: '45%' }}>
                  <div className="relative">
                    {/* Enhanced pin shadow */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-900/15 rounded-full blur-md"></div>
                    {/* Professional map pin */}
                    <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 w-16 h-20 rounded-t-full rounded-bl-full transform rotate-45 shadow-2xl group-hover:scale-115 transition-all duration-500 border-3 border-white/90">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-t-full rounded-bl-full"></div>
                      <div className="absolute top-2 left-2 w-12 h-12 bg-white/98 rounded-full transform -rotate-45 flex items-center justify-center shadow-xl backdrop-blur-sm">
                        <Car className="w-6 h-6 text-blue-600" />
                      </div>
                      {/* Professional step number badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-white to-slate-50 text-blue-800 rounded-full flex items-center justify-center text-sm font-black shadow-xl border-3 border-blue-400">1</div>
                    </div>

                    {/* Hover info card */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-teal-300/60 p-4 min-w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <h4 className="font-bold text-base text-teal-800 mb-2 flex items-center">
                        <Car className="w-4 h-4 mr-2" />
                        Vehicle Selection Hub
                      </h4>
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">Choose from 500+ premium vehicles including luxury cars, SUVs, and sports cars</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-teal-600 text-white px-2 py-1 rounded-full font-semibold">Step 1</span>
                        <span className="text-teal-700 font-bold">🕐 2-3 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Station 2: Location Selection */}
                <div className="absolute group cursor-pointer" style={{ left: '25%', top: '38%' }}>
                  <div className="relative">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-900/15 rounded-full blur-md"></div>
                    <div className="relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 w-16 h-20 rounded-t-full rounded-bl-full transform rotate-45 shadow-2xl group-hover:scale-115 transition-all duration-500 border-3 border-white/90">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-t-full rounded-bl-full"></div>
                      <div className="absolute top-2 left-2 w-12 h-12 bg-white/98 rounded-full transform -rotate-45 flex items-center justify-center shadow-xl backdrop-blur-sm">
                        <MapPin className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-white to-slate-50 text-emerald-800 rounded-full flex items-center justify-center text-sm font-black shadow-xl border-3 border-emerald-400">2</div>
                    </div>

                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-emerald-300/60 p-4 min-w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <h4 className="font-bold text-base text-emerald-800 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Location Selection
                      </h4>
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">Choose from 50+ convenient pickup points citywide with flexible drop-off options</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-emerald-600 text-white px-2 py-1 rounded-full font-semibold">Step 2</span>
                        <span className="text-emerald-700 font-bold">🕐 1-2 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Station 3: Price Calculation */}
                <div className="absolute group cursor-pointer" style={{ left: '50%', top: '45%' }}>
                  <div className="relative">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-900/15 rounded-full blur-md"></div>
                    <div className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 w-16 h-20 rounded-t-full rounded-bl-full transform rotate-45 shadow-2xl group-hover:scale-115 transition-all duration-500 border-3 border-white/90">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-t-full rounded-bl-full"></div>
                      <div className="absolute top-2 left-2 w-12 h-12 bg-white/98 rounded-full transform -rotate-45 flex items-center justify-center shadow-xl backdrop-blur-sm">
                        <Star className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-white to-slate-50 text-purple-800 rounded-full flex items-center justify-center text-sm font-black shadow-xl border-3 border-purple-400">3</div>
                    </div>

                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-cyan-300/60 p-4 min-w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <h4 className="font-bold text-base text-cyan-800 mb-2 flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Price Calculation
                      </h4>
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">Get transparent pricing with no hidden fees. Real-time cost calculation based on duration and vehicle</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-cyan-600 text-white px-2 py-1 rounded-full font-semibold">Step 3</span>
                        <span className="text-cyan-700 font-bold">🕐 2 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Station 4: Document Verification */}
                <div className="absolute group cursor-pointer" style={{ left: '75%', top: '32%' }}>
                  <div className="relative">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-900/15 rounded-full blur-md"></div>
                    <div className="relative bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 w-16 h-20 rounded-t-full rounded-bl-full transform rotate-45 shadow-2xl group-hover:scale-115 transition-all duration-500 border-3 border-white/90">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-t-full rounded-bl-full"></div>
                      <div className="absolute top-2 left-2 w-12 h-12 bg-white/98 rounded-full transform -rotate-45 flex items-center justify-center shadow-xl backdrop-blur-sm">
                        <Shield className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-white to-slate-50 text-amber-800 rounded-full flex items-center justify-center text-sm font-black shadow-xl border-3 border-amber-400">4</div>
                    </div>

                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-blue-300/60 p-4 min-w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <h4 className="font-bold text-base text-blue-800 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Document Verification
                      </h4>
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">Secure upload of driving license and ID. Advanced verification for your safety and security</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full font-semibold">Step 4</span>
                        <span className="text-blue-700 font-bold">🕐 5-8 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Station 5: Car Ready */}
                <div className="absolute group cursor-pointer" style={{ left: '92%', top: '45%' }}>
                  <div className="relative">
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-900/15 rounded-full blur-md"></div>
                    <div className="relative bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 w-16 h-20 rounded-t-full rounded-bl-full transform rotate-45 shadow-2xl group-hover:scale-115 transition-all duration-500 border-3 border-white/90">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-t-full rounded-bl-full"></div>
                      <div className="absolute top-2 left-2 w-12 h-12 bg-white/98 rounded-full transform -rotate-45 flex items-center justify-center shadow-xl backdrop-blur-sm">
                        <CheckCircle className="w-6 h-6 text-rose-600" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-white to-slate-50 text-rose-800 rounded-full flex items-center justify-center text-sm font-black shadow-xl border-3 border-rose-400">5</div>
                    </div>

                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-indigo-300/60 p-4 min-w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 transform -translate-x-full">
                      <h4 className="font-bold text-base text-indigo-800 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Car Ready!
                      </h4>
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">Instant confirmation and pickup instructions. Your premium vehicle is ready for the journey!</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-indigo-600 text-white px-2 py-1 rounded-full font-semibold">Step 5</span>
                        <span className="text-indigo-700 font-bold">🚀 Ready!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border p-4 max-w-xs">
                <h4 className="font-bold text-sm text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Journey Legend
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-4 h-2 bg-gray-700 rounded mr-2"></div>
                    <span className="text-gray-600">MOVA Route Path</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-4 bg-teal-600 rounded-t-full rounded-bl-full transform rotate-45 mr-3"></div>
                    <span className="text-gray-600">Service Stations</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 text-gray-500 mr-2" />
                    <span className="text-gray-600">Total Time: ~15 minutes</span>
                  </div>
                </div>
              </div>

              {/* Map Compass */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border p-3">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 border-2 border-gray-300 rounded-full"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-red-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">N</div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-transparent to-emerald-600/20"></div>

              <div className="relative px-12 py-16">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Ready to Start Your
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400"> Premium Journey?</span>
                  </h3>
                  <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
                     style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
                    Join thousands of satisfied customers who trust MOVA for their premium transportation needs
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                    <button className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 flex items-center justify-center"
                            style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <Car className="relative w-7 h-7 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative">Explore Premium Fleet</span>
                      <ArrowRight className="relative w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>

                    <button className="group bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                            style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
                      <Phone className="w-7 h-7 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>+91 98765 43210</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-teal-400 mr-3" />
                      <span className="font-medium" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>24/7 Premium Support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-teal-400 mr-3" />
                      <span className="font-medium" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>Free Cancellation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-teal-400 mr-3" />
                      <span className="font-medium" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>Best Price Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-bold text-gradient flex items-center mb-6"
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-4 flex items-center justify-center">
                  <Car className="w-7 h-7 text-white" />
                </div>
                mova.
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md font-light"
                 style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>
                Premium car rental services for every journey. Experience luxury, comfort, and reliability with MovaTech&apos;s exceptional fleet and customer service.
              </p>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-xl">📘</span>
                </button>
                <button className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-xl">🐦</span>
                </button>
                <button className="w-12 h-12 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-xl">📷</span>
                </button>
                <button className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-xl">💼</span>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white tracking-tight"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><ArrowRight className="w-4 h-4 mr-2" />Special Deals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><ArrowRight className="w-4 h-4 mr-2" />Our Fleet</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><ArrowRight className="w-4 h-4 mr-2" />About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><ArrowRight className="w-4 h-4 mr-2" />Locations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><ArrowRight className="w-4 h-4 mr-2" />Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white tracking-tight"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>Support & Contact</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><Phone className="w-4 h-4 mr-2" />+1 (555) 123-4567</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><Mail className="w-4 h-4 mr-2" />info@movatech.com</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><MapPin className="w-4 h-4 mr-2" />123 Main St, City, State</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><ArrowRight className="w-4 h-4 mr-2" />FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center font-medium"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}><ArrowRight className="w-4 h-4 mr-2" />Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 font-medium"
                 style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>© 2025 MovaTech. All rights reserved. | Premium Car Rental Services</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '0.01em' }}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
