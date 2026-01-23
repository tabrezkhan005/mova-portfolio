"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Clock, Calendar, Car, Shield, Zap, Sparkles,
  ArrowRight, Gift, Percent, Users,
  Star, Copy, Check, Timer
} from 'lucide-react';

export default function DriveSavePage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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

  // Copy promo code
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Featured deals
  const featuredDeals = [
    {
      id: 1,
      title: "Weekend Getaway",
      discount: "25% OFF",
      description: "Perfect for short trips and city exploration",
      validUntil: "Mar 31, 2026",
      code: "WEEKEND25",
      image: "https://images.unsplash.com/photo-1449965408869-ebd3fee49c77?w=600&h=400&fit=crop",
      badge: "Popular",
      color: "from-[#00a8cc] to-[#00252e]"
    },
    {
      id: 2,
      title: "Weekly Business",
      discount: "30% OFF",
      description: "Ideal for business trips and extended stays",
      validUntil: "Jun 30, 2026",
      code: "BIZWEEK30",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop",
      badge: "Best Value",
      color: "from-[#d4a853] to-[#00252e]"
    },
    {
      id: 3,
      title: "SUV Special",
      discount: "20% OFF",
      description: "Adventure awaits with our premium SUVs",
      validUntil: "Apr 30, 2026",
      code: "SUV20OFF",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
      badge: "Adventure",
      color: "from-green-500 to-[#00252e]"
    }
  ];

  // Additional offers
  const additionalOffers = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "First-Time User",
      discount: "15% OFF",
      description: "New to MOVA? Get 15% off your first rental",
      code: "NEWUSER15"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Monthly Rental",
      discount: "35% OFF",
      description: "Save big on long-term rentals (30+ days)",
      code: "MONTHLY35"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Loyalty Reward",
      discount: "10% OFF",
      description: "Exclusive discount for returning customers",
      code: "LOYAL10"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Electric Vehicle",
      discount: "25% OFF",
      description: "Go green with our EV fleet at special rates",
      code: "GOGREEN25"
    }
  ];

  // How it works
  const howItWorks = [
    {
      step: "01",
      title: "Choose Your Deal",
      description: "Browse our offers and select the one that fits your needs"
    },
    {
      step: "02",
      title: "Copy Promo Code",
      description: "Click to copy the promo code to your clipboard"
    },
    {
      step: "03",
      title: "Apply at Checkout",
      description: "Paste the code during booking to get your discount"
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Full Insurance Included",
      description: "Comprehensive coverage on all discounted rentals"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all bookings"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Premium Vehicles",
      description: "Well-maintained cars in excellent condition"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Free Upgrades",
      description: "Subject to availability on select bookings"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#00252e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#00a8cc]/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#d4a853]/20 rounded-full blur-xl animate-pulse delay-500" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a853]/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#d4a853]" />
              <span className="text-[#d4a853] text-sm font-medium">Special Offers</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Drive More, <span className="text-[#00a8cc]">Save More</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Discover exclusive deals and discounts on your favorite vehicles.
              Use our promo codes and enjoy premium rentals at unbeatable prices.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="#deals">
                <button className="px-8 py-4 bg-[#00a8cc] hover:bg-[#00a8cc]/90 text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center gap-2">
                  View All Deals
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Deals */}
      <section id="deals" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-[#00252e]/10 rounded-full text-[#00252e] text-sm font-medium mb-4"
            >
              Featured Deals
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-4"
            >
              Top Offers This Month
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Limited-time offers on our most popular vehicles and rental packages
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredDeals.map((deal) => (
              <motion.div
                key={deal.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${deal.color} opacity-60`} />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-[#00252e] text-xs font-bold rounded-full">
                      {deal.badge}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-[#d4a853] text-[#00252e] text-lg font-bold rounded-xl">
                      {deal.discount}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00252e] mb-2">{deal.title}</h3>
                  <p className="text-gray-600 mb-4">{deal.description}</p>

                  {/* Validity */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Timer className="w-4 h-4" />
                    Valid until {deal.validUntil}
                  </div>

                  {/* Promo Code */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-4 py-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                      <code className="font-mono font-bold text-[#00252e]">{deal.code}</code>
                    </div>
                    <button
                      onClick={() => copyCode(deal.code)}
                      className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                        copiedCode === deal.code
                          ? 'bg-green-500 text-white'
                          : 'bg-[#00252e] hover:bg-[#003847] text-white'
                      }`}
                    >
                      {copiedCode === deal.code ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#00252e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-[#00a8cc] text-sm font-medium mb-4"
            >
              Simple Process
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              How to Use Promo Codes
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-white/20" />
                )}

                <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center relative">
                  <span className="text-3xl font-bold text-[#00a8cc]">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Offers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-[#00252e]/10 rounded-full text-[#00252e] text-sm font-medium mb-4"
            >
              More Savings
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-4"
            >
              Additional Offers
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalOffers.map((offer, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#00252e] rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-[#00a8cc] transition-colors">
                  {offer.icon}
                </div>
                <div className="text-2xl font-bold text-[#00a8cc] mb-2">{offer.discount}</div>
                <h3 className="font-bold text-[#00252e] mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>

                {/* Code Copy */}
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-3 py-2 bg-white rounded-lg text-sm font-mono font-bold text-[#00252e] border border-gray-200">
                    {offer.code}
                  </code>
                  <button
                    onClick={() => copyCode(offer.code)}
                    className={`p-2 rounded-lg transition-all ${
                      copiedCode === offer.code
                        ? 'bg-green-500 text-white'
                        : 'bg-[#00252e] hover:bg-[#003847] text-white'
                    }`}
                  >
                    {copiedCode === offer.code ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/banner2.png"
                  alt="Benefits"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#d4a853] rounded-full flex items-center justify-center">
                    <Percent className="w-7 h-7 text-[#00252e]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#00252e]">Up to 35%</p>
                    <p className="text-sm text-gray-500">Maximum Savings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits List */}
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
                Why Choose Our Deals
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-6"
              >
                Great Prices, Premium Service
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 mb-8"
              >
                Our offers don&apos;t compromise on quality. Enjoy the same premium
                service and vehicle standards at discounted rates.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#00252e] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#00252e] mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#00252e] rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a8cc]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4a853]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Gift className="w-16 h-16 text-[#d4a853] mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Save on Your Next Rental?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Don&apos;t miss out on these amazing deals. Book now and experience
                premium car rental at unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fleet">
                  <button className="px-8 py-4 bg-[#00a8cc] hover:bg-[#00a8cc]/90 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Browse Fleet
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/">
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/30">
                    Book with Promo
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
