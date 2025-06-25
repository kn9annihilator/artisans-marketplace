// src/pages/LandingPage.jsx
// badhiya sa landing page
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-400 mb-4 drop-shadow-lg">
          Empowering Local Artisans
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
          <Typewriter
            words={['Reach out to the people who want you', 'With Global Reach', 'With Local Heart']}
            loop={0}
            cursor
            cursorStyle={<span className="cursor-click">|</span>}
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1200}
          />
        </h2>
        <p className="text-gray-300 max-w-xl mb-8">
          A student-built platform to bring rural talent to the online marketplace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/customer"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl shadow-md transition duration-300"
          >
            Explore Marketplace
          </Link>
          <Link
            to="/vendor/register"
            className="px-6 py-3 border border-orange-400 text-orange-400 hover:bg-orange-800 font-medium rounded-xl shadow-md transition duration-300"
          >
            Register as Vendor
          </Link>
        </div>
      </section>

      {/* About Section with Glassmorphism */}
      <section className="relative w-full flex justify-center py-16 px-4">
        <div className="backdrop-blur-lg bg-white/5 rounded-xl shadow-2xl p-10 max-w-4xl w-full border border-white/10">
          <h3 className="text-3xl font-bold text-orange-300 mb-6 text-center">About Us</h3>
          <p className="text-gray-300 text-center mb-6">
            We are 2nd-year B.Tech Computer Science  students from <span className="font-semibold text-white">Sharda University</span>. This platform is a student innovation created to uplift India’s artisan community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <div className="text-center">
              <p className="mt-3 text-lg font-medium">Krishna Narula</p>
              <p className="text-sm text-gray-400">Co-founder</p>
            </div>
            <div className="text-center">
              <p className="mt-3 text-lg font-medium">Aman Ahmad Khan</p>
              <p className="text-sm text-gray-400">Co-founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-orange-300 mb-4">Our Vision</h3>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          To enable local craftsmen and women to reach customers across the globe by removing digital barriers and giving them a platform that is built for them.
        </p>
        <p className="text-gray-400 italic mt-4">
          यह वेबसाइट ग्रामीण कारीगरों को ऑनलाइन सामान बेचने में मदद करने के लिए बनाई गई है।
        </p>
        <p className="text-gray-400 italic">
          यहाँ आप अपने हाथ से बनाए गए उत्पाद बेच सकते हैं और ग्राहक सीधे आपसे खरीद सकते हैं।
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-10 text-center">
        <h3 className="text-3xl font-bold text-orange-300 mb-3">Contact Us</h3>
        <p className="text-gray-200">📧 Email: <span className="text-white">public.contact.krishna@gmail.com</span></p>
        <p className="text-gray-200">📞 Phone: <span className="text-white">+91 XXXXXXXXX</span></p>
      </section>

      {/* Footer */}
      <footer className="text-sm text-center py-4 border-t border-gray-700 text-gray-500">
        © 2025 Artisan Marketplace | Built by Krishna & Aman with ❤️
      </footer>
    </div>
  );
};

export default LandingPage;
