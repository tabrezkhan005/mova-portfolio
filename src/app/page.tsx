"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Car, Shield, Users, Star, ChevronLeft, ChevronRight, MapPin, 
  Calendar, Clock, CheckCircle, Award, Zap, Phone, Mail, 
  ArrowRight, Play, Sparkles, ArrowUpRight, Disc
} from 'lucide-react';
import Cursor from './components/Cursor';
import HeroSection from './components/HeroSection';

export default function MovaTechHomepage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fully Insured & Protected",
      description: "Comprehensive coverage with zero liability options for complete peace of mind on every journey.",
      color: "emerald"
    },
    {
      icon: <Disc className="w-8 h-8" />,
      title: "24/7 Concierge",
      description: "Round-the-clock premium support with dedicated personal assistants at your service.",
      color: "teal" 
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Elite Fleet",
      description: "Meticulously maintained collection of award-winning vehicles updated every quarter.",
      color: "cyan"
    }
  ];

  const carTypes = [
    {
      name: "XC90 Excellence",
      price: "₹8,500",
      originalPrice: "₹10,200",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Elevated Comfort", "Advanced Safety", "Premium Sound", "Concierge Service"],
      popular: true,
      savings: "17% Off",
      category: "Luxury SUV"
    },
    {
      name: "Model S Plaid",
      price: "₹12,500",
      originalPrice: "₹15,000",
      image: "https://images.unsplash.com/photo-1633932145214-a4c3bb3e0ecd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Ludicrous Speed", "Full Self-Driving", "Premium Interior", "Extended Range"],
      popular: false,
      savings: "15% Off",
      category: "Electric Performance"
    },
    {
      name: "7 Series M Sport",
      price: "₹14,800",
      originalPrice: "₹18,000",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Executive Comfort", "Driving Assistant", "Bowers & Wilkins", "Panoramic Roof"],
      popular: false,
      savings: "18% Off",
      category: "Luxury Sedan"
    }
  ];

  const journeySteps = [
    {
      title: "Select Your Vehicle",
      description: "Browse our curated collection of premium vehicles",
      icon: <Car className="w-6 h-6" />,
    },
    {
      title: "Choose Location",
      description: "Select pickup and drop-off points convenient for you",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Set Your Schedule",
      description: "Select dates and times that fit your itinerary",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Digital Access",
      description: "Receive secure digital key and vehicle information",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Experience Excellence",
      description: "Enjoy your premium driving experience",
      icon: <Star className="w-6 h-6" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Cursor color="rgba(20, 184, 166, 0.3)" enableTrail={true} />
      
      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@400;500;600;700;800&display=swap');
        
        body {
          font-family: 'DM Sans', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6, .heading-font {
          font-family: 'Syne', sans-serif;
        }
        
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        
        .clip-path-slant-reverse {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
        
        .text-stroke {
          -webkit-text-stroke: 1px rgba(20, 184, 166, 0.3);
          color: transparent;
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        .text-outline {
          text-shadow: 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #10b981, #14b8a6, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-7px);
          }
        }
        
        .rotate-slow {
          animation: rotateSlow 20s linear infinite;
        }
        
        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .hover-3d {
          transition: transform 0.5s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .hover-3d:hover {
          transform: rotateX(2deg) rotateY(5deg) scale(1.02);
        }
        
        .text-shadow {
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        
        .circle-clip {
          clip-path: circle(50% at center);
        }
        
        .glassmorphism {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Use the imported HeroSection component */}
      <HeroSection />
      
      {/* Features Section with Modern Design */}
      <section className="py-32 relative overflow-hidden bg-white" id="features">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 opacity-10 bg-noise"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/3"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="w-12 h-0.5 bg-emerald-500 mr-4"></span>
              <span className="text-sm text-emerald-600 uppercase font-medium tracking-wider">Why Choose MOVA</span>
              <span className="w-12 h-0.5 bg-emerald-500 ml-4"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-font tracking-tight text-gray-900">
              Exceptional <span className="text-gradient">Experience</span>
            </h2>
            
            <p className="text-lg text-gray-600">
              Beyond car rental — a premium mobility experience crafted for modern professionals
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 hover-3d shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Feature Corner Accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>
                
                {/* Feature Icon */}
                <div className={`relative mb-6 w-16 h-16 rounded-xl bg-${feature.color}-50 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                  <div className={`text-${feature.color}-600`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Feature Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300 heading-font">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hidden Info that appears on hover */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-sm text-emerald-600">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  
                  <div className="flex">
                    <div className={`w-2 h-2 rounded-full bg-${feature.color}-400 mr-1`}></div>
                    <div className={`w-2 h-2 rounded-full bg-${feature.color}-300 mr-1`}></div>
                    <div className={`w-2 h-2 rounded-full bg-${feature.color}-200`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fleet Section - Premium Display */}
      <section className="py-32 bg-gray-50 relative overflow-hidden" id="fleet">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-70"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center mb-4">
                <span className="w-10 h-0.5 bg-emerald-500 mr-4"></span>
                <span className="text-sm text-emerald-600 uppercase font-medium tracking-wider">Premium Collection</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-font tracking-tight text-gray-900">
                Luxury <span className="text-gradient">Fleet</span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Discover our meticulously maintained collection of premium vehicles, updated quarterly to provide you with the latest in automotive excellence.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <a href="#all-vehicles" className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all duration-300">
                View All Vehicles
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Vehicle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carTypes.map((car, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-emerald-200">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {/* Popular Badge */}
                  {car.popular && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1 text-yellow-300 fill-yellow-300" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full text-xs font-medium">
                      {car.category}
                    </div>
                  </div>
                  
                  {/* Image with Hover Effect */}
                  <div className="absolute inset-0 bg-gray-900">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Car Details Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex justify-between items-end">
                      <h3 className="text-xl font-bold heading-font">
                        {car.name}
                      </h3>
                      
                      <div className="text-right">
                        <div className="text-sm text-white/70 line-through">
                          {car.originalPrice}
                        </div>
                        <div className="text-xl font-bold text-emerald-400">
                          {car.price}
                        </div>
                        <div className="text-xs text-white/70">per day</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Car Features */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                      {car.savings}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-medium transition-all duration-300 flex items-center">
                      <Car className="w-4 h-4 mr-2" />
                      Book Now
                    </button>
                    
                    <button className="px-4 py-3 text-gray-700 hover:text-emerald-700 text-sm font-medium transition-colors duration-300 flex items-center">
                      Details
                      <ArrowUpRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Journey Process Section */}
      <section className="py-32 bg-white relative overflow-hidden" id="experience">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 bg-noise"></div>
        <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gray-100"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-0.5 bg-gray-100"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="w-12 h-0.5 bg-emerald-500 mr-4"></span>
              <span className="text-sm text-emerald-600 uppercase font-medium tracking-wider">Seamless Process</span>
              <span className="w-12 h-0.5 bg-emerald-500 ml-4"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-font tracking-tight text-gray-900">
              Your <span className="text-gradient">Journey</span> With Us
            </h2>
            
            <p className="text-lg text-gray-600">
              Experience our innovative approach to luxury mobility, designed for effortless excellence
            </p>
          </div>
          
          {/* Journey Steps - Modern Interactive Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-100 transform -translate-x-1/2 z-0"></div>
            
            <div className="space-y-28 relative">
              {journeySteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Step Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8 md:pr-16' : 'text-left pl-8 md:pl-16'}`}>
                    <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover-3d">
                      <h3 className="text-2xl font-bold heading-font mb-4 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-xl border border-emerald-100 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Modern Statistics Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "12K+", label: "Happy Customers" },
              { number: "650+", label: "Premium Vehicles" },
              { number: "80+", label: "Cities Covered" },
              { number: "24/7", label: "Concierge Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 heading-font">
                  {stat.number}
                </div>
                <div className="text-emerald-200 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 relative overflow-hidden">
              {/* Accent Corner */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
              
              {/* Circle Brand Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-200/20 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-emerald-200/30 rounded-full opacity-30"></div>
              
              <div className="relative">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center justify-center mb-4">
                    <span className="w-10 h-0.5 bg-emerald-500 mr-4"></span>
                    <span className="text-sm text-emerald-600 uppercase font-medium tracking-wider">Ready to Start?</span>
                    <span className="w-10 h-0.5 bg-emerald-500 ml-4"></span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-font tracking-tight text-gray-900 mb-8">
                    Experience Luxury <span className="text-gradient">Mobility</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-10">
                    Join thousands of satisfied customers who have transformed their travel experience with MOVA's premium service and exceptional fleet.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center">
                      <Car className="mr-2 w-5 h-5" />
                      <span>Book Your Experience</span>
                    </button>
                    
                    <button className="px-8 py-4 bg-white border border-emerald-200 hover:border-emerald-300 text-gray-900 hover:bg-emerald-50 rounded-full font-medium transition-all duration-300 flex items-center justify-center">
                      <Phone className="mr-2 w-5 h-5 text-emerald-600" />
                      <span>Contact Concierge</span>
                    </button>
                  </div>
                  
                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                    <div className="text-center">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-100/50 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-800 font-medium">Fully Insured</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-100/50 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-800 font-medium">Quality Guarantee</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-100/50 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-800 font-medium">Premium Service</div>
                    </div>
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