import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Component() {
  return (
    
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Desktop Layout - 5 columns */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <div>
            <Image src="/logo.jpg" alt="Company Logo" width={250} height={100} className="h-24 w-auto mb-4" />
            <p className="text-gray-300 text-sm mb-4">
              Experience the difference with Nepal's premier adventure company. Your epic journey awaits in the majestic
              Himalayas.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Nepal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Bhutan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Tibet
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Activities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Main Activities</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Trekking in Nepal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Luxury Treks
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Climbing & Expedition
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Mountain Biking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Cultural Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Awards & Achievements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Mission Statement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Info</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-yellow-400" />
                <span>+977 1234567899</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-yellow-400" />
                <span>info@.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-yellow-400 mt-0.5" />
                <span>Thamel, Kathmandu, Nepal</span>
              </div>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Sustainable Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout - 2 columns side by side */}
        <div className="lg:hidden">
          {/* Logo */}
          <div className="mb-6">
            <Image src="/logo.jpg" alt="Company Logo" width={180} height={72} className="h-16 w-auto" />
          </div>

          {/* 2 Column Grid for Mobile */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column - Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Meet Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    17 Reasons to Choose Ace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Awards and Achievements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Mission Statement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column - Useful Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Sustainable Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Contact & Social */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-yellow-400" />
                <span>+977 1234567899</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-yellow-400" />
                <span>info@.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-yellow-400 mt-0.5" />
                <span>Thamel, Kathmandu, Nepal</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Nepal Himal Adventures. All rights reserved. | Experience the difference...
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="text-yellow-400 font-semibold mr-1">200+</span>
                <span>Happy Trekkers</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 font-semibold mr-1">4+</span>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
