
import { useState } from 'react';
import { Menu, X, ShoppingCart, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <a href="#home" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold">Home</a>
            <a href="#about" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold">About Us</a>
            <a href="#menu" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold">Menu</a>
            <a href="#chefs" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold">Chefs</a>
            <a href="#testimonials" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold">Contact</a>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="relative bg-chugal-red hover:bg-red-600 text-white">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-chugal-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Button>
            
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
              <a href="#home" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold py-2">About Us</a>
              <a href="#menu" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold py-2">Menu</a>
              <a href="#chefs" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold py-2">Chefs</a>
              <a href="#testimonials" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold py-2">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-chugal-red transition-colors font-semibold py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
