"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav
      style={{ backgroundColor: '#171a19' }}
      className="text-white p-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Rushikesh Mhaske
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-[#b0b2c3] font-medium text-lg">
          <Link href="/" className="hover:text-white transition duration-200">Home</Link>
          <Link href="/About" className="hover:text-white transition duration-200">About</Link>
          <Link href="/Projects" className="hover:text-white transition duration-200">Projects</Link>
          <Link href="/Resume" className="hover:text-white transition duration-200">Resume</Link>
          <Link href="/Contact" className="hover:text-white transition duration-200">Contact</Link>

          {/* CTA Button with Emoji */}
          <Link href="/Contact">
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition duration-300 flex items-center space-x-2"
            >
              <span>Hire Me</span>
              <span>{isHovering ? '😄' : '😔'}</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
