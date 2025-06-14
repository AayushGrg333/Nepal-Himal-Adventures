"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, MessageCircle, Menu, X, ChevronRight, ChevronLeft } from "lucide-react"

type MenuLevel = "main" | "nepal" | "about" | "nepal-category"
type NepalCategory =
  | "trekking"
  | "climbing"
  | "cultural"
  | "cycling"
  | "luxury-treks"
  | "luxury-tours"
  | "day-trips"
  | "multi-country"
  | "voluntourism"
  | "extend-trip"

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<null | "nepal" | "about">(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuLevel, setMobileMenuLevel] = useState<MenuLevel>("main")
  const [selectedNepalCategory, setSelectedNepalCategory] = useState("Trekking in Nepal")
  const [selectedMobileCategory, setSelectedMobileCategory] = useState<NepalCategory | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileButtonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = (menu: "nepal" | "about") => {
    setActiveMenu((prev) => (prev === menu ? null : menu))
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setActiveMenu(null)
    setMobileMenuLevel("main")
    setSelectedMobileCategory(null)
  }

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMobileMenuOpen(!mobileMenuOpen)
    if (mobileMenuOpen) {
      setActiveMenu(null)
      setMobileMenuLevel("main")
      setSelectedMobileCategory(null)
    }
  }

  const goToNepalSubmenu = () => {
    setMobileMenuLevel("nepal")
  }

  const goToAboutSubmenu = () => {
    setMobileMenuLevel("about")
  }

  const goToNepalCategory = (category: NepalCategory) => {
    setSelectedMobileCategory(category)
    setMobileMenuLevel("nepal-category")
  }

  const goBackToMain = () => {
    setMobileMenuLevel("main")
  }

  const goBackToNepal = () => {
    setMobileMenuLevel("nepal")
    setSelectedMobileCategory(null)
  }

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node

      if (mobileButtonRef.current && mobileButtonRef.current.contains(target)) {
        return
      }

      if (menuRef.current && !menuRef.current.contains(target)) {
        setActiveMenu(null)
      }

      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        closeMobileMenu()
      }
    }

    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Nepal menu categories
  const nepalCategories = [
    { id: "trekking" as NepalCategory, name: "Trekking in Nepal" },
    { id: "climbing" as NepalCategory, name: "Climbing and Expedition" },
    { id: "cultural" as NepalCategory, name: "Cultural Tour and Sightseeing" },
    { id: "cycling" as NepalCategory, name: "Cycling and Mountain Biking" },
    { id: "luxury-treks" as NepalCategory, name: "Luxury Treks" },
    { id: "luxury-tours" as NepalCategory, name: "Luxury Tours" },
    { id: "day-trips" as NepalCategory, name: "Day Trips" },
    { id: "multi-country" as NepalCategory, name: "Multi Country Tours" },
    { id: "voluntourism" as NepalCategory, name: "Voluntourism Trips" },
    { id: "extend-trip" as NepalCategory, name: "Extend Your Trip" },
  ]

  // Trekking options
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
  ]

  // Climbing options
  const climbingOptions = [
    "Yala Peak Climbing – 13 Days",
    "Island Peak Climbing – 15 Days",
    "Mera Peak Climbing – 19 Days",
    "Everest Base Camp and Lobuche East – 18 Days",
    "Tent Peak Climbing with Annapurna Base Camp – 18 Days",
    "Pisang Peak and Thorung La Pass – 21 Days",
    "Ama Dablam Expedition – 29 Days",
  ]

  // About Us menu items
  const aboutUsItems = [
    { name: "About Us", href: "/about" },
    { name: "Meet Our Team", href: "/team" },
    { name: "Why Ace?", href: "/why-ace" },
    { name: "CSI", href: "/csi" },
    { name: "Our Affiliations", href: "/affiliations" },
    { name: "Legal Documents", href: "/legal" },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Our Fleets", href: "/fleets" },
    { name: "Awards and Achievements", href: "/awards" },
    { name: "Customer Reviews", href: "/reviews" },
    { name: "Video Reviews", href: "/video-reviews" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <div>
      <div className="w-full fixed lg:p-2 p-0 top-0 left-0 right-0 z-50 bg-black/80 text-white shadow-md">
        <div className="font-inter w-full mx-auto">
          <div className="flex items-center justify-between h-18">
            {/* Left side - Logo */}
            <div className="flex-shrink-0 ml-4 md:ml-1">
              <Link href="/" onClick={closeMobileMenu}>
                <Image src="/logo.jpg" alt="Company Logo" width={130} height={45} className="object-contain" priority />
              </Link>
            </div>

            {/* Center - Menu items (Desktop) */}
            <div className="hidden md:flex items-center space-x-6" ref={menuRef}>
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
                      <div className="w-1/3 bg-gray-50 border-r">
                        {nepalCategories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedNepalCategory(category.name)}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-200 flex items-center justify-between ${
                              selectedNepalCategory === category.name ? "bg-blue-50 text-blue-600" : ""
                            }`}
                          >
                            {category.name}
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
                        {selectedNepalCategory === "Climbing and Expedition" && (
                          <div className="grid grid-cols-2 gap-2">
                            {climbingOptions.map((climb, index) => (
                              <Link
                                key={index}
                                href={`/nepal/climbing/${climb.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-sm hover:text-blue-600 py-1"
                                onClick={() => setActiveMenu(null)}
                              >
                                {climb}
                              </Link>
                            ))}
                          </div>
                        )}
                        {selectedNepalCategory !== "Trekking in Nepal" &&
                          selectedNepalCategory !== "Climbing and Expedition" && (
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
                  className="flex items-center gap-1 text-lg text-white hover:text-blue-400 px-4 py-3 rounded transition-colors duration-200 focus:outline-none"
                >
                  About Us <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === "about" && (
                  <div
                    className="absolute top-full mt-2 bg-white text-black shadow-xl rounded-md overflow-hidden"
                    style={{ width: "400px", left: "-150px" }}
                  >
                    <div className="p-4">
                      {aboutUsItems.map((item, index) => (
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
              <button
                ref={mobileButtonRef}
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-400 p-2 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="md:hidden bg-white text-black absolute top-full left-0 right-0 h-screen overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Menu Level */}
              {mobileMenuLevel === "main" && (
                <div className="py-4">
                  <Link
                    href="/"
                    className="block px-6 py-4 text-lg font-medium border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>

                  <button
                    onClick={goToNepalSubmenu}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
                  >
                    Nepal
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>

                  <button
                    onClick={goToAboutSubmenu}
                    className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
                  >
                    About Us
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>

                                    <Link
                    href="/contact"
                    className="block px-6 py-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              )}

              {/* Nepal Submenu Level */}
              {mobileMenuLevel === "nepal" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToMain} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="py-2">
                    {nepalCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => goToNepalCategory(category.id)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 border-b border-gray-100"
                      >
                        <span className="font-medium">{category.name}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* About Us Submenu Level */}
              {mobileMenuLevel === "about" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToMain} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="py-2">
                    {aboutUsItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
                        onClick={closeMobileMenu}
                      >
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Nepal Category Detail Level - Trekking */}
              {mobileMenuLevel === "nepal-category" && selectedMobileCategory === "trekking" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToNepal} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">Trekking in Nepal</h3>
                  </div>

                  <div className="py-2">
                    {trekkingOptions.map((trek, index) => (
                      <Link
                        key={index}
                        href={`/nepal/trekking/${trek.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 border-b border-gray-50"
                        onClick={closeMobileMenu}
                      >
                        {trek}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Nepal Category Detail Level - Climbing */}
              {mobileMenuLevel === "nepal-category" && selectedMobileCategory === "climbing" && (
                <div>
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <button onClick={goBackToNepal} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                    <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">Climbing and Expedition</h3>
                  </div>

                  <div className="py-2">
                    {climbingOptions.map((climb, index) => (
                      <Link
                        key={index}
                        href={`/nepal/climbing/${climb.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 border-b border-gray-50"
                        onClick={closeMobileMenu}
                      >
                        {climb}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Nepal categories - placeholder */}
              {mobileMenuLevel === "nepal-category" &&
                selectedMobileCategory !== "trekking" &&
                selectedMobileCategory !== "climbing" && (
                  <div>
                    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50">
                      <button onClick={goBackToNepal} className="flex items-center text-gray-600 hover:text-gray-800">
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Back
                      </button>
                      <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-800">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="px-6 py-4">
                      <h3 className="text-lg font-semibold mb-4">
                        {nepalCategories.find((cat) => cat.id === selectedMobileCategory)?.name}
                      </h3>
                      <p className="text-gray-600">Content coming soon...</p>
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
