
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sneha Kapoor',
    location: 'Mumbai',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b39c1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    review: 'OMG! The Gossip Burger is literally the best thing that happened to my taste buds! And don\'t get me started on the conversations I had here - made 3 new friends in one evening! 🥰',
    dish: 'Gossip Burger',
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Rohit Sharma',
    location: 'Delhi',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    review: 'Came here for the food, stayed for the stories! The Secret Sauce Pasta is so good I almost cried. The staff treats you like family and the atmosphere is just perfect for deep conversations.',
    dish: 'Secret Sauce Pasta',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Ananya Singh',
    location: 'Bangalore',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    review: 'This place is pure magic! I brought my mom here and we ended up chatting for 3 hours straight. The Chatter Chai is addictive and the vibes are unmatched. Already planning my next visit! ✨',
    dish: 'Chatter Chai',
    date: '3 days ago'
  },
  {
    id: 4,
    name: 'Vikram Patel',
    location: 'Pune',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    review: 'Finally found a place where introverts like me can actually make friends! The Drama Dumplings were perfectly steamed and the communal tables made it so easy to start conversations. Highly recommended!',
    dish: 'Drama Dumplings',
    date: '5 days ago'
  },
  {
    id: 5,
    name: 'Kavya Reddy',
    location: 'Chennai',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    review: 'Best date spot ever! My boyfriend and I couldn\'t stop talking and laughing. The Rumor Pizza was loaded with everything good in life. The staff even gave us relationship advice! 😂💕',
    dish: 'Rumor Pizza',
    date: '1 week ago'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What People Are Saying 💬
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear it straight from our Chugalkhors! 
            These reviews are as authentic as our recipes.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-chugal-lightBeige">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg animate-fade-in"
                  />
                </div>
                
                {/* Review Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="text-3xl mb-4">{renderStars(testimonials[currentIndex].rating)}</div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].review}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                    <p className="text-chugal-red font-semibold">{testimonials[currentIndex].location}</p>
                    <p className="text-gray-500 text-sm">Loved: {testimonials[currentIndex].dish} • {testimonials[currentIndex].date}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white"
            >
              ←
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white"
            >
              →
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="hover:shadow-xl transition-all duration-300 hover-scale border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-bold text-gray-800">{testimonial.name}</h5>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="text-lg mb-3">{renderStars(testimonial.rating)}</div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  "{testimonial.review.substring(0, 120)}..."
                </p>
                
                <div className="text-xs text-chugal-red font-semibold">
                  Ordered: {testimonial.dish}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <div className="bg-chugal-beige rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            The Numbers Don't Lie 📊
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-chugal-red mb-2">4.9⭐</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chugal-red mb-2">500+</div>
              <p className="text-gray-600">Happy Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chugal-red mb-2">98%</div>
              <p className="text-gray-600">Would Recommend</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chugal-red mb-2">45 min</div>
              <p className="text-gray-600">Avg Conversation Time</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="chat-bubble max-w-2xl mx-auto mb-8">
            <p className="text-gray-700 text-lg">
              🌟 <strong>Your turn!</strong> Come create your own story at Chugalkhors. 
              We can't wait to hear what you have to say about us!
            </p>
          </div>
          
          <Button 
            size="lg"
            className="bg-chugal-red hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold hover-scale"
          >
            📝 Leave Your Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
