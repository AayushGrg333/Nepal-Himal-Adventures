"use client"

import { useEffect, useRef, useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const trekkingRegions = [
  {
    id: 1,
    name: "MUSTANG REGION",
    image: "/placeholder.svg?height=400&width=600",
    bgColor: "from-blue-600/80 to-blue-800/80",
  },
  {
    id: 2,
    name: "ANNAPURNA REGION",
    image: "/placeholder.svg?height=400&width=600",
    bgColor: "from-green-600/80 to-green-800/80",
  },
  {
    id: 3,
    name: "GOSAIKUNDA REGION",
    image: "/placeholder.svg?height=400&width=600",
    bgColor: "from-purple-600/80 to-purple-800/80",
  },
  {
    id: 4,
    name: "MANASLU REGION",
    image: "/placeholder.svg?height=400&width=600",
    bgColor: "from-orange-600/80 to-orange-800/80",
  },
]

export default function TrekkingRegions() {
  const [api, setApi] = useState<CarouselApi>()
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (!api) return

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        api.scrollNext()
      }, 5000)
    }

    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }

    // Start auto-play
    startAutoPlay()

    // Cleanup on unmount
    return () => stopAutoPlay()
  }, [api])

  return (
    <div className="w-full bg-gray-900 py-16 px-4">
      <div className="md:max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trekking Regions in Nepal</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore the Himalaya and unravel the beauty of trekking in Nepal along these regions.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => {
            if (autoPlayRef.current) {
              clearInterval(autoPlayRef.current)
            }
          }}
          onMouseLeave={() => {
            if (api) {
              autoPlayRef.current = setInterval(() => {
                api.scrollNext()
              }, 5000)
            }
          }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {trekkingRegions.map((region) => (
                <CarouselItem key={region.id} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <Card className="border-0 overflow-hidden group cursor-pointer">
                    <CardContent className="p-0 relative h-60 md:h-80">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${region.image})`,
                        }}
                      />

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${region.bgColor} opacity-60`} />

                      {/* Content */}
                      <div className="absolute inset-0 flex items-end p-6 md:p-8">
                        <div className="text-white">
                          <h3 className="text-xl md:text-2xl font-bold tracking-wide">{region.name}</h3>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 w-12 h-12 shadow-lg" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 w-12 h-12 shadow-lg" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}
