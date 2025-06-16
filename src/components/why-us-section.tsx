"use client"
import { Mountain, Shield, Heart, Users, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export function WhyUsSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [showAllCards, setShowAllCards] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const features = [
    {
      icon: <Mountain className="h-8 w-8 text-blue-600" />,
      title: "Nepal Mountain Specialists",
      description:
        "Born from the heart of the Himalayas, our local expertise and deep connection to Nepal's mountains ensures authentic experiences that only true locals can provide.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Safety First Philosophy",
      description:
        "Your safety is our sacred promise. Our certified guides, modern equipment, and comprehensive safety protocols ensure you can focus on the adventure ahead.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Community-Centered Impact",
      description:
        "Every trek supports local communities. We believe in responsible tourism that preserves Nepal's natural beauty while empowering the people who call these mountains home.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Personalized Adventures",
      description:
        "No two adventurers are alike. We craft each journey to match your dreams, fitness level, and aspirations for an unforgettable Himalayan experience.",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Excellence in Service",
      description:
        "From your first inquiry to your final farewell, our dedicated team ensures every detail is perfect, creating memories that will last a lifetime.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-indigo-600" />,
      title: "Flexible Departures",
      description:
        "Adventure waits for no one. With flexible scheduling and guaranteed departures, we make it easy to embark on your Himalayan journey when you're ready.",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Nepal Himal Adventures?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Since 2023, we've been your gateway to Nepal's magnificent Himalayas. With passionate local experts and an
            unwavering commitment to sustainable tourism, we create transformative adventures that connect you deeply
            with Nepal's breathtaking landscapes and rich culture.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {(isMobile && !showAllCards ? features.slice(0, 3) : features).map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-50 rounded-full">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/about">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Discover Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
