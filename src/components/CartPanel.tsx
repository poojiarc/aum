// import { X, ShoppingCart, Trash2, MessageCircle, ArrowLeft, AlertTriangle } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import { generateWhatsAppMessage, WHATSAPP_NUMBER, BULK_ORDER_THRESHOLD, quantityOptions, getCategoryEmoji } from '@/lib/data';
// import { productImages } from '@/lib/productImages';
// import { useState } from 'react';

// const CartPanel = () => {
//   const { 
//     items, 
//     isCartOpen, 
//     setIsCartOpen, 
//     removeFromCart, 
//     updateQuantity,
//     clearCart,
//     totalPrice, 
//     totalWeight 
//   } = useCart();

//   const [showBulkForm, setShowBulkForm] = useState(false);
//   const isBulkOrder = totalWeight >= BULK_ORDER_THRESHOLD;

//   const handleWhatsAppCheckout = () => {
//     if (isBulkOrder) {
//       setShowBulkForm(true);
//       return;
//     }
//     const message = generateWhatsAppMessage(items, totalWeight, totalPrice);
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
//   };

//   const handleBulkEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const name = formData.get('name');
//     const phone = formData.get('phone');
//     const email = formData.get('email');
//     const purpose = formData.get('purpose');
//     const message = formData.get('message');

//     const itemsList = items.map(item => 
//       `• ${item.product.name} - ${item.quantity}g`
//     ).join('\n');

//     const whatsappMessage = encodeURIComponent(
//       `🏭 BULK ORDER ENQUIRY\n\n` +
//       `Name: ${name}\n` +
//       `Phone: ${phone}\n` +
//       `Email: ${email}\n` +
//       `Purpose: ${purpose}\n\n` +
//       `Products Requested:\n${itemsList}\n\n` +
//       `Total Weight: ${(totalWeight/1000).toFixed(1)}kg\n\n` +
//       `Additional Message: ${message || 'N/A'}\n\n` +
//       `Please provide a quote for this bulk order.`
//     );

//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
//     setShowBulkForm(false);
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
//             <h2 className="font-display text-xl font-semibold">Your Cart</h2>
//             <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-sm font-bold rounded-full">
//               {items.length}
//             </span>
//           </div>
//           <button 
//             onClick={() => setIsCartOpen(false)}
//             className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
//             aria-label="Close cart"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Cart Items */}
//         <div className="flex-1 overflow-y-auto p-4">
//           {items.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-full text-center">
//               <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
//               <h3 className="font-display text-lg font-semibold text-foreground mb-2">
//                 Your cart is empty
//               </h3>
//               <p className="text-muted-foreground text-sm mb-6">
//                 Add some organic powders to get started!
//               </p>
//               <button
//                 onClick={() => setIsCartOpen(false)}
//                 className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-deep-blue-light transition-colors"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 Browse Products
//               </button>
//             </div>
//           ) : showBulkForm ? (
//             <form onSubmit={handleBulkEnquiry} className="space-y-4">
//               <div className="bg-soft-orange/10 border border-soft-orange/30 rounded-xl p-4 mb-4">
//                 <div className="flex items-start gap-3">
//                   <AlertTriangle className="w-5 h-5 text-soft-orange flex-shrink-0 mt-0.5" />
//                   <div>
//                     <h4 className="font-semibold text-foreground">Bulk Order Detected</h4>
//                     <p className="text-sm text-muted-foreground">
//                       For orders above 25kg, prices are provided on request. 
//                       Please fill out this form for a custom quote.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Name *</label>
//                 <input 
//                   type="text" 
//                   name="name" 
//                   required 
//                   className="w-full px-4 py-2.5 border rounded-xl bg-background focus:ring-2 focus:ring-secondary outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Phone *</label>
//                 <input 
//                   type="tel" 
//                   name="phone" 
//                   required 
//                   className="w-full px-4 py-2.5 border rounded-xl bg-background focus:ring-2 focus:ring-secondary outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input 
//                   type="email" 
//                   name="email" 
//                   className="w-full px-4 py-2.5 border rounded-xl bg-background focus:ring-2 focus:ring-secondary outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Purpose *</label>
//                 <select 
//                   name="purpose" 
//                   required 
//                   className="w-full px-4 py-2.5 border rounded-xl bg-background focus:ring-2 focus:ring-secondary outline-none"
//                 >
//                   <option value="">Select purpose</option>
//                   <option value="Bulk">Bulk Purchase</option>
//                   <option value="Export">Export Order</option>
//                   <option value="Retail">Retail Business</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Message</label>
//                 <textarea 
//                   name="message" 
//                   rows={3}
//                   className="w-full px-4 py-2.5 border rounded-xl bg-background focus:ring-2 focus:ring-secondary outline-none resize-none"
//                   placeholder="Any specific requirements..."
//                 />
//               </div>

//               <div className="flex gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowBulkForm(false)}
//                   className="flex-1 px-4 py-3 border rounded-xl font-medium hover:bg-muted transition-colors"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 btn-whatsapp justify-center"
//                 >
//                   Submit Enquiry
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div 
//                   key={item.product.id}
//                   className="flex gap-4 p-3 bg-muted rounded-xl"
//                 >
//                   {/* Product Image */}
//                   <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
//                     {productImages[item.product.id] ? (
//                       <img 
//                         src={productImages[item.product.id]} 
//                         alt={item.product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gradient-to-br from-organic-green to-leaf-green flex items-center justify-center">
//                         <span className="text-2xl">{getCategoryEmoji(item.product.category)}</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Info */}
//                   <div className="flex-1 min-w-0">
//                     <h4 className="font-semibold text-foreground text-sm line-clamp-1">
//                       {item.product.name}
//                     </h4>
                    
//                     {/* Quantity Selector */}
//                     <select
//                       value={item.quantity}
//                       onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
//                       className="mt-1 px-2 py-1 text-sm border rounded-lg bg-background"
//                     >
//                       {quantityOptions.map(opt => (
//                         <option key={opt.grams} value={opt.grams}>
//                           {opt.label}
//                         </option>
//                       ))}
//                     </select>

//                     <p className="text-primary font-bold mt-1">₹{item.price}</p>
//                   </div>

//                   {/* Remove Button */}
//                   <button
//                     onClick={() => removeFromCart(item.product.id)}
//                     className="w-8 h-8 rounded-full hover:bg-destructive/10 flex items-center justify-center text-destructive transition-colors"
//                     aria-label="Remove item"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               ))}

//               {/* Clear Cart */}
//               {items.length > 0 && (
//                 <button
//                   onClick={clearCart}
//                   className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors py-2"
//                 >
//                   Clear all items
//                 </button>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Footer - Only show if items exist and not showing form */}
//         {items.length > 0 && !showBulkForm && (
//           <div className="border-t p-4 space-y-4 bg-card">
//             {/* Bulk Order Warning */}
//             {isBulkOrder && (
//               <div className="bg-soft-orange/10 border border-soft-orange/30 rounded-xl p-3 text-sm">
//                 <p className="text-foreground font-medium">⚠️ Bulk Order ({(totalWeight/1000).toFixed(1)}kg+)</p>
//                 <p className="text-muted-foreground text-xs">Custom pricing will be provided on request</p>
//               </div>
//             )}

//             {/* Summary */}
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm">
//                 <span className="text-muted-foreground">Total Weight</span>
//                 <span className="font-medium">
//                   {totalWeight >= 1000 ? `${(totalWeight/1000).toFixed(1)}kg` : `${totalWeight}g`}
//                 </span>
//               </div>
//               <div className="flex justify-between text-lg">
//                 <span className="font-semibold">Total</span>
//                 <span className="font-bold text-primary">
//                   {isBulkOrder ? 'On Request' : `₹${totalPrice}`}
//                 </span>
//               </div>
//             </div>

//             {/* Checkout Button */}
//             <button
//               onClick={handleWhatsAppCheckout}
//               className="w-full btn-whatsapp justify-center py-4"
//             >
//               <MessageCircle className="w-5 h-5" />
//               <span>{isBulkOrder ? 'Request Bulk Quote' : 'Order via WhatsApp'}</span>
//             </button>

//             {/* Return Button */}
//             <button
//               onClick={() => setIsCartOpen(false)}
//               className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Continue Shopping
//             </button>
//           </div>
//         )}
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
  AlertTriangle,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  generateWhatsAppMessage,
  WHATSAPP_NUMBER,
  BULK_ORDER_THRESHOLD,
  getCategoryEmoji,
} from '@/lib/data';
import { productImages } from '@/lib/productImages';
import { useState } from 'react';

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

  const isBulkOrder = totalWeight >= BULK_ORDER_THRESHOLD;

  const handleWhatsAppCheckout = () => {
    if (isBulkOrder) {
      setShowBulkForm(true);
      return;
    }

    const message = generateWhatsAppMessage(items, totalWeight, totalPrice);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank'
    );
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-elevated animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
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

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
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
          ) : (
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

                    {/* ✅ QUANTITY BAR (ONLY TEXT FIX APPLIED) */}
                    <div
                      className="flex items-center justify-between
                      bg-background rounded-full
                      px-5 py-2
                      border
                      w-[260px]"
                    >
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.packSize,
                            Math.max(1, item.packCount - 1)
                          )
                        }
                        className="w-10 h-10 flex items-center justify-center
                        rounded-full text-xl font-bold
                        hover:bg-muted transition"
                      >
                        –
                      </button>

                      {/* ✅ SINGLE LINE TEXT */}
                      <span className="text-base font-semibold whitespace-nowrap">
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
                        className="w-10 h-10 flex items-center justify-center
                        rounded-full text-xl font-bold
                        hover:bg-muted transition"
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

              <button
                onClick={clearCart}
                className="w-full text-sm text-muted-foreground py-2"
              >
                Clear all items
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Total Weight</span>
              <span>
                {totalWeight >= 1000
                  ? `${(totalWeight / 1000).toFixed(1)}kg`
                  : `${totalWeight}g`}
              </span>
            </div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full btn-whatsapp py-3"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </button>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-sm py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPanel;
