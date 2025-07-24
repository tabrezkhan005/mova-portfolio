'use client';
import React, { useState, useEffect } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Interface for footer links with optional icons
 */
interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}



/**
 * Quick Links Section - Core navigation links
 */
const quickLinks: FooterLink[] = [
	{ title: 'Drive & Save', href: '/drivensave' },
	{ title: 'FAQs', href: '/faq' },
	{ title: 'Contact', href: '/contact' },
	{ title: 'Terms & Conditions', href: '/terms' },
	{ title: 'Privacy Policy', href: '/privacy' },
];

/**
 * Helpful Links Section - Additional navigation
 */
const helpfulLinks: FooterLink[] = [
	{ title: 'Home', href: '/' },
	{ title: 'About Us', href: '/about' },
	{ title: 'Blogs', href: '/blogs' },
	{ title: 'Sitemap', href: '/sitemap' },
	{ title: 'Agent Login', href: '/agent-login' },
];

/**
 * Social Media Links with proper icons
 */
const socialLinks: FooterLink[] = [
	{ title: 'Facebook', href: 'https://facebook.com/mova', icon: FacebookIcon },
	{ title: 'Instagram', href: 'https://instagram.com/mova', icon: InstagramIcon },
	{ title: 'X (Twitter)', href: 'https://x.com/mova' },
];

/**
 * Contact Information for Reach Us section
 */
const contactInfo = {
	location: '123 Downtown Street, Business District, City 12345',
	email: 'contact@mova.com',
	phone: '+1 (555) 123-4567',
};

/**
 * Professional rotating taglines for premium car rental service
 * Focused on quality, convenience, and sophisticated vocabulary
 */
const catchyTaglines = [
	"Where Excellence Meets the Open Road",
	"Premium Vehicles, Exceptional Service",
	"Your Journey Deserves the Finest Fleet",
	"Experience Luxury Without Compromise",
	"Driving Excellence, Delivering Satisfaction",
	"Premium Mobility for Discerning Travelers",
	"Where Every Mile Tells a Story of Quality",
];

/**
 * Custom X (Twitter) Icon Component
 */
const XIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
	</svg>
);

/**
 * MOVA Footer Component
 * Features: Dark theme #01222D, white text, rotating taglines, social media, app store buttons
 * Sections: Quick Links, Helpful Links, Reach Us, Social Media, Copyright
 */
export function Footer() {
	// State for rotating catchy taglines
	const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

	// Rotate taglines every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTaglineIndex((prev) => (prev + 1) % catchyTaglines.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<footer className="relative w-full bg-[#01222D] text-white">
			{/* Decorative top border */}
			<div className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />

			<div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
				{/* Top Section: Logo, Rotating Tagline, Social Media */}
				<AnimatedContainer className="mb-12 text-center">
					{/* MOVA Logo */}
					<div className="mb-6">
						<Image
							src="/logo/mova.png"
							alt="MOVA Car Rental Logo"
							width={160}
							height={50}
							className="mx-auto h-32 w-auto filter brightness-0 invert"
							priority
						/>
					</div>

					{/* Rotating Catchy Tagline */}
					<motion.div
						key={currentTaglineIndex}
						initial={{ opacity: 0, y: 30, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -30, scale: 1.05 }}
						transition={{
							duration: 0.8,
							ease: [0.25, 0.46, 0.45, 0.94],
							scale: { duration: 0.6 }
						}}
						className="mb-8"
					>
						<p className="text-xl font-semibold text-white md:text-2xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
							{catchyTaglines[currentTaglineIndex]}
						</p>
					</motion.div>

					{/* Social Media Links */}
					<div className="flex justify-center gap-6 mb-8">
						{socialLinks.map((social) => (
							<Link
								key={social.title}
								href={social.href}
								className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
								aria-label={`Follow us on ${social.title}`}
							>
								{social.icon ? (
									<social.icon className="w-6 h-6 text-white group-hover:text-blue-200 transition-all duration-300 group-hover:scale-110" />
								) : (
									<XIcon className="w-6 h-6 text-white group-hover:text-blue-200 transition-all duration-300 group-hover:scale-110" />
								)}
							</Link>
						))}
					</div>
				</AnimatedContainer>

				{/* Main Footer Content Grid */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Quick Links Section */}
					<AnimatedContainer delay={0.1}>
						<div>
							<h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
							<ul className="space-y-3">
								{quickLinks.map((link) => (
									<li key={link.title}>
										<Link
											href={link.href}
											className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</AnimatedContainer>

					{/* Helpful Links Section */}
					<AnimatedContainer delay={0.2}>
						<div>
							<h3 className="text-lg font-semibold mb-6 text-white">Helpful Links</h3>
							<ul className="space-y-3">
								{helpfulLinks.map((link) => (
									<li key={link.title}>
										<Link
											href={link.href}
											className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</AnimatedContainer>

					{/* Reach Us Section */}
					<AnimatedContainer delay={0.3}>
						<div>
							<h3 className="text-lg font-semibold mb-6 text-white">Reach Us</h3>
							<div className="space-y-4">
								{/* Location */}
								<div className="flex items-start gap-3">
									<MapPinIcon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
									<p className="text-gray-400 text-sm leading-relaxed">
										{contactInfo.location}
									</p>
								</div>

								{/* Email */}
								<div className="flex items-center gap-3">
									<MailIcon className="w-5 h-5 text-white flex-shrink-0" />
									<a
										href={`mailto:${contactInfo.email}`}
										className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
									>
										{contactInfo.email}
									</a>
								</div>

								{/* Phone */}
								<div className="flex items-center gap-3">
									<PhoneIcon className="w-5 h-5 text-white flex-shrink-0" />
									<a
										href={`tel:${contactInfo.phone}`}
										className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
									>
										{contactInfo.phone}
									</a>
								</div>
							</div>
						</div>
					</AnimatedContainer>

					{/* App Store Buttons Section */}
					<AnimatedContainer delay={0.4}>
						<div>
							<h3 className="text-lg font-semibold mb-6 text-white">Download Our App</h3>
							<div className="space-y-4">
								{/* Google Play Store Button */}
								<Link
									href="#"
									className="block group transition-all duration-300 hover:scale-105"
									aria-label="Download on Google Play"
								>
									<Image
										src="/gplay.svg"
										alt="Get it on Google Play"
										width={180}
										height={60}
										className="w-full max-w-[180px] h-auto transition-all duration-300 group-hover:brightness-110"
									/>
								</Link>

								{/* Apple App Store Button */}
								<Link
									href="#"
									className="block group transition-all duration-300 hover:scale-105 -translate-y-6 translate-x-6"
									aria-label="Download on App Store"
								>
									<Image
										src="/appstore.svg"
										alt="Download on the App Store"
										width={180}
										height={60}
										className="w-full max-w-[135px] h-auto transition-all duration-300 group-hover:brightness-110"
									/>
								</Link>
							</div>
						</div>
					</AnimatedContainer>
				</div>

				{/* Bottom Section: Copyright */}
				<AnimatedContainer delay={0.5} className="mt-12 pt-8 border-t border-white/20">
					<div className="text-center">
						<p className="text-gray-500 text-sm">
							© {new Date().getFullYear()} MOVA Car Rental. All rights reserved. |
							Designed with ❤️ for premium car rental experiences.
						</p>
					</div>
				</AnimatedContainer>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
