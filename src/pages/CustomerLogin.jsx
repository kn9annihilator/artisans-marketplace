// src/pages/CustomerLogin.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CustomerLogin = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    phoneVerified: false,
    emailVerified: false,
    captchaVerified: false
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerification = (type) => {
    setFormData({ ...formData, [type]: true });
  };

  const handleCaptcha = () => {
    setFormData({ ...formData, captchaVerified: !formData.captchaVerified });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, phone, email, phoneVerified, emailVerified, captchaVerified } = formData;
    if (!name || !username || !phone || !email || !phoneVerified || !emailVerified || !captchaVerified) {
      setError('All fields and verifications are required.');
      return;
    }
    setError('');
    alert('✅ Customer login submitted successfully!');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-white px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg border border-blue-200"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Customer Login / ग्राहक लॉगिन</h2>

        {['name', 'username', 'phone', 'email'].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-sm font-semibold mb-1 capitalize">
              {field === 'phone' ? 'Mobile Number / मोबाइल नंबर *' :
               field === 'email' ? 'Email ID / ईमेल आईडी *' :
               field.charAt(0).toUpperCase() + field.slice(1) + ' *'}
            </label>
            <input
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
              name={field}
              required
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-blue-400 transition duration-300"
            />
            {(field === 'phone' || field === 'email') && (
              <button
                type="button"
                onClick={() => handleVerification(field + 'Verified')}
                className={`mt-2 text-sm px-4 py-1 rounded font-semibold text-white ${formData[field + 'Verified'] ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`}
              >
                {formData[field + 'Verified'] ? '✅ Verified' : 'Verify'}
              </button>
            )}
          </div>
        ))}

        {/* Captcha */}
        <motion.div
          whileTap={{ scale: 1.05 }}
          onClick={handleCaptcha}
          className={`w-full text-center border-2 rounded-lg px-4 py-3 mt-4 cursor-pointer transition-all duration-300 ${
            formData.captchaVerified ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-gray-50'
          }`}
        >
          <p className="text-sm font-medium text-gray-700">
            {formData.captchaVerified ? '✅ Captcha Verified' : '🔒 Click to verify captcha / क्लिक करें सत्यापन हेतु'}
          </p>
        </motion.div>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-xl transition duration-300"
        >
          Login / लॉगिन करें
        </motion.button>
      </motion.form>
    </div>
  );
};

export default CustomerLogin;
