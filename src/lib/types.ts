export interface Product {
  id: string;
  name: string;
  category: 'vegetable' | 'leafy' | 'fruit';
  pricePerGram: number;
  benefits: string;
  nutrition: string;
  uses: string;
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number; // in grams
  price: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalWeight: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}
