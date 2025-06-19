"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const reviews = [
    {
      id: 1,
      name: "Rexon Bajimaya",
      rating: 5,
      review : "such a great experience with Nepal Himal Adventures!!",
      initials: "RB",
    },
    {
      id: 2,
      name: "Lakpa Sherpa",
      rating: 5,
      review: "Reaching Gosaikunda was tough, but the first glimpse of that turquoise lake nestled beneath snowy peaks felt like magic. Our guide’s warm stories and steady encouragement made every icy step feel worth it.",
      initials: "LS",
    },
    {
      id: 3,
      name: "Pemba Tamang",
      rating: 5,
      review: "Stepping into the Annapurna foothills felt instantly uplifting—the towering snow-capped peaks and lush rhododendron forests took my breath away. Our guide’s expert pacing and heartfelt tales of local villages made every step feel meaningful, and I left feeling inspired and deeply connected to the mountains.",
      initials: "PT",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Nepal Himal Adventures provided an exceptional trekking experience! Our guide was incredibly knowledgeable about the local culture and terrain. The accommodation and meals were excellent throughout the journey. I felt safe and well-cared for every step of the way. Highly recommend!",
      initials: "SJ",
    },
    {
      id: 5,
      name: "David Chen",
      rating: 5,
      review:
        "Our guide was exceptional—brimming with local knowledge, patient answers to every question, and a warm, encouraging presence that turned a tough hike into an inspiring adventure.😁",
      initials: "DC",
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      rating: 5,
      review : "Starting the trail into Mustang felt tough at first, but stepping into those vast, windswept valleys was nothing short of magical—quiet, rugged, and utterly mesmerizing. Our guide’s stories brought the ancient cliffs and hidden gompas to life, and before we knew it, the journey was over, leaving our hearts full of wonder. 😍",
      initials: "MR",
    },
  ]

  const reviewsPerSlide = isMobile ? 1 : 3
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

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

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentReviews = () => {
    const startIndex = currentSlide * reviewsPerSlide
    return reviews.slice(startIndex, startIndex + reviewsPerSlide)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "fill-green-500 text-green-500" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">Traveler Reviews</h2>
          <div className="w-20 h-1 rounded-2xl bg-[#f2b203] mx-auto mb-8"></div>
          <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            These full and frank reviews are from travelers who have traveled with Nepal Himal Adventures previously.
            The reviews and experiences shown here are from our valued customers.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Desktop Arrows */}
          {!isMobile && (
            <>
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-200 w-12 h-12 rounded-full"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </Button>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-200 w-12 h-12 rounded-full"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </Button>
            </>
          )}

          {/* Reviews Container */}
          <div
            className={isMobile ? "px-4" : "mx-12"}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {isMobile ? (
              // Mobile: Single review display
              <div className="max-w-md mx-auto">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                        {getCurrentReviews()[0].initials}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{getCurrentReviews()[0].name}</h3>
                      <div className="flex items-center justify-center">
                        {renderStars(getCurrentReviews()[0].rating)}
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="relative">
                      <div className="text-4xl text-gray-200 absolute -top-2 -left-2 font-serif">"</div>
                      <p className="text-gray-700 leading-relaxed text-sm px-4 relative z-10 italic">
                        {getCurrentReviews()[0].review}
                      </p>
                      <div className="text-4xl text-gray-200 absolute -bottom-4 -right-2 font-serif">"</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              // Desktop: Three reviews in a row
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getCurrentReviews().map((review) => (
                  <Card
                    key={review.id}
                    className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Profile Section */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {review.initials}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{review.name}</h3>
                          <div className="flex items-center mt-1">{renderStars(review.rating)}</div>
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 leading-relaxed flex-1 text-sm">"{review.review}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
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
          {isMobile && (
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">Swipe left or right to read more reviews</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
