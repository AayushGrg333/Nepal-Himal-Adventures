"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, MessageCircle, Menu, X, ChevronRight } from "lucide-react"

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<null | "nepal" | "about">(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedNepalCategory, setSelectedNepalCategory] = useState("Trekking in Nepal")
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (menu: "nepal" | "about") => {
    setActiveMenu((prev) => (prev === menu ? null : menu))
  }

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Nepal menu categories
  const nepalCategories = [
    "Trekking in Nepal",
    "Climbing and Expedition",
    "Cultural Tour and Sightseeing",
    "Cycling and Mountain Biking",
    "Luxury Treks",
    "Luxury Tours",
    "Day Trips",
    "Multi Country Tours",
    "Voluntourism Trips",
    "Extend Your Trip",
  ]

  // Trekking options (you can expand this for other categories)
  const trekkingOptions = [
    "Everest View Heli Trek – 8 Days",
    "Everest Panorama Trek – 9 Days",
    "Everest Base Camp Heli Trek – 11 Days",
    "EBC Trek with Helicopter Return – 12 Days",
    "Everest Base Camp Trek – 14 Days",
    "Gokyo Lake Trek – 13 Days",
    "Gokyo and Renjo La Pass Trek – 14 Days",
    "Everest Base Camp Trek without Lukla Flight – 17 Days",
    "Gokyo to Everest Base Camp Trek – 17 Days",
    "Everest Base Camp with Island Peak – 19 Days",
    "Everest Three Passes Trek – 20 Days",
    "Everest High Passes and Island Peak – 23 Days",
    "Classical Everest Base Camp Trek – 21 Days",
    "Langtang Valley Trek – 10 Days",
    "Langtang Valley Ganja La Pass Trek – 14 Days",
    "Langtang Helambu Trek – 17 Days",
    "Ghorepani Poon Hill Trek – 9 Days",
    "Mardi Himal Trek – 10 Days",
    "Annapurna Base Camp Trek – 13 Days",
    "Short Annapurna Base Camp Trek – 10 Days",
    "Himalayan Highlights – 13 Days",
    "Nar Phu Valley Trek with Annapurna Circuit – 18 Days",
    "Annapurna Circuit Trek – 16 Days",
    "Annapurna Circuit with Tilicho Lake Trek – 17 Days",
    "Khopra Danda Trek – 11 Days",
    "Shivapuri-Chisapani Trek – 4 Days",
    "Upper Mustang Trek (Drive & Trek) – 16 Days",
    "Tsum Valley Trek – 16 Days",
    "Manaslu Circuit Trek – 15 Days",
    "Dhaulagiri Circuit Trek – 20 Days",
    "Upper Dolpo Trek – 25 Days",
    "Kanchenjunga Base Camp Trek – 22 Days",
  ]

  // About Us menu items
  const aboutUsItems = {
    left: [
      { name: "About Us", href: "/about", highlight: false },
      { name: "Meet Our Team", href: "/team", highlight: true },
      { name: "Why Ace?", href: "/why-ace", highlight: false },
      { name: "CSI", href: "/csi", highlight: false },
      { name: "Our Affiliations", href: "/affiliations", highlight: false },
      { name: "Legal Documents", href: "/legal", highlight: false },
      { name: "Terms and Conditions", href: "/terms", highlight: false },
      { name: "Our Fleets", href: "/fleets", highlight: false },
      { name: "Awards and Achievements", href: "/awards", highlight: false },
    ],
    right: [
      { name: "Customer Reviews", href: "/reviews", highlight: false },
      { name: "Video Reviews", href: "/video-reviews", highlight: false },
      { name: "Request A Brochure", href: "/brochure", highlight: false },
      { name: "Partner with ACE", href: "/partner", highlight: false },
      { name: "Sign Up for Newsletter", href: "/newsletter", highlight: false },
      { name: "Contact Us", href: "/contact", highlight: false },
      { name: "Meet our Founder", href: "/founder", highlight: false },
      { name: "Blog", href: "/blog", highlight: false },
    ],
  }

  return (
    <div>
     <div className=" w-full fixed lg:p-2 p-0 top-0 left-0 right-0 z-50 bg-black/75 text-white shadow-md">

        <div className="font-inter w-full mx-auto">
          <div className="flex items-center justify-between h-18">
            {/* Left side - Logo */}
            <div className="flex-shrink-0  ml-4 md:ml-1">
              <Link href="/">
                <Image src="/logo.jpg" alt="Company Logo" width={130} height={45} className="object-contain" priority />
              </Link>
            </div>

            {/* Center - Menu items */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Nepal */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("nepal")}
                  className="flex items-center gap-1 text-lg text-white hover:text-blue-400 px-3 py-2 rounded transition-colors duration-200 focus:outline-none"
                >
                  Nepal <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === "nepal" && (
                  <div
                    className="absolute top-full mt-2 bg-white text-black shadow-xl rounded-md overflow-hidden"
                    style={{ width: "800px", left: "-300px" }}
                  >
                    <div className="flex">
                      {/* Left Sidebar */}
                      <div className="w-1/3 bg-gray-50 border-r">
                        {nepalCategories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedNepalCategory(category)}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-200 flex items-center justify-between ${
                              selectedNepalCategory === category ? "bg-blue-50 text-blue-600" : ""
                            }`}
                          >
                            {category}
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ))}
                      </div>

                      {/* Right Content */}
                      <div className="w-2/3 p-6">
                        <h3 className="text-lg font-semibold mb-4">{selectedNepalCategory}</h3>
                        {selectedNepalCategory === "Trekking in Nepal" && (
                          <div className="grid grid-cols-2 gap-2">
                            {trekkingOptions.map((trek, index) => (
                              <Link
                                key={index}
                                href={`/nepal/trekking/${trek.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-sm hover:text-blue-600 py-1"
                                onClick={() => setActiveMenu(null)}
                              >
                                {trek}
                              </Link>
                            ))}
                          </div>
                        )}
                        {selectedNepalCategory !== "Trekking in Nepal" && (
                          <p className="text-gray-600">Content for {selectedNepalCategory} coming soon...</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu("about")}
                  className="flex items-center gap-1  text-lg text-white hover:text-blue-400 px-4 py-3 rounded transition-colors duration-200 focus:outline-none"
                >
                  About Us <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === "about" && (
                  <div
                    className="absolute top-full mt-2 bg-white text-black shadow-xl rounded-md overflow-hidden"
                    style={{ width: "500px", left: "-200px" }}
                  >
                    <div className="flex">
                      {/* Left Column */}
                      <div className="w-1/2 p-4 border-r">
                        {aboutUsItems.left.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className={`block py-2 hover:text-blue-600 ${item.highlight ? "text-blue-600" : ""}`}
                            onClick={() => setActiveMenu(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* Right Column */}
                      <div className="w-1/2 p-4">
                        {aboutUsItems.right.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block py-2 hover:text-blue-600"
                            onClick={() => setActiveMenu(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link
                href="/contact"
                className="text-white text-lg  hover:text-blue-400 px-3 py-2 rounded transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Right side - WhatsApp Contact */}
            <div className="hidden md:flex items-center mr-4 md:mr-1">
              <div className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                <MessageCircle className="h-4 w-4 text-white" />
                <span className="text-white font-medium">+977985123370</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden mr-4">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-blue-400 p-2">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Nepal Mobile */}
                <div>
                  <button
                    onClick={() => toggleMenu("nepal")}
                    className="flex items-center justify-between w-full text-white hover:text-blue-400 px-3 py-2 rounded"
                  >
                    Nepal <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeMenu === "nepal" && (
                    <div className="ml-4 mt-2 space-y-1">
                      {nepalCategories.map((category) => (
                        <Link
                          key={category}
                          href={`/nepal/${category.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-gray-300 hover:text-blue-400 px-3 py-2"
                          onClick={() => {
                            setActiveMenu(null)
                            setMobileMenuOpen(false)
                          }}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* About Us Mobile */}
                <div>
                  <button
                    onClick={() => toggleMenu("about")}
                    className="flex items-center justify-between w-full text-white hover:text-blue-400 px-3 py-2 rounded"
                  >
                    About Us <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeMenu === "about" && (
                    <div className="ml-4 mt-2 space-y-1">
                      {[...aboutUsItems.left, ...aboutUsItems.right].map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-gray-300 hover:text-blue-400 px-3 py-2"
                          onClick={() => {
                            setActiveMenu(null)
                            setMobileMenuOpen(false)
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Us Mobile */}
                <Link
                  href="/contact"
                  className="block text-white hover:text-blue-400 px-3 py-2 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>

                {/* WhatsApp Contact Mobile */}
                <div className="px-3 py-2">
                  <div className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                    <MessageCircle className="h-4 w-4 text-white" />
                    <span className="text-white font-medium">+977985123370</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div ref={menuRef} className="hidden">
        {/* This hidden div holds the ref to avoid hydration errors */}
      </div>
    </div>
  )
}
