export interface Product {
  id: number;
  name: string;
  price: number;
  farmer: string;
  image: string;
  discount?: number;
  groupBuyPrice?: number;
  timeLeft?: string;
  category: string;
  emoji: string;
  quantity?: number;
}

export interface Category {
  name: string;
  emoji: string;
}