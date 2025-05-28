"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ParticlesBackground from "../../components/ParticlesBackground";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Development",
        "FrontEnd Development",
        "Web Development",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>

      <div className="flex flex-col min-h-screen overflow-x-hidden p-10 pt-24">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-10 mt-[-80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-18">
            {/* Left Side: Intro Text */}
            <div className="flex flex-col gap-8 text-left">
              <br></br>
              <h1 className="text-4xl font-bold">Hi, I&apos;m Rushikesh 👋</h1>
              <p className="text-lg max-w-xl">
                I specialize in 
                <span
                  ref={typedRef}
                  className="text-blue-600 font-semibold italic tracking-wider text-lg font-span"
                  aria-live="polite"
                  aria-atomic="true"
                />
                <br />
                <span className="custom-span">
                  with a focus on React.js and Node.js. I deliver responsive,
                  accessible, and scalable solutions that align with user needs
                  and business goals. I actively collaborate with stakeholders
                  and engineering teams to turn complex requirements into
                  elegant, maintainable code driving both technical excellence
                  and user satisfaction. Let&apos;s turn your ideas into powerful
                  digital experiences.
                </span>
              </p>
              <a
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition w-fit"
                href="/Projects"
              >
                View My Projects
              </a>
            </div>

            {/* Right Side: Image aligned with content */}
            <div className="flex justify-end items-start">
              <img
                src="/Assets/profile1.jpg"
                alt="Rushikesh coding"
                className="top-0 right-0 md:w-[350px] h-auto object-cover rounded-lg shadow-lg blur-1xl opacity-15 "
              />
            </div>
          </div>
        </section>
      </div>

      {/* Social Icons Fixed to Right with Hover Animation */}

      <div className="fixed top-[30%] right-4 z-50 flex flex-col gap-14">
        <a
          href="https://www.linkedin.com/in/rushikeshmhaske/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 text-4xl hover:scale-110 hover:animate-pulse transition-transform"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white text-4xl hover:scale-110 hover:animate-pulse transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-green-500 text-4xl hover:scale-110 hover:animate-pulse transition-transform"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:rushikeshmhaske0197@gmail.com"
          aria-label="Email"
          className="text-red-500 text-4xl hover:scale-110 hover:animate-pulse transition-transform"
        >
          <FaEnvelope />
        </a>
      </div>
    </>
  );
}
