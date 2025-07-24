"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Car, Shield, Users, Star, ChevronLeft, ChevronRight, MapPin, Calendar, Clock, CheckCircle, Award, Zap, Phone, Mail, ArrowRight, Play, Sparkles } from 'lucide-react';

export default function MovaTechHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
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



      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            </div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-md rounded-full text-emerald-300 text-sm font-semibold border border-emerald-500/30 animate-fade-in-up">
                ✨ Premium Car Rental Experience
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up leading-tight">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-slide-in-right max-w-3xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Quick Booking Form */}
            <div className="glass-effect rounded-3xl p-8 max-w-5xl mx-auto mb-8 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex items-center space-x-4 bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <MapPin className="text-emerald-300 w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-white text-sm font-medium mb-1">Pick-up Location</label>
                    <input type="text" placeholder="Enter location" className="bg-transparent text-white placeholder-gray-300 border-none outline-none w-full text-lg" />
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Calendar className="text-blue-300 w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-white text-sm font-medium mb-1">Pick-up Date</label>
                    <input type="date" className="bg-transparent text-white border-none outline-none w-full text-lg" />
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Clock className="text-purple-300 w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-white text-sm font-medium mb-1">Return Date</label>
                    <input type="date" className="bg-transparent text-white border-none outline-none w-full text-lg" />
                  </div>
                </div>

                <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Search Cars
                </button>
              </div>
            </div>

            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center mx-auto">
              <Play className="w-5 h-5 mr-3" />
              {heroSlides[currentSlide].cta}
            </button>
          </div>
        </div>

        {/* Enhanced Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 glass-effect text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 glass-effect text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-gradient-to-r from-emerald-500 to-blue-500'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose MovaTech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Experience the difference with our premium car rental services designed for your comfort and convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className={`card-hover text-center p-10 rounded-3xl bg-gradient-to-br ${feature.gradient} shadow-xl border border-white/50`}>
                <div className="mb-8 flex justify-center animate-float">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Types Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">
              Our Fleet
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Choose Your Perfect Ride</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Select from our diverse range of premium vehicles, each offering unique features and exceptional value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {carTypes.map((car, index) => (
              <div key={index} className={`card-hover bg-white rounded-3xl shadow-2xl overflow-hidden border-2 ${car.popular ? 'border-emerald-500 relative' : 'border-transparent'}`}>
                {car.popular && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}

                <div className="relative">
                  <div className="h-56 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${car.image})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {car.savings}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900">{car.name}</h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gradient">{car.price}</div>
                      <div className="text-sm text-gray-500 line-through">{car.originalPrice}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center ${
                    car.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:shadow-2xl transform hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl'
                  }`}>
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">
              Customer Reviews
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Don&apos;t just take our word for it - hear from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-hover bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">Ready to Hit the Road?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">Book your perfect car today and experience premium transportation with MovaTech&apos;s exceptional service</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Car className="w-6 h-6 mr-3" />
              Browse Fleet
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Zap className="w-6 h-6 mr-3" />
              Get Instant Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-bold text-gradient flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-4 flex items-center justify-center">
                  <Car className="w-7 h-7 text-white" />
                </div>
                mova.
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
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
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Special Deals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Our Fleet</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><ArrowRight className="w-4 h-4 mr-2" />About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Locations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Support & Contact</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><Phone className="w-4 h-4 mr-2" />+1 (555) 123-4567</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><Mail className="w-4 h-4 mr-2" />info@movatech.com</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><MapPin className="w-4 h-4 mr-2" />123 Main St, City, State</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><ArrowRight className="w-4 h-4 mr-2" />FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">© 2025 MovaTech. All rights reserved. | Premium Car Rental Services</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
