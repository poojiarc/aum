import { services } from '@/lib/data';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 Q55 30 40 50 Q25 30 40 10' fill='none' stroke='%23166534' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-organic-green/10 text-organic-green rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="text-muted-foreground">
            From solar drying to global exports, we offer comprehensive organic powder solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group card-organic p-6 text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/20 group-hover:bg-white/20 flex items-center justify-center text-3xl transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bulk Order Highlight */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-gold rounded-2xl p-6 md:p-8 text-center text-primary shadow-gold">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
              🌍 Bulk & Export Orders
            </h3>
            <p className="text-primary/80 mb-4">
              Looking for large quantity orders? We offer custom pricing for bulk and export orders.
            </p>
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-deep-blue-light transition-colors"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
