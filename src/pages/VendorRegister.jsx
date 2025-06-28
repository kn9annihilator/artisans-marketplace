import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const VendorRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    shopName: '',
    address: '',
  });

  const [isVerified, setIsVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isVerified) {
      setErrorMsg('❌ Please confirm you are human / कृपया पुष्टि करें कि आप मानव हैं');
      return;
    }

    setErrorMsg('');
    console.log("Vendor registered:", formData);
    alert("पंजीकरण सफल हुआ! Registration successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50 p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-2">
          Vendor Registration / विक्रेता पंजीकरण
        </h2>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Name (नाम)</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-orange-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Mobile Number (मोबाइल नंबर)</label>
          <input
            type="tel"
            name="mobile"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-orange-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Shop Name (दुकान का नाम)</label>
          <input
            type="text"
            name="shopName"
            required
            value={formData.shopName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-orange-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Address (पता)</label>
          <textarea
            name="address"
            rows="2"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-orange-400 focus:outline-none"
          ></textarea>
        </div>

        {/* Clickable Captcha */}
        <div className="flex items-center gap-3 mt-4">
          <button
            type="button"
            onClick={() => setIsVerified(true)}
            className={`flex items-center gap-2 px-3 py-2 rounded border ${
              isVerified ? 'border-green-600 bg-green-100' : 'border-gray-400 bg-gray-100'
            }`}
          >
            {isVerified && <CheckCircle className="text-green-600" size={20} />}
            <span className="text-sm text-gray-700 font-medium">
              I'm not a robot / मैं रोबोट नहीं हूँ
            </span>
          </button>
        </div>

        {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
        >
          Register / पंजीकरण करें
        </motion.button>
      </motion.form>
    </div>
  );
};

export default VendorRegister;
