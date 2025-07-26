'use client';
import { useState, useEffect, useMemo } from 'react';
import { 
  X, Users, Fuel, Settings, Star, MapPin, Calendar, 
  Search, ChevronRight, ChevronDown, Check, Shield,
  Filter, ArrowRight, Car, Zap, Grid, List, Clock
} from 'lucide-react';
import { motion, AnimatePresence, useSpring, useMotionValue, cubicBezier } from 'framer-motion';

// Car interface
interface Car {
  id: number;
  name: string;
  model: string;
  image: string;
  category: string;
  seats: number;
  fuel: string;
  transmission: string;
  rating: number;
  price: string;
  features: string[];
  description: string;
  availability: string;
  pricePerDay: number;
}

// Sample fleet data
const fleetData: Car[] = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    model: "2024 VXI",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop",
    category: "Hatchback",
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.5,
    price: "₹2,500",
    pricePerDay: 2500,
    features: ["AC", "Power Steering", "Music System", "Central Locking"],
    description: "Perfect for city drives and short trips. Fuel efficient and comfortable with modern amenities.",
    availability: "Available"
  },
  {
    id: 2,
    name: "Hyundai Creta",
    model: "2024 SX",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=300&fit=crop",
    category: "SUV",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.7,
    price: "₹4,200",
    pricePerDay: 4200,
    features: ["Sunroof", "Touchscreen", "Reverse Camera", "Climate Control"],
    description: "Spacious SUV perfect for family trips and weekend getaways with premium comfort features.",
    availability: "Available"
  },
  {
    id: 3,
    name: "Honda City",
    model: "2024 ZX",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop",
    category: "Sedan",
    seats: 5,
    fuel: "Petrol",
    transmission: "CVT",
    rating: 4.6,
    price: "₹3,500",
    pricePerDay: 3500,
    features: ["Sunroof", "Honda SENSING", "Touchscreen", "Cruise Control"],
    description: "Premium sedan with advanced safety features and exceptional comfort for business travel.",
    availability: "Available"
  },
  {
    id: 4,
    name: "Mahindra Thar",
    model: "2024 LX",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=500&h=300&fit=crop",
    category: "SUV",
    seats: 4,
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.8,
    price: "₹5,000",
    pricePerDay: 5000,
    features: ["4WD", "Convertible Top", "Off-road Capable", "Adventure Ready"],
    description: "Ultimate adventure vehicle for off-road enthusiasts and mountain expeditions.",
    availability: "Available"
  },
  {
    id: 5,
    name: "Toyota Innova Crysta",
    model: "2024 VX",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
    category: "MPV",
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.9,
    price: "₹4,800",
    pricePerDay: 4800,
    features: ["Captain Seats", "Premium Interior", "Safety Shield", "Spacious"],
    description: "Premium MPV ideal for large families and group travels with luxurious comfort.",
    availability: "Available"
  },
  {
    id: 6,
    name: "BMW 5 Series",
    model: "2024 Sport",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
    category: "Luxury",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.9,
    price: "₹8,500",
    pricePerDay: 8500,
    features: ["Premium Audio", "Leather Interior", "Advanced Navigation", "Driver Assist"],
    description: "Experience ultimate luxury with the iconic BMW 5 Series sedan featuring cutting-edge technology.",
    availability: "Available"
  }
];

// Smooth animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: cubicBezier(0.25, 0.1, 0.25, 1)
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94)
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94)
    }
  }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94)
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 50,
    transition: {
      duration: 0.3,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94)
    }
  }
};

export default function FleetPage() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Smooth loading transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Smooth category transition
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 150);
  };

  const categories = ['All', 'Hatchback', 'Sedan', 'SUV', 'MPV', 'Luxury'];

  // Optimized filtering and sorting with useMemo
  const filteredAndSortedFleet = useMemo(() => {
    let filtered = fleetData
      .filter(car => 
        activeCategory === 'All' || car.category === activeCategory
      )
      .filter(car =>
        searchQuery === '' || 
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
      default:
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [activeCategory, searchQuery, sortBy]);

  const openModal = (car: Car) => {
    setSelectedCar(car);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCar(null);
    document.body.style.overflow = 'auto';
  };

  // Smooth view mode transition
  const handleViewModeChange = (mode: 'grid' | 'list') => {
    if (mode === viewMode) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Header with green theme */}
      <motion.div 
        className="bg-white border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-700 mb-6"
              variants={cardVariants}
            >
              <Car className="w-4 h-4 mr-2" />
              Premium Fleet Management
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
              variants={cardVariants}
            >
              Our Fleet Collection
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Discover our comprehensive range of premium vehicles, each meticulously maintained 
              and equipped with modern amenities for your comfort and safety.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Search and Filter Section */}
      <motion.div 
        className="bg-white border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Enhanced Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative group">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors group-focus-within:text-emerald-500" />
                <input
                  type="text"
                  placeholder="Search vehicles, models, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white hover:border-gray-400 transition-all duration-300"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rating</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Enhanced View Toggle */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                {['grid', 'list'].map((mode) => (
                  <motion.button
                    key={mode}
                    onClick={() => handleViewModeChange(mode as 'grid' | 'list')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === mode 
                        ? 'bg-white shadow-sm text-gray-900' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {mode === 'grid' ? <Grid className="w-4 h-4" /> : <List className="w-4 h-4" />}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Category Filter with green theme */}
          <motion.div 
            className="mt-6"
            layout
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700'
                  }`}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Header with smooth updates */}
        <motion.div 
          className="flex justify-between items-center mb-8"
          layout
        >
          <div>
            <motion.h2 
              className="text-2xl font-semibold text-gray-900"
              key={filteredAndSortedFleet.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredAndSortedFleet.length} vehicles available
            </motion.h2>
            <motion.p 
              className="text-gray-600 mt-1"
              layout
            >
              {activeCategory !== 'All' && `Filtered by ${activeCategory}`}
              {searchQuery && ` • Search: "${searchQuery}"`}
              {sortBy !== 'name' && ` • Sorted by ${sortBy.replace('-', ' ')}`}
            </motion.p>
          </div>
          
          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Clock className="w-4 h-4" />
            <span>Updated just now</span>
          </motion.div>
        </motion.div>

        {/* Enhanced Loading State */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div 
              key="loading"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i} 
                  className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${
                    viewMode === 'grid' ? 'h-96' : 'h-32'
                  }`}
                  variants={cardVariants}
                >
                  <div className="animate-pulse">
                    <div className={`bg-gray-200 ${viewMode === 'grid' ? 'h-48' : 'w-48 h-32'}`}></div>
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Fleet Grid/List with green theme */}
        <AnimatePresence mode="wait">
          {!isLoading && !isTransitioning && (
            <motion.div 
              key={`${viewMode}-${activeCategory}-${searchQuery}-${sortBy}`}
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredAndSortedFleet.map((car, idx) => (
                <motion.div
                  key={`${car.id}-${viewMode}`}
                  className={`group bg-white rounded-lg border border-gray-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-500 overflow-hidden cursor-pointer ${
                    viewMode === 'list' ? 'flex' : 'flex-col'
                  }`}
                  variants={cardVariants}
                  layout
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  onClick={() => openModal(car)}
                >
                  {/* Enhanced Car Image */}
                  <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'h-48' : 'w-48 h-32'}`}>
                    <motion.img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Enhanced overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Status Badge */}
                    <motion.div 
                      className="absolute top-3 right-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                    >
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                        Available
                      </span>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-3 left-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    >
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                        {car.category}
                      </span>
                    </motion.div>

                    {/* Premium Badge for Luxury */}
                    {car.category === 'Luxury' && (
                      <motion.div 
                        className="absolute bottom-3 left-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.7, type: "spring", stiffness: 200 }}
                      >
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                          <Star className="w-3 h-3" />
                          Premium
                        </span>
                      </motion.div>
                    )}

                    {/* Hover overlay button */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Enhanced Car Details with green theme */}
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {car.name}
                        </h3>
                        <p className="text-sm text-gray-600">{car.model}</p>
                      </div>
                      <motion.div 
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{car.rating}</span>
                      </motion.div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {car.description}
                    </p>

                    {/* Enhanced Specifications with green theme */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      {[
                        { icon: Users, label: `${car.seats} seats`, key: 'seats' },
                        { icon: Fuel, label: car.fuel, key: 'fuel' },
                        { icon: Settings, label: car.transmission, key: 'transmission' }
                      ].map(({ icon: Icon, label, key }) => (
                        <motion.div 
                          key={key}
                          className="flex items-center gap-1 p-2 rounded-md bg-gray-50 group-hover:bg-emerald-50 transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <Icon className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                          <span className="text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
                            {label}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced Features with green theme */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {car.features.slice(0, 3).map((feature, i) => (
                          <motion.span 
                            key={i} 
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded transition-colors duration-300 group-hover:bg-emerald-100 group-hover:text-emerald-700"
                            whileHover={{ scale: 1.05 }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                        {car.features.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded transition-colors duration-300 group-hover:bg-emerald-100 group-hover:text-emerald-700">
                            +{car.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Price and Actions with green theme */}
                    <div className="flex justify-between items-center">
                      <div>
                        <motion.span 
                          className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {car.price}
                        </motion.span>
                        <span className="text-gray-600 text-sm">/day</span>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(car);
                          }}
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Details
                        </motion.button>
                        <motion.button 
                          className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced No Results with green theme */}
        {!isLoading && !isTransitioning && filteredAndSortedFleet.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Search className="w-8 h-8 text-emerald-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <motion.button 
              onClick={() => { 
                setActiveCategory('All'); 
                setSearchQuery(''); 
                setSortBy('name');
              }}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Clear All Filters
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Enhanced Modal with green theme */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Close Button */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-600" />
              </motion.button>
              
              <div className="grid md:grid-cols-2 h-full">
                {/* Enhanced Image Section */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-64 md:h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  
                  {/* Enhanced overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Enhanced badges with animations */}
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {selectedCar.category}
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-4 right-16"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{selectedCar.rating}</span>
                    </div>
                  </motion.div>

                  {/* Enhanced availability badge with green theme */}
                  <motion.div 
                    className="absolute bottom-4 left-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 bg-emerald-100/90 backdrop-blur-sm text-emerald-800 px-3 py-2 rounded-full shadow-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">{selectedCar.availability}</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Enhanced Details Section with green theme */}
                <div className="p-8 overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <motion.h2 
                        className="text-3xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {selectedCar.name}
                      </motion.h2>
                      <motion.p 
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {selectedCar.model}
                      </motion.p>
                    </div>
                    
                    <motion.p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {selectedCar.description}
                    </motion.p>
                    
                    {/* Enhanced Specifications Grid with green theme */}
                    <motion.div 
                      className="grid grid-cols-2 gap-4 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      {[
                        { icon: Users, label: 'Seats', value: `${selectedCar.seats} passengers` },
                        { icon: Fuel, label: 'Fuel', value: selectedCar.fuel },
                        { icon: Settings, label: 'Transmission', value: selectedCar.transmission },
                        { icon: Shield, label: 'Insurance', value: 'Comprehensive' }
                      ].map((spec, index) => (
                        <motion.div 
                          key={spec.label}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <spec.icon className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{spec.label}</p>
                            <p className="font-medium text-gray-900">{spec.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Enhanced Features with green theme */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Features & Amenities</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedCar.features.map((feature, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1 + index * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                          >
                            <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-emerald-600" />
                            </div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Pricing and Actions with green theme */}
                    <motion.div 
                      className="border-t border-gray-200 pt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <motion.span 
                            className="text-3xl font-bold text-gray-900"
                            whileHover={{ scale: 1.05 }}
                          >
                            {selectedCar.price}
                          </motion.span>
                          <span className="text-gray-600 ml-1 text-lg">/day</span>
                          <p className="text-sm text-gray-500 mt-1">All-inclusive pricing</p>
                        </div>
                        <motion.div
                          className="text-right"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            {selectedCar.availability}
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="space-y-3">
                        <motion.button 
                          className="w-full bg-emerald-500 text-white py-4 rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                        >
                          Book This Vehicle
                        </motion.button>
                        <motion.button 
                          className="w-full border border-emerald-300 text-emerald-700 py-4 rounded-lg font-medium hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5, duration: 0.5 }}
                        >
                          Request Quote
                        </motion.button>
                      </div>
                      
                      <motion.p 
                        className="text-sm text-gray-500 mt-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                      >
                        Includes comprehensive insurance and 24/7 support
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}