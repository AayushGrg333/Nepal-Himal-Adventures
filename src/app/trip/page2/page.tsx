export default function TripPage2() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EBC Trek with Helicopter Return</h1>
          <p className="text-xl text-gray-600">12 Days Adventure</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
          <p className="text-gray-700 leading-relaxed">
            Get the most scenic and iconic helicopter ride from Gorakshep to Lukla in this after trekking to the base
            camp. Experience the thrill of both trekking and flying over the Himalayas.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded">
              <h3 className="font-semibold text-gray-900">Duration</h3>
              <p className="text-gray-600">12 Days</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h3 className="font-semibold text-gray-900">Difficulty</h3>
              <p className="text-gray-600">Moderate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
