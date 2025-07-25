"use client";
import { Search, Star, Award, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRotatingText } from "@/hooks/use-rotating-text";
import { BestSellersCarousel } from "@/components/best-sellers-carausel";
import { WhyUsSection } from "@/components/why-us-section";
import { DestinationsSection } from "@/components/destinations-section";
import { ReviewsSection } from "@/components/reviews-section";
import TrekkingRegions from "@/components/trekking-regions";
import FAQSection from "@/components/faq-section";
import SpeakToExpert from "@/components/speak-to-expert";
import BookAdventureCTA from "@/components/book-adventure";

export default function HomePage() {
     const rotatingWord = useRotatingText(
          ["Discover", "Explore", "Thrive"],
          1000
     );

     return (
          <div className="min-h-screen bg-white">
               {/* Hero Section */}
               <div
                    className="relative h-screen bg-cover bg-center bg-no-repeat"
                    style={{
                         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-bg.jpeg')`,
                    }}
               >
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                         <h1 className="text-white text-[25px] md:text-5xl font-semibold md:mb-5 mb-0">
                              Experience the Difference!
                         </h1>

                         <div className="text-white text-6xl md:text-7xl font-semibold mb-12 h-24 flex items-center">
                              <span className="transition-all duration-500 ease-in-out">
                                   {rotatingWord}
                              </span>
                         </div>

                         {/* Search Bar */}

                         <div className="relative w-full max-w-2xl md:mb-3">
                              <Input
                                   type="text"
                                   placeholder="Search Trips"
                                   className="w-full h-14 pl-6 pr-14 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full"
                              />
                              <Button
                                   size="sm"
                                   className="absolute right-2 top-2 h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700"
                              >
                                   <Search className="h-4 w-4 text-white" />
                              </Button>
                         </div>
                    </div>

                    {/* Bottom Stats Section */}
                    <div className="absolute bottom-0 left-0 right-0  ">
                         <div className="max-w-xl mx-auto px-4 py-8 ">
                              <div className="  grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                   <div className="flex flex-col items-center">
                                        <Users className=" h-8 w-8 text-white mb-3" />
                                        <div className="text-white font-bold text-lg">
                                             4 Years+
                                        </div>
                                        <div className="text-gray-300 text-sm">
                                             Experience
                                        </div>
                                   </div>

                                   <div className="flex flex-col items-center ">
                                        <Award className="h-8 w-8 text-white mb-2" />
                                        <div className="text-white font-bold text-lg">
                                             Best Price
                                        </div>
                                        <div className="text-gray-300 text-sm">
                                             Guaranteed
                                        </div>
                                   </div>
                                   <div className=" flex-col items-center hidden md:flex">
                                        <Leaf className="h-8 w-8 text-white mb-2" />
                                        <div className="text-white font-bold text-lg">
                                             Committed To
                                        </div>
                                        <div className="text-gray-300 text-sm">
                                             Sustainability
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Best Sellers Carousel */}
               <BestSellersCarousel />

               {/* Why Us Section */}
               <WhyUsSection />

               {/* Destinations Section */}
               <DestinationsSection />

               {/* Reviews Section */}
               <ReviewsSection />

               {/* Trekking Regions Section */}
               <TrekkingRegions />

               {/* FAQ Section */}
               <FAQSection />

               {/* Speak to Expert Section */}
               <SpeakToExpert />

               {/* Book Adventure CTA */}
               <BookAdventureCTA />

          </div>
     );
}
