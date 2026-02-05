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
  packSize: number;     // 100,200,500,1000
  packCount: number;    // 1,2,3...
  quantity: number;     // total grams (packSize * packCount)
  price: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, packSize: number) => void;
  removeFromCart: (productId: string, packSize: number) => void;
  updateQuantity: (productId: string, packSize: number, packCount: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalWeight: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}
