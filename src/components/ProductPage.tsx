import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Truck, ShieldCheck, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import Header from './Header';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [showReviews, setShowReviews] = useState(false);
  const { addToCart, items } = useCart();

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert(`${quantity} x ${product.name} añadido al carrito`);
  };

  const reviews = [
    { id: 1, author: "María G.", rating: 5, text: "¡Increíble calidad! Estas manzanas son las mejores que he probado." },
    { id: 2, author: "Juan L.", rating: 4, text: "Muy frescas y sabrosas. Definitivamente compraré más." },
    { id: 3, author: "Ana P.", rating: 5, text: "Me encanta saber que estoy apoyando a agricultores locales. ¡Y el sabor es inmejorable!" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header cartItemsCount={items.length} onCartClick={() => {}} isAuthenticated={false} onAuthClick={() => {}} />
      {/* Rest of the component remains the same */}
      <div className="flex items-center mb-6">
        <div className="border border-gray-300 rounded-l px-3 py-2">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 focus:outline-none">
            <ChevronDown size={20} />
          </button>
          <span className="mx-2 text-gray-700">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 focus:outline-none">
            <ChevronUp size={20} />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-grow bg-yellow-400 text-white px-6 py-2 rounded-r hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          Añadir al Carrito
        </button>
      </div>
      {/* Rest of the component remains the same */}
    </div>
  );
};

export default ProductPage;