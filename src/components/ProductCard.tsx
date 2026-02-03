import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Info, X } from 'lucide-react';
import { Product } from '@/lib/types';
import { quantityOptions, calculatePrice, getCategoryEmoji, getCategoryLabel } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(100);
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart();

  const price = calculatePrice(product.pricePerGram, selectedQuantity);
  const isPremium = product.pricePerGram > 2;

  const handleQuantityChange = (delta: number) => {
    const currentIndex = quantityOptions.findIndex(opt => opt.grams === selectedQuantity);
    const newIndex = Math.max(0, Math.min(quantityOptions.length - 1, currentIndex + delta));
    setSelectedQuantity(quantityOptions[newIndex].grams);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedQuantity);
  };

  // Generate a consistent color based on product name
  const getProductColor = (name: string) => {
    const colors = [
      'from-green-400 to-emerald-500',
      'from-orange-400 to-amber-500',
      'from-red-400 to-rose-500',
      'from-purple-400 to-violet-500',
      'from-yellow-400 to-amber-500',
      'from-teal-400 to-cyan-500',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <>
      <div className="card-organic p-4 flex flex-col h-full">
        {/* Product Image Placeholder */}
        <div className="relative mb-4">
          <div 
            className={`aspect-square rounded-xl bg-gradient-to-br ${getProductColor(product.name)} flex items-center justify-center overflow-hidden`}
          >
            <div className="text-center text-white">
              <span className="text-5xl mb-2 block">{getCategoryEmoji(product.category)}</span>
              <span className="text-xs font-medium opacity-80">Organic Powder</span>
            </div>
          </div>
          
          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-2 left-2 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full shadow-gold">
              ⭐ Premium
            </div>
          )}

          {/* Info Button */}
          <button
            onClick={() => setShowDetails(true)}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-soft hover:scale-110 transition-transform"
            aria-label="View details"
          >
            <Info className="w-4 h-4 text-primary" />
          </button>

          {/* Category Tag */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-card rounded-full shadow-soft text-xs font-medium text-muted-foreground">
            {getCategoryLabel(product.category)}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-3">
          <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.benefits.split(',')[0]}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between bg-muted rounded-xl p-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={selectedQuantity === quantityOptions[0].grams}
              className="w-8 h-8 rounded-lg bg-card flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <div className="text-center">
              <span className="font-semibold text-foreground">
                {selectedQuantity >= 1000 ? `${selectedQuantity / 1000}kg` : `${selectedQuantity}g`}
              </span>
            </div>
            
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={selectedQuantity === quantityOptions[quantityOptions.length - 1].grams}
              className="w-8 h-8 rounded-lg bg-card flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">₹{price}</span>
              <span className="text-xs text-muted-foreground ml-1">
                (₹{product.pricePerGram}/g)
              </span>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-deep-blue-light transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>

      {/* Product Details Modal */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-2">
              {getCategoryEmoji(product.category)} {product.name}
            </DialogTitle>
            <DialogDescription>
              {getCategoryLabel(product.category)}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">✨ Benefits</h4>
              <p className="text-foreground">{product.benefits}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">🥗 Nutrition</h4>
              <p className="text-foreground">{product.nutrition}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">👨‍🍳 Uses</h4>
              <p className="text-foreground">{product.uses}</p>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground">Price per gram</span>
                <span className="font-bold text-primary">₹{product.pricePerGram}</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-sm">
                {quantityOptions.map(opt => (
                  <div key={opt.grams} className="bg-muted rounded-lg p-2">
                    <div className="font-semibold">{opt.label}</div>
                    <div className="text-muted-foreground">₹{calculatePrice(product.pricePerGram, opt.grams)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
