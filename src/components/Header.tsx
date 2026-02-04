// import { useState, useEffect } from 'react';
// import { Menu, X, ShoppingCart, Home, FileText, Settings, Info, Phone } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import logo from '@/assets/logo.jpg';

// const navItems = [
//   { label: 'Home', href: '#home', icon: Home },
//   { label: 'Menu', href: '#menu', icon: FileText },
//   { label: 'Services', href: '#services', icon: Settings },
//   { label: 'About Us', href: '#about', icon: Info },
//   { label: 'Contact', href: '#contact', icon: Phone },
// ];

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { totalItems, setIsCartOpen } = useCart();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleWhatsAppClick = () => {
//     window.open('https://wa.me/918985350182?text=Hello%20AUM%20Organic%20Powders%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.', '_blank');
//   };

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-card/95 backdrop-blur-md shadow-card' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <a href="#home" className="flex items-center gap-3 group">
//             <img 
//               src={logo} 
//               alt="AUM Organic Powders" 
//               className="h-12 md:h-14 w-auto object-contain"
//             />
//             <div className="hidden sm:block">
//               <h1 className="font-display text-lg md:text-xl font-bold text-primary leading-tight">
//                 AUM <span className="text-gold-glow">Organic</span>
//               </h1>
//               <p className="text-xs text-muted-foreground">Powders</p>
//             </div>
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="nav-link flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full hover:bg-muted transition-colors"
//               >
//                 <item.icon className="w-4 h-4" />
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           {/* Right Side Actions */}
//           <div className="flex items-center gap-2 md:gap-3">
//             {/* Cart Button */}
//             <button 
//               onClick={() => setIsCartOpen(true)}
//               className="relative p-2.5 rounded-full bg-muted hover:bg-secondary transition-colors"
//               aria-label="Open cart"
//             >
//               <ShoppingCart className="w-5 h-5 text-primary" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-bounce-gentle">
//                   {totalItems}
//                 </span>
//               )}
//             </button>

//             {/* WhatsApp Button - Desktop */}
//             <button 
//               onClick={handleWhatsAppClick}
//               className="hidden md:flex btn-whatsapp text-sm"
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//               </svg>
//               <span>Order Now</span>
//             </button>

//             {/* Mobile Menu Button */}
//             <button 
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2.5 rounded-full bg-muted hover:bg-secondary transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div 
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${
//             isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
//           }`}
//         >
//           <nav className="flex flex-col gap-1 pt-2">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-xl transition-colors"
//               >
//                 <item.icon className="w-5 h-5 text-secondary" />
//                 {item.label}
//               </a>
//             ))}
//             <button 
//               onClick={handleWhatsAppClick}
//               className="btn-whatsapp mt-2 justify-center"
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//               </svg>
//               <span>Order on WhatsApp</span>
//             </button>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ShoppingCart,
  Home,
  FileText,
  Settings,
  Info,
  Phone,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import logo from '@/assets/logo.jpg';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Menu', href: '#menu', icon: FileText },
  { label: 'Services', href: '#services', icon: Settings },
  { label: 'About Us', href: '#about', icon: Info },
  { label: 'Contact', href: '#contact', icon: Phone },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/918985350182?text=Hello%20AUM%20Organic%20Powders%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.',
      '_blank'
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-card'
          : 'bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo */}
<a href="#home" className="flex items-center gap-3 group">
  <img
    src={logo}
    alt="AUM Organic Powders"
    className="h-12 md:h-14 w-auto object-contain"
  />

  {/* ✅ SHOW ON MOBILE TOO */}
  <div className="block">
    <h1 className="font-display text-base sm:text-lg md:text-xl font-bold text-primary drop-shadow-sm leading-tight">
      AUM <span className="text-gold-glow">Organic</span>
    </h1>
    <p className="text-[11px] sm:text-xs text-muted-foreground">
      Powders
    </p>
  </div>
</a>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full hover:bg-muted transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-muted hover:bg-secondary transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5 text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-bounce-gentle">
                  {totalItems}
                </span>
              )}
            </button>

            {/* WhatsApp Button - Desktop */}
            <button
              onClick={handleWhatsAppClick}
              className="hidden md:flex btn-whatsapp text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              <span>Order Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-muted hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-xl transition-colors"
              >
                <item.icon className="w-5 h-5 text-secondary" />
                {item.label}
              </a>
            ))}

            <button
              onClick={handleWhatsAppClick}
              className="btn-whatsapp mt-2 justify-center"
            >
              <span>Order on WhatsApp</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
