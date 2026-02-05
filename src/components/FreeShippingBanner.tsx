 import { useState, useEffect } from 'react';
 import { X, Truck, Gift } from 'lucide-react';
 
 const FreeShippingBanner = () => {
   const [isVisible, setIsVisible] = useState(true);
   const [isScrolled, setIsScrolled] = useState(false);
   
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 300);
     };
     
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   
   if (!isVisible || isScrolled) return null;
   
   return (
     <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-organic-green via-leaf-green to-organic-green text-white py-2 px-4 animate-fade-in">
       <div className="container mx-auto flex items-center justify-center gap-3 text-sm md:text-base">
         <div className="flex items-center gap-2 animate-bounce-gentle">
           <Gift className="w-5 h-5" />
           <Truck className="w-5 h-5" />
         </div>
         <p className="font-medium text-center">
           🎉 <span className="font-bold">Free Shipping</span> on Orders Above <span className="font-bold text-gold-light">₹999</span>
         </p>
         <button
           onClick={() => setIsVisible(false)}
           className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
           aria-label="Close banner"
         >
           <X className="w-4 h-4" />
         </button>
       </div>
     </div>
   );
 };
 
 export default FreeShippingBanner;