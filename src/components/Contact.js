// src/components/Contact.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Contact() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: { query: 'office, corporate, work' },
          headers: {
            Authorization: `Client-ID 0vDKn5-zz-kLnkwEZIWUGS21vbHlGxDhL80ICxhFrEs`,
          },
        });
        if (response.data && response.data.urls && response.data.urls.full) {
          setBackgroundImage(response.data.urls.full);
        } else {
          console.error('Image URL not found in Unsplash response');
        }
      } catch (error) {
        console.error('Error fetching the image from Unsplash:', error);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <motion.div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-[#f3f4f6] text-[#333] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-6 text-[#555]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
        >
          Get in touch for more information about our products and services. We are here to help you take your business to the next level.
        </motion.p>
        <motion.div
          className="contact-info mt-8 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeInOut' }}
        >
          <p className="text-lg md:text-xl font-semibold text-[#8c52ff]">Email:</p>
          <p className="text-base md:text-lg text-[#555] mb-4">Doluwamukuye@qorelabs.org</p>

          <p className="text-lg md:text-xl font-semibold text-[#8c52ff]">Phone:</p>
          <p className="text-base md:text-lg text-[#555] mb-4">+49 163 5037203</p>

          <p className="text-lg md:text-xl font-semibold text-[#8c52ff]">Address:</p>
          <p className="text-base md:text-lg text-[#555] mb-4">Weidenstraße 21, Wuppertal, 42117, Germany</p>

          <p className="text-lg md:text-xl font-semibold text-[#8c52ff]">Working Hours:</p>
          <p className="text-base md:text-lg text-[#555]">Monday - Friday: 9 AM - 6 PM CET</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
