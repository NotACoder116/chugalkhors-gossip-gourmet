
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Star, Clock, Users } from 'lucide-react';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad', 'Ahmedabad'
];

const foodImages = [
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Delicious pizza',
    position: 'top-20 right-10'
  },
  {
    url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Fresh pasta',
    position: 'top-40 right-40'
  },
  {
    url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Gourmet burger',
    position: 'bottom-40 right-20'
  },
  {
    url: 'https://images.unsplash.com/photo-1563379091339-03246963d51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Indian curry',
    position: 'top-60 left-10'
  }
];

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Simulate city detection - in real app, you'd use geolocation or IP-based detection
    const detectCity = () => {
      // Mock city detection
      setSelectedCity('Mumbai');
    };
    detectCity();

    // Rotate food images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % foodImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Happy Chugalkhors' },
    { icon: <Star className="w-6 h-6" />, value: '150+', label: 'Delicious Dishes' },
    { icon: <Clock className="w-6 h-6" />, value: '4.9⭐', label: 'Gossip Rating' }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-chugal-beige to-chugal-lightBeige overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Floating Food Images */}
      {foodImages.map((food, index) => (
        <div 
          key={index}
          className={`absolute ${food.position} w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer animate-float`}
          style={{ 
            animationDelay: `${index * 0.5}s`,
            opacity: currentImageIndex === index ? 1 : 0.7,
            transform: currentImageIndex === index ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          <img 
            src={food.url} 
            alt={food.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}

      {/* Floating Food Icons */}
      <div className="absolute top-20 right-10 text-4xl md:text-6xl animate-float">🍕</div>
      <div className="absolute top-40 right-20 md:right-40 text-3xl md:text-4xl animate-float" style={{ animationDelay: '1s' }}>🍜</div>
      <div className="absolute bottom-40 right-10 md:right-20 text-4xl md:text-5xl animate-float" style={{ animationDelay: '2s' }}>🧋</div>
      <div className="absolute top-60 left-5 md:left-10 text-3xl md:text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🍔</div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-20 flex items-center min-h-screen">
        <div className="max-w-2xl animate-slide-in-left">
          {/* City Selection */}
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-chugal-red" />
            <span className="text-gray-700 font-medium">Delivering to:</span>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-auto min-w-24 bg-white border-chugal-green hover:bg-chugal-lightBeige transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                {cities.map((city) => (
                  <SelectItem key={city} value={city} className="hover:bg-chugal-lightBeige">{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Special Badge */}
          <div className="inline-flex items-center bg-chugal-red text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-in hover:bg-red-600 transition-colors cursor-pointer">
            🔥 50% Off on First Order!
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Welcome to{' '}
            <span className="gradient-text hover:scale-105 transition-transform duration-300 inline-block cursor-default">Chugalkhors!</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 font-semibold">
            Eat. Gossip. Repeat. 🍕🍜🫖
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            Where every meal comes with a side of stories and every conversation is seasoned with flavor. 
            Join the chatter, taste the magic! ✨
          </p>

          {/* Interactive Chat Bubbles */}
          <div className="space-y-4 mb-8">
            <div className="chat-bubble max-w-md animate-fade-in bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1s' }}>
              <p className="text-gray-700">
                "Just had the most amazing pasta here! The gossip was even better than the food... 
                and that's saying something! 😍" - <span className="text-chugal-red font-semibold">Priya S.</span>
              </p>
            </div>
            <div className="chat-bubble max-w-md animate-fade-in bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 ml-8" style={{ animationDelay: '1.5s' }}>
              <p className="text-gray-700">
                "The biryani is to die for! And I made 3 new friends here! 🍛👫" - <span className="text-chugal-green font-semibold">Raj M.</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in mb-12" style={{ animationDelay: '2s' }}>
            <Button 
              size="lg" 
              className="bg-chugal-red hover:bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold hover-scale transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('menu')}
            >
              🛒 Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold hover-scale transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('menu')}
            >
              📖 View Menu
            </Button>
          </div>

          {/* Interactive Quick Stats */}
          <div className="flex flex-wrap gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: '2.5s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center cursor-pointer transform transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`flex items-center justify-center mb-2 transition-colors duration-300 ${hoveredStat === index ? 'text-chugal-red' : 'text-chugal-green'}`}>
                  {stat.icon}
                </div>
                <div className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${hoveredStat === index ? 'text-chugal-red' : 'text-chugal-red'}`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Live Activity Indicator */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '3s' }}>
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
