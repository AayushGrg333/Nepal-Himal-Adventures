"use client"
import { useState, useRef } from "react"
import type React from "react"
import Link from "next/link"

export function DestinationsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const destinations = [
    {
      id: 1,
      name: "Nepal",
      trips: "12 Trips",
      image: "/nepal.jpeg",
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
              <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Journey to the
                <br />
                Himalayan Lands
              </div>
              <div className="w-16 rounded-2xl h-1 bg-[#f2b203] mb-6"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unveiling Hidden Wonders: Nepal, Bhutan, Tibet, and Beyond - Inspire Your Journey!
            </p>
          </div>

          {/* Right Side - 2x2 Grid of Destination Cards */}
          <div className="grid grid-cols-2 gap-4">
            {destinations.map((destination) => {
              const CardContent = (
                <div
                  key={destination.id}
                  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ height: "200px" }}
                >
                  {destination.available && destination.image ? (
                    <>
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay elements */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          {destination.trips}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-xl font-bold drop-shadow-lg">{destination.name}</h3>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex flex-col items-center justify-center">
                      <h3 className="text-gray-600 text-xl font-bold mb-2">{destination.name}</h3>
                      <div className="text-gray-500 text-sm font-semibold">Coming Soon</div>
                    </div>
                  )}
                </div>
              )

              // Only wrap Nepal with Link
              return destination.available && destination.name === "Nepal" ? (
                <Link key={destination.id} href="/nepal" className="cursor-pointer">
                  {CardContent}
                </Link>
              ) : (
                <div key={destination.id}>{CardContent}</div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Header + Swipeable Cards */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Journey to the Himalayan Lands</h2>
            <div className="w-16 h-1 rounded-2xl bg-[#f2b203] mx-auto mb-6"></div>
            <p className="text-base md:text-md text-gray-600">
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
              {destinations[currentSlide].available && destinations[currentSlide].name === "Nepal" ? (
                <Link href="/nepal" className="cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: "300px" }}>
                    <img
                      src={destinations[currentSlide].image || "/placeholder.svg"}
                      alt={destinations[currentSlide].name}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {destinations[currentSlide].trips}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                        {destinations[currentSlide].name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: "300px" }}>
                  {destinations[currentSlide].available && destinations[currentSlide].image ? (
                    <>
                      <img
                        src={destinations[currentSlide].image || "/placeholder.svg"}
                        alt={destinations[currentSlide].name}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay elements */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-700 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {destinations[currentSlide].trips}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                          {destinations[currentSlide].name}
                        </h3>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex flex-col items-center justify-center">
                      <h3 className="text-gray-600 text-2xl font-bold mb-4">{destinations[currentSlide].name}</h3>
                      <div className="text-gray-500 text-lg font-semibold">Coming Soon</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? "bg-[#f2b203]" : "bg-gray-300"
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
