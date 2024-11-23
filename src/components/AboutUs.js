// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <motion.div
      id="aboutus"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-[#f3f4f6] text-[#333] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.div
        className="bg-white bg-opacity-90 p-6 md:p-8 rounded-md shadow-md w-full max-w-lg md:max-w-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-[#8c52ff] mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          whileHover={{ scale: 1.15, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-6 text-[#555]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          Qorelabs was founded by Doluwamu Kuye with a vision to pursue excellence and innovate across engineering disciplines.
          We are strategically positioning ourselves for the age of quantum computing while remaining versatile with today's technologies.
          From building next-generation web, mobile, and desktop applications to researching the cutting edge of machine learning, we strive to stay ahead of the curve.
        </motion.p>
        <motion.p
          className="text-base md:text-lg mb-6 text-[#555]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          Our mission is to provide the best possible technology solutions that bridge the gap between today's needs and tomorrow's possibilities. We believe that by being proactive and forward-thinking, we can make a significant impact in shaping the future of technology.
        </motion.p>
        <motion.blockquote
          className="italic text-lg md:text-xl text-[#8c52ff] mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          "Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke
        </motion.blockquote>
        {/* Team Section */}
        <motion.div
          className="team-section mt-12 w-full max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#8c52ff] mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } }}
            >
              <img src="https://via.placeholder.com/150" alt="Doluwamu Kuye" className="rounded-full mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">Doluwamu Kuye</h3>
              <p className="text-sm text-[#555]">Founder & CEO</p>
            </motion.div>
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } }}
            >
              <img src="https://via.placeholder.com/150" alt="Demilade Kuye" className="rounded-full mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">Demilade Kuye</h3>
              <p className="text-sm text-[#555]">Chief Financial Officer (CFO)</p>
            </motion.div>
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } }}
            >
              
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutUs;
