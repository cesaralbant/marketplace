import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import { Product } from '../types';

interface CategoryProductsProps {
  addToCart: (product: Product) => void;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ addToCart }) => {
  const { categoryName } = useParams<{ categoryName: string }>();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8 capitalize">{categoryName} Products</h1>
      <ProductList addToCart={addToCart} category={categoryName} />
    </div>
  );
};

export default CategoryProducts;