"use client";

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/auth';

  // If we're on the auth page, render children without header/footer
  if (isAuthPage) {
    return <div className="min-h-screen">{children}</div>;
  }

  // Otherwise, render children normally (header/footer will be shown by layout)
  return <>{children}</>;
}
