"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'


export function BestSellers() {
  const treks = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=400",
      price: "USD 1,750",
      title: "Gokyo to Everest Base Camp Trek",
      duration: "17 Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=400",
      price: "USD 1,500",
      title: "Everest Base Camp Helicopter Tour",
      duration: "1 Day",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=400",
      price: "USD 800",
      title: "Ghorepani Poon Hill Trek",
      duration: "9 Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=400",
      price: "USD 2,450",
      title: "Everest Base Camp Peak",
      duration: "19 Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=400",
      price: "USD 1,200",
      title: "Annapurna Base Camp Trek",
      duration: "14 Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=400",
      price: "USD 950",
      title: "Langtang Valley Trek",
      duration: "12 Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our Best Sellers for 2025
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Join us on our trending adventure this year.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-16">
            {treks.slice(0, 4).map((trek) => (
              <Card key={trek.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={trek.image || "/placeholder.svg"}
                    alt={trek.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {trek.price}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {trek.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {trek.duration}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {trek.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Row for Mobile/Tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-16 mt-6 lg:hidden">
            {treks.slice(4, 6).map((trek) => (
              <Card key={trek.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={trek.image || "/placeholder.svg"}
                    alt={trek.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {trek.price}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {trek.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {trek.duration}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {trek.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All 6 cards for larger screens */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-6 gap-6 px-16 mt-6">
            {treks.slice(4, 6).map((trek) => (
              <Card key={trek.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={trek.image || "/placeholder.svg"}
                    alt={trek.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {trek.price}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {trek.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {trek.duration}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {trek.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}