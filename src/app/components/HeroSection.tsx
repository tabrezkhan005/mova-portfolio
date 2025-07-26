"use client"

import * as React from "react"
import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, Car, MapPin, Users, Settings } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Utility function
const cn_util = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
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

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn_util(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// Select Component
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn_util(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn_util(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn_util("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

// Date Picker Component
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
          !selectedDate && "text-muted-foreground",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {selectedDate ? format(selectedDate, "PPP") : <span>{placeholder}</span>}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-auto rounded-md border bg-popover p-3 text-popover-foreground shadow-md">
          <div className="grid grid-cols-7 gap-1">
            {/* Simple calendar implementation */}
            {Array.from({ length: 30 }, (_, i) => {
              const day = new Date()
              day.setDate(day.getDate() + i)
              return (
                <button
                  key={i}
                  onClick={() => handleDateSelect(day)}
                  className="h-9 w-9 rounded-md text-sm hover:bg-accent hover:text-accent-foreground"
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

// Main Hero Component
const CarRentalHero = () => {
  const [pickupDate, setPickupDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [pickupLocation, setPickupLocation] = useState("")
  const [returnLocation, setReturnLocation] = useState("")

  const featuredCars = [
    {
      id: 1,
      name: "BMW X5",
      type: "SUV",
      price: "$89/day",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop",
      features: ["5 Seats", "Automatic", "Premium"]
    },
    {
      id: 2,
      name: "Mercedes C-Class",
      type: "Sedan",
      price: "$75/day",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=250&fit=crop",
      features: ["4 Seats", "Automatic", "Luxury"]
    },
    {
      id: 3,
      name: "Tesla Model 3",
      type: "Electric",
      price: "$95/day",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop",
      features: ["5 Seats", "Electric", "Autopilot"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="flex w-full items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
            <Car className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">DriveEasy</h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Cars</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Locations</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <Button size="sm">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {"Rent Your Perfect"
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
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Car Today
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Experience the freedom of the road with our premium fleet of vehicles. 
                From economy to luxury, find the perfect car for your journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Car className="mr-2 h-5 w-5" />
                  Browse Cars
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-3 gap-8 pt-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Cars Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 shadow-2xl bg-white/90 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Book Your Ride</h3>
                    <p className="text-gray-600 mt-2">Quick and easy reservation</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Pickup Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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
                      <Select>
                        <option value="">Select car type</option>
                        <option value="economy">Economy</option>
                        <option value="compact">Compact</option>
                        <option value="suv">SUV</option>
                        <option value="luxury">Luxury</option>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Passengers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Select className="pl-10">
                          <option value="">Select passengers</option>
                          <option value="1">1 Passenger</option>
                          <option value="2">2 Passengers</option>
                          <option value="4">4 Passengers</option>
                          <option value="7">7+ Passengers</option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Search Available Cars
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Featured Cars Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
              <p className="text-xl text-gray-600">Choose from our premium collection</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-gray-900">{car.price}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                          <p className="text-gray-600">{car.type}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {car.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button className="w-full" variant="outline">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CarRentalHero
