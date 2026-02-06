import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, MessageCircle, Check, Lightbulb, Flame, Dumbbell, Apple } from 'lucide-react';
import { getRecipeById, recipes } from '@/lib/recipes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WHATSAPP_NUMBER } from '@/lib/data';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = getRecipeById(Number(id));

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-muted-foreground mb-6">The recipe you're looking for doesn't exist.</p>
          <Link 
            to="/recipes" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recipes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I saw the ${recipe.name} recipe on your website and I'd like to order ${recipe.powder} to make it. Please share the details.`
  );

  // Get related recipes (same category, excluding current)
  const relatedRecipes = recipes
    .filter(r => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <section className="pt-20">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Back Button */}
          <Link 
            to="/recipes" 
            className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Recipes
          </Link>

          {/* Recipe Title */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary-foreground mb-3">
              {recipe.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
              {recipe.name}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                <span>{recipe.powder}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8">
              {recipe.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Ingredients */}
              <div className="md:col-span-1">
                <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-24">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Apple className="w-5 h-5 text-organic-green" />
                    Ingredients
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-organic-green flex-shrink-0 mt-0.5" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Order CTA */}
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      Need {recipe.powder}?
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#20BD5A] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Steps & Nutrition */}
              <div className="md:col-span-2 space-y-8">
                {/* Steps */}
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-secondary" />
                    Cooking Steps
                  </h2>
                  <ol className="space-y-4">
                    {recipe.steps.map((step, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <div className="flex-1 pt-1">
                          <p className="text-foreground">{step}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Nutrition Facts */}
                <div className="bg-muted/50 rounded-2xl p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-gold" />
                    Nutrition Facts
                  </h2>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-background rounded-xl">
                      <div className="text-lg font-bold text-primary">{recipe.nutrition.calories}</div>
                      <div className="text-xs text-muted-foreground">Calories</div>
                    </div>
                    <div className="text-center p-3 bg-background rounded-xl">
                      <div className="text-lg font-bold text-primary">{recipe.nutrition.protein}</div>
                      <div className="text-xs text-muted-foreground">Protein</div>
                    </div>
                    <div className="text-center p-3 bg-background rounded-xl">
                      <div className="text-lg font-bold text-primary">{recipe.nutrition.fiber}</div>
                      <div className="text-xs text-muted-foreground">Fiber</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recipe.nutrition.vitamins.map((vitamin, index) => (
                      <span key={index} className="px-3 py-1 bg-organic-green/10 text-organic-green text-xs font-medium rounded-full">
                        {vitamin}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-secondary/10 rounded-2xl p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-gold" />
                    Pro Tips
                  </h2>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-gold">💡</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Recipes */}
      {relatedRecipes.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              More {recipe.category} Recipes
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedRecipes.map((r) => (
                <Link
                  key={r.id}
                  to={`/recipes/${r.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm bg-black/50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      <span>{r.time}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{r.powder}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default RecipeDetails;
