// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pt-16">
        <AnimatePresence mode='wait'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/aboutus"
              element={<AboutUs />}
            />
            <Route
              path="/solutions"
              element={<Solutions />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
