"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Car, Shield, Users, Star, ChevronLeft, ChevronRight, MapPin,
  Calendar, Clock, CheckCircle, Award, Zap, Phone, Mail,
  ArrowRight, Play, Sparkles, ArrowUpRight, Disc, BadgePlus,
  UserPlus, HeartHandshake, Compass
} from 'lucide-react';
import Cursor from './components/Cursor';
import HeroSection from './components/HeroSection';

export default function MovaTechHomepage() {
  // Enhanced features with better organization and more distinctive descriptions
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Protection",
      description: "Comprehensive insurance with zero liability options for absolute peace of mind throughout your journey.",
      color: "emerald",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50",
      accentColor: "emerald-500"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Personalized Service",
      description: "Dedicated concierge available 24/7 with personalized assistance for any request during your rental experience.",
      color: "emerald",
      bgGradient: "bg-gradient-to-br from-teal-50 to-emerald-50",
      accentColor: "teal-500"
    },
    {
      icon: <BadgePlus className="w-6 h-6" />,
      title: "Exclusive Benefits",
      description: "VIP perks including priority upgrades, enhanced mileage allowance, and airport lounge access for members.",
      color: "emerald",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-green-50",
      accentColor: "green-500"
    }
  ];

  // Enhanced journey steps with additional context and refined descriptions
  const journeySteps = [
    {
      title: "Choose Your Perfect Vehicle",
      description: "Browse our curated collection of premium vehicles with detailed specifications and virtual tours.",
      icon: <Car className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      features: ["Virtual 360° Tours", "Detailed Specifications"]
    },
    {
      title: "Select Your Locations",
      description: "Choose from our extensive network of pickup and drop-off points across major cities and airports.",
      icon: <Compass className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
      features: ["Door-to-Door Delivery", "Airport Terminals"]
    },
    {
      title: "Customize Your Schedule",
      description: "Select dates and times with flexible options including extended hours and early morning pickups.",
      icon: <Calendar className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      features: ["Flexible Hours", "Extended Rentals"]
    },
    {
      title: "Secure Digital Access",
      description: "Receive your encrypted digital key and vehicle information through our secure mobile application.",
      icon: <Zap className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      features: ["Encrypted Keys", "Contactless Access"]
    },
    {
      title: "Enjoy Premium Experience",
      description: "Experience the pinnacle of automotive luxury with our meticulously maintained premium vehicles.",
      icon: <Star className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      features: ["Concierge Support", "Roadside Assistance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Custom cursor with emerald trail */}
      <Cursor color="rgba(16, 185, 129, 0.25)" enableTrail={true} />

      {/* Global Styles - Updated to match other pages with Space Grotesk font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Space Grotesk', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Enhanced scrollbar for premium feel */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #0d9488;
        }

        /* Enhanced animations */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .animated-gradient {
          background-size: 200% 200%;
          animation: gradientFlow 5s ease infinite;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Common background elements */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .text-gradient {
          background: linear-gradient(135deg, #10b981, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Enhanced 3D hover effect */
        .hover-3d {
          transition: transform 0.5s cubic-bezier(0.21, 0.6, 0.35, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .hover-3d:hover {
          transform: translateY(-6px) rotateX(2deg) rotateY(3deg);
        }

        /* Animated underline for links */
        .animated-underline {
          position: relative;
        }

        .animated-underline::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #10b981;
          transform-origin: bottom right;
          transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }

        .animated-underline:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>

      {/* Hero Section Component - Will need to modify this component separately to match font */}
      <HeroSection />

      {/* Enhanced Features Section with more visual interest */}
      <section className="py-28 relative overflow-hidden bg-white" id="features">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 bg-noise"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/3"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-dashed border-emerald-200 rounded-full opacity-30 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 border border-teal-100 rounded-full opacity-40"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mr-4"></span>
              <span className="text-sm text-emerald-600 font-medium tracking-wide">MEMBERSHIP BENEFITS</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-400 ml-4"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Premium <span className="text-gradient">Privileges</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the exclusive advantages that elevate your mobility experience beyond the ordinary
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative ${feature.bgGradient} rounded-xl overflow-hidden hover-3d border border-white shadow-md hover:shadow-xl transition-all duration-500`}
              >
                {/* Enhanced content layout */}
                <div className="p-8">
                  {/* Feature Icon */}
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md border border-white group-hover:scale-110 transition-all duration-500">
                    <div className={`text-${feature.accentColor}`}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  {/* Enhanced CTA link */}
                  <div className="flex justify-between items-center pt-6 border-t border-emerald-100/50">
                    <div className="flex items-center text-sm font-medium text-emerald-700">
                      <span className="animated-underline">Learn more</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>

                {/* Enhanced decorative corner element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-[100px] -translate-y-1/2 translate-x-1/2 opacity-70"></div>
              </div>
            ))}
          </div>

          {/* Added membership badge for visual interest */}
          <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-100">
              <UserPlus className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Join our membership program for exclusive benefits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Process Section */}
      <section className="py-28 bg-gradient-to-br from-emerald-50 via-white to-gray-50 relative overflow-hidden" id="experience">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-10 bg-noise"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>

        {/* Decorative elements */}
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-dashed border-emerald-200 rounded-full opacity-30 animate-[spin_50s_linear_infinite]"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-teal-200 rounded-full opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative px-6 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-100 shadow-sm">
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute -inset-x-full top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shine_3s_ease-in-out_infinite]"></div>
                </div>
                <span className="text-sm text-emerald-600 font-medium tracking-wide">SEAMLESS EXPERIENCE</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Your <span className="text-gradient">Journey</span> With Us
            </h2>

            <div className="flex justify-center mb-8">
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
            </div>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience our thoughtfully designed process that ensures exceptional mobility at every touchpoint
            </p>
          </div>

          {/* Enhanced Journey Flow - Vertical Connected Cards */}
          <div className="relative max-w-5xl mx-auto">
            {/* Journey Flow Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200/50 via-teal-200/50 to-emerald-200/50 transform -translate-x-1/2 z-0"></div>

            {/* Journey Steps */}
            <div className="space-y-24 relative">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Step Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8 md:pr-16' : 'text-left pl-8 md:pl-16'}`}>
                    <div className={`p-8 ${step.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white hover-3d relative group`}>
                      {/* Subtle visual indicator instead of numbers */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-[100px] opacity-40"></div>

                      {/* Step Content */}
                      <div className="mb-1 flex items-center justify-start text-xs font-medium text-emerald-600 tracking-wider">
                        <div className="w-3 h-3 rounded-full bg-emerald-400 mr-2"></div>
                        <span className="uppercase">{index % 2 === 0 ? 'Begin' : index === journeySteps.length - 1 ? 'Complete' : 'Continue'}</span>
                      </div>

                      <h3 className="text-2xl font-bold heading-font mb-4 text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">
                        {step.title}
                      </h3>

                      <div className="h-px w-12 bg-emerald-200 mb-4 group-hover:w-20 transition-all duration-500"></div>

                      <p className="text-gray-700 leading-relaxed mb-5">
                        {step.description}
                      </p>

                      {/* Enhanced Feature Tags */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {step.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-emerald-700 shadow-sm border border-emerald-100/30 group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-20 h-20 rounded-full bg-white shadow-xl border border-emerald-100 p-1.5 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center text-emerald-600">
                        {step.icon}
                      </div>

                      {/* Pulse animation instead of numbers */}
                      <div className="absolute inset-0 rounded-full border-2 border-emerald-200 animate-ping opacity-30"></div>
                      <div className="absolute inset-[-5px] rounded-full border border-emerald-100"></div>
                    </div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Journey completion indicator */}
            <div className="flex justify-center mt-16">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Enhanced Mobile App Promo */}
          <div className="mt-32 relative">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl overflow-hidden shadow-lg border border-emerald-100">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  {/* Mobile app mockup */}
                  <div className="relative w-48 h-96 rounded-3xl bg-gray-800 border-8 border-gray-700 shadow-2xl overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20"></div>
                    <div className="absolute inset-x-0 top-0 h-6 bg-gray-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
                        <div className="text-xs">MOVA App Preview</div>
                      </div>
                    </div>
                  </div>

                  {/* App description */}
                  <div className="flex-1">
                    <div className="inline-flex items-center px-4 py-1 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-emerald-700 shadow-sm mb-4 border border-emerald-100/30">
                      <Zap className="w-3 h-3 mr-1 text-emerald-500" />
                      <span>MOBILE EXPERIENCE</span>
                    </div>

                    <h3 className="text-3xl font-bold heading-font mb-4 text-gray-900">
                      Seamless Digital Access
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      Download our mobile application to unlock the full potential of your MOVA experience. Manage bookings, access digital keys, and receive real-time updates on your vehicle status.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg text-white flex items-center transition-all duration-300 hover:-translate-y-1">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.5,2H8.5L3,8l9,14l9-14L17.5,2z M13,16.7l-3-4.7h6L13,16.7z M12,7.5l1.2,2.5h-2.4L12,7.5z" />
                        </svg>
                        <span>Get on Play Store</span>
                      </button>
                      <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg text-white flex items-center transition-all duration-300 hover:-translate-y-1">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16.5,3H8.5L3,8l9,14l9-14L16.5,3z M13,17.7l-3-4.7h6L13,17.7z M12,8.5l1.2,2.5h-2.4L12,8.5z" />
                        </svg>
                        <span>Download on App Store</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App features list */}
            <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Zap className="w-4 h-4" />, text: "Instant Booking" },
                { icon: <Shield className="w-4 h-4" />, text: "Secure Digital Keys" },
                { icon: <Clock className="w-4 h-4" />, text: "Real-Time Updates" },
                { icon: <MapPin className="w-4 h-4" />, text: "GPS Navigation" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mr-2 text-emerald-600">
                    {feature.icon}
                  </div>
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Premium Design */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Enhanced Decorative Background */}
        <div className="absolute inset-0 opacity-10 bg-noise"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-100/70 to-teal-100/70 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-100/70 to-green-100/70 rounded-full blur-3xl opacity-70"></div>

        {/* Decorative elements */}
        <div className="absolute top-40 left-40 w-20 h-20 border-2 border-dashed border-emerald-200 rounded-full opacity-30 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute bottom-40 right-40 w-10 h-10 bg-emerald-100/30 rounded-full animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main card with elevated design */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative border border-gray-50">
              {/* Top decorative gradient bar */}
              <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>

              {/* Background elements */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 opacity-5 bg-noise"></div>

              <div className="relative">
                {/* Two-column layout for larger screens */}
                <div className="md:grid md:grid-cols-5 items-center">
                  {/* Content column */}
                  <div className="p-10 md:p-16 md:col-span-3">
                    <div className="max-w-2xl">
                      {/* Enhanced badge with animation */}
                      <div className="inline-flex mb-8">
                        <div className="relative px-5 py-2 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-full border border-emerald-100 shadow-sm">
                          <div className="absolute inset-0 overflow-hidden rounded-full">
                            <div className="absolute -inset-x-full top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shine_3s_ease-in-out_infinite]"></div>
                          </div>
                          <span className="text-sm text-emerald-600 font-medium tracking-wide">START YOUR JOURNEY</span>
                        </div>
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold heading-font tracking-tight text-gray-900 mb-6 leading-tight">
                        Experience <span className="text-gradient">Luxury Mobility</span> Like Never Before
                      </h2>

                      <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-6"></div>

                      <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Join thousands of satisfied customers who have transformed their travel experience with MOVA's premium service and exceptional fleet.
                      </p>

                      {/* Enhanced CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-6 mb-8">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg shadow-emerald-200/20 hover:shadow-emerald-300/30 transform hover:-translate-y-1 overflow-hidden">
                          <div className="absolute inset-0 bg-white/10 w-20 h-full transform -skew-x-12 -translate-x-32 transition-transform group-hover:translate-x-64 duration-700 ease-in-out"></div>
                          <Car className="mr-3 w-5 h-5" />
                          <span>Book Your Experience</span>
                        </button>

                        <button className="group px-8 py-4 bg-white border border-gray-200 hover:border-emerald-300 text-gray-900 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg font-medium transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-md">
                          <Phone className="mr-3 w-5 h-5 text-emerald-600" />
                          <span>Contact Concierge</span>
                        </button>
                      </div>

                      {/* Customer testimonial */}
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mt-12">
                        <div className="flex items-center space-x-2 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-4">"MOVA transformed our business travel experience with their exceptional service and premium fleet. A game-changer for our executive team."</p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">Sarah Mitchell</div>
                            <div className="text-xs text-gray-500">Chief Operations Officer, TechGlobal</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side with badges */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-16 md:col-span-2 border-t md:border-t-0 md:border-l border-gray-100">
                    <div className="text-center md:text-left mb-8">
                      <h3 className="text-2xl font-bold heading-font mb-2 text-gray-900">Why Choose MOVA</h3>
                      <p className="text-gray-600">Our commitment to excellence sets us apart</p>
                    </div>

                    {/* Enhanced Trust Badges */}
                    <div className="space-y-6">
                      <div className="group flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-transparent transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm border border-emerald-100/30 group-hover:scale-110 transition-transform duration-500">
                          <Shield className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="ml-5">
                          <div className="font-semibold text-gray-900 mb-1">Fully Insured</div>
                          <div className="text-sm text-gray-600">Premium coverage with zero liability options for your peace of mind</div>
                        </div>
                      </div>

                      <div className="group flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-transparent transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm border border-teal-100/30 group-hover:scale-110 transition-transform duration-500">
                          <CheckCircle className="w-6 h-6 text-teal-600" />
                        </div>
                        <div className="ml-5">
                          <div className="font-semibold text-gray-900 mb-1">Quality Guarantee</div>
                          <div className="text-sm text-gray-600">Meticulously maintained premium vehicles for an exceptional experience</div>
                        </div>
                      </div>

                      <div className="group flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm border border-green-100/30 group-hover:scale-110 transition-transform duration-500">
                          <Sparkles className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="ml-5">
                          <div className="font-semibold text-gray-900 mb-1">Premium Service</div>
                          <div className="text-sm text-gray-600">24/7 concierge service dedicated to your complete satisfaction</div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced trusted by section */}
                    <div className="mt-12 pt-6 border-t border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200"></div>
                        <span className="px-4 text-xs uppercase tracking-wider text-gray-500 font-medium">Trusted By</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                      </div>
                      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-8 w-20 bg-gray-200 rounded opacity-40 hover:opacity-60 transition-opacity"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom decorative accent */}
              <div className="h-1 w-full bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-emerald-400/30"></div>
            </div>

            {/* Quick links section */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <span className="animated-underline">Terms & Conditions</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <span className="animated-underline">Privacy Policy</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <span className="animated-underline">FAQs</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <span className="animated-underline">Support</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Membership Benefits Section */}
      <section className="py-28 relative overflow-hidden bg-white" id="benefits">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-10 bg-noise"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/3"></div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-dashed border-emerald-200 rounded-full opacity-30 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute right-40 bottom-40 w-10 h-10 bg-emerald-200/20 rounded-full animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Section Header with Visual Element */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6 relative">
              {/* Badge with shine effect */}
              <div className="relative px-5 py-2 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-full border border-emerald-100 shadow-sm">
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute -inset-x-full top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shine_3s_ease-in-out_infinite]"></div>
                </div>
                <span className="text-sm text-emerald-600 font-medium tracking-wide">EXCLUSIVE MEMBERSHIP</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font tracking-tight text-gray-900">
              Premium <span className="text-gradient">Privileges</span>
            </h2>

            <div className="flex justify-center mb-8">
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
            </div>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the exclusive advantages that elevate your mobility experience beyond the ordinary
            </p>
          </div>

          {/* Enhanced Features Layout - Staggered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10 mt-24 relative">
            {/* Connecting lines between cards (desktop only) */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-100 to-transparent hidden md:block"></div>

            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative ${index === 1 ? 'md:mt-10' : index === 2 ? 'md:mt-20' : ''}`}
              >
                {/* Enhanced Feature Card */}
                <div className={`${feature.bgGradient} rounded-2xl overflow-hidden hover-3d border border-white shadow-md hover:shadow-xl transition-all duration-500`}>
                  {/* Top Accent Line */}
                  <div className={`h-1 w-full bg-${feature.accentColor}`}></div>

                  <div className="p-8">
                    {/* Enhanced Feature Icon with Better Positioning */}
                    <div className="mb-8 w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md border border-white group-hover:scale-105 transition-all duration-500 -mt-12">
                      <div className={`text-${feature.accentColor}`}>
                        {feature.icon}
                      </div>

                      {/* Corner Indicator */}
                      <div className="absolute -right-1 -top-1 w-6 h-6 rounded-full bg-white border-2 border-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600">
                        {index + 1}
                      </div>
                    </div>

                    {/* Enhanced Feature Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font group-hover:text-emerald-800 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <div className="h-px w-16 bg-emerald-200 mb-4 group-hover:w-24 transition-all duration-500"></div>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      {feature.description}
                    </p>

                    {/* Feature Benefits */}
                    <div className="space-y-3 mb-8">
                      {[
                        index === 0 ? ["Full Coverage Insurance", "Zero Liability"] :
                        index === 1 ? ["24/7 Personal Assistant", "Dedicated Support"] :
                        ["Priority Upgrades", "VIP Airport Access"]
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced CTA link */}
                    <div className="flex justify-between items-center pt-6 border-t border-emerald-100/50">
                      <div className="flex items-center text-sm font-medium text-emerald-700">
                        <span className="animated-underline">Explore Benefits</span>
                        <div className="ml-1 w-6 h-6 rounded-full flex items-center justify-center bg-emerald-50 group-hover/btn:bg-emerald-100 transition-all duration-300">
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </div>
                      </div>

                      {/* Subtle indicator */}
                      <span className="flex items-center text-xs text-emerald-600 opacity-60">
                        <Star className="w-3 h-3 mr-1" />
                        Premium
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-[100px] -translate-y-1/2 translate-x-1/2 opacity-70"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Membership CTA */}
          <div className="mt-24 relative">
            <div className="mx-auto max-w-4xl bg-gradient-to-r from-emerald-900 to-teal-900 rounded-2xl overflow-hidden relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 bg-noise"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h4 className="text-emerald-200 text-lg font-medium mb-2">Become a Member Today</h4>
                    <p className="text-white text-2xl font-bold heading-font mb-4">Unlock Premium Benefits</p>
                    <p className="text-emerald-100/80 max-w-md">Join our elite membership program to enjoy priority bookings, special rates, and exclusive access to limited vehicles.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-white text-emerald-900 hover:bg-emerald-50 rounded-lg font-medium transition-all duration-300 shadow-xl shadow-emerald-950/20 hover:-translate-y-1">
                      Join Now
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
