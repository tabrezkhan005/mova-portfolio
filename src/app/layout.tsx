import type { Metadata, Viewport } from 'next';
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
 * Viewport Configuration
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

/**
 * Metadata Configuration for MOVA Car Rental Website
 * SEO optimized for car rental business
 */
export const metadata: Metadata = {
  title: 'MOVA - Premium Car Rental Service',
  description: 'Experience premium car rental with MOVA. Wide fleet selection, competitive rates, and exceptional service. Book your perfect ride today.',
  keywords: ['car rental', 'MOVA', 'vehicle rental', 'premium cars', 'drive and save'],
  authors: [{ name: 'MOVA Team' }],
  robots: 'index, follow',
};

/**
 * Root Layout Component
 * Provides: Font integration, Header component, responsive structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${radioCanadaBig.variable} antialiased min-h-screen bg-white overflow-x-hidden`}>
        <AuthWrapper>
          {/* Header Component */}
          <Header />

          {/* Main Content Area */}
          <main>
            {children}
          </main>

          {/* Footer Component */}
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  );
}
