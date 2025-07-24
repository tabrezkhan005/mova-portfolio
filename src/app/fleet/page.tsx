/**
 * Our Fleet Page for Mova Car Rental
 * Showcasing available vehicles and rental options
 */
export default function FleetPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Fleet
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose from our premium collection of vehicles. From luxury sedans to SUVs, we have the perfect car for every journey.
          </p>
        </div>

        {/* Fleet categories placeholder */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Sedans</h3>
            <p className="text-gray-600">Premium comfort and style for business and leisure travel.</p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">SUVs</h3>
            <p className="text-gray-600">Spacious and powerful vehicles perfect for family adventures.</p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports Cars</h3>
            <p className="text-gray-600">Experience the thrill of the road with our high-performance vehicles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

