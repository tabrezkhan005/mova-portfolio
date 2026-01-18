"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car, Users, Fuel, Settings, Star, Search, Filter,
  Grid, List, X, MapPin, Calendar, ChevronDown,
  Shield, Clock, CheckCircle, Heart, ArrowRight
} from 'lucide-react';

// Car interface
interface CarType {
  id: number;
  name: string;
  model: string;
  image: string;
  category: string;
  seats: number;
  fuel: string;
  transmission: string;
  rating: number;
  price: number;
  features: string[];
  description: string;
  availability: string;
}

// Fleet data
const fleetData: CarType[] = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    model: "2024 VXI",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
    category: "Hatchback",
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.5,
    price: 1800,
    features: ["AC", "Power Steering", "Music System", "Central Locking"],
    description: "Perfect for city drives and short trips. Fuel efficient and comfortable.",
    availability: "Available"
  },
  {
    id: 2,
    name: "Hyundai Creta",
    model: "2024 SX",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop",
    category: "SUV",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.7,
    price: 3500,
    features: ["Sunroof", "Touchscreen", "Reverse Camera", "Climate Control"],
    description: "Spacious SUV perfect for family trips and weekend getaways.",
    availability: "Available"
  },
  {
    id: 3,
    name: "Honda City",
    model: "2024 ZX",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
    category: "Sedan",
    seats: 5,
    fuel: "Petrol",
    transmission: "CVT",
    rating: 4.6,
    price: 2800,
    features: ["Sunroof", "Honda SENSING", "Touchscreen", "Cruise Control"],
    description: "Premium sedan with advanced safety features and exceptional comfort.",
    availability: "Available"
  },
  {
    id: 4,
    name: "Mahindra Thar",
    model: "2024 LX",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=600&h=400&fit=crop",
    category: "SUV",
    seats: 4,
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.8,
    price: 4500,
    features: ["4WD", "Convertible Top", "Off-road Capable", "Adventure Ready"],
    description: "Ultimate adventure vehicle for off-road enthusiasts.",
    availability: "Available"
  },
  {
    id: 5,
    name: "Toyota Innova Crysta",
    model: "2024 VX",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    category: "MPV",
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.9,
    price: 4200,
    features: ["Captain Seats", "Touchscreen", "Climate Control", "Premium Audio"],
    description: "Luxury MPV for comfortable family travel and business trips.",
    availability: "Available"
  },
  {
    id: 6,
    name: "Tata Nexon EV",
    model: "2024 Max",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Electric",
    seats: 5,
    fuel: "Electric",
    transmission: "Automatic",
    rating: 4.6,
    price: 3200,
    features: ["Zero Emissions", "Fast Charging", "Connected Car", "Eco Mode"],
    description: "Eco-friendly electric SUV with impressive range and features.",
    availability: "Available"
  },
  {
    id: 7,
    name: "BMW 3 Series",
    model: "2024 320d",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    category: "Luxury",
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.9,
    price: 8500,
    features: ["Premium Interior", "Sports Mode", "iDrive System", "Leather Seats"],
    description: "Ultimate driving machine for the discerning traveler.",
    availability: "Available"
  },
  {
    id: 8,
    name: "Mercedes-Benz E-Class",
    model: "2024 E220d",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    category: "Luxury",
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 5.0,
    price: 12000,
    features: ["MBUX System", "Air Suspension", "Burmester Sound", "Massage Seats"],
    description: "The pinnacle of luxury and comfort for executive travel.",
    availability: "Available"
  },
  {
    id: 9,
    name: "Kia Seltos",
    model: "2024 HTX",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop",
    category: "SUV",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.5,
    price: 3000,
    features: ["Bose Sound", "Ventilated Seats", "360 Camera", "Head-up Display"],
    description: "Feature-rich compact SUV perfect for urban adventures.",
    availability: "Available"
  },
  {
    id: 10,
    name: "Maruti Suzuki Dzire",
    model: "2024 ZXI",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
    category: "Sedan",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.4,
    price: 2200,
    features: ["Cruise Control", "Touchscreen", "Auto Climate", "Smart Hybrid"],
    description: "Reliable and fuel-efficient sedan for everyday commutes.",
    availability: "Available"
  },
  {
    id: 11,
    name: "Tata Safari",
    model: "2024 XZA+",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
    category: "SUV",
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.7,
    price: 4800,
    features: ["Panoramic Sunroof", "ADAS", "Air Purifier", "Premium Sound"],
    description: "Flagship SUV with premium features and commanding presence.",
    availability: "Available"
  },
  {
    id: 12,
    name: "Hyundai i20",
    model: "2024 Asta",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop",
    category: "Hatchback",
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.3,
    price: 2000,
    features: ["BlueLink", "Wireless Charging", "Sunroof", "Bose Sound"],
    description: "Premium hatchback with sporty looks and modern features.",
    availability: "Available"
  }
];

const categories = ["All", "Hatchback", "Sedan", "SUV", "MPV", "Electric", "Luxury"];
const fuelTypes = ["All", "Petrol", "Diesel", "Electric"];
const transmissionTypes = ["All", "Manual", "Automatic", "CVT"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹2,000", min: 0, max: 2000 },
  { label: "₹2,000 - ₹4,000", min: 2000, max: 4000 },
  { label: "₹4,000 - ₹8,000", min: 4000, max: 8000 },
  { label: "Above ₹8,000", min: 8000, max: Infinity }
];

export default function FleetPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [selectedTransmission, setSelectedTransmission] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Filter cars
  const filteredCars = useMemo(() => {
    return fleetData.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           car.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
      const matchesFuel = selectedFuel === 'All' || car.fuel === selectedFuel;
      const matchesTransmission = selectedTransmission === 'All' || car.transmission === selectedTransmission;
      const priceRange = priceRanges[selectedPriceRange];
      const matchesPrice = car.price >= priceRange.min && car.price <= priceRange.max;

      return matchesSearch && matchesCategory && matchesFuel && matchesTransmission && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedFuel, selectedTransmission, selectedPriceRange]);

  // Toggle favorite
  const toggleFavorite = (carId: number) => {
    setFavorites(prev => 
      prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedFuel('All');
    setSelectedTransmission('All');
    setSelectedPriceRange(0);
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#00252e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-[#00a8cc] text-sm font-medium mb-6"
            >
              Our Fleet
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Find Your Perfect Ride
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Choose from our extensive collection of well-maintained vehicles 
              for every occasion and budget.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-20 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-96 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00a8cc] focus:border-[#00a8cc] outline-none transition-all"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-4">
              {/* Category Filter - Desktop */}
              <div className="hidden lg:flex items-center gap-2">
                {categories.slice(0, 5).map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#00252e] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2.5 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
                {(selectedFuel !== 'All' || selectedTransmission !== 'All' || selectedPriceRange !== 0) && (
                  <span className="w-2 h-2 bg-[#00a8cc] rounded-full" />
                )}
              </button>

              {/* View Toggle */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-[#00252e] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-[#00252e] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2 border-t border-gray-100 mt-4">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Category - Mobile */}
                    <div className="lg:hidden">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00a8cc] outline-none"
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    {/* Fuel Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                      <select
                        value={selectedFuel}
                        onChange={(e) => setSelectedFuel(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00a8cc] outline-none"
                      >
                        {fuelTypes.map(fuel => (
                          <option key={fuel} value={fuel}>{fuel}</option>
                        ))}
                      </select>
                    </div>

                    {/* Transmission */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                      <select
                        value={selectedTransmission}
                        onChange={(e) => setSelectedTransmission(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00a8cc] outline-none"
                      >
                        {transmissionTypes.map(trans => (
                          <option key={trans} value={trans}>{trans}</option>
                        ))}
                      </select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                      <select
                        value={selectedPriceRange}
                        onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00a8cc] outline-none"
                      >
                        {priceRanges.map((range, index) => (
                          <option key={index} value={index}>{range.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-sm text-[#00a8cc] hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-[#00252e]">{filteredCars.length}</span> vehicles
        </p>
      </div>

      {/* Fleet Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredCars.length === 0 ? (
          <div className="text-center py-20">
            <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No vehicles found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your filters or search query</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-[#00252e] text-white rounded-lg hover:bg-[#003847] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={viewMode === 'grid' 
              ? 'grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
            }
          >
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                variants={fadeInUp}
                layout
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                }`}
              >
                {/* Car Image */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'sm:w-72 h-48 sm:h-auto' : 'h-48'}`}>
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#00252e] text-white text-xs font-medium rounded-full">
                      {car.category}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(car.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                  {car.availability === 'Available' && (
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Available
                      </span>
                    </div>
                  )}
                </div>

                {/* Car Details */}
                <div className={`p-5 flex-1 ${viewMode === 'list' ? 'flex flex-col' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-[#00252e] text-lg">{car.name}</h3>
                      <p className="text-sm text-gray-500">{car.model}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#d4a853] fill-current" />
                      <span className="text-sm font-medium">{car.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
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

                  {viewMode === 'list' && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{car.description}</p>
                  )}

                  {/* Price & CTA */}
                  <div className={`flex items-center justify-between pt-4 border-t border-gray-100 ${viewMode === 'list' ? 'mt-auto' : ''}`}>
                    <div>
                      <span className="text-2xl font-bold text-[#00252e]">₹{car.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm">/day</span>
                    </div>
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="px-4 py-2 bg-[#00a8cc] hover:bg-[#00a8cc]/90 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Car Details Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCar(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 sm:h-80">
                <Image
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedCar(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="px-3 py-1 bg-[#00252e] text-white text-xs font-medium rounded-full">
                    {selectedCar.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">{selectedCar.name}</h2>
                  <p className="text-gray-300">{selectedCar.model}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-lg font-bold text-[#00252e] mb-4">Vehicle Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#00a8cc]" />
                          Seats
                        </span>
                        <span className="font-medium">{selectedCar.seats} Passengers</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Fuel className="w-5 h-5 text-[#00a8cc]" />
                          Fuel Type
                        </span>
                        <span className="font-medium">{selectedCar.fuel}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Settings className="w-5 h-5 text-[#00a8cc]" />
                          Transmission
                        </span>
                        <span className="font-medium">{selectedCar.transmission}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Star className="w-5 h-5 text-[#00a8cc]" />
                          Rating
                        </span>
                        <span className="font-medium flex items-center gap-1">
                          {selectedCar.rating}
                          <Star className="w-4 h-4 text-[#d4a853] fill-current" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-lg font-bold text-[#00252e] mb-4">Features</h3>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {selectedCar.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-[#00252e] mb-2">Description</h3>
                    <p className="text-gray-600 mb-6">{selectedCar.description}</p>

                    {/* Included */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-medium text-[#00252e] mb-3">What&apos;s Included</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#00a8cc]" />
                          Insurance
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#00a8cc]" />
                          24/7 Support
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#00a8cc]" />
                          Free Pickup
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00a8cc]" />
                          Unlimited KM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Section */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-3xl font-bold text-[#00252e]">₹{selectedCar.price.toLocaleString()}</span>
                    <span className="text-gray-500">/day</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleFavorite(selectedCar.id)}
                      className={`px-6 py-3 border rounded-xl font-medium transition-colors ${
                        favorites.includes(selectedCar.id)
                          ? 'border-red-500 text-red-500'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(selectedCar.id) ? 'fill-current' : ''}`} />
                    </button>
                    <Link href="/">
                      <button className="px-8 py-3 bg-[#00252e] hover:bg-[#003847] text-white font-semibold rounded-xl transition-colors flex items-center gap-2">
                        Book Now
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
