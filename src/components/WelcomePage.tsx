import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';

interface WelcomePageProps {
  onSelectUserType: (type: 'buyer' | 'seller') => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onSelectUserType }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Farmers Market</h1>
        <p className="text-xl mb-8">Are you here to buy or sell?</p>
        <div className="flex space-x-4">
          <button
            onClick={() => onSelectUserType('buyer')}
            className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
          >
            <ShoppingCart className="mr-2" />
            Buy Products
          </button>
          <button
            onClick={() => onSelectUserType('seller')}
            className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            <Store className="mr-2" />
            Sell Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;