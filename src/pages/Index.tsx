import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DehydrationProcess from '@/components/DehydrationProcess';
import MenuSection from '@/components/MenuSection';
import RecipesSection from '@/components/RecipesSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import NotificationSubscribe from '@/components/NotificationSubscribe';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CartPanel from '@/components/CartPanel';
import WhatsAppButton from '@/components/WhatsAppButton';
import IntroAnimation from '@/components/IntroAnimation';
import FreeShippingBanner from '@/components/FreeShippingBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <IntroAnimation />
      <FreeShippingBanner />
      <Header />
      <main>
        <Hero />
        <DehydrationProcess />
        <MenuSection />
        <RecipesSection />
        <ServicesSection />
        <AboutSection />
        <NotificationSubscribe />
        <ContactSection />
      </main>
      <Footer />
      <CartPanel />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
