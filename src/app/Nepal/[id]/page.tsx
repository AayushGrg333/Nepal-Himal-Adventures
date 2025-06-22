import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Mountain, Star } from "lucide-react"

const trekData = {
  1: {
    title: "Everest View Heli Trek",
    price: "2,550",
    duration: "8 DAYS",
    difficulty: "Demanding",
    maxAltitude: "3,880m",
    groupSize: "2-12 people",
    bestSeason: "Mar-May, Sep-Nov",
    image: "/placeholder.svg?height=400&width=800",
    badge: "Group Trip",
    badgeColor: "bg-red-500",
    description:
      "Have the most magnificent helicopter ride to Everest Base Camp, Khumbu Glacier and Kalapatthar in lower altitude as much as possible in this heli trek.",
    highlights: [
      "Helicopter flight to Everest Base Camp",
      "Views of Khumbu Glacier",
      "Kalapatthar viewpoint",
      "Sherpa culture experience",
      "Namche Bazaar exploration",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Transfer to hotel, trek briefing" },
      { day: 2, title: "Fly to Lukla, trek to Phakding", description: "35-minute flight, 3-hour trek" },
      { day: 3, title: "Trek to Namche Bazaar", description: "6-hour trek, Sherpa capital" },
      { day: 4, title: "Acclimatization day", description: "Explore Namche, short hikes" },
      { day: 5, title: "Trek to Tengboche", description: "Famous monastery visit" },
      { day: 6, title: "Helicopter to EBC", description: "Scenic helicopter tour" },
      { day: 7, title: "Return to Lukla", description: "Final trek day" },
      { day: 8, title: "Fly back to Kathmandu", description: "Departure" },
    ],
  },
  2: {
    title: "Everest Base Camp Heli Trek",
    price: "2,750",
    duration: "11 DAYS",
    difficulty: "Demanding",
    maxAltitude: "5,364m",
    groupSize: "2-10 people",
    bestSeason: "Mar-May, Sep-Nov",
    image: "/placeholder.svg?height=400&width=800",
    badge: "Group Trip",
    badgeColor: "bg-red-500",
    description:
      "Embark into thrilling adventure to the base of the world's highest, mighty Mount Everest enjoying serene trail, unique culture, and the panoramic landscapes of the Everest.",
    highlights: [
      "Reach Everest Base Camp",
      "Helicopter return journey",
      "Kala Patthar sunrise",
      "Sherpa villages",
      "Buddhist monasteries",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport pickup, hotel check-in" },
      { day: 2, title: "Fly to Lukla", description: "Trek to Phakding (2,652m)" },
      { day: 3, title: "Trek to Namche Bazaar", description: "Sherpa capital (3,440m)" },
      { day: 4, title: "Acclimatization day", description: "Rest and explore" },
      { day: 5, title: "Trek to Tengboche", description: "Monastery visit (3,867m)" },
      { day: 6, title: "Trek to Dingboche", description: "Beautiful valley (4,410m)" },
      { day: 7, title: "Trek to Lobuche", description: "High altitude (4,940m)" },
      { day: 8, title: "EBC and Gorak Shep", description: "Base camp visit (5,364m)" },
      { day: 9, title: "Kala Patthar", description: "Sunrise view, helicopter to Lukla" },
      { day: 10, title: "Fly to Kathmandu", description: "Rest and celebration" },
      { day: 11, title: "Departure", description: "Final departure" },
    ],
  },
  3: {
    title: "Everest Panorama Trek",
    price: "1,400",
    duration: "9 DAYS",
    difficulty: "Demanding",
    maxAltitude: "3,867m",
    groupSize: "2-15 people",
    bestSeason: "All Season",
    image: "/placeholder.svg?height=400&width=800",
    badge: "All Season",
    badgeColor: "bg-green-500",
    description:
      "In this short and less and strenuous trek, walk in the foothills of Mount Everest and experience the amazing views of the giant mountain surrounding the region.",
    highlights: [
      "Panoramic mountain views",
      "Tengboche Monastery",
      "Sherpa culture",
      "Rhododendron forests",
      "Less strenuous route",
    ],
    itinerary: [
      { day: 1, title: "Arrival Kathmandu", description: "Welcome to Nepal" },
      { day: 2, title: "Fly to Lukla", description: "Trek to Phakding" },
      { day: 3, title: "Trek to Namche", description: "Sherpa capital" },
      { day: 4, title: "Acclimatization", description: "Explore Namche" },
      { day: 5, title: "Trek to Tengboche", description: "Famous monastery" },
      { day: 6, title: "Return to Namche", description: "Descend through forests" },
      { day: 7, title: "Trek to Lukla", description: "Final trekking day" },
      { day: 8, title: "Fly to Kathmandu", description: "Return to capital" },
      { day: 9, title: "Departure", description: "Safe journey home" },
    ],
  },
  4: {
    title: "EBC Trek with Helicopter Return",
    price: "2,300",
    duration: "12 DAYS",
    difficulty: "Strenuous",
    maxAltitude: "5,364m",
    groupSize: "2-12 people",
    bestSeason: "Mar-May, Sep-Nov",
    image: "/placeholder.svg?height=400&width=800",
    badge: "Top Seller",
    badgeColor: "bg-yellow-500",
    description:
      "Get the most scenic and iconic helicopter ride from Gorakshep to Lukla in this after trekking to the base camp of the world's tallest mountain.",
    highlights: [
      "Complete EBC trek",
      "Helicopter return flight",
      "Kala Patthar summit",
      "Island Peak views",
      "Luxury helicopter experience",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", description: "Hotel transfer, briefing" },
      { day: 2, title: "Fly to Lukla", description: "Trek begins to Phakding" },
      { day: 3, title: "Trek to Namche", description: "Enter Sherpa heartland" },
      { day: 4, title: "Rest day Namche", description: "Acclimatization hikes" },
      { day: 5, title: "Trek to Tengboche", description: "Monastery and views" },
      { day: 6, title: "Trek to Dingboche", description: "Higher altitude" },
      { day: 7, title: "Rest day Dingboche", description: "Acclimatization" },
      { day: 8, title: "Trek to Lobuche", description: "Memorial area" },
      { day: 9, title: "EBC via Gorak Shep", description: "Reach base camp" },
      { day: 10, title: "Kala Patthar", description: "Best Everest views" },
      { day: 11, title: "Helicopter to Lukla", description: "Scenic flight return" },
      { day: 12, title: "Fly to Kathmandu", description: "Trip completion" },
    ],
  },
}

export default function TrekDetailPage({ params }: { params: { id: string } }) {
  const trek = trekData[params.id as unknown as keyof typeof trekData]

  if (!trek) {
    return <div>Trek not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image src={trek.image || "/placeholder.svg"} alt={trek.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <Link href="/" className="inline-flex items-center text-white mb-4 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Nepal
            </Link>
            <Badge className={`text-white mb-4 ${trek.badgeColor}`}>{trek.badge}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{trek.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{trek.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold">{trek.duration}</div>
              <div className="text-sm text-gray-600">Duration</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Mountain className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold">{trek.maxAltitude}</div>
              <div className="text-sm text-gray-600">Max Altitude</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold">{trek.groupSize}</div>
              <div className="text-sm text-gray-600">Group Size</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-semibold">{trek.difficulty}</div>
              <div className="text-sm text-gray-600">Difficulty</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Trek Highlights</h2>
              <ul className="space-y-2">
                {trek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Detailed Itinerary</h2>
              <div className="space-y-4">
                {trek.itinerary.map((day, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{day.title}</h3>
                          <p className="text-gray-600 text-sm">{day.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-3xl font-bold text-blue-600">USD {trek.price}</div>
                  <div className="text-sm text-gray-600">per person</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Season:</span>
                    <span className="font-medium">{trek.bestSeason}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-medium">{trek.groupSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{trek.difficulty}</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Book This Trek
                </Button>
                <Button variant="outline" className="w-full">
                  Get More Info
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
