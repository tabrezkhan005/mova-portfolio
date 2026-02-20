"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car, Shield, Users, Star, MapPin, Calendar, Clock,
  CheckCircle, Award, Zap, Phone, ArrowRight,
  ChevronRight, Heart, Fuel, Settings
} from 'lucide-react';

export default function HomePage() {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [currentBanner, setCurrentBanner] = useState(0);

  // Banner images for carousel
  const bannerImages = ['/images/img1.png', '/images/banner3.png', '/images/img4.png'];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Featured cars data - populate with real data when available
  const featuredCars: { id: number; name: string; category: string; price: string; image: string; seats: number; fuel: string; transmission: string; rating: number }[] = [];

  // Why choose us features
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Full Insurance",
      description: "Comprehensive coverage included with every rental for your peace of mind."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help on the road."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Best Prices",
      description: "Competitive rates with no hidden fees. Transparent pricing always."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Booking",
      description: "Book your car in under 2 minutes with our streamlined process."
    }
  ];

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={bannerImages[currentBanner]}
                alt="Premium Car Rental"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00252e]/60 via-[#00252e]/40 to-[#00252e]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00252e]/70 via-transparent to-transparent" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[10%] w-32 sm:w-64 h-32 sm:h-64 bg-[#00a8cc]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-[10%] w-48 sm:w-96 h-48 sm:h-96 bg-[#d4a853]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-[100vh] flex items-center">
          <div className="grid lg:grid-cols-5 gap-12 items-center w-full">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
              >
                <span className="w-2 h-2 bg-[#00a8cc] rounded-full animate-pulse" />
                <span className="text-sm font-medium">Premium Car Rentals</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Your Journey,
                <span className="block mt-2">
                  <span className="text-[#00a8cc]">Your</span>{" "}
                  <span className="relative">
                    Way
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,10 Q50,0 100,10" stroke="#d4a853" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 mb-8 max-w-lg"
              >
                Experience the freedom of the open road with our premium fleet.
                From luxury sedans to rugged SUVs, find your perfect ride.
              </motion.p>



              {/* Carousel Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-2"
              >
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentBanner === index
                        ? 'bg-[#00a8cc] w-10'
                        : 'bg-white/30 w-6 hover:bg-white/50'
                    }`}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#00252e]">Book Your Ride</h2>
                  <p className="text-gray-500 mt-1">Find and reserve your perfect car</p>
                </div>

                <form className="space-y-4">
                  {/* Pickup Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00a8cc]" />
                      <select
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all appearance-none bg-gray-50/80 hover:bg-gray-50"
                      >
                        <option value="">Select pickup location</option>
                        <option value="bangalore-airport">Bangalore Airport</option>
                        <option value="bangalore-city">Bangalore City Center</option>
                        <option value="mumbai-airport">Mumbai Airport</option>
                        <option value="mumbai-city">Mumbai City Center</option>
                        <option value="delhi-airport">Delhi Airport</option>
                        <option value="delhi-city">Delhi City Center</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00a8cc]" />
                        <input
                          type="date"
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all bg-gray-50/80 hover:bg-gray-50 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00a8cc]" />
                        <input
                          type="time"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all bg-gray-50/80 hover:bg-gray-50 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Return Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00a8cc]" />
                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all bg-gray-50/80 hover:bg-gray-50 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Return Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00a8cc]" />
                        <input
                          type="time"
                          value={returnTime}
                          onChange={(e) => setReturnTime(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all bg-gray-50/80 hover:bg-gray-50 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Search Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#00a8cc] to-[#00252e] hover:from-[#00252e] hover:to-[#00a8cc] text-white font-semibold rounded-xl transition-all duration-500 flex items-center justify-center gap-2 shadow-lg shadow-[#00a8cc]/20 group"
                  >
                    <Car className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Search Available Cars
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Quick Info */}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Free Cancellation
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#00a8cc]" />
                      Full Insurance
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured Cars Section */}
      {featuredCars.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-[#00252e]/10 rounded-full text-[#00252e] text-sm font-medium mb-4"
              >
                Our Fleet
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-4"
              >
                Featured Vehicles
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                Choose from our selection of premium vehicles, each maintained to the highest standards for your comfort and safety.
              </motion.p>
            </motion.div>

            {/* Cars Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {featuredCars.map((car) => (
                <motion.div
                  key={car.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Car Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#00252e] text-white text-xs font-medium rounded-full">
                        {car.category}
                      </span>
                    </div>
                    <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>

                  {/* Car Details */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[#00252e] text-lg">{car.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#d4a853] fill-current" />
                        <span className="text-sm font-medium">{car.rating}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {car.seats}
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="w-4 h-4" />
                        {car.fuel}
                      </div>
                      <div className="flex items-center gap-1">
                        <Settings className="w-4 h-4" />
                        {car.transmission}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-[#00252e]">{car.price}</span>
                        <span className="text-gray-500 text-sm">/day</span>
                      </div>
                      <Link href={`/fleet?car=${car.id}`}>
                        <button className="px-4 py-2 bg-[#00a8cc] hover:bg-[#00a8cc]/90 text-white text-sm font-medium rounded-lg transition-colors">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link href="/fleet">
                <button className="px-8 py-3 border-2 border-[#00252e] text-[#00252e] hover:bg-[#00252e] hover:text-white font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2">
                  View All Vehicles
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/img.png"
                  alt="Why Choose MOVA"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 right-0 sm:-right-6 bg-white rounded-xl shadow-xl p-4 sm:p-6 max-w-[200px] sm:max-w-xs">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#00252e] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Need Help?</p>
                    <p className="font-bold text-[#00252e] text-sm sm:text-base">+91 93909 83993</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-[#00252e]/10 rounded-full text-[#00252e] text-sm font-medium mb-4"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-6"
              >
                Best Valued Deals You Will Ever Find
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 mb-10"
              >
                We provide exceptional car rental services with a focus on quality, reliability, and customer satisfaction. Our commitment is to make your journey memorable.
              </motion.p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#00252e]/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-[#00252e] rounded-xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#00252e] mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Journey With Us - Timeline Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[10%] w-48 sm:w-96 h-48 sm:h-96 bg-[#00a8cc]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[10%] w-48 sm:w-96 h-48 sm:h-96 bg-[#d4a853]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-[#00252e]/10 rounded-full text-[#00252e] text-sm font-medium tracking-wider mb-4"
            >
              SEAMLESS EXPERIENCE
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-4"
            >
              Your Journey With Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Experience our thoughtfully designed process that ensures exceptional mobility at every touchpoint
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00a8cc] via-[#d4a853] to-[#00a8cc]" />

            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  side: "left",
                  badge: "Begin",
                  title: "Choose Your Perfect Vehicle",
                  description: "Browse our curated collection of premium vehicles with detailed specifications and virtual tours.",
                  features: ["Virtual 360° Tours", "Detailed Specifications"],
                  icon: <Car className="w-6 h-6" />
                },
                {
                  side: "right",
                  badge: "Continue",
                  title: "Select Your Locations",
                  description: "Choose from our extensive network of pickup and drop-off points across major cities and airports.",
                  features: ["Door-to-Door Delivery", "Airport Terminals"],
                  icon: <MapPin className="w-6 h-6" />
                },
                {
                  side: "left",
                  badge: "Begin",
                  title: "Customize Your Schedule",
                  description: "Select dates and times with flexible options including extended hours and early morning pickups.",
                  features: ["Flexible Hours", "Extended Rentals"],
                  icon: <Calendar className="w-6 h-6" />
                },
                {
                  side: "right",
                  badge: "Continue",
                  title: "Secure Digital Access",
                  description: "Receive your encrypted digital key and vehicle information through our secure mobile application.",
                  features: ["Encrypted Keys", "Contactless Access"],
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  side: "left",
                  badge: "Begin",
                  title: "Enjoy Premium Experience",
                  description: "Experience the pinnacle of automotive luxury with our meticulously maintained premium vehicles.",
                  features: ["Concierge Support", "Roadside Assistance"],
                  icon: <Star className="w-6 h-6" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${index !== 0 ? 'lg:mt-12' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-12 h-12 bg-white/80 backdrop-blur-xl border-2 border-[#00a8cc] rounded-full items-center justify-center text-[#00a8cc] z-10 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className={`${item.side === 'right' ? 'lg:col-start-2' : ''}`}>
                    <div className={`backdrop-blur-xl bg-[#00252e]/80 border border-[#00a8cc]/20 rounded-2xl p-6 hover:bg-[#00252e]/90 hover:border-[#00a8cc]/40 transition-all duration-300 shadow-xl ${item.side === 'right' ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <span className="inline-block px-3 py-1 bg-[#00a8cc]/20 text-[#00a8cc] text-xs font-medium rounded-full mb-4">
                        {item.badge}
                      </span>
                      <div className="flex items-start gap-4">
                        <div className="lg:hidden flex-shrink-0 w-10 h-10 bg-[#00a8cc]/20 rounded-xl flex items-center justify-center text-[#00a8cc]">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-300 mb-4">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-[#d4a853]/20 text-[#d4a853] text-sm rounded-full"
                              >
                                <CheckCircle className="w-3 h-3" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-[#00252e]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="relative z-10 p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-gray-300 max-w-xl">
                  Book your premium car rental today and experience the MOVA difference.
                  Quality vehicles, exceptional service, unbeatable prices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/fleet">
                  <button className="px-8 py-4 bg-[#00a8cc] hover:bg-[#00a8cc]/90 text-white font-semibold rounded-xl transition-all duration-300 whitespace-nowrap">
                    Book Now
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/30 whitespace-nowrap">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
