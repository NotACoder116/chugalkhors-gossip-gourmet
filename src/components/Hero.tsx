
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-chugal-beige to-chugal-lightBeige overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Floating Food Icons */}
      <div className="absolute top-20 right-10 text-6xl animate-float">🍕</div>
      <div className="absolute top-40 right-40 text-4xl animate-float" style={{ animationDelay: '1s' }}>🍜</div>
      <div className="absolute bottom-40 right-20 text-5xl animate-float" style={{ animationDelay: '2s' }}>🧋</div>
      <div className="absolute top-60 left-10 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🍔</div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-2xl animate-slide-in-left">
          {/* Special Badge */}
          <div className="inline-flex items-center bg-chugal-red text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-in">
            🔥 50% Off on First Order!
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Welcome to{' '}
            <span className="gradient-text">Chugalkhors!</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-semibold">
            Eat. Gossip. Repeat. 🍕🍜🫖
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Where every meal comes with a side of stories and every conversation is seasoned with flavor. 
            Join the chatter, taste the magic! ✨
          </p>

          {/* Chat Bubble */}
          <div className="chat-bubble mb-8 max-w-md animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-gray-700">
              "Just had the most amazing pasta here! The gossip was even better than the food... 
              and that's saying something! 😍" - <span className="text-chugal-red font-semibold">Priya S.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <Button 
              size="lg" 
              className="bg-chugal-red hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold hover-scale"
            >
              🛒 Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-chugal-green text-chugal-green hover:bg-chugal-green hover:text-white px-8 py-4 text-lg font-semibold hover-scale"
            >
              📖 View Menu
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-8 mt-12 animate-fade-in" style={{ animationDelay: '2s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-chugal-red">500+</div>
              <div className="text-gray-600">Happy Chugalkhors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chugal-red">150+</div>
              <div className="text-gray-600">Delicious Dishes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chugal-red">4.9⭐</div>
              <div className="text-gray-600">Gossip Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
