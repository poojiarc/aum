import { Leaf, Sun, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Sun, title: 'Solar Dried', desc: 'Natural dehydration preserving nutrients' },
    { icon: Leaf, title: 'Farm Fresh', desc: 'Sourced directly from organic farms' },
    { icon: Heart, title: 'No Additives', desc: '100% pure, no preservatives' },
    { icon: Award, title: 'Lab Tested', desc: 'Quality assured and certified' },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium">
              Our Story
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About <span className="text-gold">AUM Organic</span> Powders
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              At AUM Organic Powders, we believe in preserving nature's goodness the traditional way. 
              We source fresh produce directly from local farmers, carefully solar-dry them to retain 
              maximum nutrition, and convert them into fine organic powders.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to reduce food waste while delivering concentrated nutrition to your kitchen. 
              Every powder we create carries the essence of sustainable farming and traditional preservation methods.
            </p>

            {/* Nutrition Highlight */}
            <div className="bg-gradient-blue text-white rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-4xl">🥕</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-2xl font-bold">
                    <span>1kg</span>
                    <span className="text-gold-light">→</span>
                    <span>100g</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    1kg raw produce = 100g powder = Same Nutrition
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-organic-green/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-organic-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Process Timeline */}
          <div className="relative">
            <div className="bg-muted rounded-3xl p-8 space-y-6">
              <h3 className="font-display text-xl font-semibold text-center mb-8">
                Our Process
              </h3>
              
              {[
                { step: 1, icon: '🌾', title: 'Farm Sourcing', desc: 'Direct from organic farmers in Andhra Pradesh' },
                { step: 2, icon: '🧹', title: 'Cleaning & Sorting', desc: 'Thorough cleaning and quality selection' },
                { step: 3, icon: '☀️', title: 'Solar Drying', desc: 'Natural dehydration using solar energy' },
                { step: 4, icon: '⚙️', title: 'Fine Grinding', desc: 'Converted into smooth, fine powder' },
                { step: 5, icon: '📦', title: 'Packaging', desc: 'Sealed in airtight packaging for freshness' },
              ].map((item, index) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-soft">
                      {item.icon}
                    </div>
                    {index < 4 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-border -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
