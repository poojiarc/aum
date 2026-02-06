import { AlertTriangle, Sun, Shield, Heart, Globe } from 'lucide-react';
import TrustBadges from './TrustBadges';

const storySteps = [
  {
    id: 1,
    icon: AlertTriangle,
    emoji: '💔',
    title: 'The Silent Tragedy',
    content: 'Every year, tons of fresh produce in Guntur goes to waste. Farmers work tirelessly, but market fluctuations and lack of storage lead to heartbreaking losses. Perfectly good vegetables and fruits rot before reaching consumers.',
    color: 'from-destructive/20 to-destructive/5',
    iconColor: 'text-destructive',
  },
  {
    id: 2,
    icon: Sun,
    emoji: '☀️',
    title: 'The Solar Revolution',
    content: 'We discovered the power of traditional solar drying. By dehydrating produce at temperatures below 60°C, we preserve every nutrient while extending shelf life from days to years. No chemicals. No refrigeration. Just pure sunshine.',
    color: 'from-gold/20 to-secondary/10',
    iconColor: 'text-gold',
  },
  {
    id: 3,
    icon: Shield,
    emoji: '🛡️',
    title: 'The Result',
    content: '100% nutrition preserved. Zero waste. 10x longer shelf life. Our powders concentrate the goodness of 1kg produce into just 100g of powder – making nutrition accessible, affordable, and convenient.',
    color: 'from-organic-green/20 to-leaf-green/10',
    iconColor: 'text-organic-green',
  },
  {
    id: 4,
    icon: Heart,
    emoji: '🌍',
    title: 'Our Promise',
    content: 'Every purchase supports local farmers. Every powder reduces food waste. Every meal becomes more nutritious. We\'re not just selling powders – we\'re building a sustainable food future for Guntur and beyond.',
    color: 'from-primary/20 to-deep-blue/10',
    iconColor: 'text-primary',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q45 20 30 35 Q15 20 30 5' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Bottling the Sun, <span className="text-gold">Preserving the Soul</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            of Guntur
          </p>
        </div>
        
        {/* Story Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-destructive via-gold to-organic-green -translate-x-1/2 hidden md:block" />
          
          {storySteps.map((step, index) => (
            <div 
              key={step.id}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-background border-4 border-muted items-center justify-center text-3xl shadow-lg z-10">
                {step.emoji}
              </div>
              
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-6 md:p-8 border shadow-soft`}>
                  {/* Mobile Icon */}
                  <div className="flex md:hidden items-center gap-3 mb-4">
                    <span className="text-3xl">{step.emoji}</span>
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                  
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 flex items-center gap-3 md:justify-end">
                    {index % 2 !== 0 && <step.icon className={`w-6 h-6 ${step.iconColor} hidden md:block`} />}
                    {step.title}
                    {index % 2 === 0 && <step.icon className={`w-6 h-6 ${step.iconColor} hidden md:block`} />}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
        
        {/* Nutrition Highlight */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-gradient-blue text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-4xl opacity-20">🥕</div>
            <div className="absolute top-4 right-4 text-4xl opacity-20">🌿</div>
            <div className="absolute bottom-4 left-8 text-4xl opacity-20">🍎</div>
            <div className="absolute bottom-4 right-8 text-4xl opacity-20">☀️</div>
            
            <div className="relative">
              <div className="flex items-center justify-center gap-4 text-4xl md:text-5xl font-bold mb-4">
                <span>1kg</span>
                <span className="text-gold-glow animate-pulse">→</span>
                <span>100g</span>
              </div>
              <p className="text-xl text-white/90 font-medium mb-2">
                Same Nutrition. Zero Waste. Infinite Possibilities.
              </p>
              <p className="text-white/70 text-sm max-w-lg mx-auto">
                1 kilogram of fresh produce, sun-dried and concentrated into 100 grams of pure organic powder – all the vitamins, minerals, and goodness preserved naturally.
              </p>
            </div>
          </div>
        </div>
        
        {/* Quality & Compliance Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-organic-green/10 text-organic-green rounded-full text-sm font-medium mb-4">
              Quality & Compliance
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Certified for <span className="text-organic-green">Your Safety</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every batch of AUM Organic Powder is tested and certified to ensure the highest quality and safety standards.
            </p>
          </div>
          <TrustBadges variant="default" />
        </div>

        {/* Slogan */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-muted rounded-full">
            <Globe className="w-5 h-5 text-organic-green" />
            <p className="text-sm md:text-base font-medium text-foreground">
              <span className="text-primary">Authentic Guntur Produce</span>
              <span className="mx-2 text-muted-foreground">|</span>
              <span className="text-gold">Sustainably Solar-Dried</span>
              <span className="mx-2 text-muted-foreground">|</span>
              <span className="text-organic-green">From Farm to Powder</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
