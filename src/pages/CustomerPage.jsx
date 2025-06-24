// src/pages/CustomerPage.jsx

import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Heart, ShoppingCart, ArrowRightCircle, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Product Data
const allProducts = Array.from({ length: 25 }).map((_, idx) => ({
  id: idx + 1,
  name: `Artisan Product ${idx + 1}`,
  description: `Handmade item with care using ` + ['Wood', 'Glass', 'Steel', 'Aluminium', 'Copper'][idx % 5],
  price: (100 + idx * 10).toFixed(2),
  material: ['Wood', 'Glass', 'Steel', 'Aluminium', 'Copper'][idx % 5],
  image: `https://source.unsplash.com/featured/?handmade,crafts,${idx}`,
}));

const CustomerPage = () => {
  const [search, setSearch] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesMaterial = selectedMaterial === 'All' || product.material === selectedMaterial;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesMaterial && matchesPrice;
  });

  return (
    <div className="bg-gradient-to-br from-[#fdf6e3] via-[#fdf5e0] to-[#fbecc3] min-h-screen text-gray-900 px-4 sm:px-10 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <Typewriter
            words={['Discover Handcrafted Excellence', 'Support Rural Artisans', 'Shop with Purpose']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>
        <p className="text-lg text-gray-700">Choose from unique handcrafted goods, made with love and local heritage.</p>
      </div>

      {/* Filter Toggle for Mobile */}
      <div className="sm:hidden mb-4 flex justify-end">
        <button
          className="flex items-center gap-1 text-orange-600 bg-yellow-100 px-4 py-2 rounded-md shadow"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} /> {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Search and Filters */}
      <div className={`mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-300 ${showFilters ? 'block' : 'hidden sm:flex'}`}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-1/3"
        />
        <select
          value={selectedMaterial}
          onChange={e => setSelectedMaterial(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-1/4"
        >
          <option value="All">All Materials</option>
          <option value="Wood">Wood</option>
          <option value="Glass">Glass</option>
          <option value="Steel">Steel</option>
          <option value="Aluminium">Aluminium</option>
          <option value="Copper">Copper</option>
        </select>
        <div className="flex items-center gap-2 w-full sm:w-1/3">
          <input
            type="number"
            placeholder="Min ₹"
            value={priceRange[0]}
            onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="px-3 py-2 rounded-md border border-gray-300 w-1/2"
          />
          <input
            type="number"
            placeholder="Max ₹"
            value={priceRange[1]}
            onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="px-3 py-2 rounded-md border border-gray-300 w-1/2"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm border border-yellow-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-orange-600 font-semibold text-lg mb-4">₹ {product.price}</p>
              <div className="flex justify-between items-center">
                <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-orange-600 flex items-center gap-1">
                  Buy Now <ArrowRightCircle size={16} />
                </button>
                <button className="bg-yellow-100 px-2 py-1 rounded-lg text-sm text-orange-600 hover:bg-yellow-200">
                  Add to Cart
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;
