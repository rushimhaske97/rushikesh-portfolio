"use client";

import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS.load("particles-js", "/particles-config.json", function () {
        console.log("Particles.js config loaded");
      });
    }
  }, []);

  return <div id="particles-js" className="fixed top-0 left-0 w-full h-full -z-10" />;
}
