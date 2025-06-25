// src/pages/LandingPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between font-sans">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center px-8 py-4 bg-gray-950 shadow-md">
        <h1 className="text-2xl font-bold text-orange-400 tracking-wide">LOCAL MARKET</h1>
        <div className="space-x-4">
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-400 transition">About Us</button>
          <button onClick={() => scrollToSection('footer')} className="text-white hover:text-orange-400 transition">Contact</button>
        </div>
      </div>

      {/* Header with typewriter and logins */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-orange-400 mb-4">
          <Typewriter
            options={{
              strings: ['Welcome to Local Market', 'Empowering Artisans, Enriching Lives', 'Nourish the Rich Culture'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/customer')}
          className="mt-6 px-10 py-3 text-lg font-semibold bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600"
        >
          Explore Marketplace
        </motion.button>
        <div className="flex justify-center gap-4 mt-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login-customer')}
            className="px-6 py-2 border border-orange-400 rounded hover:bg-orange-400 hover:text-black"
          >
            Customer Login
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login-vendor')}
            className="px-6 py-2 border border-orange-400 rounded hover:bg-orange-400 hover:text-black"
          >
            Vendor Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register-vendor')}
            className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600"
          >
            Register as Vendor
          </motion.button>
        </div>
      </header>

      {/* Spacer */}
      <div className="flex-1 py-32 px-6">
        <p className="text-center text-lg text-gray-400 max-w-3xl mx-auto">
          Explore handcrafted products by local artisans from all over the country. Our mission is to bridge the gap
          between rural creators and urban markets, giving voice to talent that deserves recognition.
        </p>
      </div>

      {/* About Section */}
      <section id="about" className="bg-gray-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="mb-4 text-lg">
            We are students of Sharda University, pursuing B.Tech in our 2nd year. This platform is a result of our
            passion to build a bridge between skilled rural artisans and the digital marketplace.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div className="bg-gray-700 p-6 rounded shadow-lg">
              <h3 className="text-xl font-bold mb-2">Krishna Narula</h3>
              <p>Founder</p>
            </div>
            <div className="bg-gray-700 p-6 rounded shadow-lg">
              <h3 className="text-xl font-bold mb-2">Aman Ahmad Khan</h3>
              <p>Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-700">
        <p>Contact us: artisans.marketplace@gmail.com | Phone: +91-9876543210</p>
        <p className="text-sm mt-2">© 2025 Local Market. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
