// src/pages/CartPage.jsx

import React, { useEffect, useState } from 'react';
import { MinusCircle, PlusCircle, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (productId, amount) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(item.quantity + amount, 1);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleBuyNow = () => {
    navigate('/payment'); // placeholder route
  };

  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9ec] to-[#fbecc3] text-gray-900 px-4 sm:px-10 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-700 mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white/70 backdrop-blur-sm border border-yellow-200 rounded-xl shadow-md p-4 flex flex-col sm:flex-row justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-orange-600 font-bold">₹ {item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <MinusCircle size={20} className="text-red-500 hover:text-red-600" />
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <PlusCircle size={20} className="text-green-500 hover:text-green-600" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-8">
              <p className="text-xl font-bold">Total: ₹ {total.toFixed(2)}</p>
              <button
                onClick={handleBuyNow}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2"
              >
                Buy Now <ShoppingBag size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
