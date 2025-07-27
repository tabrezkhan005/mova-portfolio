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

      {/* Ultra-Modern Features Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-slate-100 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-teal-400/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-400/6 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Minimal Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full mr-4"></div>
              <span className="text-gray-600 font-medium text-sm uppercase tracking-[0.15em]"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Why Choose MOVA
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Premium <span className="font-semibold text-teal-600">Experience</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
               style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Discover what sets MOVA apart in luxury car rentals
            </p>
          </div>

          {/* Ultra-Modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                {/* Main Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200/50 relative overflow-hidden">

                  {/* Subtle Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-transparent"></div>

                  {/* Modern Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 border border-gray-200/50">
                      <div className="w-8 h-8 text-gray-700 group-hover:text-teal-600 transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Floating Number Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm"
                     style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Modern Stats Section */}
          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Trusted by <span className="font-semibold text-teal-400">Thousands</span>
                </h3>
                <p className="text-gray-400 text-sm"
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Join our community of satisfied customers
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "10K+", label: "Happy Customers" },
                  { number: "500+", label: "Premium Vehicles" },
                  { number: "50+", label: "Cities Covered" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-400 mb-2"
                         style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider"
                         style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Modern Car Types Section */}
<section className="py-32 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
  {/* Enhanced Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/6 to-emerald-400/4 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/4 to-blue-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Premium Header */}
    <div className="text-center mb-24">
      <div className="inline-flex items-center mb-8">
        <div className="w-2 h-12 bg-gradient-to-b from-teal-500 via-emerald-500 to-blue-500 rounded-full mr-6 animate-pulse"></div>
        <span className="text-gray-700 font-semibold text-base uppercase tracking-[0.2em] bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          Our Premium Fleet
        </span>
      </div>

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 mb-8 leading-[0.9] tracking-tight"
          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
        Luxury <span className="font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">Vehicle Collection</span>
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-8"
         style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
        Discover our meticulously curated collection of premium vehicles, each offering unparalleled comfort and sophistication for your journey
      </p>

      {/* Fleet Stats */}
      <div className="flex items-center justify-center gap-12 text-sm text-gray-500 mb-8">
        <div className="flex items-center">
          <Car className="w-4 h-4 mr-2 text-teal-500" />
          <span>500+ Premium Vehicles</span>
        </div>
        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="flex items-center">
          <Shield className="w-4 h-4 mr-2 text-emerald-500" />
          <span>Fully Insured & Certified</span>
        </div>
        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
          <span>24/7 Availability</span>
        </div>
      </div>
    </div>

    {/* Premium Vehicle Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {[
        {
          company: "Mahindra",
          name: "Bolero Neo",
          model: "N10 (O) 7 STR",
          price: "₹2,500",
          originalPrice: "₹3,200",
          location: "Guntur, AP",
          image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400&h=300&fit=crop",
          popular: false,
          category: "SUV",
          features: ["7 Seater", "All Terrain", "Premium Interior", "GPS Navigation"],
          gradient: "from-teal-500 to-emerald-500",
          bgGradient: "from-teal-50 to-emerald-50",
          savings: "Save 22%"
        },
        {
          company: "Tata Motors",
          name: "Nexon",
          model: "XZ+ (O) AT",
          price: "₹1,800",
          originalPrice: "₹2,400",
          location: "Guntur, AP",
          image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
          popular: true,
          category: "Compact SUV",
          features: ["Automatic", "Premium Sound", "Climate Control", "Safety Plus"],
          gradient: "from-emerald-500 to-green-500",
          bgGradient: "from-emerald-50 to-green-50",
          savings: "Save 25%"
        },
        {
          company: "Maruti Suzuki",
          name: "Swift Dzire",
          model: "ZXI+ AGS",
          price: "₹1,200",
          originalPrice: "₹1,600",
          location: "Guntur, AP",
          image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop",
          popular: false,
          category: "Sedan",
          features: ["Fuel Efficient", "Spacious", "Modern Tech", "Comfort Seats"],
          gradient: "from-blue-500 to-indigo-500",
          bgGradient: "from-blue-50 to-indigo-50",
          savings: "Save 25%"
        }
      ].map((car, index) => (
        <div key={index} className="group relative">
          {/* Premium Card Container */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-white/80 relative group-hover:scale-[1.02]">

            {/* Popular Badge */}
            {car.popular && (
              <div className="absolute top-4 left-4 z-20">
                <div className={`px-4 py-2 bg-gradient-to-r ${car.gradient} text-white rounded-xl text-xs font-bold shadow-lg flex items-center`}>
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </div>
              </div>
            )}

            {/* Savings Badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs font-bold shadow-lg">
                {car.savings}
              </div>
            </div>

            {/* Premium Image Container */}
            <div className="relative h-64 overflow-hidden">
              <div
                className="h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${car.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-t ${car.bgGradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>

              {/* Category Badge */}
              <div className="absolute bottom-4 left-4">
                <div className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-800 rounded-lg text-xs font-semibold border border-white/50">
                  {car.category}
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-4 right-4">
                <div className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-600 rounded-lg text-xs font-medium flex items-center border border-white/50">
                  <MapPin className="w-3 h-3 mr-1" />
                  {car.location}
                </div>
              </div>
            </div>

            {/* Premium Content */}
            <div className="p-8">
              {/* Company Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${car.bgGradient} text-${car.gradient.split('-')[1].split(' ')[0]}-700 rounded-lg text-sm font-semibold border border-${car.gradient.split('-')[1].split(' ')[0]}-200`}>
                  {car.company}
                </span>
              </div>

              {/* Vehicle Details */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-gray-800 transition-colors duration-300"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                {car.name}
              </h3>

              <p className="text-sm text-gray-600 mb-4 font-medium"
                 style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                {car.model}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {car.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 mr-2 text-emerald-500" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Section */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`text-3xl font-black bg-gradient-to-r ${car.gradient} bg-clip-text text-transparent`}
                          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {car.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through font-medium">
                      {car.originalPrice}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">/day</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className={`py-3 px-4 bg-gradient-to-r ${car.gradient} text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105`}
                        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  <Car className="w-4 h-4 mr-2" />
                  Book Now
                </button>

                <button className="py-3 px-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Premium Hover Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${car.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
          </div>
        </div>
      ))}
    </div>

    {/* Premium Call to Action */}
    <div className="text-center">
      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-500 via-emerald-500 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Explore Our <span className="font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Complete Fleet</span>
          </h3>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
             style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Discover hundreds of premium vehicles across all categories, from luxury sedans to powerful SUVs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative overflow-hidden inline-flex items-center px-10 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl font-bold text-lg hover:from-teal-400 hover:to-emerald-400 transition-all duration-300 shadow-2xl hover:shadow-teal-500/25 hover:scale-105"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Car className="relative w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">View All Vehicles</span>
              <ArrowRight className="relative w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group inline-flex items-center px-10 py-4 border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <Phone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-8 text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-sm font-medium">Best Price Guarantee</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-sm font-medium">Free Cancellation</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium">Premium Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            {/* Ultra-Modern Journey Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-16 left-16 w-80 h-80 bg-gradient-to-br from-teal-400/6 to-emerald-400/4 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-16 right-16 w-72 h-72 bg-gradient-to-br from-emerald-400/4 to-blue-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-blue-400/3 to-purple-400/2 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ultra-Modern Header */}
          <div className="text-center mb-0">
            <div className="inline-flex items-center mb-6">
              <div className="w-2 h-10 bg-gradient-to-b from-teal-500 via-emerald-500 to-blue-500 rounded-full mr-4 animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm uppercase tracking-[0.15em] bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                How MOVA Works
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Your <span className="font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">Premium</span> Journey
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-6"
               style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Experience our revolutionary 5-step process designed for seamless luxury car rentals with unmatched convenience
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-teal-500" />
                <span>Total Time: ~10 minutes</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-emerald-500" />
                <span>100% Secure Process</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                <span>Instant Confirmation</span>
              </div>
            </div>
          </div>

          {/* Professional Process Flow */}
          <div className="relative mb-16" style={{ marginTop: '10px' }}>
            {/* Modern Professional Container */}
            <div className="bg-gradient-to-br from-white via-gray-50/50 to-slate-50/60 rounded-[2.5rem] p-4 md:p-6 pb-20 shadow-2xl border border-gray-200/60 relative overflow-hidden backdrop-blur-sm">

              {/* Refined Background Pattern */}
              <div className="absolute inset-0 opacity-6">
                <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-teal-400/8 to-emerald-400/6 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 right-4 w-40 h-40 bg-gradient-to-br from-blue-400/6 to-indigo-400/4 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-emerald-400/4 to-green-400/3 rounded-full blur-2xl"></div>
              </div>

              {/* Professional Network Visualization */}
              <div className="absolute inset-x-0 top-4 bottom-16 opacity-15">
                <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
                  {/* Main Process Flow Line */}
                  <path d="M50 200 Q250 190 500 200 Q750 210 950 200" stroke="url(#process-gradient)" strokeWidth="8" fill="none" opacity="0.6"/>

                  {/* Secondary Connection Lines */}
                  <path d="M100 160 Q300 150 600 160 Q800 150 900 160" stroke="url(#secondary-flow)" strokeWidth="4" fill="none" strokeDasharray="20 10" opacity="0.4"/>
                  <path d="M100 240 Q300 250 600 240 Q800 250 900 240" stroke="url(#secondary-flow)" strokeWidth="4" fill="none" strokeDasharray="20 10" opacity="0.4"/>

                  {/* Process Nodes */}
                  <circle cx="160" cy="200" r="6" fill="url(#node-gradient-1)" opacity="0.8"/>
                  <circle cx="340" cy="200" r="6" fill="url(#node-gradient-2)" opacity="0.8"/>
                  <circle cx="500" cy="200" r="6" fill="url(#node-gradient-3)" opacity="0.8"/>
                  <circle cx="660" cy="200" r="6" fill="url(#node-gradient-4)" opacity="0.8"/>
                  <circle cx="840" cy="200" r="6" fill="url(#node-gradient-5)" opacity="0.8"/>

                  {/* Connection Points */}
                  <rect x="155" y="197" width="6" height="6" fill="#10B981" opacity="0.6" rx="1"/>
                  <rect x="335" y="197" width="6" height="6" fill="#3B82F6" opacity="0.6" rx="1"/>
                  <rect x="495" y="197" width="6" height="6" fill="#8B5CF6" opacity="0.6" rx="1"/>
                  <rect x="655" y="197" width="6" height="6" fill="#EF4444" opacity="0.6" rx="1"/>
                  <rect x="835" y="197" width="6" height="6" fill="#F59E0B" opacity="0.6" rx="1"/>

                  {/* Professional SVG Gradients */}
                  <defs>
                    <linearGradient id="process-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#14B8A6"/>
                      <stop offset="25%" stopColor="#10B981"/>
                      <stop offset="50%" stopColor="#3B82F6"/>
                      <stop offset="75%" stopColor="#8B5CF6"/>
                      <stop offset="100%" stopColor="#EF4444"/>
                    </linearGradient>
                    <linearGradient id="secondary-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9CA3AF"/>
                      <stop offset="100%" stopColor="#D1D5DB"/>
                    </linearGradient>
                    <radialGradient id="node-gradient-1">
                      <stop offset="0%" stopColor="#14B8A6"/>
                      <stop offset="100%" stopColor="#0D9488"/>
                    </radialGradient>
                    <radialGradient id="node-gradient-2">
                      <stop offset="0%" stopColor="#10B981"/>
                      <stop offset="100%" stopColor="#059669"/>
                    </radialGradient>
                    <radialGradient id="node-gradient-3">
                      <stop offset="0%" stopColor="#3B82F6"/>
                      <stop offset="100%" stopColor="#2563EB"/>
                    </radialGradient>
                    <radialGradient id="node-gradient-4">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="100%" stopColor="#7C3AED"/>
                    </radialGradient>
                    <radialGradient id="node-gradient-5">
                      <stop offset="0%" stopColor="#EF4444"/>
                      <stop offset="100%" stopColor="#DC2626"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Professional Progress Bar */}
              <div className="absolute top-1/2 left-8 right-8 transform -translate-y-1/2">
                <div className="relative h-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-inner overflow-hidden border border-gray-200/50">

                  {/* Progress Track */}
                  <div className="absolute inset-1 bg-gradient-to-r from-gray-50 to-white rounded-md"></div>

                  {/* Animated Progress Flow */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 via-emerald-400 via-blue-400 via-purple-400 to-red-400 transform -translate-y-1/2 rounded-full shadow-lg opacity-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 animate-pulse"></div>
                  </div>

                  {/* Professional Step Indicators */}
                  <div className="absolute top-1/2 left-[12.5%] w-2 h-2 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md border border-white"></div>
                  <div className="absolute top-1/2 left-[30%] w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md border border-white"></div>
                  <div className="absolute top-1/2 left-[50%] w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md border border-white"></div>
                  <div className="absolute top-1/2 left-[70%] w-2 h-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md border border-white"></div>
                  <div className="absolute top-1/2 left-[87.5%] w-2 h-2 bg-gradient-to-br from-red-500 to-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md border border-white"></div>
                </div>
              </div>

              {/* Professional Process Steps */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
                {[
                  {
                    icon: <Car className="w-8 h-8" />,
                    title: "Choose Vehicle",
                    description: "Select from our premium fleet of luxury vehicles",
                    time: "2 min",
                    color: "teal",
                    gradient: "from-teal-500 to-emerald-500",
                    bgGradient: "from-teal-50 to-emerald-50",
                    shadowColor: "shadow-teal-500/20"
                  },
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Select Route",
                    description: "Choose pickup and drop-off locations",
                    time: "1 min",
                    color: "emerald",
                    gradient: "from-emerald-500 to-green-500",
                    bgGradient: "from-emerald-50 to-green-50",
                    shadowColor: "shadow-emerald-500/20"
                  },
                  {
                    icon: <Star className="w-8 h-8" />,
                    title: "Get Pricing",
                    description: "Transparent pricing with no hidden fees",
                    time: "30 sec",
                    color: "blue",
                    gradient: "from-blue-500 to-indigo-500",
                    bgGradient: "from-blue-50 to-indigo-50",
                    shadowColor: "shadow-blue-500/20"
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Verify Documents",
                    description: "Quick and secure document verification",
                    time: "5 min",
                    color: "purple",
                    gradient: "from-purple-500 to-pink-500",
                    bgGradient: "from-purple-50 to-pink-50",
                    shadowColor: "shadow-purple-500/20"
                  },
                  {
                    icon: <CheckCircle className="w-8 h-8" />,
                    title: "Hit The Road",
                    description: "Start your premium journey experience",
                    time: "Ready!",
                    color: "green",
                    gradient: "from-green-500 to-teal-500",
                    bgGradient: "from-green-50 to-teal-50",
                    shadowColor: "shadow-green-500/20"
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center group cursor-pointer relative">

                    {/* Professional Step Circle */}
                    <div className="relative mb-8 flex justify-center">
                      <div className={`w-24 h-24 bg-gradient-to-br ${step.bgGradient} rounded-[1.5rem] flex items-center justify-center shadow-xl ${step.shadowColor} border-3 border-white group-hover:border-gray-100 transition-all duration-500 group-hover:scale-110 backdrop-blur-lg relative overflow-hidden`}>

                        {/* Subtle Professional Accent */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-80 rounded-t-2xl"></div>

                        {/* Clean Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 group-hover:from-white/30 transition-all duration-500"></div>

                        <div className={`text-${step.color}-600 group-hover:text-${step.color}-700 transition-all duration-300 group-hover:scale-110 relative z-10`}>
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    {/* Professional Content */}

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300"
                        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed max-w-xs mx-auto"
                       style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {step.description}
                    </p>

                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${step.gradient} text-white rounded-full text-xs font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{step.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes moveRight {
              0% { left: -3rem; }
              100% { left: calc(100% + 2rem); }
            }

            @keyframes moveLeft {
              0% { right: -3rem; }
              100% { right: calc(100% + 2rem); }
            }
          `}</style>

          {/* Enhanced Visual Elements */}
          <div className="mb-16">
            {/* Enhanced Process Benefits */}
            <div className="bg-gradient-to-br from-white via-gray-50/50 to-white rounded-2xl p-8 shadow-xl border border-gray-100/50 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-gray-900 mb-3"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Why Choose Our <span className="font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Premium Process</span>?
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto text-sm"
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Experience the difference of our streamlined, secure, and customer-focused approach
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Lightning Fast
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed"
                     style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Complete your booking in under 10 minutes with our streamlined process
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Ultra Secure
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed"
                     style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Bank-level encryption and security for all your transactions
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2"
                      style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Instant Confirmation
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed"
                     style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Get immediate booking confirmation and digital keys
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-2xl p-10 relative overflow-hidden shadow-2xl">
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-teal-500 via-emerald-500 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
              </div>

              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Ready to Start Your <span className="font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">Premium Journey</span>?
                </h3>

                <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed"
                   style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Join thousands of satisfied customers who trust MOVA for their luxury transportation needs
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative overflow-hidden inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold text-base hover:from-teal-400 hover:to-emerald-400 transition-all duration-300 shadow-2xl hover:shadow-teal-500/25 hover:scale-105"
                          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <Car className="relative w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative">Start Your Journey</span>
                    <ArrowRight className="relative w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <button className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold text-base hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span>24/7 Support</span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-8 mt-6 text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-1" />
                    <span className="text-xs font-medium">Instant Booking</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-emerald-400 mr-1" />
                    <span className="text-xs font-medium">Secure Payment</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-blue-400 mr-1" />
                    <span className="text-xs font-medium">Premium Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
