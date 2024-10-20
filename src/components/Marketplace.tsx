import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import Header from './Header';
import Carousel from './Carousel';
import OfferPopup from './OfferPopup';
import AuthModal from './AuthModal';
import CategoryList from './CategoryList';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';
import { useCart } from '../context/CartContext';

const Marketplace: React.FC = () => {
  const { items: cartItems, addToCart } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [addedProduct, setAddedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedProduct(product);
    setTimeout(() => setAddedProduct(null), 3000);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      // Redirect to checkout page
      window.location.href = '/checkout';
    }
  };

  const handleLogin = (email: string, password: string) => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowOffer(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.length} 
        onCartClick={() => setShowCart(!showCart)}
        isAuthenticated={isAuthenticated}
        onAuthClick={() => setShowAuthModal(true)}
      />
      <main className="container mx-auto px-4 py-8">
        <Carousel />
        <h1 className="text-4xl font-bold text-center my-12 text-yellow-600">Delicias Frescas del Campo a Tu Mesa</h1>
        <CategoryList />
        <ProductList addToCart={handleAddToCart} limit={8} />
        <div className="text-center mt-12">
          <Link to="/all-products" className="bg-yellow-400 text-white px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            Explorar Todos los Productos
          </Link>
        </div>
        <Testimonials />
        <Newsletter />
      </main>
      {showCart && (
        <Cart 
          onClose={() => setShowCart(false)} 
          onCheckout={handleCheckout}
        />
      )}
      {showOffer && <OfferPopup onClose={() => setShowOffer(false)} />}
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onLogin={handleLogin}
        />
      )}
      {addedProduct && (
        <div className="fixed bottom-4 right-4 bg-yellow-400 text-white px-6 py-3 rounded-full animate-fade-out text-lg font-semibold shadow-lg z-50">
          ¡{addedProduct.name} añadido al carrito!
        </div>
      )}
      {addedProduct && (
        <div 
          className="fixed z-50 animate-to-cart text-4xl"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {addedProduct.emoji}
        </div>
      )}
    </div>
  );
};

export default Marketplace;