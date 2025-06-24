// src/pages/ProductDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';

// Mock product data
const mockProduct = {
  id: 1,
  name: 'Handcrafted Copper Pot',
  description:
    'This handcrafted copper pot is made by skilled artisans using traditional methods passed down through generations. Its elegant design and durable build make it perfect for both cooking and decoration.',
  price: '599.99',
  material: 'Copper',
  image: 'https://source.unsplash.com/featured/?copper,pot',
};

const ProductDetail = () => {
  const { productId } = useParams(); // currently unused, mocked for now

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefaf0] to-[#f6e9d7] text-gray-900 px-4 sm:px-10 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <motion.img
          src={mockProduct.image}
          alt={mockProduct.name}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-2xl w-full object-cover"
        />

        {/* Details Box */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md border border-[#e2cdb2] rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        >
          {/* Fancy Animated Heading */}
          <motion.h2
            className="text-3xl font-extrabold text-[#b45309] mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block"
            >
              🧡
            </motion.span>{' '}
            {mockProduct.name}
          </motion.h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {mockProduct.description}
          </p>

          <p className="text-2xl font-semibold text-orange-600 mb-6">
            ₹ {mockProduct.price}
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2">
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="text-red-500 hover:text-red-600">
              <Heart size={22} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
