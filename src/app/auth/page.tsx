"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Check, Phone, Mail, User, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Image from "next/image";
import Link from "next/link";

// Validation schemas
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
});

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

const loginSchema = z.object({
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
});

type SignupFormData = z.infer<typeof signupSchema>;
type OTPFormData = z.infer<typeof otpSchema>;
type LoginFormData = z.infer<typeof loginSchema>;

const AuthSystem = () => {
  const onAuthSuccess = () => {
    console.log("Authentication successful!");
    // You can add navigation logic here
    // For example: router.push('/dashboard');
  };
  const [currentView, setCurrentView] = useState<"login" | "signup" | "otp">("login");

  const [userPhone, setUserPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Form configurations
  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const otpForm = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
    },
  });

  // Form handlers
  const handleSignup = async (data: SignupFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setUserPhone(data.phone);
    setCurrentView("otp");
    setIsLoading(false);
  };

  const handleOTPVerification = async (data: OTPFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onAuthSuccess();
  };

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onAuthSuccess();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.2 }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.8) contrast(1.1)' }}
        >
          {/* Video source will be added when user provides the video */}
          <source src="/auth-background.mp4" type="video/mp4" />
          {/* Fallback background gradient */}
        </video>
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
        >
          <Home className="h-4 w-4" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-md relative"
        >
          {/* Glass morphism container */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-emerald-500/20 p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />

            {/* Header with MOVA Logo */}
            <motion.div
              className="text-center mb-8"
              variants={formVariants}
            >
                             <div className="flex items-center justify-center mb-4">
                 <Image
                   src="/logo/mova.png"
                   alt="MOVA Logo"
                   width={80}
                   height={80}
                   className="h-10 w-10"
                 />
               </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">
                MOVA
              </h1>
              <p className="text-emerald-100/80 mt-2">
                {currentView === "login" && "Welcome back to premium car rentals"}
                {currentView === "signup" && "Join the premium car rental experience"}
                {currentView === "otp" && "Verify your phone number"}
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {/* Login Form */}
              {currentView === "login" && (
                <motion.div
                  key="login"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
                      <FormField
                        control={loginForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-emerald-100 font-medium flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="+1 (555) 123-4567"
                                className="bg-white/10 border-emerald-300/50 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-white placeholder:text-emerald-200/60 backdrop-blur-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-emerald-400/30"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Signing In...
                          </div>
                        ) : (
                          "Sign In"
                        )}
                      </Button>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => setCurrentView("signup")}
                          className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
                        >
                          Don&apos;t have an account? Sign up
                        </button>
                      </div>
                    </form>
                  </Form>
                </motion.div>
              )}

              {/* Signup Form */}
              {currentView === "signup" && (
                <motion.div
                  key="signup"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Form {...signupForm}>
                    <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-6">
                      <FormField
                        control={signupForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-emerald-100 font-medium flex items-center gap-2">
                              <User className="h-4 w-4" />
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="John Doe"
                                className="bg-white/10 border-emerald-300/50 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-white placeholder:text-emerald-200/60 backdrop-blur-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={signupForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-emerald-100 font-medium flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="john@example.com"
                                className="bg-white/10 border-emerald-300/50 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-white placeholder:text-emerald-200/60 backdrop-blur-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={signupForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-emerald-100 font-medium flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="+1 (555) 123-4567"
                                className="bg-white/10 border-emerald-300/50 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-xl h-12 text-white placeholder:text-emerald-200/60 backdrop-blur-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-emerald-400/30"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Creating Account...
                          </div>
                        ) : (
                          "Create Account"
                        )}
                      </Button>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => setCurrentView("login")}
                          className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
                        >
                          Already have an account? Sign in
                        </button>
                      </div>
                    </form>
                  </Form>
                </motion.div>
              )}

              {/* OTP Verification */}
              {currentView === "otp" && (
                <motion.div
                  key="otp"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="text-center mb-6">
                    <button
                      onClick={() => setCurrentView("signup")}
                      className="flex items-center gap-2 text-emerald-300 hover:text-emerald-200 mb-4 transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <p className="text-emerald-100/80">
                      We&apos;ve sent a verification code to
                    </p>
                    <p className="font-semibold text-emerald-200">{userPhone}</p>
                  </div>

                  <Form {...otpForm}>
                    <form onSubmit={otpForm.handleSubmit(handleOTPVerification)} className="space-y-6">
                      <FormField
                        control={otpForm.control}
                        name="otp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-emerald-100 font-medium text-center block">
                              Enter Verification Code
                            </FormLabel>
                            <FormControl>
                              <div className="flex justify-center">
                                <InputOTP
                                  maxLength={6}
                                  value={field.value}
                                  onChange={field.onChange}
                                >
                                  <InputOTPGroup>
                                    <InputOTPSlot index={0} className="w-12 h-12 text-lg border-emerald-300/50 focus:border-emerald-400 bg-white/10 text-white" />
                                    <InputOTPSlot index={1} className="w-12 h-12 text-lg border-emerald-300/50 focus:border-emerald-400 bg-white/10 text-white" />
                                    <InputOTPSlot index={2} className="w-12 h-12 text-lg border-emerald-300/50 focus:border-emerald-400 bg-white/10 text-white" />
                                    <InputOTPSlot index={3} className="w-12 h-12 text-lg border-emerald-300/50 focus:border-emerald-400 bg-white/10 text-white" />
                                    <InputOTPSlot index={4} className="w-12 h-12 text-lg border-emerald-300/50 focus:border-emerald-400 bg-white/10 text-white" />
                                    <InputOTPSlot index={5} className="w-12 h-12 text-lg border-emerald-300/50 focus:border-emerald-400 bg-white/10 text-white" />
                                  </InputOTPGroup>
                                </InputOTP>
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-emerald-400/30"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Verifying...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Check className="h-4 w-4" />
                            Verify & Continue
                          </div>
                        )}
                      </Button>

                      <div className="text-center">
                        <button
                          type="button"
                          className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
                        >
                          Resend Code
                        </button>
                      </div>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthSystem;
