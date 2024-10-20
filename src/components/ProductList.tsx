import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';

interface ProductListProps {
  addToCart: (product: Product) => void;
  category?: string;
  limit?: number;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart, category, limit }) => {
  let filteredProducts = category
    ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : products;

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-yellow-200">
          {product.discount && (
            <div className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1 text-sm font-bold z-10">
              {product.discount}% DESCUENTO
            </div>
          )}
          <Link to={`/producto/${product.id}`} className="block">
            <div className="relative pt-[100%]">
              <img src={product.image} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <span className="text-3xl">{product.emoji}</span>
              </div>
              <p className="text-gray-600 mb-2">Agricultor: {product.farmer}</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-yellow-600 font-bold text-xl">${product.price.toFixed(2)}</p>
                {product.groupBuyPrice && (
                  <p className="text-yellow-500 font-bold text-sm">
                    Compra grupal: ${product.groupBuyPrice.toFixed(2)}
                  </p>
                )}
              </div>
              {product.timeLeft && (
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock size={16} className="mr-1" />
                  <span>Quedan {product.timeLeft}</span>
                </div>
              )}
              {product.groupBuyPrice && (
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Users size={16} className="mr-1" />
                  <span>Faltan 3 para compra grupal</span>
                </div>
              )}
            </div>
          </Link>
          <div className="p-4 pt-0">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors transform hover:scale-105 duration-300"
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;