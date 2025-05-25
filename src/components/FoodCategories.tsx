
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All', emoji: '🍽️' },
  { id: 'fastfood', name: 'Fast Food', emoji: '🍔' },
  { id: 'beverages', name: 'Beverages', emoji: '🧋' },
  { id: 'chinese', name: 'Chinese', emoji: '🥡' },
  { id: 'pizza', name: 'Pizza', emoji: '🍕' },
  { id: 'pasta', name: 'Pasta', emoji: '🍝' },
  { id: 'veg', name: 'Veg', emoji: '🌱' },
  { id: 'nonveg', name: 'Non-Veg', emoji: '🍗' },
  { id: 'desserts', name: 'Desserts', emoji: '🍰' },
];

const foodItems = [
  {
    id: 1,
    name: 'Gossip Burger',
    price: 299,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Juicy beef patty with secret sauce that will make you spill all the tea!',
    isVeg: false,
    spiceLevel: 2,
    isSpecial: true
  },
  {
    id: 2,
    name: 'Chatter Chai',
    price: 89,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b3b4bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Perfect blend of spices and gossip - served hot with extra masala!',
    isVeg: true,
    spiceLevel: 1,
    isSpecial: false
  },
  {
    id: 3,
    name: 'Secret Sauce Pasta',
    price: 349,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d65e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Creamy pasta with ingredients as mysterious as your neighbor\'s cooking!',
    isVeg: true,
    spiceLevel: 2,
    isSpecial: true
  },
  {
    id: 4,
    name: 'Whisper Wings',
    price: 399,
    category: 'nonveg',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Crispy chicken wings that are too good to keep secret!',
    isVeg: false,
    spiceLevel: 3,
    isSpecial: false
  },
  {
    id: 5,
    name: 'Rumor Pizza',
    price: 549,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Loaded with toppings and stories - this pizza spreads faster than gossip!',
    isVeg: false,
    spiceLevel: 2,
    isSpecial: true
  },
  {
    id: 6,
    name: 'Drama Dumplings',
    price: 259,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Steamed perfection filled with flavor and a hint of neighborhood drama!',
    isVeg: true,
    spiceLevel: 1,
    isSpecial: false
  }
];

const FoodCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const filteredItems = activeCategory === 'all' 
    ? foodItems 
    : foodItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log('Added to cart:', item.name);
  };

  const renderSpiceLevel = (level) => {
    return '🌶️'.repeat(level);
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What's Cooking? 👨‍🍳
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every dish has a story, every bite starts a conversation. 
            Pick your poison and let the gossip begin!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-scale ${
                activeCategory === category.id
                  ? 'bg-chugal-red text-white'
                  : 'border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.isSpecial && (
                  <div className="absolute top-4 left-4 bg-chugal-red text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce-in">
                    ⭐ Chef's Special
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  {item.isVeg ? '🌱' : '🍗'}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-chugal-red">₹{item.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Spice Level:</span>
                    <span>{renderSpiceLevel(item.spiceLevel)}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-chugal-green hover:bg-chugal-darkGreen text-white font-semibold py-3 transition-all duration-300"
                  onClick={() => addToCart(item)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Bubble with Fun Fact */}
        <div className="mt-16 flex justify-center">
          <div className="chat-bubble max-w-md animate-fade-in">
            <p className="text-gray-700">
              💡 <strong>Fun Fact:</strong> Did you know that our "Gossip Burger" was inspired by 
              Mrs. Sharma's weekly kitty party stories? True story! 😄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
