// src/pages/VendorLogin.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const VendorLogin = () => {
  const [vendorId, setVendorId] = useState('');
  const [mobile, setMobile] = useState('');
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!vendorId || !mobile || !captchaChecked) {
      setError('कृपया सभी फ़ील्ड भरें और कैप्चा सत्यापित करें | Please fill all fields and verify the captcha.');
      return;
    }

    console.log('Login Successful for', vendorId);
    navigate('/vendor-dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 px-4">
      <motion.form
        onSubmit={handleLogin}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md space-y-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-2xl font-bold text-center text-orange-600"
          variants={staggerItem}
        >
          Vendor Login / विक्रेता लॉगिन
        </motion.h2>

        {error && <motion.p variants={staggerItem} className="text-red-600 text-sm text-center">{error}</motion.p>}

        <motion.div variants={staggerItem}>
          <label className="block font-semibold mb-1">Vendor ID / विक्रेता आईडी</label>
          <input
            type="text"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <label className="block font-semibold mb-1">Mobile Number / मोबाइल नंबर</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            maxLength="10"
            pattern="[0-9]{10}"
            placeholder="10-digit number"
            required
          />
        </motion.div>

        <motion.div 
          variants={staggerItem}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 px-4 text-center rounded cursor-pointer transition duration-300 ${captchaChecked ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'} shadow-md hover:shadow-lg`}
          onClick={() => setCaptchaChecked(!captchaChecked)}
        >
          {captchaChecked ? 'Verified ✓ / सत्यापित' : 'Click to Verify Captcha / कैप्चा सत्यापित करने के लिए क्लिक करें'}
        </motion.div>

        <motion.button
          type="submit"
          variants={staggerItem}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition duration-300 shadow-md hover:shadow-lg"
        >
          Login / लॉगिन करें
        </motion.button>
      </motion.form>
    </div>
  );
};

export default VendorLogin;
