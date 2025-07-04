// src/App.js
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustomerPage from './pages/CustomerPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import VendorRegister from './pages/VendorRegister';
import CustomerLogin from './pages/CustomerLogin';
import VendorLogin from './pages/VendorLogin';
import VendorDashboard from './pages/VendorDashboard';






// import PaymentPage from './pages/PaymentPage'; // Not created yet
// import Navbar from './components/Navbar'; // Not created yet

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register-vendor" element={<VendorRegister />} />
        <Route path="/login-customer" element={<CustomerLogin />} />
        <Route path="/login-vendor" element={<VendorLogin />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />


        



        {/* <Route path="/payment" element={<PaymentPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;



