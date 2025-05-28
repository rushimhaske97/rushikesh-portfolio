'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ParticlesBackground from '../../components/ParticlesBackground';

export default function NotFound() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starArray = Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 3,
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-white px-4">
      
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Central Content */}
      <div className="z-10 text-center">
        <img
          src="https://salehriaz.com/404Page/img/404.svg"
          alt="404"
          className="mx-auto w-64 sm:w-80 mb-8"
        />
        <Link href="/">
          <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-white font-semibold transition">
            GO BACK HOME
          </button>
        </Link>
      </div>

      {/* Floating Graphics */}
      <img
        src="https://salehriaz.com/404Page/img/rocket.svg"
        alt="Rocket"
        className="absolute w-10 animate-bounce top-10 right-10 z-10"
      />
      <div className="absolute bottom-10 left-10 z-10 flex items-center space-x-4">
        <img
          src="https://salehriaz.com/404Page/img/earth.svg"
          alt="Earth"
          className="w-20 animate-spin-slow"
        />
        <img
          src="https://salehriaz.com/404Page/img/moon.svg"
          alt="Moon"
          className="w-16"
        />
      </div>
      <img
        src="https://salehriaz.com/404Page/img/astronaut.svg"
        alt="Astronaut"
        className="absolute w-36 bottom-24 right-1/4 animate-floating z-10"
      />

      {/* Extra Animations */}
      <style jsx>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
