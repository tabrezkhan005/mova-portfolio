'use client';

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Interactive Hover Button Component for Professional UI
 * Features: Smooth animations, glass morphism effects, responsive design
 * Variants: login (subtle) and signup (premium) styles
 */

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  variant?: 'login' | 'signup';
  className?: string;
  onClick?: () => void;
}

export function InteractiveHoverButton({
  children,
  variant = 'login',
  className,
  onClick
}: InteractiveHoverButtonProps) {

  // Base styles for all buttons - professional glass morphism foundation
  const baseStyles = "relative px-6 py-3 font-semibold text-sm tracking-wide rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 backdrop-blur-lg overflow-hidden group";

  // Variant-specific styling for login and signup buttons
  const variantStyles = {
    login: "text-gray-800 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 focus:ring-blue-500/50 hover:text-blue-700 shadow-lg hover:shadow-xl",
    signup: "text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border border-blue-500/30 hover:border-blue-400/50 focus:ring-blue-500/50 shadow-lg hover:shadow-2xl"
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {/* Animated background overlay for enhanced interactivity */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

      {/* Button content with proper z-index for visibility */}
      <span className="relative z-10">{children}</span>

      {/* Subtle glow effect for premium feel */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
    </button>
  );
}
