import { ShoppingCart, MessageCircle, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918985350182?text=Hello%20AUM%20Organic%20Powders%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      
      {/* Animated Leaf Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 leaf-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            🍃
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in-up">
            <span className="w-2 h-2 bg-organic-green rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">100% Natural & Organic</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Pure Organic Powders
            <span className="block mt-2 text-gold-glow">
              Straight From Farm to You
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Experience the authentic taste of nature with our solar-dried vegetable, 
            leafy, and fruit powders – preserving nutrition the traditional way.
          </p>

          {/* Feature Tags */}
          <div 
            className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {['Healthy', 'Natural', 'Nutritious', 'Sustainable'].map((tag, i) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/10"
              >
                ✓ {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <button 
              onClick={scrollToMenu}
              className="group flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-elevated"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>View Menu</span>
            </button>
            
            <button 
              onClick={handleWhatsAppClick}
              className="btn-whatsapp px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div 
            className="flex flex-wrap justify-center items-center gap-6 pt-8 text-white/70 text-sm animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span>Solar Dried</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧪</span>
              <span>Lab Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span>Pan India Delivery</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToMenu}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
