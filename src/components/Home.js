// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import axios from 'axios';

function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: { query: 'technology, innovation, future', orientation: 'landscape' },
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setSuccessMessage('');
      setEmail(''); // Clear email input after failed subscription
      return;
    }

    try {
      const response = await axios.post(
        'https://qorelabsback.netlify.app/.netlify/functions/subscribeEmail',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage('Subscription successful!');
        setError('');
        setEmail(''); // Clear email input after successful subscription
      }
    } catch (err) {
      console.error('Subscription failed:', err);
      setError('Failed to subscribe. Please try again later.');
      setSuccessMessage('');
      setEmail(''); // Clear email input after failed subscription
    }
  };

  return (
    <motion.div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-[#333] relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-md shadow-md text-center mb-8 z-10 w-full max-w-lg md:max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#8c52ff]">
          Welcome to Qorelabs
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#8c52ff]">
          <Typewriter
            words={['Innovative Technology Solutions', 'Quantum Computing Research', 'Next Generation Software']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-base md:text-lg mt-6 max-w-full text-center text-[#555]">
          We are a technology-driven company, specializing in cutting-edge software solutions for web, mobile, and desktop platforms.
          Our focus is on providing seamless integration, user-friendly design, and advanced machine learning to empower businesses for the future.
        </p>
        <button className="mt-8 px-4 py-2 md:px-6 md:py-3 bg-[#8c52ff] text-white rounded-lg shadow-lg hover:bg-[#7a46e0] transition duration-300" onClick={() => window.location.href='#contact'}>
          Learn More
        </button>
      </div>

      {/* Dynamic Image Section */}
      {backgroundImage && (
        <div className="w-full flex justify-center mt-8 z-0">
          <img
            src={backgroundImage}
            alt="Technology themed"
            className="w-full max-w-lg md:max-w-4xl h-auto rounded-lg shadow-lg object-cover"
            style={{ maxHeight: '30vh' }}
          />
        </div>
      )}

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 w-full px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#8c52ff] mb-4">Web Solutions</h3>
          <p className="text-[#555] text-sm md:text-base">Our web solutions offer modern, scalable infrastructure that can grow with your business.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#8c52ff] mb-4">AI & Machine Learning</h3>
          <p className="text-[#555] text-sm md:text-base">We provide advanced machine learning solutions tailored to your specific needs.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#8c52ff] mb-4">Quantum Research</h3>
          <p className="text-[#555] text-sm md:text-base">Innovative research in quantum technologies, pushing the frontier of computation.</p>
        </motion.div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-12 bg-white bg-opacity-80 p-6 md:p-8 rounded-md shadow-md text-center w-full max-w-lg md:max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#8c52ff] mb-4">What Our Clients Say</h2>
        <div className="testimonial-slider max-w-full">
          <p className="text-base md:text-lg text-[#555]">"Qorelabs helped us revolutionize our web infrastructure. Their team is incredibly professional!"</p>
          <p className="text-right mt-2 text-sm md:text-base text-[#8c52ff]">- Charles Darwin, VHS Resorts</p>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-[#8c52ff] text-white p-6 md:p-8 mt-12 rounded-md shadow-md w-full max-w-lg md:max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Qorelabs</h2>
        <p className="text-base md:text-lg mb-6">Subscribe to our newsletter to receive the latest updates on technology and quantum computing research.</p>
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-2 md:p-3 rounded-md mb-2 w-full max-w-xs text-black"
          value={email}
          onChange={handleEmailChange}
        />
        {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
        {successMessage && <p className="text-sm text-green-500 mb-2">{successMessage}</p>}
        <button
          className="ml-0 md:ml-4 px-4 py-2 md:px-6 md:py-3 bg-white text-[#8c52ff] rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </motion.div>
  );
}

export default Home;
