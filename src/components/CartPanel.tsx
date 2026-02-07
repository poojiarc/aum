// import {
//   X,
//   ShoppingCart,
//   Trash2,
//   MessageCircle,
//   ArrowLeft,
//   AlertTriangle,
// } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import {
//   generateWhatsAppMessage,
//   WHATSAPP_NUMBER,
//   BULK_ORDER_THRESHOLD,
//   getCategoryEmoji,
//   calculateBilling,
//   FREE_SHIPPING_THRESHOLD,
// } from '@/lib/data';
// import { productImages } from '@/lib/productImages';
// import { useState } from 'react';
// import TrustBadges from './TrustBadges';

// const CartPanel = () => {
//   const {
//     items,
//     isCartOpen,
//     setIsCartOpen,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//     totalPrice,
//     totalWeight,
//   } = useCart();

//   const [showBulkForm, setShowBulkForm] = useState(false);

//   const isBulkOrder = totalWeight >= BULK_ORDER_THRESHOLD;

//   const handleWhatsAppCheckout = () => {
//     if (isBulkOrder) {
//       setShowBulkForm(true);
//       return;
//     }

//     const message = generateWhatsAppMessage(items, totalWeight, totalPrice);

//     window.open(
//       `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
//       '_blank'
//     );
//   };

//   if (!isCartOpen) return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
//         onClick={() => setIsCartOpen(false)}
//       />

//       {/* Panel */}
//       <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-elevated animate-slide-in-right flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <div className="flex items-center gap-3">
//             <ShoppingCart className="w-6 h-6 text-primary" />
//             <h2 className="font-display text-xl font-semibold">
//               Your Cart
//             </h2>
//             <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-sm font-bold rounded-full">
//               {items.length}
//             </span>
//           </div>

//           <button
//             onClick={() => setIsCartOpen(false)}
//             className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Cart Items */}
//         <div className="flex-1 overflow-y-auto p-4">
//           {items.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-full text-center">
//               <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
//               <h3 className="font-display text-lg font-semibold mb-2">
//                 Your cart is empty
//               </h3>
//               <button
//                 onClick={() => setIsCartOpen(false)}
//                 className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 Browse Products
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {items.map(item => (
//                 <div
//                   key={`${item.product.id}-${item.packSize}`}
//                   className="flex gap-4 p-4 bg-muted rounded-xl"
//                 >
//                   {/* Image */}
//                   <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
//                     {productImages[item.product.id] ? (
//                       <img
//                         src={productImages[item.product.id]}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-green-400 flex items-center justify-center">
//                         {getCategoryEmoji(item.product.category)}
//                       </div>
//                     )}
//                   </div>

//                   {/* Info */}
//                   <div className="flex-1">
//                     <h4 className="font-semibold text-sm">
//                       {item.product.name}
//                     </h4>

//                     <p className="text-xs text-muted-foreground mb-2">
//                       {item.packSize >= 1000
//                         ? `${item.packSize / 1000}kg`
//                         : `${item.packSize}g`} × {item.packCount}
//                     </p>

//                     {/* ✅ QUANTITY BAR (ONLY TEXT FIX APPLIED) */}
//                     <div
//                       className="flex items-center justify-between
//                       bg-background rounded-full
//                       px-5 py-2
//                       border
//                       w-[260px]"
//                     >
//                       <button
//                         onClick={() =>
//                           updateQuantity(
//                             item.product.id,
//                             item.packSize,
//                             Math.max(1, item.packCount - 1)
//                           )
//                         }
//                         className="w-10 h-10 flex items-center justify-center
//                         rounded-full text-xl font-bold
//                         hover:bg-muted transition"
//                       >
//                         –
//                       </button>

//                       {/* ✅ SINGLE LINE TEXT */}
//                       <span className="text-base font-semibold whitespace-nowrap">
//                         {item.packSize >= 1000
//                           ? `${item.packSize / 1000}kg`
//                           : `${item.packSize}g`} × {item.packCount}
//                       </span>

//                       <button
//                         onClick={() =>
//                           updateQuantity(
//                             item.product.id,
//                             item.packSize,
//                             item.packCount + 1
//                           )
//                         }
//                         className="w-10 h-10 flex items-center justify-center
//                         rounded-full text-xl font-bold
//                         hover:bg-muted transition"
//                       >
//                         +
//                       </button>
//                     </div>

//                     <p className="font-bold text-primary mt-2">
//                       ₹{item.price}
//                     </p>
//                   </div>

//                   {/* Remove */}
//                   <button
//                     onClick={() =>
//                       removeFromCart(item.product.id, item.packSize)
//                     }
//                     className="w-8 h-8 rounded-full hover:bg-red-100 text-red-500"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               ))}

//               <button
//                 onClick={clearCart}
//                 className="w-full text-sm text-muted-foreground py-2"
//               >
//                 Clear all items
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         {items.length > 0 && (() => {
//           const billing = calculateBilling(totalPrice);
          
//           return (
//             <div className="border-t p-4 space-y-4">
//               {/* Free Shipping Banner - Only show when below threshold */}
//               {totalPrice < FREE_SHIPPING_THRESHOLD && (
//                 <div className="bg-gradient-to-r from-secondary/20 to-gold/20 border border-secondary/40 rounded-xl p-3 text-sm text-center animate-pulse">
//                   <span className="text-foreground font-medium">🚚 Add ₹{FREE_SHIPPING_THRESHOLD - totalPrice} more to get </span>
//                   <span className="text-gold font-bold">FREE DELIVERY!</span>
//                 </div>
//               )}
              
//               {/* Free Shipping Qualified */}
//               {totalPrice >= FREE_SHIPPING_THRESHOLD && (
//                 <div className="bg-organic-green/10 border border-organic-green/30 rounded-xl p-3 text-sm text-center">
//                   <span className="text-organic-green font-semibold">🎉 You qualify for FREE SHIPPING!</span>
//                 </div>
//               )}
              
//               {/* Billing Summary */}
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Total Weight</span>
//                   <span>
//                     {totalWeight >= 1000
//                       ? `${(totalWeight / 1000).toFixed(1)}kg`
//                       : `${totalWeight}g`}
//                   </span>
//                 </div>
                
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Subtotal</span>
//                   <span>₹{billing.subtotal}</span>
//                 </div>
                
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">GST (5%)</span>
//                   <span>₹{billing.gstAmount}</span>
//                 </div>
                
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Shipping</span>
//                   <span className={billing.isFreeShipping ? 'text-organic-green font-medium' : ''}>
//                     {billing.isFreeShipping ? 'FREE' : `₹${billing.shippingCharge}`}
//                   </span>
//                 </div>
                
//                 <div className="border-t pt-2 flex justify-between text-lg font-bold">
//                   <span>Grand Total</span>
//                   <span className="text-primary">₹{billing.total}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleWhatsAppCheckout}
//                 className="w-full btn-whatsapp py-3"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 Order via WhatsApp
//               </button>

//               {/* Trust Badges */}
//               <TrustBadges variant="inline" className="pt-2" />

//               <button
//                 onClick={() => setIsCartOpen(false)}
//                 className="w-full text-sm py-2"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           );
//         })()}
//       </div>
//     </>
//   );
// };

// export default CartPanel;


import {
  X,
  ShoppingCart,
  Trash2,
  MessageCircle,
  ArrowLeft,
} from 'lucide-react';

import { useCart } from '@/context/CartContext';

import {
  generateWhatsAppMessage,
  WHATSAPP_NUMBER,
  BULK_ORDER_THRESHOLD,
  getCategoryEmoji,
  calculateBilling,
  FREE_SHIPPING_THRESHOLD,
} from '@/lib/data';

import { productImages } from '@/lib/productImages';

import { useEffect, useState } from 'react';

import TrustBadges from './TrustBadges';

const CartPanel = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalWeight,
  } = useCart();

  const [showBulkForm, setShowBulkForm] = useState(false);

  // Customer Details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const isBulkOrder = totalWeight >= BULK_ORDER_THRESHOLD;

  // Disable background scroll
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  // WhatsApp Checkout
  const handleWhatsAppCheckout = () => {
    if (!name || !phone || !address) {
      alert('Please fill Name, Phone & Address');
      return;
    }

    if (isBulkOrder) {
      setShowBulkForm(true);
      return;
    }

    const message = generateWhatsAppMessage(
      items,
      totalWeight,
      totalPrice,
      name,
      phone,
      address
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank'
    );
  };

  const billing = calculateBilling(totalPrice);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 h-screen w-full max-w-lg bg-card z-50 shadow-elevated animate-slide-in-right flex flex-col overflow-hidden">

        {/* Header (Fixed) */}
        <div className="flex items-center justify-between p-4 border-b shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-primary" />

            <h2 className="font-display text-xl font-semibold">
              Your Cart
            </h2>

            <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-sm font-bold rounded-full">
              {items.length}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* FULL SCROLL AREA */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 overscroll-contain">

          {/* Empty Cart */}
          {items.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />

              <h3 className="font-display text-lg font-semibold mb-2">
                Your cart is empty
              </h3>

              <button
                onClick={() => setIsCartOpen(false)}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse Products
              </button>
            </div>
          )}

          {/* Cart Items */}
          {items.length > 0 && (
            <>
              <div className="space-y-4">

                {items.map(item => (
                  <div
                    key={`${item.product.id}-${item.packSize}`}
                    className="flex gap-4 p-4 bg-muted rounded-xl"
                  >

                    {/* Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      {productImages[item.product.id] ? (
                        <img
                          src={productImages[item.product.id]}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-green-400 flex items-center justify-center">
                          {getCategoryEmoji(item.product.category)}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1">

                      <h4 className="font-semibold text-sm">
                        {item.product.name}
                      </h4>

                      <p className="text-xs text-muted-foreground mb-2">
                        {item.packSize >= 1000
                          ? `${item.packSize / 1000}kg`
                          : `${item.packSize}g`} × {item.packCount}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center justify-between bg-background rounded-full px-4 py-1.5 border w-full max-w-[240px]">

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.packSize,
                              Math.max(1, item.packCount - 1)
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-full text-xl font-bold hover:bg-muted"
                        >
                          –
                        </button>

                        <span className="text-sm font-semibold whitespace-nowrap">
                          {item.packSize >= 1000
                            ? `${item.packSize / 1000}kg`
                            : `${item.packSize}g`} × {item.packCount}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.packSize,
                              item.packCount + 1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-full text-xl font-bold hover:bg-muted"
                        >
                          +
                        </button>

                      </div>

                      <p className="font-bold text-primary mt-2">
                        ₹{item.price}
                      </p>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeFromCart(item.product.id, item.packSize)
                      }
                      className="w-8 h-8 rounded-full hover:bg-red-100 text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                  </div>
                ))}

              </div>

              {/* Clear */}
              <button
                onClick={clearCart}
                className="w-full text-sm text-muted-foreground py-2"
              >
                Clear all items
              </button>

              {/* Customer Form */}
              <div className="w-full p-3 border rounded-lg text-sm space-y-2">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded border"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 rounded border"
                />

                <textarea
                  placeholder="Delivery Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 rounded border"
                  rows={2}
                />

              </div>

              {/* Free Shipping Banner */}
              {totalPrice < FREE_SHIPPING_THRESHOLD && (
                <div className="bg-secondary/20 border rounded-xl p-3 text-sm text-center animate-pulse">
                  🚚 Add ₹{FREE_SHIPPING_THRESHOLD - totalPrice} more for FREE DELIVERY
                </div>
              )}

              {/* Billing */}
              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{billing.subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>₹{billing.gstAmount}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {billing.isFreeShipping
                      ? 'FREE'
                      : `₹${billing.shippingCharge}`}
                  </span>
                </div>

                <div className="border-t pt-2 flex justify-between font-bold text-base">
                  <span>Grand Total</span>
                  <span className="text-primary">₹{billing.total}</span>
                </div>

              </div>

              {/* Order Button */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full btn-whatsapp py-3"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </button>

              {/* Trust */}
              <TrustBadges variant="inline" />

              {/* Continue */}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-sm py-2"
              >
                Continue Shopping
              </button>

            </>
          )}

        </div>
      </div>
    </>
  );
};

export default CartPanel;
