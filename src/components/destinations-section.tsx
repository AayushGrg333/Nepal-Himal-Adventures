"use client"
import { useState, useRef } from "react"
import type React from "react"

export function DestinationsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const destinations = [
    {
      id: 1,
      name: "Nepal",
      trips: "82 Trips",
      image: "/placeholder.svg?height=300&width=300",
      available: true,
    },
    {
      id: 2,
      name: "Bhutan",
      trips: "16 Trips",
      image: null,
      available: false,
    },
    {
      id: 3,
      name: "Tibet",
      trips: "8 Trips",
      image: null,
      available: false,
    },
    {
      id: 4,
      name: "India",
      trips: "12 Trips",
      image: null,
      available: false,
    },
  ]

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentSlide < destinations.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Layout - Text Left, Images Right */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl xl:text-4xl font-bold text-gray-900 mb-4">
                Journey to the
                <br />
                Himalayan Lands
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unveiling Hidden Wonders: Nepal, Bhutan, Tibet, and Beyond - Inspire Your Journey!
            </p>
          </div>

          {/* Right Side - 2x2 Grid of Destination Cards */}
          <div className="grid grid-cols-2 gap-4">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ height: "200px" }}
              >
                {destination.available ? (
                  <>
                    <img
                      src={destination.image || "/placeholder.svg?height=200&width=300"}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        {destination.trips}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-300 flex flex-col items-center justify-center">
                    <h3 className="text-gray-600 text-xl font-bold mb-2">{destination.name}</h3>
                    <div className="text-gray-500 text-sm font-semibold">Coming Soon</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Header + Swipeable Cards */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">Journey to the Himalayan Lands</h3>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600">
              Unveiling Hidden Wonders: Nepal, Bhutan, Tibet, and Beyond - Inspire Your Journey!
            </p>
          </div>

          {/* Swipeable Cards */}
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="px-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: "300px" }}>
                {destinations[currentSlide].available ? (
                  <>
                    <img
                      src={destinations[currentSlide].image || "/placeholder.svg?height=300&width=400"}
                      alt={destinations[currentSlide].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {destinations[currentSlide].trips}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white text-2xl font-bold">{destinations[currentSlide].name}</h3>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-300 flex flex-col items-center justify-center">
                    <h3 className="text-gray-600 text-2xl font-bold mb-4">{destinations[currentSlide].name}</h3>
                    <div className="text-gray-500 text-lg font-semibold">Coming Soon</div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">Swipe left or right to explore destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
