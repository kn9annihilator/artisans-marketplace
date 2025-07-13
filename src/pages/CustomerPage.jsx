// src/pages/CustomerPage.jsx

import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Search, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Slider } from '@mui/material';

const allProducts = [
  { id: 1, name: 'Wooden Bowl', description: 'Handcrafted by artisans.', price: 299, image: '/images/wooden-bowl.jpg', category: 'Wooden', image: "/products/product1.jpg"},
  { id: 2, name: 'Copper Bottle', description: 'Ayurvedic copper water bottle.', price: 499, image: '/images/copper-bottle.jpg', category: 'Copper', image: "/products/product2.jpg"},
  { id: 3, name: 'Steel Tiffin', description: 'Durable steel lunch box.', price: 399, image: '/images/steel-tiffin.jpg', category: 'Steel', image: "/products/product3.jpg" },
  { id: 4, name: 'Glass Vase', description: 'Delicate hand-blown vase.', price: 250, image: '/images/glass-vase.jpg', category: 'Glass', image: "/products/product14.jfif" },
  { id: 5, name: 'Aluminium Jug', description: 'Rust-proof jug for daily use.', price: 349, image: '/images/aluminium-jug.jpg', category: 'Aluminium' },
  { id: 6, name: 'Copper Cup Set', description: 'Set of 4 cups for gifting.', price: 599, image: '/images/copper-cups.jpg', category: 'Copper' },
  { id: 7, name: 'Steel Spoons', description: 'Elegant steel spoons.', price: 150, image: '/images/steel-spoons.jpg', category: 'Steel' },
  { id: 8, name: 'Wooden Spatula', description: 'Heat resistant spatula.', price: 120, image: '/images/wooden-spatula.jpg', category: 'Wooden' },
  { id: 9, name: 'Copper Diya', description: 'Decorative diya for festivals.', price: 180, image: '/images/copper-diya.jpg', category: 'Copper' },
  { id: 10, name: 'Glass Tumbler Set', description: 'Elegant glass tumblers.', price: 380, image: '/images/glass-tumblers.jpg', category: 'Glass' },
  { id: 11, name: "Terracotta Planter", description: "Hand-painted terracotta pot.", "price": 220, "image": "/images/terracotta-planter.jpg", category: "Clay" },
  { id: 12, name: "Jute Tote Bag", description : "Eco-friendly handmade bag.", "price": 450, "image": "/images/jute-bag.jpg", category: "Textile" },
  { id: 13, name: "Ceramic Mug", description : "Artisan crafted coffee mug.", "price": 190, "image": "/images/ceramic-mug.jpg", category: "Ceramic" },
  { id: 14, name: "Brass Bell", description : "Intricately designed brass bell.", "price": 320, "image": "/images/brass-bell.jpg", category: "Brass" },
  { id: 15, name: "Handloom Scarf", description : "Soft cotton handloom scarf.", "price": 550, "image": "/images/handloom-scarf.jpg", category: "Textile" },
  { id: 16, name: "Stone Coasters", description : "Set of 4 natural stone coasters.", "price": 280, "image": "/images/stone-coasters.jpg", category: "Stone" },
  { id: 17, name: "Clay Water Pot", description : "Traditional clay water cooler.", "price": 650, "image": "/images/clay-pot.jpg", category: "Clay" },
  { id: 18, name: "Bamboo Basket", description : "Woven bamboo storage basket.", "price": 370, "image": "/images/bamboo-basket.jpg", category: "Bamboo" },
  { id: 19, name: "Silver Earrings", description : "Handcrafted tribal silver earrings.", "price": 750, "image": "/images/silver-earrings.jpg", category: "Silver" },
  { id: 20, name: "Wooden Trinket Box", description : "Carved wooden jewelry box.", "price": 310, "image": "/images/wooden-trinket.jpg", category: "Wooden" },
  { id: 21, name: "Copper Lota", description : "Traditional copper ritual pot.", "price": 420, "image": "/images/copper-lota.jpg", category: "Copper" },
  { id: 22, name: "Steel Water Bottle", description : "Double-walled steel bottle.", "price": 480, "image": "/images/steel-water-bottle.jpg", category: "Steel" },
  { id: 23, name: "Glass Candle Holder", description : "Hand-painted glass holder.", "price": 210, "image": "/images/glass-candle-holder.jpg", category: "Glass" },
  { id: 24, name: "Aluminium Storage Box", description : "Lightweight storage container.", "price": 270, "image": "/images/aluminium-box.jpg", category: "Aluminium" },
  { id: 25, name: "Clay Wind Chime", description : "Artisan made soothing wind chime.", "price": 260, "image": "/images/clay-windchime.jpg", category: "Clay" },
  { id: 26, name: "Embroidered Cushion Cover", description : "Hand-embroidered cotton cover.", "price": 330, "image": "/images/embroidered-cushion.jpg", category: "Textile" },
  { id: 27, name: "Ceramic Platter", description : "Unique handcrafted serving platter.", "price": 520, "image": "/images/ceramic-platter.jpg", category: "Ceramic" },
  { id: 28, name: "Brass Deity Statue", description : "Small brass idol for altar.", "price": 680, "image": "/images/brass-statue.jpg", category: "Brass" },
  { id: 29, name: "Woolen Shawl", description : "Warm hand-knitted woolen shawl.", "price": 850, "image": "/images/woolen-shawl.jpg", category: "Textile" },
  { id: 30, name: "Soapstone Carving", description : "Intricate animal soapstone carving.", "price": 390, "image": "/images/soapstone-carving.jpg", category: "Stone" },
  { id: 31, name: "Wooden Coasters", description : "Set of 6 carved wooden coasters.", "price": 200, "image": "/images/wooden-coasters.jpg", category: "Wooden" },
  { id: 32, name: "Copper Kadai", description : "Traditional copper cooking pan.", "price": 799, "image": "/images/copper-kadai.jpg", category: "Copper" },
  { id: 33, name: "Steel Serving Tray", description : "Polished steel serving tray.", "price": 410, "image": "/images/steel-tray.jpg", category: "Steel" },
  { id: 34, name: "Glass Photo Frame", description : "Hand-painted glass frame.", "price": 240, "image": "/images/glass-frame.jpg", category: "Glass" },
  { id: 35, name: "Aluminium Flower Pot", description : "Decorative aluminium pot.", "price": 290, "image": "/images/aluminium-pot.jpg", category: "Aluminium" },
  { id: 36, name: "Terracotta Wall Hanging", description : "Artistic terracotta wall decor.", "price": 360, "image": "/images/terracotta-wall-hanging.jpg", category: "Clay" },
  { id: 37, name: "Brocade Table Runner", description : "Luxurious handloom table runner.", "price": 620, "image": "/images/brocade-runner.jpg", category: "Textile" },
  { id: 38, name: "Ceramic Cookie Jar", description : "Hand-painted ceramic storage jar.", "price": 470, "image": "/images/ceramic-cookie-jar.jpg", category: "Ceramic" },
  { id: 39, name: "Brass Wall Hook", description : "Decorative brass coat hook.", "price": 170, "image": "/images/brass-hook.jpg", category: "Brass" },
  { id: 40, name: "Leather Journal", description : "Hand-bound leather journal with blank pages.", "price": 580, "image": "/images/leather-journal.jpg", category: "Leather" },
  { id: 41, name: "Ceramic Mug", description: "Hand-thrown ceramic mug with a speckled glaze finish.", price: 320, image: "/images/ceramic-mug.jpg", category: "Ceramics" },
  { id: 42, name: "Woven Basket", description: "Handwoven natural fiber basket perfect for storage or décor.", price: 450, image: "/images/woven-basket.jpg", category: "Home Decor" },
  { id: 43, name: "Beaded Necklace", description: "Intricately beaded necklace made with semi-precious stones.", price: 670, image: "/images/beaded-necklace.jpg", category: "Jewelry" },
  { id: 44, name: "Wooden Cutting Board", description: "Handcrafted walnut cutting board with smooth finish.", price: 520, image: "/images/wooden-cutting-board.jpg", category: "Woodwork" },
  { id: 45, name: "Hand-dyed Scarf", description: "Silk scarf dyed with natural botanical pigments.", price: 390, image: "/images/hand-dyed-scarf.jpg", category: "Textiles" },
  { id: 46, name: "Macrame Wall Hanging", description: "Boho-style macrame wall art made with cotton rope.", price: 610, image: "/images/macrame-wall-hanging.jpg", category: "Home Decor" },
  { id: 47, name: "Clay Plant Pot", description: "Terracotta plant pot with hand-painted patterns.", price: 280, image: "/images/clay-plant-pot.jpg", category: "Ceramics" },
  { id: 48, name: "Hand-poured Candle", description: "Soy wax candle with lavender essential oil scent.", price: 330, image: "/images/hand-poured-candle.jpg", category: "Home Fragrance" },
  { id: 49, name: "Leather Wallet", description: "Slim leather wallet with multiple card slots.", price: 490, image: "/images/leather-wallet.jpg", category: "Leather" },
  { id: 50, name: "Embroidered Pouch", description: "Colorful hand-embroidered pouch with zipper.", price: 310, image: "/images/embroidered-pouch.jpg", category: "Textiles" }


  // Add more products ensuring name, price, image, and category are defined
];

const CustomerPage = () => {
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState({});
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(existingCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === product.id);
    if (index >= 0) updatedCart[index].quantity += 1;
    else updatedCart.push({ ...product, quantity: 1 });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const toggleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = p.name?.toLowerCase().includes(search.toLowerCase()) || p.description?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-[#fcefdc] min-h-screen px-4 py-6 text-gray-900">
      <h1 className="text-4xl font-extrabold mb-6 text-center font-serif">
        <Typewriter
          options={{
            strings: ['Discover Unique Artisan Products', 'Handpicked and Beautifully Crafted', 'Support Local Artisans'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by name or description..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option>All</option>
          <option>Wooden</option>
          <option>Copper</option>
          <option>Steel</option>
          <option>Glass</option>
          <option>Aluminium</option>
        </select>

        <div className="w-full md:w-1/3">
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={10}
          />
          <div className="text-sm text-center mt-1 text-gray-600">₹{priceRange[0]} – ₹{priceRange[1]}</div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map(product => (
          
          <motion.div
            key={product.id}
            
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          > 
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded mb-3" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-orange-600 font-semibold text-lg mb-3">₹ {product.price}</p>
            <div className="flex justify-between items-center mt-auto">
              <button
                onClick={() => addToCart(product)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded flex items-center gap-2 text-sm"
              >
                <ShoppingCart size={16} /> Add to Cart
              </button>
              <motion.button
                whileTap={{ scale: 1.4 }}
                onClick={() => toggleLike(product.id)}
                className={likes[product.id] ? 'text-red-500' : 'text-gray-400'}
              >
                <Heart fill={likes[product.id] ? 'red' : 'none'} size={20} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;
