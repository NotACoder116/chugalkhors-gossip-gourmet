import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ShoppingCart, Star, Plus, Minus, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

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
  // Fast Food
  {
    id: 1,
    name: 'Gossip Burger',
    price: 299,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Juicy beef patty with secret sauce that will make you spill all the tea!',
    isVeg: false,
    spiceLevel: 2,
    rating: 4.5,
    isSpecial: true,
    ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Onion', 'Secret Sauce', 'Sesame Bun'],
    comments: [
      { user: 'Rahul K.', comment: 'Best burger in town! The secret sauce is amazing.', rating: 5 },
      { user: 'Priya S.', comment: 'Loved it! Perfect for sharing gossip with friends.', rating: 4 }
    ]
  },
  {
    id: 2,
    name: 'Chatter Fries',
    price: 149,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Crispy golden fries seasoned with our special chatter masala!',
    isVeg: true,
    spiceLevel: 1,
    rating: 4.2,
    isSpecial: false,
    ingredients: ['Potatoes', 'Chatter Masala', 'Salt', 'Oil'],
    comments: [
      { user: 'Amit T.', comment: 'Crispy and flavorful! Goes well with everything.', rating: 4 }
    ]
  },
  {
    id: 3,
    name: 'Drama Sandwich',
    price: 199,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Loaded sandwich with all the drama you need in every bite!',
    isVeg: true,
    spiceLevel: 2,
    rating: 4.0,
    isSpecial: false,
    ingredients: ['Bread', 'Vegetables', 'Cheese', 'Sauces', 'Herbs'],
    comments: [
      { user: 'Maya P.', comment: 'Perfect for a quick snack. Love the filling!', rating: 4 }
    ]
  },
  // Beverages
  {
    id: 4,
    name: 'Chatter Chai',
    price: 89,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b3b4bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Perfect blend of spices and gossip - served hot with extra masala!',
    isVeg: true,
    spiceLevel: 1,
    rating: 4.8,
    isSpecial: false,
    ingredients: ['Tea Leaves', 'Milk', 'Sugar', 'Cardamom', 'Ginger', 'Cloves'],
    comments: [
      { user: 'Sunita R.', comment: 'Reminds me of home! Perfect tea for conversations.', rating: 5 },
      { user: 'Karan M.', comment: 'Best chai in the city. Must try!', rating: 5 }
    ]
  },
  {
    id: 5,
    name: 'Gossip Coffee',
    price: 129,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Strong coffee to fuel your longest gossip sessions!',
    isVeg: true,
    spiceLevel: 0,
    rating: 4.3,
    isSpecial: false,
    ingredients: ['Coffee Beans', 'Milk', 'Sugar', 'Foam'],
    comments: [
      { user: 'Neha D.', comment: 'Great coffee! Perfect strength and taste.', rating: 4 }
    ]
  },
  {
    id: 6,
    name: 'Whisper Smoothie',
    price: 179,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Refreshing fruit smoothie perfect for sharing secrets!',
    isVeg: true,
    spiceLevel: 0,
    rating: 4.6,
    isSpecial: true,
    ingredients: ['Mixed Fruits', 'Yogurt', 'Honey', 'Ice'],
    comments: [
      { user: 'Richa S.', comment: 'So refreshing! Love the fruit combination.', rating: 5 }
    ]
  },
  // Chinese
  {
    id: 7,
    name: 'Drama Dumplings',
    price: 259,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Steamed perfection filled with flavor and a hint of neighborhood drama!',
    isVeg: true,
    spiceLevel: 1,
    rating: 4.4,
    isSpecial: false,
    ingredients: ['Flour', 'Vegetables', 'Soy Sauce', 'Ginger', 'Garlic'],
    comments: [
      { user: 'Arjun K.', comment: 'Perfectly steamed and so flavorful!', rating: 4 }
    ]
  },
  {
    id: 8,
    name: 'Secret Noodles',
    price: 299,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Hakka noodles with our secret ingredient that keeps you coming back!',
    isVeg: false,
    spiceLevel: 2,
    rating: 4.7,
    isSpecial: true,
    ingredients: ['Noodles', 'Vegetables', 'Chicken', 'Soy Sauce', 'Secret Spices'],
    comments: [
      { user: 'Deepak A.', comment: 'Amazing taste! What\'s the secret ingredient?', rating: 5 }
    ]
  },
  {
    id: 9,
    name: 'Chatter Fried Rice',
    price: 249,
    category: 'chinese',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Perfectly seasoned fried rice that starts conversations!',
    isVeg: true,
    spiceLevel: 1,
    rating: 4.1,
    isSpecial: false,
    ingredients: ['Rice', 'Vegetables', 'Soy Sauce', 'Spring Onions', 'Eggs'],
    comments: [
      { user: 'Pooja L.', comment: 'Good portion size and tasty!', rating: 4 }
    ]
  },
  // Pizza
  {
    id: 10,
    name: 'Rumor Pizza',
    price: 549,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Loaded with toppings and stories - this pizza spreads faster than gossip!',
    isVeg: false,
    spiceLevel: 2,
    rating: 4.6,
    isSpecial: true,
    ingredients: ['Pizza Base', 'Cheese', 'Pepperoni', 'Vegetables', 'Herbs', 'Secret Sauce'],
    comments: [
      { user: 'Vikram S.', comment: 'Best pizza ever! Perfect for sharing with friends.', rating: 5 }
    ]
  },
  {
    id: 11,
    name: 'Gossip Margherita',
    price: 399,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Classic margherita with fresh basil and mozzarella!',
    isVeg: true,
    spiceLevel: 1,
    rating: 4.3,
    isSpecial: false,
    ingredients: ['Pizza Base', 'Mozzarella', 'Tomato Sauce', 'Fresh Basil'],
    comments: [
      { user: 'Anita M.', comment: 'Simple and delicious! Love the fresh basil.', rating: 4 }
    ]
  },
  // Pasta
  {
    id: 12,
    name: 'Secret Sauce Pasta',
    price: 349,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d65e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Creamy pasta with ingredients as mysterious as your neighbor\'s cooking!',
    isVeg: true,
    spiceLevel: 2,
    rating: 4.5,
    isSpecial: true,
    ingredients: ['Pasta', 'Cream', 'Cheese', 'Herbs', 'Secret Sauce', 'Vegetables'],
    comments: [
      { user: 'Rohit B.', comment: 'Creamy and delicious! What\'s in that secret sauce?', rating: 5 }
    ]
  },
  {
    id: 13,
    name: 'Chatter Carbonara',
    price: 399,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Rich and creamy carbonara perfect for deep conversations!',
    isVeg: false,
    spiceLevel: 1,
    rating: 4.4,
    isSpecial: false,
    ingredients: ['Pasta', 'Bacon', 'Eggs', 'Cheese', 'Black Pepper'],
    comments: [
      { user: 'Kavya N.', comment: 'Rich and creamy! Authentic taste.', rating: 4 }
    ]
  },
  // Non-Veg
  {
    id: 14,
    name: 'Whisper Wings',
    price: 399,
    category: 'nonveg',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Crispy chicken wings that are too good to keep secret!',
    isVeg: false,
    spiceLevel: 3,
    rating: 4.7,
    isSpecial: false,
    ingredients: ['Chicken Wings', 'Spices', 'Hot Sauce', 'Butter', 'Herbs'],
    comments: [
      { user: 'Sanjay R.', comment: 'Spicy and crispy! Perfect with beer.', rating: 5 }
    ]
  },
  {
    id: 15,
    name: 'Gossip Tikka',
    price: 449,
    category: 'nonveg',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Tender chicken tikka marinated in gossip-worthy spices!',
    isVeg: false,
    spiceLevel: 2,
    rating: 4.8,
    isSpecial: true,
    ingredients: ['Chicken', 'Yogurt', 'Spices', 'Lemon', 'Ginger-Garlic'],
    comments: [
      { user: 'Manish K.', comment: 'Perfectly marinated and grilled! Must try.', rating: 5 }
    ]
  },
  // Desserts
  {
    id: 16,
    name: 'Sweet Secrets Cake',
    price: 199,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Decadent chocolate cake that holds all the sweet secrets!',
    isVeg: true,
    spiceLevel: 0,
    rating: 4.9,
    isSpecial: true,
    ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla'],
    comments: [
      { user: 'Shreya P.', comment: 'Best chocolate cake ever! So moist and rich.', rating: 5 }
    ]
  },
  {
    id: 17,
    name: 'Chatter Ice Cream',
    price: 149,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Creamy ice cream in flavors that will start conversations!',
    isVeg: true,
    spiceLevel: 0,
    rating: 4.5,
    isSpecial: false,
    ingredients: ['Milk', 'Cream', 'Sugar', 'Natural Flavors'],
    comments: [
      { user: 'Rakesh D.', comment: 'So creamy and delicious! Love the unique flavors.', rating: 4 }
    ]
  }
];

const FoodCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [dietFilter, setDietFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const { cart, addToCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Filter and sort items
  let filteredItems = foodItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiet = dietFilter === 'all' || 
                       (dietFilter === 'veg' && item.isVeg) ||
                       (dietFilter === 'nonveg' && !item.isVeg);
    return matchesCategory && matchesSearch && matchesDiet;
  });

  // Sort items
  if (sortBy === 'price-low') {
    filteredItems = filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredItems = filteredItems.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredItems = filteredItems.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'special') {
    filteredItems = filteredItems.sort((a, b) => (b.isSpecial ? 1 : 0) - (a.isSpecial ? 1 : 0));
  }

  const renderSpiceLevel = (level: number) => {
    return '🌶️'.repeat(level);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const handleFoodClick = (itemId: number) => {
    navigate(`/food/${itemId}`);
  };

  const getCartItemQuantity = (itemId: number) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem?.quantity || 0;
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">What's Cooking?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every dish has a story, every bite starts a conversation. 
            Pick your poison and let the gossip begin!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200 focus:border-chugal-green"
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={dietFilter} onValueChange={setDietFilter}>
              <SelectTrigger className="w-32 bg-white border-gray-200">
                <SelectValue placeholder="Diet" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="veg">🌱 Veg</SelectItem>
                <SelectItem value="nonveg">🍗 Non-Veg</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-36 bg-white border-gray-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
                <SelectItem value="special">Chef's Special</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-button ${
                activeCategory === category.id ? 'active' : ''
              } px-4 py-2 rounded-full font-medium`}
            >
              {category.emoji} {category.name}
            </Button>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="block md:hidden mb-8">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredItems.map((item) => {
                const quantity = getCartItemQuantity(item.id);

                return (
                  <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-4/5">
                    <Card className="food-card overflow-hidden">
                      <div 
                        className="relative cursor-pointer"
                        onClick={() => handleFoodClick(item.id)}
                      >
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-40 object-cover"
                        />
                        {item.isSpecial && (
                          <Badge className="absolute top-2 left-2 bg-chugal-red text-white font-semibold">
                            ⭐ Special
                          </Badge>
                        )}
                        <Badge 
                          className={`absolute top-2 right-2 ${
                            item.isVeg ? 'bg-chugal-green' : 'bg-chugal-red'
                          } text-white`}
                        >
                          {item.isVeg ? '🌱' : '🍗'}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-4 bg-white">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                          <span className="text-lg font-bold text-chugal-red">₹{item.price}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(item.rating)}
                          <span className="text-xs text-gray-500 ml-1">({item.rating})</span>
                        </div>
                        
                        <p className="text-gray-700 mb-3 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                        
                        {quantity > 0 ? (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(item.id, quantity - 1);
                                }}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="font-semibold text-gray-900">{quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(item.id, quantity + 1);
                                }}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <span className="font-semibold text-chugal-red text-sm">₹{item.price * quantity}</span>
                          </div>
                        ) : (
                          <Button 
                            className="w-full bg-chugal-green text-white font-semibold py-2 text-sm transition-all duration-200"
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(item);
                            }}
                          >
                            <ShoppingCart className="w-3 h-3 mr-1" />
                            Add to Cart
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white" />
            <CarouselNext className="border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white" />
          </Carousel>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const quantity = getCartItemQuantity(item.id);

            return (
              <Card 
                key={item.id} 
                className="food-card overflow-hidden hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => handleFoodClick(item.id)}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.isSpecial && (
                    <Badge className="absolute top-4 left-4 bg-chugal-red text-white font-semibold animate-pulse">
                      ⭐ Chef's Special
                    </Badge>
                  )}
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      item.isVeg ? 'bg-chugal-green' : 'bg-chugal-red'
                    } text-white font-medium`}
                  >
                    {item.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
                  </Badge>
                </div>
                
                <CardContent className="p-6 bg-white">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-chugal-red">₹{item.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(item.rating)}
                    <span className="text-sm text-gray-500 ml-1">({item.rating})</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {renderSpiceLevel(item.spiceLevel)}
                        {item.spiceLevel === 0 && <span className="text-gray-400 text-sm">Mild</span>}
                      </div>
                    </div>
                  </div>
                  
                  {quantity > 0 ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuantity(item.id, quantity - 1);
                          }}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold text-lg text-gray-900">{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuantity(item.id, quantity + 1);
                          }}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <span className="font-semibold text-chugal-red">₹{item.price * quantity}</span>
                    </div>
                  ) : (
                    <Button 
                      className="w-full bg-chugal-green text-white font-semibold py-3 transition-all duration-200 hover:shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No dishes found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Chat Bubble with Fun Fact */}
        <div className="mt-16 flex justify-center">
          <div className="chat-bubble max-w-md animate-fade-in bg-white shadow-lg">
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
