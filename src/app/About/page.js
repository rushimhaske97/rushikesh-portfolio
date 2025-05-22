"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "../../../components/ParticlesBackground";

const timeline = [
  {
    year: "2020",
    title: "Graduated B.Sc. in Computer Science",
    description: "Modern College, Ganeshkhind, Pune",
  },
  {
    year: "2022 - 2023",
    title: "Full Stack Developer Certification",
    description: "Seed Infotech Training Centre, Pune",
  },
  {
    year: "2023 - 2025",
    title: "Software Engineer @ HorizonCloudSoft",
    description: "Full-stack developer (React.js, Node.js, REST APIs, SQL)",
  },
  {
    year: "2025",
    title: "Actively seeking new opportunities",
    description: "Frontend / Full Stack Developer roles",
  },
];

const fadeIn = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <div className="relative min-h-screen pt-10 px-4 overflow-hidden">
      <ParticlesBackground />

      <div className="z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-10 text-left ml-0"
        >
          Career Timeline
        </motion.h1>

        <div className="relative border-l-4 border-blue-500 ml-4 space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative pl-8 group"
            >
              {/* Animated Dot */}
              <div className="absolute left-[-14px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md animate-pulse" />

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition">
                {item.year} — {item.title}
              </h3>
              <p className="text-white text-sm max-w-md">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
