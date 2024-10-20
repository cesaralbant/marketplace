import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Marketplace from './components/Marketplace';
import SellerDashboard from './components/SellerDashboard';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  const [userType, setUserType] = useState<'buyer' | 'seller' | null>(null);

  const handleUserTypeSelection = (type: 'buyer' | 'seller') => {
    setUserType(type);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={
              userType === null ? (
                <WelcomePage onSelectUserType={handleUserTypeSelection} />
              ) : userType === 'buyer' ? (
                <Marketplace />
              ) : (
                <SellerDashboard />
              )
            } />
            <Route path="/producto/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;