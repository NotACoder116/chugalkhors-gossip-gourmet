
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isVeg: boolean;
  spiceLevel: number;
  rating: number;
  ingredients: string[];
  comments: { user: string; comment: string; rating: number }[];
}

interface FoodDetailDialogProps {
  item: FoodItem;
  children: React.ReactNode;
}

const FoodDetailDialog = ({ item, children }: FoodDetailDialogProps) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [comments, setComments] = useState(item.comments);

  const cartItem = cart.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        user: 'Anonymous User',
        comment: newComment,
        rating: newRating
      };
      setComments([...comments, comment]);
      setNewComment('');
      setNewRating(5);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const renderSpiceLevel = (level: number) => {
    return '🌶️'.repeat(level);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex gap-6">
            <img src={item.image} alt={item.name} className="w-48 h-48 object-cover rounded-lg" />
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-chugal-red">₹{item.price}</span>
                <span className="text-2xl">{item.isVeg ? '🌱' : '🍗'}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {renderStars(item.rating)}
                <span className="text-sm text-gray-600">({item.rating}/5)</span>
              </div>
              
              <p className="text-gray-600">{item.description}</p>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Spice Level:</span>
                <span>{renderSpiceLevel(item.spiceLevel)}</span>
              </div>

              <div className="flex items-center gap-4">
                {quantity > 0 ? (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => addToCart(item)}
                    className="bg-chugal-green hover:bg-chugal-darkGreen text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ingredient, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Reviews & Comments</h3>
            
            <div className="space-y-3 max-h-40 overflow-y-auto">
              {comments.map((comment, index) => (
                <div key={index} className="border-b pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{comment.user}</span>
                    <div className="flex">{renderStars(comment.rating)}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{comment.comment}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t pt-4">
              <h4 className="font-semibold">Add your review</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm">Rating:</span>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 cursor-pointer ${
                        i < newRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                      onClick={() => setNewRating(i + 1)}
                    />
                  ))}
                </div>
              </div>
              <Input
                placeholder="Write your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button onClick={handleAddComment} size="sm">
                Add Comment
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FoodDetailDialog;
