import { useState } from 'react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from '@/components/CartDrawer';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-chugal-green text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>🕒 Open: 9:00 AM - 11:00 PM</span>
            <span className="hidden md:inline">📞 +91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
            <Facebook className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
            <Twitter className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-chugal-red">Chugalkhors</span>
            <span className="text-2xl">🍲</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold">About Us</button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold">Menu</button>
            <button onClick={() => scrollToSection('chefs')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold">Chefs</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold">Contact</button>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <CartDrawer />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold py-2 text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold py-2 text-left">About Us</button>
              <button onClick={() => scrollToSection('menu')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold py-2 text-left">Menu</button>
              <button onClick={() => scrollToSection('chefs')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold py-2 text-left">Chefs</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold py-2 text-left">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 dark:text-gray-100 hover:text-chugal-red transition-colors font-semibold py-2 text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
