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

              {/* Modern Headline */}
              <div className="mb-8">
                                 <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight uppercase animate-fade-in-up">
                   <span className="block">{heroSlides[currentSlide].title.split(' ')[0]}</span>
                   <span className="block text-teal-400">{heroSlides[currentSlide].title.split(' ').slice(1).join(' ')}</span>
                 </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                {heroSlides[currentSlide].subtitle}
              </p>

                                           {/* Modern Search Bar */}
              <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Location Input */}
                    <div className="relative">
                      <label className="block text-white text-sm font-medium mb-2">Pick-up Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Enter location"
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Start Date */}
                    <div className="relative">
                      <label className="block text-white text-sm font-medium mb-2">Start Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 w-5 h-5" />
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-teal-400 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* End Date */}
                    <div className="relative">
                      <label className="block text-white text-sm font-medium mb-2">End Date</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 w-5 h-5" />
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-teal-400 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="relative">
                      <label className="block text-transparent text-sm font-medium mb-2">Search</label>
                      <button className="w-full bg-teal-500 hover:bg-teal-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Search Cars
                      </button>
                    </div>

                  </div>
                </div>
              </div>

                          {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center shadow-lg hover:shadow-xl">
                  <Car className="w-6 h-6 mr-3" />
                  {heroSlides[currentSlide].cta}
                </button>

                <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center hover:bg-white/10">
                  <Play className="w-6 h-6 mr-3" />
                  Watch Video
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
<section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div className="text-center mb-20">
     <span className="inline-block px-6 py-2 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full text-teal-700 text-sm font-semibold mb-4">
       Our Fleet
     </span>
     <h2 className="text-5xl font-bold text-gray-900 mb-6">Premium Car Rentals</h2>
     <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Discover our collection of well-maintained vehicles for your perfect journey</p>
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

             <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
             <p className="text-sm text-gray-600 mb-3">{car.model}</p>

             <div className="flex items-center justify-between">
               <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                 {car.price}<span className="text-sm text-gray-500 font-normal">/day</span>
               </div>
             </div>
           </div>

           <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg ${
             car.popular
               ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600'
               : 'bg-gray-900 text-white hover:bg-teal-600'
           }`}>
             View Details
             <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
           </button>
         </div>
       </div>
     ))}
   </div>

   <div className="text-center mt-16">
     <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
       View All Vehicles
       <ArrowRight className="w-5 h-5 ml-2" />
     </button>
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
