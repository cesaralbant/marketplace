import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const CategoryList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/category/${category.name.toLowerCase()}`}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center hover:bg-green-50 transition-colors"
        >
          <span className="text-4xl mb-2">{category.emoji}</span>
          <h2 className="text-lg font-semibold text-center">{category.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;