// src/pages/CustomerPage.jsx

import React from 'react';

const products = [
  {
    id: 1,
    name: 'Handwoven Cotton Shawl',
    description: 'Made by artisans in Himachal Pradesh',
    price: '₹1200',
    image: 'https://via.placeholder.com/300x200?text=Shawl',
    category: 'Apparel',
  },
  {
    id: 2,
    name: 'Terracotta Vase',
    description: 'Eco-friendly pottery from West Bengal',
    price: '₹850',
    image: 'https://via.placeholder.com/300x200?text=Vase',
    category: 'Home Decor',
  },
  {
    id: 3,
    name: 'Tribal Silver Earrings',
    description: 'Jewelry crafted by artisans in Odisha',
    price: '₹650',
    image: 'https://via.placeholder.com/300x200?text=Earrings',
    category: 'Jewelry',
  },
];

function CustomerPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Shop Handmade Products</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            <div className="mt-auto flex justify-between items-center pt-4">
              <span className="text-lg font-bold text-orange-600">{item.price}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerPage;
