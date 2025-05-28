"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const links = ["/", "/About", "/Projects", "/Resume", "/Contact"];
  const labels = ["Home", "About", "Projects", "Resume", "Contact"];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav style={{ backgroundColor: "#2a2b37" }} className="text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide">Rushikesh Mhaske</h1>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <HiX className="text-white text-3xl" />
            ) : (
              <HiMenu className="text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-[#b0b2c3] font-medium text-lg">
          {links.map((href, i) => (
            <Link key={href} href={href} className="hover:text-white transition duration-200">
              {labels[i]}
            </Link>
          ))}

          <Link href="/Contact">
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition duration-300 flex items-center space-x-2 animate-pulse"
            >
              <span>Hire Me</span>
              <span>{isClient && isHovering ? "🤩" : "😄"}</span>
            </button>
          </Link> 
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-[#2a2b37] text-[#b0b2c3]">
          {links.map((href, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg hover:text-white transition duration-200"
            >
              {labels[i]}
            </Link>
          ))}

          <Link href="/Contact">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition duration-300 flex justify-center items-center space-x-2 animate-pulse"
            >
              <span>Hire Me</span>
              <span>{isClient && isHovering ? "🤩" : "😄"}</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
