// import { useState } from 'react';
// import { Plus, Minus, ShoppingCart, Info, Sparkles, Apple, ChefHat } from 'lucide-react';
// import { Product } from '@/lib/types';
// import { quantityOptions, calculatePrice, getCategoryEmoji, getCategoryLabel } from '@/lib/data';
// import { productImages } from '@/lib/productImages';
// import { useCart } from '@/context/CartContext';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from '@/components/ui/dialog';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard = ({ product }: ProductCardProps) => {
//   const [selectedQuantity, setSelectedQuantity] = useState(100);
//   const [showDetails, setShowDetails] = useState(false);
//   const { addToCart } = useCart();

//   const price = calculatePrice(product.pricePerGram, selectedQuantity);
//   const isPremium = product.pricePerGram > 2;

//   const handleQuantityChange = (delta: number) => {
//     const currentIndex = quantityOptions.findIndex(opt => opt.grams === selectedQuantity);
//     const newIndex = Math.max(0, Math.min(quantityOptions.length - 1, currentIndex + delta));
//     setSelectedQuantity(quantityOptions[newIndex].grams);
//   };

//   const handleAddToCart = () => {
//     addToCart(product, selectedQuantity);
//   };

//   // Get product image or fallback
//   const productImage = productImages[product.id];

//   // Generate a consistent color based on product category for fallback
//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case 'vegetable': return 'from-orange-400 to-amber-500';
//       case 'leafy': return 'from-green-400 to-emerald-500';
//       case 'fruit': return 'from-red-400 to-rose-500';
//       default: return 'from-green-400 to-emerald-500';
//     }
//   };

//   return (
//     <>
//       <div className="card-organic p-4 flex flex-col h-full">
//         {/* Product Image */}
//         <div className="relative mb-4">
//           {productImage ? (
//             <div className="aspect-square rounded-xl overflow-hidden bg-white group/image relative">
//               <img 
//                 src={productImage} 
//                 alt={product.name}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 loading="lazy"
//               />
              
//               {/* Hover Info Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
//                 <div className="transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300 space-y-2">
//                   <div className="flex items-start gap-2">
//                     <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
//                     <p className="text-white text-xs line-clamp-2">{product.benefits.split(',')[0]}</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <Apple className="w-4 h-4 text-organic-green flex-shrink-0 mt-0.5" />
//                     <p className="text-white/80 text-xs line-clamp-2">{product.nutrition.split(',')[0]}</p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <ChefHat className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
//                     <p className="text-white/80 text-xs line-clamp-1">{product.uses.split(',')[0]}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div 
//               className={`aspect-square rounded-xl bg-gradient-to-br ${getCategoryColor(product.category)} flex items-center justify-center overflow-hidden`}
//             >
//               <div className="text-center text-white">
//                 <span className="text-5xl mb-2 block">{getCategoryEmoji(product.category)}</span>
//                 <span className="text-xs font-medium opacity-80">Organic Powder</span>
//               </div>
//             </div>
//           )}
          
//           {/* Premium Badge */}
//           {isPremium && (
//             <div className="absolute top-2 left-2 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full shadow-gold">
//               ⭐ Premium
//             </div>
//           )}

//           {/* Info Button */}
//           <button
//             onClick={() => setShowDetails(true)}
//             className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-soft hover:scale-110 transition-transform"
//             aria-label="View details"
//           >
//             <Info className="w-4 h-4 text-primary" />
//           </button>

//           {/* Category Tag */}
//           <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-card rounded-full shadow-soft text-xs font-medium text-muted-foreground whitespace-nowrap">
//             {getCategoryLabel(product.category)}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="flex-1 space-y-3">
//           <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">
//             {product.name}
//           </h3>
          
//           <p className="text-sm text-muted-foreground line-clamp-2">
//             {product.benefits.split(',')[0]}
//           </p>

//           {/* Quantity Selector */}
//           <div className="flex items-center justify-between bg-muted rounded-xl p-2">
//             <button
//               onClick={() => handleQuantityChange(-1)}
//               disabled={selectedQuantity === quantityOptions[0].grams}
//               className="w-8 h-8 rounded-lg bg-card flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
//             >
//               <Minus className="w-4 h-4" />
//             </button>
            
//             <div className="text-center">
//               <span className="font-semibold text-foreground">
//                 {selectedQuantity >= 1000 ? `${selectedQuantity / 1000}kg` : `${selectedQuantity}g`}
//               </span>
//             </div>
            
//             <button
//               onClick={() => handleQuantityChange(1)}
//               disabled={selectedQuantity === quantityOptions[quantityOptions.length - 1].grams}
//               className="w-8 h-8 rounded-lg bg-card flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
//             >
//               <Plus className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Price */}
//           <div className="flex items-center justify-between">
//             <div>
//               <span className="text-2xl font-bold text-primary">₹{price}</span>
//               <span className="text-xs text-muted-foreground ml-1">
//                 (₹{product.pricePerGram}/g)
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Add to Cart Button */}
//         <button
//           onClick={handleAddToCart}
//           className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-deep-blue-light transition-colors"
//         >
//           <ShoppingCart className="w-5 h-5" />
//           Add to Cart
//         </button>
//       </div>

//       {/* Product Details Modal */}
//       <Dialog open={showDetails} onOpenChange={setShowDetails}>
//         <DialogContent className="max-w-md">
//           <DialogHeader>
//             <DialogTitle className="font-display text-xl flex items-center gap-2">
//               {getCategoryEmoji(product.category)} {product.name}
//             </DialogTitle>
//             <DialogDescription>
//               {getCategoryLabel(product.category)}
//             </DialogDescription>
//           </DialogHeader>
          
//           {/* Product Image in Modal */}
//           {productImage && (
//             <div className="aspect-video rounded-xl overflow-hidden bg-muted">
//               <img 
//                 src={productImage} 
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           )}
          
//           <div className="space-y-4 pt-2">
//             <div>
//               <h4 className="font-semibold text-sm text-muted-foreground mb-1">✨ Benefits</h4>
//               <p className="text-foreground">{product.benefits}</p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-sm text-muted-foreground mb-1">🥗 Nutrition</h4>
//               <p className="text-foreground">{product.nutrition}</p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-sm text-muted-foreground mb-1">👨‍🍳 Uses</h4>
//               <p className="text-foreground">{product.uses}</p>
//             </div>

//             <div className="pt-4 border-t">
//               <div className="flex items-center justify-between mb-3">
//                 <span className="text-muted-foreground">Price per gram</span>
//                 <span className="font-bold text-primary">₹{product.pricePerGram}</span>
//               </div>
//               <div className="grid grid-cols-4 gap-2 text-center text-sm">
//                 {quantityOptions.map(opt => (
//                   <div key={opt.grams} className="bg-muted rounded-lg p-2">
//                     <div className="font-semibold">{opt.label}</div>
//                     <div className="text-muted-foreground">₹{calculatePrice(product.pricePerGram, opt.grams)}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default ProductCard;
import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Info, Sparkles, Apple, ChefHat } from 'lucide-react';
import { Product } from '@/lib/types';
import { quantityOptions, calculatePrice, getCategoryEmoji, getCategoryLabel } from '@/lib/data';
import { productImages } from '@/lib/productImages';
import { useCart } from '@/context/CartContext';

/* ✅ FALLBACK IMAGE */
import mangoPowder from '@/assets/products/mango-powder.jpg';

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

  /* ✅ SAFE IMAGE WITH FALLBACK */
  const productImage = productImages[product.id] || mangoPowder;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vegetable': return 'from-orange-400 to-amber-500';
      case 'leafy': return 'from-green-400 to-emerald-500';
      case 'fruit': return 'from-red-400 to-rose-500';
      default: return 'from-green-400 to-emerald-500';
    }
  };

  return (
    <>
      <div className="card-organic p-4 flex flex-col h-full">

        {/* Product Image */}
        <div className="relative mb-4">
          {productImage ? (
            <div className="aspect-square rounded-xl overflow-hidden bg-white group/image relative">

              <img 
                src={productImage} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = mangoPowder;
                }}
              />

              {/* Hover Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300 space-y-2">

                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-white text-xs line-clamp-2">
                      {product.benefits.split(',')[0]}
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Apple className="w-4 h-4 text-organic-green flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-xs line-clamp-2">
                      {product.nutrition.split(',')[0]}
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <ChefHat className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-xs line-clamp-1">
                      {product.uses.split(',')[0]}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ) : (
            <div 
              className={`aspect-square rounded-xl bg-gradient-to-br ${getCategoryColor(product.category)} flex items-center justify-center overflow-hidden`}
            >
              <div className="text-center text-white">
                <span className="text-5xl mb-2 block">
                  {getCategoryEmoji(product.category)}
                </span>
                <span className="text-xs font-medium opacity-80">
                  Organic Powder
                </span>
              </div>
            </div>
          )}

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
              className="w-8 h-8 rounded-lg bg-card flex items-center justify-center disabled:opacity-50 hover:bg-secondary"
            >
              <Minus className="w-4 h-4" />
            </button>

            <span className="font-semibold text-foreground">
              {selectedQuantity >= 1000
                ? `${selectedQuantity / 1000}kg`
                : `${selectedQuantity}g`}
            </span>

            <button
              onClick={() => handleQuantityChange(1)}
              disabled={selectedQuantity === quantityOptions[quantityOptions.length - 1].grams}
              className="w-8 h-8 rounded-lg bg-card flex items-center justify-center disabled:opacity-50 hover:bg-secondary"
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


        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-deep-blue-light"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>

      </div>


      {/* Modal */}
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


          {/* Modal Image */}
          <div className="aspect-video rounded-xl overflow-hidden bg-muted">
            <img 
              src={productImage}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = mangoPowder;
              }}
            />
          </div>


          <div className="space-y-4 pt-2">

            {/* Ingredients - 100% Natural */}
            <div className="bg-organic-green/10 border border-organic-green/30 rounded-xl p-3">
              <h4 className="font-semibold text-sm text-organic-green mb-1">
                🌿 Ingredients
              </h4>
              <p className="text-foreground font-medium">
                100% {product.ingredients} – No Additives
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                ✨ Benefits
              </h4>
              <p>{product.benefits}</p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                🥗 Nutrition
              </h4>
              <p>{product.nutrition}</p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                👨‍🍳 Uses
              </h4>
              <p>{product.uses}</p>
            </div>

          </div>

        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
