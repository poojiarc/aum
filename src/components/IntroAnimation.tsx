 import { useState, useEffect } from 'react';
 import { X } from 'lucide-react';
 
 // Import falling item images
 import carrotImg from '@/assets/products/carrot-powder.jpg';
 import spinachImg from '@/assets/products/spinach-powder.jpg';
 import mangoImg from '@/assets/products/mango-powder.jpg';
 import beetrootImg from '@/assets/products/beetroot-powder.jpg';
 import orangeImg from '@/assets/products/orange-powder.jpg';
 import moringaImg from '@/assets/products/moringa-powder.jpg';
 
 const fallingItems = [
   { id: 1, emoji: '🥕', img: carrotImg, delay: 0, x: 15 },
   { id: 2, emoji: '🥬', img: spinachImg, delay: 0.3, x: 35 },
   { id: 3, emoji: '🥭', img: mangoImg, delay: 0.6, x: 55 },
   { id: 4, emoji: '🍎', img: null, delay: 0.2, x: 75 },
   { id: 5, emoji: '🍌', img: null, delay: 0.5, x: 25 },
   { id: 6, emoji: '🥦', img: null, delay: 0.8, x: 85 },
   { id: 7, emoji: '🍊', img: orangeImg, delay: 0.4, x: 45 },
   { id: 8, emoji: '🌿', img: moringaImg, delay: 0.7, x: 65 },
   { id: 9, emoji: '🍇', img: beetrootImg, delay: 0.1, x: 10 },
   { id: 10, emoji: '🥒', img: null, delay: 0.9, x: 90 },
   { id: 11, emoji: '🍓', img: null, delay: 0.35, x: 20 },
   { id: 12, emoji: '🥝', img: null, delay: 0.55, x: 70 },
 ];
 
 const IntroAnimation = () => {
   const [isVisible, setIsVisible] = useState(true);
   const [isAnimating, setIsAnimating] = useState(true);
   
   useEffect(() => {
     // Check if user has seen the intro
     const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
     if (hasSeenIntro) {
       setIsVisible(false);
       return;
     }
     
     // Auto-hide after 4 seconds
     const timer = setTimeout(() => {
       setIsAnimating(false);
       setTimeout(() => {
         setIsVisible(false);
         sessionStorage.setItem('hasSeenIntro', 'true');
       }, 500);
     }, 4000);
     
     return () => clearTimeout(timer);
   }, []);
   
   const handleSkip = () => {
     setIsAnimating(false);
     setTimeout(() => {
       setIsVisible(false);
       sessionStorage.setItem('hasSeenIntro', 'true');
     }, 300);
   };
   
   if (!isVisible) return null;
   
   return (
     <div 
       className={`fixed inset-0 z-[100] bg-gradient-to-b from-primary via-deep-blue to-primary transition-opacity duration-500 ${
         isAnimating ? 'opacity-100' : 'opacity-0'
       }`}
     >
       {/* Sunlight overlay */}
       <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-transparent to-transparent opacity-60" />
       
       {/* Floating leaves background */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(8)].map((_, i) => (
           <div
             key={`leaf-${i}`}
             className="absolute text-4xl opacity-30 animate-leaf-float"
             style={{
               left: `${10 + i * 12}%`,
               top: `${30 + (i % 3) * 20}%`,
               animationDelay: `${i * 0.4}s`,
               animationDuration: '4s',
             }}
           >
             🍃
           </div>
         ))}
       </div>
       
       {/* Falling items */}
       <div className="absolute inset-0 overflow-hidden">
         {fallingItems.map((item) => (
           <div
             key={item.id}
             className="absolute w-16 h-16 md:w-24 md:h-24 animate-fall-slow"
             style={{
               left: `${item.x}%`,
               top: '-100px',
               animationDelay: `${item.delay}s`,
               transform: 'translateX(-50%)',
             }}
           >
             {item.img ? (
               <img 
                 src={item.img} 
                 alt="" 
                 className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white/30"
               />
             ) : (
               <span className="text-5xl md:text-7xl drop-shadow-lg">{item.emoji}</span>
             )}
           </div>
         ))}
       </div>
       
       {/* Center content */}
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="text-center animate-scale-in px-4">
           <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-xl">
             AUM <span className="text-gold-glow">Organic</span>
           </h1>
           <p className="text-xl md:text-2xl text-white/80 font-medium">
             Powders
           </p>
           <div className="mt-6 flex items-center justify-center gap-2 text-white/60 text-sm">
             <span className="w-2 h-2 bg-organic-green rounded-full animate-pulse" />
             <span>100% Natural • Solar Dried • Farm Fresh</span>
           </div>
         </div>
       </div>
       
       {/* Skip button */}
       <button
         onClick={handleSkip}
         className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors"
       >
         Skip
         <X className="w-4 h-4" />
       </button>
       
       {/* Loading indicator */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
         <div className="flex items-center gap-2 text-white/60 text-sm">
           <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
             <div className="h-full bg-gold animate-loading-bar" />
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default IntroAnimation;