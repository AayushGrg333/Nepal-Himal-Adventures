import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Calendar, Users, MapPin, BirdIcon as Helicopter, Camera, Heart } from "lucide-react"

export default function NepalPage() {
  const trekPackages = [
    {
      id: 1,
      title: "Everest View Heli Trek",
      price: "2,550",
      duration: "8 DAYS",
      difficulty: "Demanding",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Have the most magnificent helicopter ride to Everest Base Camp, Khumbu Glacier and Kalapatthar in lower altitude as much as possible in this heli trek.",
      badge: "Group Trip",
      badgeColor: "bg-red-500",
    },
    {
      id: 2,
      title: "Everest Base Camp Heli Trek",
      price: "2,750",
      duration: "11 DAYS",
      difficulty: "Demanding",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Embark into thrilling adventure to the base of the world's highest, mighty Mount Everest enjoying serene trail, unique culture, and the panoramic landscapes of the Everest.",
      badge: "Group Trip",
      badgeColor: "bg-red-500",
    },
    {
      id: 3,
      title: "Everest Panorama Trek",
      price: "1,400",
      duration: "9 DAYS",
      difficulty: "Demanding",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "In this short and less and strenuous trek, walk in the foothills of Mount Everest and experience the amazing views of the giant mountain surrounding the region.",
      badge: "All Season",
      badgeColor: "bg-green-500",
    },
    {
      id: 4,
      title: "EBC Trek with Helicopter Return",
      price: "2,300",
      duration: "12 DAYS",
      difficulty: "Strenuous",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Get the most scenic and iconic helicopter ride from Gorakshep to Lukla in this after trekking to the base camp of the world's tallest mountain.",
      badge: "Top Seller",
      badgeColor: "bg-yellow-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image src="/nepal-hero-section.jpg" alt="Nepal Himalayas" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <nav className="flex items-center justify-center space-x-2 mb-8 text-sm">
              <Link href="/" className="hover:underline">
                home
              </Link>
              <span>{">"}</span>
              <span>nepal</span>
            </nav>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">Nepal</h1>
          </div>
        </div>
      </div>

      {/* About Nepal Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="items-center mb-16 text-base md:text-xl">
          <div >
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Discover the Land of the Himalayas</h2>
            <p className=" text-gray-600 mb-4">
              <strong>Nepal</strong> is a land of staggering heights and cultural treasures, home to over 1,300 peaks above 6,000 m, 90 above 7,000 m, and eight legendary 8,000 m giants, including Everest and Annapurna—all within its borders.The landscapes shift dramatically—from lush rhododendron forests to high-altitude deserts—offering awe-inspiring vistas and once-in-a-lifetime trekking experiences .
            </p>
            <p className="text-gray-600 mb-4">
               At Nepal Himal Adventures, we craft ambitious yet accessible journeys that go beyond the trail. Whether guiding you over iconic passes like Thorong La, introducing you to resilient mountain communities, or ensuring your safety at every altitude, we aim to deliver more than a trek—we deliver a lifelong memory. Your adventure with us isn’t just a hike; it’s a personal story woven into the heart of the Himalayas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Mountain className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">8 of 14 Highest Peaks</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">World's Best Trekking</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">Rich Cultural Heritage</span>
              </div>
            </div>
          </div>          
        </div>

        {/* Why Choose Nepal Section */}
<div className="bg-gray-50 rounded-2xl p-8 mb-16">
  <h3 className="text-2xl font-bold text-center mb-8">Why Nepal is Perfect for Trekking</h3>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="text-center">
      <Mountain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
      <h4 className="font-semibold mb-2">Majestic Himalayas</h4>
      <p className="text-gray-600 text-sm">
        Home to the world's highest peaks including Everest, Lhotse, Makalu, and Cho Oyu
      </p>
    </div>

    {/* NEW: Village Culture Highlight */}
    <div className="text-center">
      <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
      <h4 className="font-semibold mb-2">Authentic Village Life</h4>
      <p className="text-gray-600 text-sm">
         Immerse yourself in Nepal's diverse culture—meet local communities, experience traditional customs, and enjoy genuine hospitality.
      </p>
    </div>

    <div className="text-center">
      <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
      <h4 className="font-semibold mb-2">Diverse Landscapes</h4>
      <p className="text-gray-600 text-sm">
        From lush rhododendron forests to glacial valleys and high‑altitude deserts
      </p>
    </div>
  </div>
</div>


        {/* Nepal Himal Adventures Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">How Nepal Himal Adventures Can Help You</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Expert Local Guides</h4>
              <p className="text-gray-600 mb-4">
                Our experienced Sherpa guides have intimate knowledge of the Himalayan terrain, weather patterns, and
                local culture. They ensure your safety while sharing fascinating stories about the mountains and their
                significance.
              </p>
              <h4 className="text-xl font-semibold mb-4">Comprehensive Trek Packages</h4>
              <p className="text-gray-600 mb-4">
                We offer complete trekking solutions including permits, accommodation, meals, transportation, and
                emergency support. Our packages are designed to provide maximum comfort and safety in the challenging
                mountain environment.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Helicopter Services</h4>
              <p className="text-gray-600 mb-4">
                Experience the Himalayas from a unique perspective with our helicopter tours and rescue services.
                Perfect for those with limited time or seeking a luxurious mountain experience.
              </p>
              <h4 className="text-xl font-semibold mb-4">Customized Adventures</h4>
              <p className="text-gray-600 mb-4">
                Whether you're a beginner or experienced mountaineer, we customize our treks to match your fitness
                level, interests, and time constraints. From tea house treks to camping expeditions.
              </p>
            </div>
          </div>
        </div>

        {/* Trekking Programs Section */}
        <div>
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-4">The following is a list of the programs we provide in Nepal:</p>
            <h2 className="text-4xl font-bold">TREKKING IN NEPAL</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trekPackages.map((trek) => (
              <Link key={trek.id} href={`nepal/${trek.id}`} className="block">
                <Card className="h-130 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="relative">
                    {/* <Image
                      src={trek.image || "/placeholder.svg"}
                      alt={trek.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    /> */}
                    <Badge className={`absolute top-3 left-3 text-white ${trek.badgeColor}`}>{trek.badge}</Badge>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="text-2xl font-bold">USD {trek.price}</div>
                      <div className="text-sm">/ Person</div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{trek.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm text-gray-500">{trek.difficulty}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{trek.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-gray-600 mb-4">{trek.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready for Your Himalayan Adventure?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let Nepal Himal Adventures guide you through the world's most spectacular mountain landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600">
              <Mountain className="h-5 w-5 mr-2" />
              Plan Your Trek
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
