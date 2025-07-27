"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Tag, ChevronRight, Clock, Calendar, Car, 
  Shield, CreditCard, Zap, Sparkles, CheckCircle,
  ArrowRight, Gift, Percent, Users, ThumbsUp,
  BadgeDollarSign, Star, Search, FilterX, MapPin
} from 'lucide-react';
import Link from 'next/link';
import Cursor from '../components/Cursor';

/**
 * Drive & Save Page for Mova Car Rental
 * Special offers and deals for customers
 */
export default function DriveSavePage() {
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

  // Add smooth scrolling
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle anchor links with smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a[href^="#"]');
      if (!target) return;
      
      e.preventDefault();
      const href = target.getAttribute('href');
      if (href) {
        const id = href.slice(1);
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Featured deals data
  const featuredDeals = [
    {
      id: 1,
      title: "Weekend Getaway",
      discount: "25% OFF",
      description: "Enjoy 25% off on weekend rentals, perfect for short trips and city exploration",
      validUntil: "Jun 30, 2025",
      code: "WEEKEND25",
      image: "https://images.unsplash.com/photo-1592853598064-3d51dd2126a7?q=80&w=640&auto=format&fit=crop",
      badge: "Popular",
      color: "emerald"
    },
    {
      id: 2,
      title: "Weekly Business Deal",
      discount: "30% OFF",
      description: "Save 30% when you book for a full week, ideal for business trips and extended stays",
      validUntil: "Dec 31, 2025",
      code: "BIZ30WEEK",
      image: "https://images.unsplash.com/photo-1585974738771-84483dd9f89f?q=80&w=640&auto=format&fit=crop",
      badge: "Best Value",
      color: "teal"
    },
    {
      id: 3,
      title: "Premium SUV Discount",
      discount: "20% OFF",
      description: "Upgrade to a premium SUV at 20% off the regular rate, perfect for family trips",
      validUntil: "Aug 15, 2025",
      code: "SUVPREMIUM",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=640&auto=format&fit=crop",
      badge: "Limited",
      color: "green"
    }
  ];

  // Loyalty tiers
  const loyaltyTiers = [
    {
      tier: "Silver",
      points: "0-500",
      benefits: ["5% discount on all bookings", "Free cancellation", "Priority customer support"],
      color: "from-slate-300 to-slate-400",
      textColor: "text-slate-700"
    },
    {
      tier: "Gold",
      points: "501-1000",
      benefits: ["10% discount on all bookings", "Free upgrades when available", "Dedicated concierge", "Flexible booking changes"],
      color: "from-amber-300 to-amber-500",
      textColor: "text-amber-800"
    },
    {
      tier: "Platinum",
      points: "1001+",
      benefits: ["15% discount on all bookings", "Guaranteed upgrades", "Airport lounge access", "Premium vehicle priority", "24/7 personal assistant"],
      color: "from-emerald-400 to-teal-600",
      textColor: "text-white"
    }
  ];

  // Special offers data
  const specialOffers = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Extended Rentals",
      description: "Save up to 35% when you rent for a month or longer",
      color: "bg-emerald-50"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Package",
      description: "Free child seat and additional driver with family bookings",
      color: "bg-teal-50"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Electric Discount",
      description: "15% off when you choose our eco-friendly electric vehicles",
      color: "bg-green-50"
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      title: "Corporate Rates",
      description: "Special pricing for registered business customers",
      color: "bg-emerald-50"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How do I redeem a promo code?",
      answer: "Simply enter your promo code on the checkout page before confirming your reservation. The discount will be automatically applied to your total."
    },
    {
      question: "Can I combine multiple discounts or offers?",
      answer: "Most promotional offers cannot be combined with other discounts. However, loyalty program benefits can usually be used alongside seasonal promotions."
    },
    {
      question: "How do I earn loyalty points?",
      answer: "You earn 1 point for every dollar spent on rentals. Additional points can be earned through referrals, completing surveys, and participating in special promotions."
    },
    {
      question: "Are there any blackout dates for promotional offers?",
      answer: "Some seasonal promotions may have blackout dates during peak travel periods. These dates are always clearly indicated in the offer terms and conditions."
    },
    {
      question: "What is the cancellation policy for bookings made with promotional offers?",
      answer: "Bookings made with promotional offers typically follow our standard cancellation policy, which allows free cancellation up to 48 hours before pickup. Some special deals may have different cancellation terms, which will be clearly indicated during the booking process."
    },
    {
      question: "How do I upgrade my loyalty tier status?",
      answer: "Your tier status automatically upgrades when you reach the required point threshold within a calendar year. Silver status begins at 0 points, Gold at 501 points, and Platinum at 1001+ points. Once upgraded, your new status is valid for the remainder of the current year plus the entire following year."
    },
    {
      question: "Do loyalty points expire?",
      answer: "Yes, loyalty points expire 24 months after they are earned if not redeemed. However, any activity on your account (rental or redemption) will reset the expiration date for all your existing points."
    },
    {
      question: "Are there age restrictions for promotional offers?",
      answer: "Most promotional offers are available to all customers who meet our standard rental requirements (minimum age 25). Some specific deals targeting younger drivers (ages 21-24) are available with our Young Driver Program, though additional fees may apply."
    },
    {
      question: "Can international customers take advantage of these deals?",
      answer: "Yes, most promotional offers are available to international customers. You'll need a valid driver's license, passport, and credit card. Some location-specific promotions may have residency requirements, which will be noted in the offer terms."
    },
    {
      question: "How does the referral program work?",
      answer: "When you refer a friend, they receive 15% off their first rental, and you earn 100 loyalty points after they complete their first rental. There's no limit to how many friends you can refer. Points are typically added to your account within 7-10 days after your friend's completed rental."
    },
    {
      question: "Do you offer special discounts for corporate accounts?",
      answer: "Yes, we offer tailored corporate programs with customized rates based on volume and frequency of rentals. Corporate accounts also receive priority service, dedicated account management, and simplified billing options. Contact our business team for more details."
    },
    {
      question: "Are there discounts for military personnel, seniors, or students?",
      answer: "Yes, we offer a 10% discount for active military personnel and veterans (with valid ID), seniors aged 65+ (with ID), and students (with current student ID). These discounts can sometimes be combined with seasonal promotions at our discretion."
    },
    {
      question: "What happens if I need to extend my rental that was booked with a promotional code?",
      answer: "Extensions are subject to vehicle availability and current rates. The promotional rate applies only to the original booking period. Any additional days will be charged at the standard rate, though your loyalty tier discounts will still apply."
    },
    {
      question: "Do you offer last-minute booking discounts?",
      answer: "Yes, we offer last-minute deals through our app and website for bookings made within 48 hours of pickup. These flash deals can offer savings of up to 35% depending on vehicle availability and location."
    },
    {
      question: "How often are new promotions and deals released?",
      answer: "We launch new seasonal promotions quarterly, with special flash deals introduced monthly. Subscribe to our newsletter or enable notifications in our app to be the first to know about new savings opportunities."
    },
    {
      question: "Can I use my loyalty points for services other than vehicle rentals?",
      answer: "Yes, loyalty points can be redeemed for various services including airport lounge access, travel insurance upgrades, premium roadside assistance, and partner hotel discounts. Visit your account dashboard to see all available redemption options."
    }
  ];

  // State for FAQs
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Global styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @media screen and (max-width: 768px) {
          .container-fluid {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #0d9488;
        }
        
        /* Prevent horizontal overflow */
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-dashed border-emerald-200 rounded-full opacity-30 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-emerald-100/50 rounded-full animate-pulse"></div>
        
        <div className="container-fluid max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 mb-6 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Tag className="w-4 h-4 mr-2" />
              <span>Exclusive Savings</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Drive &{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Save
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Discover exclusive deals and special offers designed to maximize your savings while experiencing premium mobility with MOVA.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#featured-deals" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-lg shadow-emerald-200 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Current Deals
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a 
                href="#loyalty" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white border border-gray-200 text-gray-800 hover:border-emerald-300 hover:bg-emerald-50 rounded-lg font-medium hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Loyalty Program
              </motion.a>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1">30%</p>
                <p className="text-xs md:text-sm text-gray-600">Average Savings</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1">5k+</p>
                <p className="text-xs md:text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1">24/7</p>
                <p className="text-xs md:text-sm text-gray-600">Support Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Deals Section */}
      <section id="featured-deals" className="py-16 md:py-20 bg-white relative">
        <div className="container-fluid max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured <span className="text-emerald-600">Deals</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Limited-time offers designed to give you the best value on premium vehicles
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredDeals.map((deal) => (
              <motion.div 
                key={deal.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold bg-${deal.color}-600`}>
                    {deal.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-2xl">{deal.discount}</p>
                    <h3 className="text-xl font-semibold">{deal.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {deal.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Valid until {deal.validUntil}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      <span>{deal.code}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 px-4 bg-emerald-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
                    <span>Book With This Deal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Banner */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 md:p-8 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-6 items-center relative z-10">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold mb-2">Limited Time: 20% Off First Booking</h3>
                <p className="text-emerald-100">Use code <span className="font-semibold">FIRSTMOVA20</span> at checkout to enjoy 20% off your first rental with us</p>
              </div>
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <button className="px-6 py-3 bg-white text-emerald-600 hover:bg-emerald-50 rounded-lg shadow-lg font-medium transition-all hover:shadow-xl hover:translate-y-[-2px]">
                  Book Now & Save
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loyalty Program Section */}
      <section id="loyalty" className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container-fluid max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 mb-6 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ThumbsUp className="w-4 h-4 mr-2" />
              <span>Loyalty Rewards</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MOVA Loyalty Program
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our loyalty program to earn points with every rental and unlock premium benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {loyaltyTiers.map((tier, index) => (
              <motion.div 
                key={tier.tier}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`bg-gradient-to-r ${tier.color} p-6 ${tier.textColor}`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{tier.tier}</h3>
                    <div className="text-xs font-medium px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      {tier.points} points
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Benefits:</h4>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 md:mt-16 bg-white shadow-lg rounded-xl p-6 md:p-8 relative overflow-hidden border border-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  How to Earn Points
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Car className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Rental Bookings</p>
                      <p className="text-gray-600 text-sm">1 point for every $1 spent on rentals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Referrals</p>
                      <p className="text-gray-600 text-sm">100 points for each friend who completes their first rental</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Special Events</p>
                      <p className="text-gray-600 text-sm">Bonus points during promotional periods and seasonal events</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  How to Redeem
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Percent className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Discounts</p>
                      <p className="text-gray-600 text-sm">Apply points for instant discounts on your rentals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Upgrades</p>
                      <p className="text-gray-600 text-sm">Use points to upgrade your vehicle category</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Gift className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Exclusive Rewards</p>
                      <p className="text-gray-600 text-sm">Redeem for partner rewards and premium services</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
                Join the Loyalty Program Today
              </button>
              <p className="mt-3 text-sm text-gray-500">Already a member? <a href="#" className="text-emerald-600 font-medium">Sign in to check your points</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Offers Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-fluid max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special <span className="text-emerald-600">Offers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of special packages designed for different needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {specialOffers.map((offer, index) => (
              <motion.div 
                key={index}
                className={`${offer.color} rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 text-emerald-600">
                  {offer.icon}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
                
                <div className="mt-6">
                  <a href="#" className="flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-fluid max-w-4xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our special offers and loyalty program
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  <ChevronRight 
                    className={`w-5 h-5 text-emerald-600 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-90' : ''}`}
                  />
                </button>
                
                <motion.div 
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: openFAQ === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-fluid max-w-6xl mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-8 md:p-12 items-center relative z-10">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Save on Your Next Adventure?
                </h2>
                <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                  Browse our premium vehicle selection and apply these special offers to your booking for instant savings on your next journey.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/fleet" 
                    className="px-6 py-3 bg-white text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium hover:shadow-lg transition-all hover:translate-y-[-2px]"
                  >
                    Browse Vehicles
                  </Link>
                  <Link 
                    href="#featured-deals" 
                    className="px-6 py-3 bg-emerald-700 text-white hover:bg-emerald-800 rounded-lg font-medium transition-colors"
                  >
                    View All Deals
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Find Your Perfect Deal
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pick-up Location
                      </label>
                      <div className="relative">
                        <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Enter city or airport"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pick-up Date
                        </label>
                        <div className="relative">
                          <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Return Date
                        </label>
                        <div className="relative">
                          <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Promo Code
                      </label>
                      <div className="relative">
                        <Tag className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Enter promo code (optional)"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
                      Find Available Deals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-emerald-50">
        <div className="container-fluid max-w-4xl mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get Exclusive Deals Straight to Your Inbox
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive special offers, promo codes, and insider savings tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent flex-grow"
              />
              <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-md">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

