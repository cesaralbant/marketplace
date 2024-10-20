import { Product, Category } from '../types';

export const categories: Category[] = [
  { name: 'Frutas', emoji: '🍎' },
  { name: 'Verduras', emoji: '🥕' },
  { name: 'Lácteos', emoji: '🥛' },
  { name: 'Granos', emoji: '🌾' },
  { name: 'Carnes', emoji: '🥩' },
  { name: 'Hierbas', emoji: '🌿' },
];

export const products: Product[] = [
  // Frutas
  {
    id: 1,
    name: 'Manzanas Orgánicas',
    price: 2.99,
    farmer: 'Huerta del Valle Verde',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    discount: 10,
    groupBuyPrice: 2.49,
    timeLeft: '2 horas',
    category: 'Frutas',
    emoji: '🍎',
  },
  {
    id: 2,
    name: 'Fresas Frescas',
    price: 3.99,
    farmer: 'Finca Soleada',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    groupBuyPrice: 3.49,
    category: 'Frutas',
    emoji: '🍓',
  },
  // ... Añadir más productos de frutas

  // Verduras
  {
    id: 11,
    name: 'Zanahorias Orgánicas',
    price: 1.99,
    farmer: 'Huerta Raíces Frescas',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    groupBuyPrice: 1.49,
    category: 'Verduras',
    emoji: '🥕',
  },
  // ... Añadir más productos de verduras

  // Lácteos
  {
    id: 21,
    name: 'Leche Fresca de Granja',
    price: 3.99,
    farmer: 'Lácteos Pradera Verde',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    discount: 15,
    category: 'Lácteos',
    emoji: '🥛',
  },
  // ... Añadir más productos lácteos

  // Granos
  {
    id: 31,
    name: 'Quinoa Orgánica',
    price: 4.99,
    farmer: 'Cooperativa Campos Dorados',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    category: 'Granos',
    emoji: '🌾',
  },
  // ... Añadir más productos de granos

  // Carnes
  {
    id: 41,
    name: 'Carne de Res de Pastoreo',
    price: 9.99,
    farmer: 'Ganadería Feliz',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    groupBuyPrice: 8.99,
    category: 'Carnes',
    emoji: '🥩',
  },
  // ... Añadir más productos de carnes

  // Hierbas
  {
    id: 51,
    name: 'Albahaca Fresca',
    price: 2.49,
    farmer: 'Hierbas Aromáticas del Bosque',
    image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    discount: 10,
    category: 'Hierbas',
    emoji: '🌿',
  },
  // ... Añadir más productos de hierbas
];