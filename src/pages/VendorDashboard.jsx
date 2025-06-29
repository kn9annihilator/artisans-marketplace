// src/pages/VendorDashboard.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Edit3, Box, Phone, Image, Tag, ClipboardList, ShoppingCart } from 'lucide-react';

const VendorDashboard = () => {
  const [products, setProducts] = useState([]);
  const [ads, setAds] = useState([]);
  const [vendorInfo, setVendorInfo] = useState({ shopName: '', contact: '' });

  useEffect(() => {
    // Simulated data loading (to be replaced with backend integration)
    setProducts([
      { name: 'Handmade Vase', image: '', description: 'Clay vase for home decor.', price: '350', category: 'Home Decor' },
      { name: 'Wooden Spoon Set', image: '', description: 'Eco-friendly kitchen set.', price: '250', category: 'Kitchen' }
    ]);
    setAds([{ title: 'Festival Sale - 20% Off!' }]);
    setVendorInfo({ shopName: 'Krishna Ji', contact: '9876543210' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 text-center">
          <motion.h1
            className="text-4xl font-extrabold text-purple-700 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome, {vendorInfo.shopName}
          </motion.h1>
          <p className="text-gray-700">Manage your products, shop, and promotions here.</p>
        </div>

        {/* Shop Info */}
        <section className="bg-white shadow-md rounded-lg p-5 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-purple-600 flex items-center gap-2">
            <Phone className="text-purple-500" /> Contact Info
          </h2>
          <p><strong>Shop Name:</strong> {vendorInfo.shopName}</p>
          <p><strong>Contact:</strong> {vendorInfo.contact}</p>
        </section>

        {/* Product Listing */}
        <section className="bg-white shadow-md rounded-lg p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-purple-600 flex items-center gap-2">
              <Box className="text-purple-500" /> Your Products
            </h2>
            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow">
              <PlusCircle size={18} /> Add Product
            </button>
          </div>
          {products.length === 0 ? (
            <p className="text-gray-600">No products added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 bg-white"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image className="text-purple-400 mb-2" size={32} />
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-purple-600 font-semibold mt-1">₹ {product.price}</p>
                  <p className="text-xs text-gray-500 mt-1">Category: {product.category}</p>
                  <button className="mt-3 text-sm text-blue-600 hover:underline flex items-center gap-1">
                    <Edit3 size={14} /> Edit
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Ads Section */}
        <section className="bg-white shadow-md rounded-lg p-5 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-purple-600 flex items-center gap-2">
            <Tag className="text-purple-500" /> Advertisements
          </h2>
          {ads.length === 0 ? (
            <p className="text-gray-600">No advertisements created yet.</p>
          ) : (
            <ul className="list-disc ml-5 text-gray-700">
              {ads.map((ad, index) => (
                <li key={index}>{ad.title}</li>
              ))}
            </ul>
          )}
          <button className="mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded shadow">
            + Create New Ad
          </button>
        </section>

        {/* Orders (simulated placeholder) */}
        <section className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-xl font-semibold text-purple-600 flex items-center gap-2">
            <ClipboardList className="text-purple-500" /> Orders
          </h2>
          <p className="text-gray-600 mt-2">Order management features coming soon...</p>
        </section>
      </motion.div>
    </div>
  );
};

export default VendorDashboard;
