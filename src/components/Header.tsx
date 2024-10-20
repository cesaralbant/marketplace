import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  isAuthenticated: boolean;
  onAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, isAuthenticated, onAuthClick }) => {
  return (
    <header className="bg-yellow-400 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-100">Del Campo a Tu Mesa</Link>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-white hover:text-yellow-100" onClick={onAuthClick}>
            <User size={24} />
            <span className="ml-2">{isAuthenticated ? 'Mi Cuenta' : 'Iniciar Sesión'}</span>
          </button>
          <button className="flex items-center text-white hover:text-yellow-100" onClick={onCartClick}>
            <ShoppingCart size={24} />
            <span className="ml-2">Carrito ({cartItemsCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;