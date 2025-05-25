import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Star, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

// This would typically come from your data source
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
    rating: 4.5,
    isSpecial: true,
    ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Onion', 'Secret Sauce', 'Sesame Bun'],
    comments: [
      { user: 'Rahul K.', comment: 'Best burger in town! The secret sauce is amazing.', rating: 5 },
      { user: 'Priya S.', comment: 'Loved it! Perfect for sharing gossip with friends.', rating: 4 }
    ]
  },
  // Add more items as needed - using the same data structure from FoodCategories
];

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart, updateQuantity } = useCart();
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const item = foodItems.find(item => item.id === parseInt(id || '0'));

  if (!item) {
    return (
      <div className="min-h-screen bg-chugal-beige flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Food item not found!</h2>
          <Button onClick={() => navigate('/')}>Go back to menu</Button>
        </div>
      </div>
    );
  }

  const cartItem = cart.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem?.quantity || 0;

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

  const handleAddComment = () => {
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      console.log('New comment:', { comment: newComment, rating: newRating });
      setNewComment('');
      setNewRating(5);
      alert('Comment added successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-chugal-beige">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">Food Details</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image and Basic Info */}
          <div>
            <div className="relative mb-6">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {item.isSpecial && (
                <div className="absolute top-4 left-4 bg-chugal-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ Chef's Special
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                {item.isVeg ? '🌱' : '🍗'}
              </div>
            </div>

            {/* Ingredients */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-chugal-green/20 text-chugal-green px-3 py-1 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details and Actions */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{item.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-chugal-red">₹{item.price}</span>
                <div className="flex items-center gap-1">
                  {renderStars(item.rating)}
                  <span className="text-sm text-gray-500 ml-1">({item.rating})</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">{item.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">Spice Level:</span>
                  <span>{renderSpiceLevel(item.spiceLevel)}</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {item.isVeg ? '🌱 Vegetarian' : '🍗 Non-Vegetarian'}
                </div>
              </div>

              {/* Add to Cart Section */}
              {quantity > 0 ? (
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold text-xl">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="font-semibold text-chugal-red text-xl">₹{item.price * quantity}</span>
                </div>
              ) : (
                <Button 
                  className="w-full bg-chugal-green hover:bg-chugal-darkGreen text-white font-semibold py-3 mb-6 text-lg"
                  onClick={() => addToCart(item)}
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              )}
            </div>

            {/* Comments Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                
                {/* Existing Comments */}
                <div className="space-y-4 mb-6">
                  {item.comments.map((comment, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{comment.user}</span>
                        <div className="flex">
                          {renderStars(comment.rating)}
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.comment}</p>
                    </div>
                  ))}
                </div>

                {/* Add New Comment */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Add Your Review</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm">Rating:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 cursor-pointer ${star <= newRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          onClick={() => setNewRating(star)}
                        />
                      ))}
                    </div>
                  </div>
                  <Textarea
                    placeholder="Share your experience with this dish..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="mb-3"
                  />
                  <Button
                    onClick={handleAddComment}
                    className="bg-chugal-red hover:bg-red-600 text-white"
                  >
                    Submit Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
