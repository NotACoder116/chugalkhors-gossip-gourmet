
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from '@/components/CartDrawer';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-lg'
      }`}>
        {/* Top Bar */}
        <div className="bg-chugal-green text-white py-2 px-4">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span>🕒 Open: 9:00 AM - 11:00 PM</span>
              <span className="hidden md:inline">📞 +91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform hover:text-pink-300" />
              <Facebook className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform hover:text-blue-300" />
              <Twitter className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform hover:text-blue-300" />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/assets/images/chugalkhors-logo.png" 
                alt="Chugalkhors Logo" 
                className="h-12 w-auto hover:scale-105 transition-transform"
              />
              <span className="text-2xl md:text-3xl font-bold text-chugal-red hover:scale-105 transition-transform">
                Chugalkhors
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-900 hover:text-chugal-red transition-colors font-semibold hover:scale-105 duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-900 hover:text-chugal-red transition-colors font-semibold hover:scale-105 duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('menu')} 
                className="text-gray-900 hover:text-chugal-red transition-colors font-semibold hover:scale-105 duration-200"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('chefs')} 
                className="text-gray-900 hover:text-chugal-red transition-colors font-semibold hover:scale-105 duration-200"
              >
                Chefs
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-900 hover:text-chugal-red transition-colors font-semibold hover:scale-105 duration-200"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-900 hover:text-chugal-red transition-colors font-semibold hover:scale-105 duration-200"
              >
                Contact
              </button>
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <CartDrawer />
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="lg:hidden hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t animate-fade-in bg-white rounded-lg shadow-lg">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-900 hover:text-chugal-red transition-colors font-semibold py-2 text-left hover:bg-gray-50 px-4 rounded"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-900 hover:text-chugal-red transition-colors font-semibold py-2 text-left hover:bg-gray-50 px-4 rounded"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="text-gray-900 hover:text-chugal-red transition-colors font-semibold py-2 text-left hover:bg-gray-50 px-4 rounded"
                >
                  Menu
                </button>
                <button 
                  onClick={() => scrollToSection('chefs')} 
                  className="text-gray-900 hover:text-chugal-red transition-colors font-semibold py-2 text-left hover:bg-gray-50 px-4 rounded"
                >
                  Chefs
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="text-gray-900 hover:text-chugal-red transition-colors font-semibold py-2 text-left hover:bg-gray-50 px-4 rounded"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-900 hover:text-chugal-red transition-colors font-semibold py-2 text-left hover:bg-gray-50 px-4 rounded"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-chugal-red hover:bg-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};

export default Header;
