
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FoodCategories from '@/components/FoodCategories';
import SpecialOffers from '@/components/SpecialOffers';
import About from '@/components/About';
import Chefs from '@/components/Chefs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FoodCategories />
      <SpecialOffers />
      <About />
      <Chefs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
