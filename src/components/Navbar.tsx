"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // down arrow icon

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<null | "nepal" | "about">(null);

  const toggleMenu = (menu: "nepal" | "about") => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="w-screen fixed top-0 left-0 right-0 z-50 p-5 lg:px-9 shadow-md bg-black text-white">
      <ul className="flex flex-col md:flex-row justify-center-safe items-center w-full max-w-7xl mx-auto gap-4">
        {/* Nepal */}
        <li className="relative">
          <button
            onClick={() => toggleMenu("nepal")}
            className="flex items-center gap-1 bg-black text-white hover:text-blue-500 px-4 py-2 rounded focus:outline-none"
          >
            Nepal <ChevronDown className="w-4 h-4" />
          </button>
          {activeMenu === "nepal" && (
            <div className="absolute mt-2 bg-white text-black shadow-md rounded p-2">
              <Link
                href="/nepal"
                className="block px-4 py-2 hover:text-blue-500"
                onClick={() => setActiveMenu(null)}
              >
                Nepal Page
              </Link>
            </div>
          )}
        </li>

        {/* About Us */}
        <li className="relative">
          <button
            onClick={() => toggleMenu("about")}
            className="flex items-center gap-1 bg-black text-white hover:text-blue-500 px-4 py-2 rounded focus:outline-none"
          >
            About Us <ChevronDown className="w-4 h-4" />
          </button>
          {activeMenu === "about" && (
            <div className="absolute mt-2 bg-white text-black shadow-md rounded p-2">
              <Link
                href="/about"
                className="block px-4 py-2 hover:text-blue-500"
                onClick={() => setActiveMenu(null)}
              >
                About Page
              </Link>
            </div>
          )}
        </li>

        {/* Contact Us */}
        <li>
          <Link
            href="/contact"
            className="font-bold px-4 py-2 bg-black text-white hover:text-blue-500"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
