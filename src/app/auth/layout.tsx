/**
 * Auth Layout Component
 * Provides: Full-screen layout without header/footer
 * Features: Clean authentication experience with video background
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
