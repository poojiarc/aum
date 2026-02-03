import { Home, FileText, Settings, Info, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Menu', href: '#menu', icon: FileText },
    { label: 'Services', href: '#services', icon: Settings },
    { label: 'About', href: '#about', icon: Info },
    { label: 'Contact', href: '#contact', icon: Phone },
  ];

  const categories = [
    { label: 'Vegetables', emoji: '🥕', href: '#menu' },
    { label: 'Leafy', emoji: '🌿', href: '#menu' },
    { label: 'Fruits', emoji: '🍎', href: '#menu' },
  ];

  const socialLinks = [
    { label: 'Facebook', icon: Facebook, href: '#' },
    { label: 'Instagram', icon: Instagram, href: '#' },
    { label: 'LinkedIn', icon: Linkedin, href: '#' },
    { label: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-blue text-white overflow-hidden">
      {/* Leaf Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q45 20 30 35 Q15 20 30 5' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AUM Organic Powders" className="h-14 w-auto rounded-lg" />
              <div>
                <h3 className="font-display text-xl font-bold">
                  AUM <span className="text-gold-light">Organic</span>
                </h3>
                <p className="text-sm text-white/60">Powders</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Straight from farm, preserved for the world. We deliver 100% natural, 
              solar-dried organic powders rich in nutrition.
            </p>
            <div className="pt-2">
              <p className="text-sm text-white/60">
                1kg raw produce = 100g powder = Same Nutrition
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-white/70 hover:text-gold-light transition-colors text-sm group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded" />
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <a 
                    href={cat.href}
                    className="flex items-center gap-2 text-white/70 hover:text-gold-light transition-colors text-sm"
                  >
                    <span>{cat.emoji}</span>
                    {cat.label} Powders
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-2">Business Hours</h5>
              <p className="text-white/60 text-xs">Wed–Sun: 10AM–8PM</p>
              <p className="text-white/60 text-xs">Mon–Tue: Closed</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded" />
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <span>📱</span>
                <a href="tel:+918985350182" className="hover:text-gold-light transition-colors">
                  +91 8985350182
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:hariharatraders01@gmail.com" className="hover:text-gold-light transition-colors break-all">
                  hariharatraders01@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>Sambasiva Pet, Guntur – 522001</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {currentYear} AUM Organic Powders. All rights reserved.</p>
          <p>Straight from Farm, Preserved for World.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
