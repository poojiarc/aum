//  import { useRef, useEffect, useState } from 'react';
//  import { ChevronLeft, ChevronRight, Clock, ChefHat, ExternalLink } from 'lucide-react';
 
//  // Import recipe images
//  import recipe1 from '@/assets/recipes/recipe1.jpg';
//  import recipe2 from '@/assets/recipes/recipe2.jpg';
//  import recipe3 from '@/assets/recipes/recipe3.jpg';
//  import recipe4 from '@/assets/recipes/recipe4.jpg';
//  import recipe5 from '@/assets/recipes/recipe5.jpg';
//  import recipe6 from '@/assets/recipes/recipe6.jpg';
 
//  const recipes = [
//    {
//      id: 1,
//      name: 'Moringa Power Bowl',
//      category: 'Breakfast',
//      time: '10 min',
//      image: recipe1,
//      powder: 'Moringa Powder',
//      description: 'Nutrient-packed smoothie bowl with moringa, topped with fresh fruits and nuts.',
//    },
//    {
//      id: 2,
//      name: 'Beetroot Bliss Smoothie',
//      category: 'Beverages',
//      time: '5 min',
//      image: recipe2,
//      powder: 'Beetroot Powder',
//      description: 'Vibrant pink smoothie loaded with antioxidants and natural sweetness.',
//    },
//    {
//      id: 3,
//      name: 'Spinach Paratha',
//      category: 'Main Course',
//      time: '25 min',
//      image: recipe3,
//      powder: 'Spinach Powder',
//      description: 'Healthy green flatbread packed with iron and vitamins.',
//    },
//    {
//      id: 4,
//      name: 'Mango Lassi',
//      category: 'Beverages',
//      time: '5 min',
//      image: recipe4,
//      powder: 'Mango Powder',
//      description: 'Classic Indian yogurt drink with tropical mango flavor.',
//    },
//    {
//      id: 5,
//      name: 'Carrot Halwa',
//      category: 'Desserts',
//      time: '30 min',
//      image: recipe5,
//      powder: 'Carrot Powder',
//      description: 'Traditional Indian sweet made easy with carrot powder.',
//    },
//    {
//      id: 6,
//      name: 'Amla Immunity Shot',
//      category: 'Health Drinks',
//      time: '3 min',
//      image: recipe6,
//      powder: 'Amla Powder',
//      description: 'Powerful immunity booster with highest Vitamin C content.',
//    },
//  ];
 
//  const RecipesSection = () => {
//    const scrollRef = useRef<HTMLDivElement>(null);
//    const [isPaused, setIsPaused] = useState(false);
//    const [canScrollLeft, setCanScrollLeft] = useState(false);
//    const [canScrollRight, setCanScrollRight] = useState(true);
   
//    // Auto-scroll effect
//    useEffect(() => {
//      if (isPaused) return;
     
//      const interval = setInterval(() => {
//        if (scrollRef.current) {
//          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//          if (scrollLeft + clientWidth >= scrollWidth - 10) {
//            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
//          } else {
//            scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
//          }
//        }
//      }, 3000);
     
//      return () => clearInterval(interval);
//    }, [isPaused]);
   
//    const updateScrollButtons = () => {
//      if (scrollRef.current) {
//        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//        setCanScrollLeft(scrollLeft > 0);
//        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
//      }
//    };
   
//    useEffect(() => {
//      const scrollContainer = scrollRef.current;
//      if (scrollContainer) {
//        scrollContainer.addEventListener('scroll', updateScrollButtons);
//        return () => scrollContainer.removeEventListener('scroll', updateScrollButtons);
//      }
//    }, []);
   
//    const scroll = (direction: 'left' | 'right') => {
//      if (scrollRef.current) {
//        const scrollAmount = direction === 'left' ? -320 : 320;
//        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//      }
//    };
   
//    return (
//      <section id="recipes" className="py-20 bg-muted/50 overflow-hidden">
//        <div className="container mx-auto px-4">
//          {/* Header */}
//          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
//            <div>
//              <span className="inline-block px-4 py-1.5 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium mb-4">
//                Healthy Recipes
//              </span>
//              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
//                Cook with Our <span className="text-gold">Powders</span>
//              </h2>
//              <p className="text-muted-foreground mt-2 max-w-xl">
//                Discover delicious and nutritious recipes using our organic powders
//              </p>
//            </div>
           
//            {/* Navigation Arrows */}
//            <div className="flex gap-2">
//              <button
//                onClick={() => scroll('left')}
//                disabled={!canScrollLeft}
//                className="w-12 h-12 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//              >
//                <ChevronLeft className="w-5 h-5" />
//              </button>
//              <button
//                onClick={() => scroll('right')}
//                disabled={!canScrollRight}
//                className="w-12 h-12 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//              >
//                <ChevronRight className="w-5 h-5" />
//              </button>
//            </div>
//          </div>
//        </div>
       
//        {/* Recipes Slider */}
//        <div
//          ref={scrollRef}
//          onMouseEnter={() => setIsPaused(true)}
//          onMouseLeave={() => setIsPaused(false)}
//          onTouchStart={() => setIsPaused(true)}
//          onTouchEnd={() => setIsPaused(false)}
//          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 snap-x snap-mandatory"
//          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//        >
//          {/* Add padding for centering first card */}
//          <div className="flex-shrink-0 w-[calc((100vw-1280px)/2)]" />
         
//          {recipes.map((recipe) => (
//            <div
//              key={recipe.id}
//              className="flex-shrink-0 w-80 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer snap-start group"
//            >
//              {/* Image */}
//              <div className="relative h-48 overflow-hidden">
//                <img
//                  src={recipe.image}
//                  alt={recipe.name}
//                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                />
//                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
               
//                {/* Category Badge */}
//                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
//                  {recipe.category}
//                </span>
               
//                {/* Time Badge */}
//                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm">
//                  <Clock className="w-4 h-4" />
//                  <span>{recipe.time}</span>
//                </div>
//              </div>
             
//              {/* Content */}
//              <div className="p-5">
//                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
//                  {recipe.name}
//                </h3>
//                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//                  {recipe.description}
//                </p>
               
//                {/* Powder Used */}
//                <div className="flex items-center justify-between">
//                  <div className="flex items-center gap-2 text-sm">
//                    <ChefHat className="w-4 h-4 text-organic-green" />
//                    <span className="text-muted-foreground">Uses: </span>
//                    <span className="font-medium text-foreground">{recipe.powder}</span>
//                  </div>
//                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
//                </div>
//              </div>
//            </div>
//          ))}
         
//          {/* Add padding for centering last card */}
//          <div className="flex-shrink-0 w-[calc((100vw-1280px)/2)]" />
//        </div>
       
//        {/* View All Button */}
//        <div className="container mx-auto px-4 mt-10 text-center">
//          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-deep-blue-light transition-colors">
//            View All Recipes
//            <ChevronRight className="w-4 h-4" />
//          </button>
//        </div>
//      </section>
//    );
//  };
 
//  export default RecipesSection;



import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import recipe images
import recipe1 from '@/assets/recipes/recipe1.jpg';
import recipe2 from '@/assets/recipes/recipe2.jpg';
import recipe3 from '@/assets/recipes/recipe3.jpg';
import recipe4 from '@/assets/recipes/recipe4.jpg';
import recipe5 from '@/assets/recipes/recipe5.jpg';
import recipe6 from '@/assets/recipes/recipe6.jpg';

const recipes = [
  {
    id: 1,
    name: 'Moringa Power Bowl',
    category: 'Breakfast',
    time: '10 min',
    image: recipe1,
    powder: 'Moringa Powder',
    description: 'Nutrient-packed smoothie bowl with moringa.',
  },
  {
    id: 2,
    name: 'Beetroot Bliss Smoothie',
    category: 'Beverages',
    time: '5 min',
    image: recipe2,
    powder: 'Beetroot Powder',
    description: 'Vibrant pink smoothie loaded with antioxidants.',
  },
  {
    id: 3,
    name: 'Spinach Paratha',
    category: 'Main Course',
    time: '25 min',
    image: recipe3,
    powder: 'Spinach Powder',
    description: 'Healthy green flatbread packed with iron.',
  },
  {
    id: 4,
    name: 'Mango Lassi',
    category: 'Beverages',
    time: '5 min',
    image: recipe4,
    powder: 'Mango Powder',
    description: 'Classic Indian yogurt drink.',
  },
  {
    id: 5,
    name: 'Carrot Halwa',
    category: 'Desserts',
    time: '30 min',
    image: recipe5,
    powder: 'Carrot Powder',
    description: 'Traditional Indian sweet.',
  },
  {
    id: 6,
    name: 'Amla Immunity Shot',
    category: 'Health Drinks',
    time: '3 min',
    image: recipe6,
    powder: 'Amla Powder',
    description: 'Powerful immunity booster.',
  },
];

const RecipesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  return (
    <section id="recipes" className="py-20 bg-muted/50">

      <div className="container mx-auto px-4 mb-10">

        {/* Header */}
        <div className="flex justify-between items-end gap-4">

          <div>
            <span className="inline-block px-4 py-1 bg-secondary/30 rounded-full text-sm mb-4">
              Healthy Recipes
            </span>

            <h2 className="text-4xl font-bold">
              Cook with Our <span className="text-gold">Powders</span>
            </h2>

            <p className="text-muted-foreground mt-2">
              Discover delicious recipes
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="btn-circle">
              <ChevronLeft />
            </button>

            <button onClick={() => scroll('right')} className="btn-circle">
              <ChevronRight />
            </button>
          </div>

        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto px-6 pb-6 scrollbar-hide"
      >

        {recipes.map((recipe) => (

          // ✅ CLICKABLE CARD
          <Link
            to={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="w-80 flex-shrink-0 bg-card rounded-2xl shadow-card hover:shadow-elevated transition group"
          >

            {/* Image */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />

              <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs">
                {recipe.category}
              </span>

              <div className="absolute bottom-3 left-3 text-white flex gap-1">
                <Clock className="w-4 h-4" />
                {recipe.time}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="font-semibold text-lg group-hover:text-primary">
                {recipe.name}
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                {recipe.description}
              </p>

              <div className="flex items-center gap-2 text-sm mt-4">
                <ChefHat className="w-4 h-4 text-green-600" />
                {recipe.powder}
              </div>

            </div>

          </Link>
        ))}

      </div>

      {/* View All */}
      <div className="text-center mt-10">

        <Link
          to="/recipes"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full"
        >
          View All Recipes
          <ChevronRight size={18} />
        </Link>

      </div>

    </section>
  );
};

export default RecipesSection;
