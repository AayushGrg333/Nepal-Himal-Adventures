"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Users } from "lucide-react";
import Link from "next/link";

export default function BookAdventureCTA() {
     return (
          <div className="relative w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 py-20 px-4 overflow-hidden">

               {/* Background Elements */}
               <div className="absolute inset-0">
                    {/* Mountain Silhouettes */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Floating Elements */}
                    <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
                    <div className="absolute top-32 right-20 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-1000" />
                    <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-pulse delay-500" />

                    {/* Geometric Patterns */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                         <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow" />
                         <div className="absolute inset-8 border-2 border-white/30 rounded-full animate-spin-slow-reverse" />
                    </div>
               </div>

               <div className="relative z-10 max-w-6xl mx-auto text-center">
                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                         <div className="flex items-center gap-2 text-white/90">
                              <Users className="w-5 h-5" />
                              <span className="text-sm font-medium">
                                   200+ Happy Trekkers
                              </span>
                         </div>

                         <div className="flex items-center gap-2 text-white/90">
                              <Mountain className="w-5 h-5" />
                              <span className="text-sm font-medium">
                                   4+ Years Experience
                              </span>
                         </div>
                    </div>

                    {/* Main Content */}
                    <div className="mb-12">
                         <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                              Your Epic
                              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                                   Adventure Awaits
                              </span>
                         </h2>
                         <p className="text-lg md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
                              Don't just dream about the Himalayas – conquer
                              them!
                         </p>
                         <p className="text-md text-white/80 max-w-2xl mx-auto">
                              Join thousands of adventurers who've discovered
                              the magic of Nepal's majestic peaks. Every step
                              tells a story, every summit changes your life.
                         </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                         <Link href="/booking">
                              <Button
                                   size="lg"
                                   className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                              >
                                   Book Your Adventure Now
                                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </Button>
                         </Link>
                    </div>
               </div>

               <style jsx>{`
                    @keyframes spin-slow {
                         from {
                              transform: rotate(0deg);
                         }
                         to {
                              transform: rotate(360deg);
                         }
                    }
                    @keyframes spin-slow-reverse {
                         from {
                              transform: rotate(360deg);
                         }
                         to {
                              transform: rotate(0deg);
                         }
                    }
                    .animate-spin-slow {
                         animation: spin-slow 20s linear infinite;
                    }
                    .animate-spin-slow-reverse {
                         animation: spin-slow-reverse 15s linear infinite;
                    }
               `}</style>
          </div>
     );
}
