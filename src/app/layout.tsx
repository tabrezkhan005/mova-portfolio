import type { Metadata } from 'next';
import { Radio_Canada_Big } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthWrapper from '@/components/AuthWrapper';

/**
 * Radio Canada Big Font Configuration
 * Professional typography for the MOVA car rental brand
 */
const radioCanadaBig = Radio_Canada_Big({
  subsets: ['latin'],
  variable: '--font-radio-canada-big',
  display: 'swap',
});

/**
 * Metadata Configuration for MOVA Car Rental Website
 * SEO optimized for car rental business
 */
export const metadata: Metadata = {
  title: 'MOVA - Premium Car Rental Service',
  description: 'Experience premium car rental with MOVA. Wide fleet selection, competitive rates, and exceptional service. Book your perfect ride today.',
  keywords: ['car rental', 'MOVA', 'vehicle rental', 'premium cars', 'drive and save'],
  authors: [{ name: 'MOVA Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

/**
 * Root Layout Component
 * Provides: Font integration, Header component, responsive structure
 * Features: Glass morphism design, professional typography, mobile-first approach
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${radioCanadaBig.variable} antialiased min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50`}>
        <AuthWrapper>
          {/* Professional Glass Header Component */}
          <Header />

          {/* Main Content Area with proper spacing for fixed header */}
          <main>
            {children}
          </main>

          {/* MOVA Footer Component */}
          <Footer />

          {/* Optional: Global background pattern for enhanced visual appeal */}
          <div className="fixed inset-0 -z-10 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
        </AuthWrapper>
      </body>
    </html>
  );
}
