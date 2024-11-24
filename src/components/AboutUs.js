// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';

function AboutUs() {
  return (
    <motion.div
      id="aboutus"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-[#1C2B33] text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "#f6f6f6",
          },
          particles: {
            color: {
              value: "#8c52ff",
            },
            links: {
              color: "#8c52ff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      />

      {/* About Us Section */}
      <motion.div
        className="w-full max-w-lg md:max-w-2xl z-10" // Added z-index to ensure visibility over the particle background
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-[#1C2B33] mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        >
          Qorelabs was founded by <span className="font-bold text-[#8c52ff]">Doluwamu Kuye</span> with a vision to pursue excellence and innovate across engineering disciplines. 
          We are positioning ourselves for the age of quantum computing while remaining versatile with today's technologies.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: 'easeInOut' }}
        >
          From building next-generation web, mobile, and desktop applications to researching the cutting edge of machine learning, we strive to stay ahead of the curve. 
          Our mission is to provide the best possible technology solutions that bridge the gap between today's needs and tomorrow's possibilities.
        </motion.p>
        <motion.blockquote
          className="italic text-2xl md:text-3xl text-[#8c52ff] mt-8 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
        >
          "Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke
        </motion.blockquote>
      </motion.div>

      {/* Founder Section */}
      <motion.div
        className="mt-16 w-full max-w-lg md:max-w-xl z-10" // Added z-index to keep it above the particle layer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5, ease: 'easeInOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#8c52ff] mb-6">Our Founder</h2>
        <motion.div
          className="p-6 md:p-8 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1C2B33] mb-4">Doluwamu Kuye</h3>
          <p className="text-lg md:text-xl text-[#555]">
            Doluwamu is an innovator, visionary leader, and an advocate for the integration of cutting-edge technology across industries. 
            His passion for quantum computing and advanced software solutions drives Qorelabs' vision of making the future of technology a present reality.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutUs;
