"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield, Star,
  CheckCircle, Award, Target, Heart, ArrowRight,
  Linkedin, Twitter
} from 'lucide-react';

export default function AboutPage() {
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

  // Company values
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Every vehicle undergoes rigorous safety checks before each rental."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer Care",
      description: "Dedicated support team available 24/7 for all your needs."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality",
      description: "Premium vehicles maintained to the highest standards."
    }
  ];

  // Team members
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Priya Sharma",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Amit Singh",
      role: "Fleet Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Neha Patel",
      role: "Customer Success Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  // Milestones
  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to revolutionize car rentals in India" },
    { year: "2019", title: "100 Vehicles", description: "Expanded our fleet to serve more customers across major cities" },
    { year: "2021", title: "10,000 Customers", description: "Reached our first major milestone in customer satisfaction" },
    { year: "2023", title: "Pan-India Presence", description: "Extended services to 50+ locations across India" },
    { year: "2024", title: "Digital Innovation", description: "Launched our mobile app for seamless booking experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#00252e] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-[#00a8cc] text-sm font-medium mb-6"
            >
              About MOVA
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Driving Excellence
              <span className="block text-[#00a8cc]">Since 2018</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We&apos;re on a mission to make premium car rental accessible,
              convenient, and enjoyable for everyone across India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
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
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/banner3.png"
                  alt="MOVA Story"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00252e]">6+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00a8cc]">200+</div>
                    <div className="text-sm text-gray-500">Fleet Size</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
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
                Our Story
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-6"
              >
                From Humble Beginnings to Industry Leaders
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 mb-6 leading-relaxed"
              >
                MOVA was born from a simple idea: car rental should be easy, affordable,
                and premium for everyone. What started as a small fleet of 10 cars in
                Bangalore has grown into a nationwide service trusted by thousands.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 mb-8 leading-relaxed"
              >
                Our commitment to quality, transparency, and customer satisfaction has
                made us one of the fastest-growing car rental services in India. We
                believe that every journey deserves a great vehicle and exceptional service.
              </motion.p>

              {/* Quick Facts */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00a8cc]" />
                  <span className="text-gray-700">50+ Locations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00a8cc]" />
                  <span className="text-gray-700">10K+ Customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00a8cc]" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00a8cc]" />
                  <span className="text-gray-700">4.9 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#00252e] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#00252e] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, reliable, and premium car rental services that
                empower people to travel with freedom and confidence. We aim to make
                every journey memorable through exceptional vehicles and unparalleled
                customer service.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#00252e] p-10 rounded-2xl"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-[#00a8cc]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become India&apos;s most trusted and innovative car rental platform,
                setting new standards for quality, convenience, and sustainability in
                the mobility industry. We envision a future where premium travel is
                accessible to all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-4"
            >
              What Drives Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Our core values shape everything we do, from how we maintain our
              vehicles to how we serve our customers.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 mx-auto bg-[#00252e] rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#00252e] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Milestones We&apos;re Proud Of
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20 hidden md:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-block">
                      <div className="text-[#00a8cc] font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#00a8cc] rounded-full relative z-10 ring-4 ring-[#00252e]" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Team
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-[#00252e] mb-4"
            >
              Meet the People Behind MOVA
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Our dedicated team works tirelessly to ensure you have the best
              car rental experience possible.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00252e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a href={member.social.linkedin} className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#00252e]">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#00252e] rounded-3xl p-10 sm:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Experience MOVA?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who trust MOVA for their
              car rental needs. Book your first ride today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fleet">
                <button className="px-8 py-4 bg-[#00a8cc] hover:bg-[#00a8cc]/90 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  Browse Our Fleet
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/30">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
