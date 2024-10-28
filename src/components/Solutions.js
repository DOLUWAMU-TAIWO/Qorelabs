// src/components/Solutions.js
import React from 'react';
import { motion } from 'framer-motion';

function Solutions() {
  const images = {
    corporate: '/images/corporate_image.jpg',
    machineLearning: '/images/machine_learning_image.jpg',
    quantum: '/images/quantum_image.jpg',
    embedded: '/images/embedded_image.jpg'
  };

  return (
    <motion.div
      id="solutions"
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
          Our Solutions
        </motion.h1>

        {/* Corporate Application Solutions */}
        <motion.div
          className="solution-section mt-12"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          <img
            src={images.corporate}
            alt="Corporate Applications"
            className="rounded-lg shadow-lg mb-4 w-full h-auto"
          />
          <h2 className="text-2xl font-semibold text-[#8c52ff] mb-4">Corporate Application Solutions</h2>
          <p className="text-base md:text-lg text-[#555]">
            We provide specialized web and mobile applications to enhance corporate efficiency and productivity.
            Our tailored software solutions are designed to improve collaboration, streamline operations, and meet the needs of modern enterprises.
          </p>
        </motion.div>

        {/* Machine Learning Optimization */}
        <motion.div
          className="solution-section mt-12"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          <img
            src={images.machineLearning}
            alt="Machine Learning Optimization"
            className="rounded-lg shadow-lg mb-4 w-full h-auto"
          />
          <h2 className="text-2xl font-semibold text-[#8c52ff] mb-4">Machine Learning Optimization</h2>
          <p className="text-base md:text-lg text-[#555]">
            Our machine learning solutions are designed to optimize your business processes, providing insights and automation that transform the way you operate.
            We develop custom models that learn from your data, enabling predictive analytics and smarter decision-making.
          </p>
        </motion.div>

        {/* Quantum Integration for Advanced Security */}
        <motion.div
          className="solution-section mt-12"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          <img
            src={images.quantum}
            alt="Quantum Integration"
            className="rounded-lg shadow-lg mb-4 w-full h-auto"
          />
          <h2 className="text-2xl font-semibold text-[#8c52ff] mb-4">Quantum Integration for Advanced Security</h2>
          <p className="text-base md:text-lg text-[#555]">
            Leveraging quantum technologies, we provide state-of-the-art security solutions to protect sensitive information.
            Our quantum integration approach uses advanced encryption and quantum keys to ensure data integrity and confidentiality.
          </p>
        </motion.div>

        {/* Embedded Solutions Across Industries */}
        <motion.div
          className="solution-section mt-12"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          <img
            src={images.embedded}
            alt="Embedded Solutions"
            className="rounded-lg shadow-lg mb-4 w-full h-auto"
          />
          <h2 className="text-2xl font-semibold text-[#8c52ff] mb-4">Embedded Solutions Across Industries</h2>
          <p className="text-base md:text-lg text-[#555]">
            We offer embedded technology solutions tailored for various industries including healthcare, automotive, and manufacturing.
            Our expertise helps in developing systems that require real-time performance and reliability.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Solutions;
