import {
  Home,
  FileText,
  Settings,
  Info,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from 'lucide-react';

import logo from '@/assets/logo.jpg';
import TrustBadges from './TrustBadges';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/#home', icon: Home },
    { label: 'Menu', href: '/#menu', icon: FileText },
    { label: 'Services', href: '/#services', icon: Settings },
    { label: 'About', href: '/#about', icon: Info },
    { label: 'Contact', href: '/#contact', icon: Phone },
  ];

  const categories = [
    { label: 'Vegetables', emoji: '🥕', href: '#menu' },
    { label: 'Leafy', emoji: '🌿', href: '#menu' },
    { label: 'Fruits', emoji: '🍎', href: '#menu' },
  ];

  // ✅ Real Social Links
  const socialLinks = [
    {
      label: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/share/1QWzv6aZrU/',
    },
    {
      label: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/aum__organics/',
    },
    {
      label: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@AUMOrganicPowders',
    },
  ];

  return (
    <footer className="bg-gradient-blue text-white">

      <div className="container mx-auto px-4 py-16">

        {/* Trust Badges */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <TrustBadges variant="footer" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="AUM Organic"
                className="h-14 rounded-lg"
              />

              <div>
                <h3 className="font-bold text-xl">
                  AUM <span className="text-gold">Organic</span>
                </h3>
                <p className="text-sm text-white/60">Powders</p>
              </div>
            </div>

            <p className="text-white/70 text-sm">
              100% Natural, Solar Dried Organic Powders.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-sm">

              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex gap-2 hover:text-gold"
                  >
                    <link.icon size={16} />
                    {link.label}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Categories */}
          <div>

            <h4 className="font-semibold mb-4">Categories</h4>

            <ul className="space-y-2 text-sm">

              {categories.map((cat) => (
                <li key={cat.label}>
                  <a href={cat.href} className="hover:text-gold">
                    {cat.emoji} {cat.label}
                  </a>
                </li>
              ))}

            </ul>

            <div className="mt-6 text-xs text-white/60">
              <p>Wed–Sun: 10AM–8PM</p>
              <p>Mon–Tue: Closed</p>
            </div>

          </div>

          {/* Contact + Social */}
          <div>

            <h4 className="font-semibold mb-4">Contact Us</h4>

            <div className="space-y-2 text-sm text-white/70">

              <p>📱 +91 8985350182</p>
              <p>📧 hariharatraders01@gmail.com</p>
              <p>📍 Guntur – 522001</p>

            </div>

            {/* Social Icons */}
            <div className="mt-5 flex gap-3">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition"
                >
                  <social.icon size={20} />
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/50 space-y-2">

  {/* Made by StaffArc */}
  <div className="flex justify-center items-center gap-1 text-sm">

    Made with
    <Heart className="inline h-4 w-4 text-red-500 mx-1" />

    by

    <a
      href="https://staffarc.in"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-orange-500 hover:underline ml-1"
    >
      <img
        src="https://www.staffarc.in/images/Staffarc-logo.png"
        alt="StaffArc logo"
        className="h-5 w-5 object-contain"
      />
      StaffArc
    </a>

  </div>

  {/* Copyright */}
  <div>
    © {currentYear} AUM Organic Powders. All Rights Reserved.
  </div>

</div>


      </div>
    </footer>
  );
};

export default Footer;
