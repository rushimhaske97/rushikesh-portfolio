"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const links = ['/', '/About', '/Projects', '/Resume', '/Contact'];
  const labels = ['Home', 'About', 'Projects', 'Resume', 'Contact'];

  return (
    <nav style={{ backgroundColor: '#2a2b37' }} className="text-white p-4 shadow-lg">
      <div className="w-full px-15 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">Rushikesh Mhaske</h1>

        <div className="flex items-center space-x-6 text-[#b0b2c3] font-medium text-lg">
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
              <span>{isClient && isHovering ? '🤩' : '😄'}</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

