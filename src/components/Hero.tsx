
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Star, Clock, Users } from 'lucide-react';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad', 'Ahmedabad'
];

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState('Mumbai');

  useEffect(() => {
    // Simulate city detection
    setSelectedCity('Mumbai');
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 text-6xl animate-bounce">🍕</div>
      <div className="absolute top-40 right-40 text-4xl animate-pulse">🍜</div>
      <div className="absolute bottom-40 right-20 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>🧋</div>
      <div className="absolute top-60 left-10 text-4xl animate-pulse" style={{ animationDelay: '2s' }}>🍔</div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-2xl">
          {/* City Selection */}
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-red-600" />
            <span className="text-gray-700 font-medium">Delivering to:</span>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-auto min-w-24 bg-white border-green-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Special Badge */}
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔥 TEST: 50% Off on First Order!
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Chugalkhors!
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl lg:text-3xl text-gray-600 mb-4 font-semibold">
            Eat. Gossip. Repeat. 🍕🍜🫖
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Where every meal comes with a side of stories and every conversation is seasoned with flavor. 
            Join the chatter, taste the magic! ✨
          </p>

          {/* Chat Bubbles */}
          <div className="space-y-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md border-l-4 border-red-500">
              <p className="text-gray-700">
                "Just had the most amazing pasta here! The gossip was even better than the food... 
                and that's saying something! 😍" - <span className="text-red-600 font-semibold">Priya S.</span>
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md ml-8 border-l-4 border-green-500">
              <p className="text-gray-700">
                "The biryani is to die for! And I made 3 new friends here! 🍛👫" - <span className="text-green-600 font-semibold">Raj M.</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('menu')}
            >
              🛒 Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('menu')}
            >
              📖 View Menu
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-green-600">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-red-600">500+</div>
              <div className="text-sm text-gray-600">Happy Chugalkhors</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-green-600">
                <Star className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-red-600">150+</div>
              <div className="text-sm text-gray-600">Delicious Dishes</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-green-600">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-red-600">4.9⭐</div>
              <div className="text-sm text-gray-600">Gossip Rating</div>
            </div>
          </div>

          {/* Live Activity */}
          <div className="mt-8">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>12 people are ordering right now in {selectedCity}!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
