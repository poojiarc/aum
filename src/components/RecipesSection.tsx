// import { useRef, useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight, Clock, ChefHat } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { recipes } from '@/lib/recipes';

// const RecipesSection = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   // Auto-scroll effect - every 3 seconds
//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         // If at end, scroll back to start
//         if (scrollLeft + clientWidth >= scrollWidth - 10) {
//           scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
//         } else {
//           scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
//         }
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // Update scroll button states
//   const updateScrollButtons = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
//     }
//   };

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', updateScrollButtons);
//       updateScrollButtons();
//       return () => scrollContainer.removeEventListener('scroll', updateScrollButtons);
//     }
//   }, []);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === 'left' ? -320 : 320;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   // Get first 8 recipes for the slider
//   const displayRecipes = recipes.slice(0, 8);

//   return (
//     <section id="recipes" className="py-20 bg-muted/50 overflow-hidden scroll-mt-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
//           <div>
//             <span className="inline-block px-4 py-1.5 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium mb-4">
//               Healthy Recipes
//             </span>
//             <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
//               Cook with Our <span className="text-gold">Powders</span>
//             </h2>
//             <p className="text-muted-foreground mt-2 max-w-xl">
//               Discover delicious and nutritious recipes using our organic powders
//             </p>
//           </div>

//           {/* Navigation Arrows */}
//           <div className="flex gap-2">
//             <button
//               onClick={() => scroll('left')}
//               disabled={!canScrollLeft}
//               className="w-12 h-12 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               aria-label="Scroll left"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scroll('right')}
//               disabled={!canScrollRight}
//               className="w-12 h-12 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               aria-label="Scroll right"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Recipes Slider */}
//       <div
//         ref={scrollRef}
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={() => setIsPaused(true)}
//         onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
//         className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 snap-x snap-mandatory"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         {/* Padding for centering first card on large screens */}
//         <div className="hidden lg:block flex-shrink-0 w-[calc((100vw-1280px)/2)]" />

//         {displayRecipes.map((recipe) => (
//           <Link
//             to={`/recipes/${recipe.id}`}
//             key={recipe.id}
//             className="flex-shrink-0 w-72 md:w-80 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer snap-start group"
//           >
//             {/* Image */}
//             <div className="relative h-44 md:h-48 overflow-hidden">
//               <img
//                 src={recipe.image}
//                 alt={recipe.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

//               {/* Category Badge */}
//               <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
//                 {recipe.category}
//               </span>

//               {/* Time Badge */}
//               <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm">
//                 <Clock className="w-4 h-4" />
//                 <span>{recipe.time}</span>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
//                 {recipe.name}
//               </h3>
//               <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//                 {recipe.description}
//               </p>

//               {/* Powder Used */}
//               <div className="flex items-center gap-2 text-sm">
//                 <ChefHat className="w-4 h-4 text-organic-green" />
//                 <span className="text-muted-foreground">Uses: </span>
//                 <span className="font-medium text-foreground">{recipe.powder}</span>
//               </div>
//             </div>
//           </Link>
//         ))}

//         {/* Padding for centering last card */}
//         <div className="hidden lg:block flex-shrink-0 w-[calc((100vw-1280px)/2)]" />
//       </div>

//       {/* View All Button */}
//       <div className="container mx-auto px-4 mt-10 text-center">
//         <Link
//           to="/recipes"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
//         >
//           View All Recipes
//           <ChevronRight className="w-4 h-4" />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default RecipesSection;



import { ChevronRight, Clock, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { recipes } from "@/lib/recipes";

const RecipesSection = () => {
  // First 8 recipes
  const displayRecipes = recipes.slice(0, 8);

  // Duplicate for infinite loop
  const sliderRecipes = [...displayRecipes, ...displayRecipes];

  return (
    <section
      id="recipes"
      className="py-20 bg-muted/50 overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">

          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/30
                            text-secondary-foreground rounded-full
                            text-sm font-medium mb-4">
              Healthy Recipes
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl
                           font-bold text-foreground">
              Cook with Our <span className="text-gold">Powders</span>
            </h2>

            <p className="text-muted-foreground mt-2 max-w-xl">
              Discover delicious and nutritious recipes using our organic powders
            </p>
          </div>

        </div>
      </div>

      {/* ================= AUTO SCROLL SLIDER ================= */}
      <div className="relative overflow-hidden w-full">

        <div className="flex items-center w-max animate-recipe-scroll">

          {sliderRecipes.map((recipe, index) => (
            <Link
              key={index}
              to={`/recipes/${recipe.id}`}
              className="flex-shrink-0 w-72 md:w-80
                         bg-card rounded-2xl overflow-hidden
                         shadow-card hover:shadow-elevated
                         transition-all duration-300
                         hover:-translate-y-2
                         cursor-pointer group mx-3"
            >
              {/* Image */}
              <div className="relative h-44 md:h-48 overflow-hidden">

                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover
                             group-hover:scale-110
                             transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0
                                bg-gradient-to-t
                                from-black/50 to-transparent" />

                {/* Category */}
                <span
                  className="absolute top-3 left-3
                             px-3 py-1 bg-white/90
                             backdrop-blur-sm
                             rounded-full text-xs
                             font-medium text-primary"
                >
                  {recipe.category}
                </span>

                {/* Time */}
                <div
                  className="absolute bottom-3 left-3
                             flex items-center gap-1
                             text-white text-sm"
                >
                  <Clock className="w-4 h-4" />
                  <span>{recipe.time}</span>
                </div>

              </div>

              {/* Content */}
              <div className="p-5">

                <h3
                  className="font-display text-lg font-semibold
                             text-foreground mb-2
                             group-hover:text-primary
                             transition-colors line-clamp-1"
                >
                  {recipe.name}
                </h3>

                <p
                  className="text-sm text-muted-foreground
                             mb-4 line-clamp-2"
                >
                  {recipe.description}
                </p>

                {/* Powder */}
                <div className="flex items-center gap-2 text-sm">

                  <ChefHat className="w-4 h-4 text-organic-green" />

                  <span className="text-muted-foreground">
                    Uses:
                  </span>

                  <span className="font-medium text-foreground">
                    {recipe.powder}
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
      {/* ================= END SLIDER ================= */}


      {/* View All Button */}
      <div className="container mx-auto px-4 mt-12 text-center">

        <Link
          to="/recipes"
          className="inline-flex items-center gap-2
                     px-6 py-3 bg-primary
                     text-primary-foreground
                     rounded-full font-medium
                     hover:bg-primary/90
                     transition-colors"
        >
          View All Recipes
          <ChevronRight className="w-4 h-4" />
        </Link>

      </div>

    </section>
  );
};

export default RecipesSection;
