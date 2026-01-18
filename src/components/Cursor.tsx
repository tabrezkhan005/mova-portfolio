"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { debounce } from 'lodash';

interface CursorProps {
  /**
   * Cursor color (default is emerald gradient)
   */
  color?: string;
  /**
   * Enable/disable cursor trailing effect
   */
  enableTrail?: boolean;
  /**
   * Size of the main cursor in pixels
   */
  size?: number;
  /**
   * Size of the cursor dot in pixels
   */
  dotSize?: number;
}

export default function Cursor({
  color = 'rgba(43, 157, 111, 0.3)',
  enableTrail = true,
  size = 36,
  dotSize = 8
}: CursorProps) {
  // Motion values for smoother animation
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics configuration for smooth movement
  const springConfig = {
    damping: 28,
    stiffness: 600,
    mass: 0.5
  };

  // Apply spring physics to the cursor
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const cursorDotX = useSpring(mouseX, { ...springConfig, stiffness: 800 });
  const cursorDotY = useSpring(mouseY, { ...springConfig, stiffness: 800 });

  // State management
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Trail effect
  const [trailElements, setTrailElements] = useState<Array<{ id: number, x: number, y: number }>>([]);
  const trailLength = 5;

  // Update cursor position with performance optimizations
  // Memoize the debounced function to avoid recreating it on every render
  const updateCursorPosition = useMemo(
    () => debounce((point: { x: number, y: number }) => {
      mouseX.set(point.x);
      mouseY.set(point.y);

      if (enableTrail) {
        setTrailElements(prev => {
          const newTrail = [...prev, { id: Date.now(), x: point.x, y: point.y }];
          return newTrail.slice(-trailLength);
        });
      }
    }, 5), // Very small debounce for smooth movement while reducing calls
    [mouseX, mouseY, enableTrail, trailLength]
  );

  // Detect interactive elements
  const handleLinkHoverEvents = useCallback(() => {
    document.querySelectorAll('a, button, [role="button"], [type="button"], input[type="submit"]').forEach(el => {
      el.addEventListener('mouseenter', () => setLinkHovered(true));
      el.addEventListener('mouseleave', () => setLinkHovered(false));
    });

    return () => {
      document.querySelectorAll('a, button, [role="button"], [type="button"], input[type="submit"]').forEach(el => {
        el.removeEventListener('mouseenter', () => setLinkHovered(true));
        el.removeEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
  }, []);

  // Mouse click effect
  const handleMouseClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  // Detect if device is touch/mobile
  const detectMobile = useCallback(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 768;

    setIsMobile(isMobileDevice);

    if (!isMobileDevice) {
      document.documentElement.style.cursor = 'none';
    } else {
      document.documentElement.style.cursor = 'auto';
    }
  }, []);

  useEffect(() => {
    detectMobile();

    // Only run if not mobile
    if (!isMobile) {
      // Add event listeners
      document.addEventListener('mousemove', (e) => {
        updateCursorPosition({ x: e.clientX, y: e.clientY });
        setVisible(true);
      });
      document.addEventListener('mousedown', handleMouseClick);
      document.addEventListener('mouseup', () => setClicked(false));
      document.addEventListener('mouseleave', () => setVisible(false));
      document.addEventListener('mouseenter', () => setVisible(true));

      // Handle link hover events
      const cleanupLinkEvents = handleLinkHoverEvents();

      // Handle resize events for mobile detection
      window.addEventListener('resize', detectMobile);

      // Cleanup
      return () => {
        document.removeEventListener('mousemove', (e) => {
          updateCursorPosition({ x: e.clientX, y: e.clientY });
        });
        document.removeEventListener('mousedown', handleMouseClick);
        document.removeEventListener('mouseup', () => setClicked(false));
        document.removeEventListener('mouseleave', () => setVisible(false));
        document.removeEventListener('mouseenter', () => setVisible(true));

        cleanupLinkEvents();
        window.removeEventListener('resize', detectMobile);

        document.documentElement.style.cursor = 'auto';
      };
    }
  }, [updateCursorPosition, detectMobile, handleLinkHoverEvents, isMobile]);

  // Don't render on mobile/touch devices
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full will-change-transform backface-visibility-hidden"
        style={{
          opacity: visible ? 1 : 0,
          x: cursorX,
          y: cursorY,
          width: linkHovered ? size * 1.5 : size,
          height: linkHovered ? size * 1.5 : size,
          background: `radial-gradient(circle, ${color}, rgba(75, 182, 214, 0.1))`,
          filter: 'blur(5px)',
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          transition: 'width 0.2s, height 0.2s',
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full will-change-transform backface-visibility-hidden"
        style={{
          opacity: visible ? (linkHovered ? 0 : 1) : 0,
          x: cursorDotX,
          y: cursorDotY,
          width: dotSize,
          height: dotSize,
          background: '#2B9D6F',
          transform: `translate(-50%, -50%) scale(${clicked ? 1.5 : 1})`,
          transition: 'opacity 0.15s, transform 0.1s',
        }}
      />

      {/* Trail effect */}
      {enableTrail && visible && trailElements.map((elem, index) => {
        // Calculate opacity and size based on position in trail
        const opacityFactor = (index + 1) / trailLength;
        const sizeFactor = 0.6 + (0.4 * (index / trailLength));

        return (
          <motion.div
            key={elem.id}
            className="pointer-events-none fixed z-40 rounded-full will-change-transform backface-visibility-hidden"
            style={{
              left: elem.x,
              top: elem.y,
              width: size * sizeFactor * 0.6,
              height: size * sizeFactor * 0.6,
              opacity: opacityFactor * 0.4,
              background: `radial-gradient(circle, ${color}, transparent)`,
              transform: `translate(-50%, -50%)`,
              filter: 'blur(4px)',
            }}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: opacityFactor * 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          />
        );
      })}
    </>
  );
}
