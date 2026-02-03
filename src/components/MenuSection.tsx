import { useState } from 'react';
import { products, getCategoryEmoji } from '@/lib/data';
import ProductCard from './ProductCard';

type Category = 'all' | 'vegetable' | 'leafy' | 'fruit';

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: 'all', label: 'All Products', emoji: '🌱' },
  { key: 'vegetable', label: 'Vegetables', emoji: '🥕' },
  { key: 'leafy', label: 'Leafy Greens', emoji: '🌿' },
  { key: 'fruit', label: 'Fruits', emoji: '🍎' },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Organic <span className="text-gold">Powder</span> Menu
          </h2>
          <p className="text-muted-foreground">
            Choose from our wide range of solar-dried organic powders. 
            100% natural, no preservatives, straight from farm.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              <span>{cat.emoji}</span>
              <span className="hidden sm:inline">{cat.label}</span>
              <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Products Count */}
        <p className="text-center text-muted-foreground mb-8">
          Showing {filteredProducts.length} products
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-muted rounded-2xl p-6 max-w-2xl">
            <h4 className="font-display text-lg font-semibold mb-2">💰 Transparent Pricing</h4>
            <p className="text-muted-foreground text-sm">
              All products: <strong>₹2/gram</strong> • ABC Premium Powder: <strong>₹4/gram</strong>
              <br />
              Available in 100g, 200g, 500g, and 1kg packs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
