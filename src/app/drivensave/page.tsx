/**
 * Drive & Save Page for Mova Car Rental
 * Special offers and deals for customers
 */
export default function DriveSavePage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Drive &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Save
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover amazing deals and special offers. Save more while you drive with our exclusive packages and loyalty programs.
          </p>
        </div>

        {/* Special offers placeholder */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Weekly Deals</h3>
            <p className="text-gray-600">Save up to 30% on weekly rentals. Perfect for extended stays and business trips.</p>
            <div className="mt-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Save 30%
              </span>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Loyalty Program</h3>
            <p className="text-gray-600">Join our loyalty program and earn points with every rental. Redeem for free upgrades and discounts.</p>
            <div className="mt-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Earn Points
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

