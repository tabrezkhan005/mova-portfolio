/**
 * About Us Page for Mova Car Rental
 * Professional page showcasing company information and values
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mova
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner in premium car rental services. Experience the freedom of the road with our exceptional fleet and customer service.
          </p>
        </div>

        {/* Content sections will be added later */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">To provide premium car rental experiences that exceed expectations.</p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">To be the leading car rental company known for quality and reliability.</p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">Customer satisfaction, safety, and excellence in every journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

