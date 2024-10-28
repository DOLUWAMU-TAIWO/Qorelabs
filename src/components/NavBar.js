// src/components/NavBar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [navBackground, setNavBackground] = useState('bg-transparent');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('bg-gradient-to-r from-[#8c52ff] to-[#1a1a40] bg-opacity-90');
      } else {
        setNavBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full text-white shadow-md z-20 transition duration-500 ${navBackground}`}>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Qorelabs</h1>
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`space-x-4 md:flex md:items-center md:static absolute top-16 left-0 w-full md:w-auto md:bg-transparent bg-[#1a1a40] text-center md:text-left md:p-0 p-6 transition-all duration-300 ease-in ${menuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block md:inline-block hover:text-[#a875ff] mb-4 md:mb-0">Home</Link>
          <Link to="/aboutus" className="block md:inline-block hover:text-[#a875ff] mb-4 md:mb-0">About Us</Link>
          <Link to="/solutions" className="block md:inline-block hover:text-[#a875ff] mb-4 md:mb-0">Solutions</Link>
          <Link to="/contact" className="block md:inline-block hover:text-[#a875ff] mb-4 md:mb-0">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
