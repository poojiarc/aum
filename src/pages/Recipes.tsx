import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat, ArrowLeft } from 'lucide-react';
import { recipes } from '@/lib/recipes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecipeCategoryFilter, { RECIPE_CATEGORIES } from '@/components/RecipeCategoryFilter';

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Calculate recipe counts per category
  const recipeCounts = useMemo(() => {
    const counts: Record<string, number> = { all: recipes.length };
    RECIPE_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = recipes.filter((r) => r.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filter recipes based on selected category
  const filteredRecipes = useMemo(() => {
    if (selectedCategory === 'all') return recipes;
    return recipes.filter((recipe) => recipe.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background pt-24">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-organic-green/10 to-background">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Healthy Recipes
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cook with Our <span className="text-gold">Organic Powders</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover delicious and nutritious recipes using AUM Organic Powders. 
              Easy to make, packed with health benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <RecipeCategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            recipeCounts={recipeCounts}
          />
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Results count */}
          <p className="text-muted-foreground mb-6">
            Showing <span className="font-semibold text-foreground">{filteredRecipes.length}</span> 
            {selectedCategory !== 'all' && (
              <> recipes in <span className="font-semibold text-primary">{selectedCategory}</span></>
            )}
            {selectedCategory === 'all' && ' recipes'}
          </p>

          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No recipes found in this category yet.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                View All Recipes
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipes/${recipe.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                      {recipe.category}
                    </span>
                    
                    {/* Time Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.time}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {recipe.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {recipe.description}
                    </p>
                    
                    {/* Powder Used */}
                    <div className="flex items-center gap-2 text-sm">
                      <ChefHat className="w-4 h-4 text-organic-green" />
                      <span className="text-muted-foreground">Uses: </span>
                      <span className="font-medium text-foreground">{recipe.powder}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Order our organic powders and transform your cooking with nutrition-packed ingredients.
          </p>
          <Link
            to="/#menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Shop Organic Powders
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipes;
