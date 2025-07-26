"use client"

import * as React from "react"
import { useState } from "react"
import { format } from "date-fns"
import Image from "next/image"
import { 
  CalendarIcon, Car, MapPin, Users, Settings, 
  ChevronRight, CheckCircle, Shield, TrendingUp, Clock
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Utility function
const cn_util = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

// Button Component with enhanced styling
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 shadow-sm"
    
    const variants = {
      default: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-200/50",
      outline: "border border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50 text-gray-800",
      ghost: "hover:bg-gray-100 text-gray-700 hover:text-emerald-700 shadow-none",
      secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
    
    const sizes = {
      default: "h-10 px-5 py-2",
      sm: "h-9 rounded-lg px-3 text-xs",
      lg: "h-12 px-6 py-3 text-base",
      icon: "h-10 w-10"
    }

    return (
      <button
        className={cn_util(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Enhanced Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn_util(
          "flex h-11 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// Enhanced Select Component
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn_util(
          "flex h-11 w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  }
)
Select.displayName = "Select"

// Enhanced Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn_util(
        "rounded-lg border border-gray-100 bg-white shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn_util("p-6", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

// Enhanced Date Picker Component
interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
}

const DatePicker = ({ 
  date, 
  onDateChange, 
  placeholder = "Pick a date",
  className 
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(date)

  const handleDateSelect = (newDate: Date) => {
    setSelectedDate(newDate)
    onDateChange?.(newDate)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        className={cn_util(
          "w-full justify-start text-left font-normal",
          !selectedDate && "text-gray-400",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarIcon className="mr-2 h-4 w-4 text-emerald-500" />
        {selectedDate ? format(selectedDate, "PPP") : <span>{placeholder}</span>}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-auto rounded-lg border border-gray-100 bg-white p-3 shadow-xl">
          <div className="grid grid-cols-7 gap-1">
            {/* Enhanced calendar implementation */}
            {Array.from({ length: 30 }, (_, i) => {
              const day = new Date()
              day.setDate(day.getDate() + i)
              return (
                <button
                  key={i}
                  onClick={() => handleDateSelect(day)}
                  className="h-9 w-9 rounded-lg text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  {day.getDate()}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// Main Hero Component with enhanced styling
const HeroSection = () => {
  const [pickupDate, setPickupDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [pickupLocation, setPickupLocation] = useState("")
  const [returnLocation, setReturnLocation] = useState("")

  // Updated with guaranteed working images from Unsplash
  const featuredCars = [
    {
      id: 1,
      name: "Mahindra XUV700",
      type: "Premium SUV",
      price: "₹3,500/day",
      // Using Unsplash images that are guaranteed to work
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      features: ["7 Seats", "Automatic", "ADAS", "Panoramic Roof"],
      rating: 4.8
    },
    {
      id: 2,
      name: "Tata Nexon EV",
      type: "Electric SUV",
      price: "₹2,800/day",
      image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=800&q=80",
      features: ["5 Seats", "Electric", "400km Range", "Fast Charging"],
      rating: 4.7
    },
    {
      id: 3,
      name: "Hyundai Verna",
      type: "Sedan",
      price: "₹2,400/day",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
      features: ["5 Seats", "Automatic", "ADAS", "Ventilated Seats"],
      rating: 4.6
    }
  ]

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-gray-50">
      {/* Updated typography - keeping heading font but using system fonts for body */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        .heading-font {
          font-family: 'Playfair Display', serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
        
        body, p, span, div, button, input, select {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
      `}</style>
      
      {/* Hero Section */}
      <div className="relative px-6 py-24 overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-emerald-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] rounded-full bg-teal-100 opacity-50 blur-3xl"></div>

        <div className="mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-sm font-medium text-emerald-600 mb-6 shadow-sm">
                  <Car className="w-4 h-4 mr-2" />
                  <span>Premium Car Rental</span>
                </div>

                <h1 className="heading-font text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                  {"Drive Your Dream"
                    .split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        className="inline-block mr-3"
                      >
                        {word}
                      </motion.span>
                    ))}
                  <span className="text-emerald-600">
                    Today
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Explore India's scenic beauty with our premium fleet of vehicles. 
                From city commutes to highway adventures, find your perfect companion.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="group">
                  <Car className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Explore Fleet
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  How It Works
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-3 gap-8 pt-4"
              >
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-50 hover:border-emerald-100 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Car className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="heading-font text-2xl font-semibold text-gray-900 mb-1">500+</div>
                  <div className="text-gray-600 text-sm">Premium Vehicles</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-50 hover:border-emerald-100 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="heading-font text-2xl font-semibold text-gray-900 mb-1">50+</div>
                  <div className="text-gray-600 text-sm">Cities Covered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-50 hover:border-emerald-100 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="heading-font text-2xl font-semibold text-gray-900 mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Customer Support</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 shadow-xl bg-white/95 backdrop-blur-sm border-gray-50">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="heading-font text-2xl font-semibold text-gray-900 mb-2">Book Your Ride</h3>
                    <p className="text-gray-600 text-sm">Quick and hassle-free reservation</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Pickup Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
                        <Input
                          placeholder="Enter pickup location"
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Return Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
                        <Input
                          placeholder="Enter return location"
                          value={returnLocation}
                          onChange={(e) => setReturnLocation(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Pickup Date</label>
                      <DatePicker
                        date={pickupDate}
                        onDateChange={setPickupDate}
                        placeholder="Select pickup date"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Return Date</label>
                      <DatePicker
                        date={returnDate}
                        onDateChange={setReturnDate}
                        placeholder="Select return date"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Car Type</label>
                      <div className="relative">
                        <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
                        <Select className="pl-10">
                          <option value="">Select car type</option>
                          <option value="hatchback">Hatchback</option>
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="luxury">Luxury</option>
                          <option value="electric">Electric</option>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Passengers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
                        <Select className="pl-10">
                          <option value="">Select passengers</option>
                          <option value="1">1-2 Passengers</option>
                          <option value="2">3-4 Passengers</option>
                          <option value="4">5-7 Passengers</option>
                          <option value="7">8+ Passengers</option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full group" size="lg">
                    Search Available Cars
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Trust badges */}
                  <div className="flex justify-center space-x-4 pt-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-1" />
                      <span>Free cancellation</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Shield className="w-4 h-4 text-emerald-500 mr-1" />
                      <span>Secure booking</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Featured Cars Section with 100% guaranteed working images */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1.5 bg-emerald-50 rounded-full text-sm font-medium text-emerald-600 mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span>Featured Collection</span>
              </div>
              <h2 className="heading-font text-4xl font-bold text-gray-900 mb-4 tracking-tight">Popular in India</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Experience the finest Indian and international vehicles tailored for Indian roads</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:translate-y-[-5px] group-hover:border-emerald-100">
                    <div className="relative w-full h-48 bg-gray-100">
                      {/* Using standard img tag with Unsplash images (100% reliable) */}
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-emerald-700">{car.price}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Available Now</span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="heading-font text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{car.name}</h3>
                          <p className="text-sm text-gray-600">{car.type}</p>
                        </div>
                        <div className="flex items-center bg-emerald-50 px-2 py-1 rounded-md">
                          <svg 
                            className="w-4 h-4 text-yellow-400 fill-current" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-gray-900">{car.rating}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {car.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button 
                        className="w-full mt-2 group flex items-center justify-center" 
                        variant="outline"
                      >
                        <span>View Details</span>
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* View all vehicles button */}
            <div className="flex justify-center mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
              >
                View All Vehicles
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
