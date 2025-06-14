"use client"
import { Search, Star, Award, Leaf, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRotatingText } from "@/hooks/use-rotating-text"
import { BestSellersCarousel } from "./components/best-sellers"


export default function HomePage() {
  const rotatingWord = useRotatingText(["Discover", "Explore", "Thrive"], 1000)

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-bg.jpeg')`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">Experience the Difference!</h1>

          <div className="text-white text-6xl md:text-8xl font-bold mb-12 h-24 flex items-center">
            <span className="transition-all duration-500 ease-in-out">{rotatingWord}</span>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl">
            <Input
              type="text"
              placeholder="Search Trips"
              className="w-full h-14 pl-6 pr-14 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full"
            />
            <Button size="sm" className="absolute right-2 top-2 h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700">
              <Search className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="absolute bottom-0 left-0 right-0  ">

          <div className="max-w-xl mx-auto px-4 py-8  ">

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-white mb-3" />
                <div className="text-white font-bold text-lg">4 Years+</div>
                <div className="text-gray-300 text-sm">Experience</div>
              </div>


              <div className="flex flex-col items-center ">
                <Award className="h-8 w-8 text-white mb-2" />
                <div className="text-white font-bold text-lg">Best Price</div>
                <div className="text-gray-300 text-sm">Guaranteed</div>
              </div>

              <div className="flex flex-col items-center">
                <Leaf className="h-8 w-8 text-white mb-2" />
                <div className="text-white font-bold text-lg">Committed To</div>
                <div className="text-gray-300 text-sm">Sustainability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Best Sellers Carousel */}
      <BestSellersCarousel />


    </div>
  )
}
