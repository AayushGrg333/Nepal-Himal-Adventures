"use client"

import { Phone, Mail, Clock, MapPin, MessageCircle, Headphones } from "lucide-react"

export default function SpeakToExpert() {
  return (
    <div className="w-full bg-gray-50 py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Speak to Expert Section */}
        <div className="bg-white shadow-lg p-6 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left w-full">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Headphones className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Speak to an Expert</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Need assistance with your booking? Our travel experts are here to help you plan the perfect Himalayan
                adventure. Get personalized recommendations and instant support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MessageCircle className="h-4 w-4" />
                  <span>Instant Response</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-center lg:items-end w-full">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-r-4 border-blue-600 w-full max-w-sm">
                <div className="text-center lg:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Nepal Expert</h3>
                  <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                    <span className="text-gray-600 text-base md:text-lg font-medium">[Expert Name]</span>
                    <span className="text-xl md:text-2xl">🇳🇵</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center lg:justify-end gap-2">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600 text-sm">WhatsApp</span>
                    </div>
                    <a
                      href="https://wa.me/977985123710"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-base md:text-lg hover:text-blue-700 transition-colors duration-200 bg-white px-4 py-2 rounded-lg shadow-sm border hover:shadow-md"
                    >
                      <Phone className="h-4 w-4" />
                      +977985123710
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Head Office */}
            <div className="bg-gray-800 text-white p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold mb-4">
                  HEAD OFFICE
                </span>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  A- ONE BUSINESS COMPLEX, THAMEL,
                  <br />
                  KATHMANDU, NEPAL
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div className="text-sm md:text-base">
                    <a href="tel:+97714523719" className="hover:text-blue-400 transition-colors">
                      +97712345678
                    </a>
                    <span className="text-gray-400 mx-2">•</span>
                    <a href="tel:+97714523720" className="hover:text-blue-400 transition-colors">
                      +97712345678
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-sm md:text-base">10:00 AM to 6:00 PM</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a
                    href="mailto:info@acethehimalaya.com"
                    className="text-sm md:text-base hover:text-blue-400 transition-colors"
                  >
                    info@.com
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-100 p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-semibold mb-4">
                  EMERGENCY SOS (24/7)
                </span>
                <p className="text-gray-600 text-sm mb-4">For urgent assistance during your trek or expedition</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <span className="text-sm text-gray-600 block">WhatsApp Emergency</span>
                    <a
                      href="https://wa.me/9779851102225"
                      className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    >
                      +9779851102225
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <div>
                    <span className="text-sm text-gray-600 block">Emergency Mobile</span>
                    <a
                      href="tel:+9779802002225"
                      className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    >
                      +9779802002225
                    </a>
                  </div>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500 mt-4">
                  <p className="text-xs text-gray-600">
                    <strong>Note:</strong> Emergency services available 24/7 for all active trekkers and expedition
                    members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
