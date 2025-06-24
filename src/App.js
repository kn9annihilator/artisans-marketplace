// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import CustomerPage from './pages/CustomerPage'; // Create this file next
import ProductDetail from './pages/ProductDetail';




// Optional future pages
// import VendorRegister from './pages/VendorRegister';
// import VendorLogin from './pages/VendorLogin';
// import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        {/* Future routes (uncomment as you build) */}
        {/* <Route path="/vendor/register" element={<VendorRegister />} /> */}
        {/* <Route path="/vendor/login" element={<VendorLogin />} /> */}
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
