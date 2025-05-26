
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const chefs = [
  {
    id: 1,
    name: 'Chef Rajan Kumar',
    title: 'Head Gossip Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Master of spices and stories. Rajan can whip up a curry and a conversation with equal skill!',
    speciality: 'North Indian & Punjabi Cuisine',
    experience: '15 Years',
    signature: 'Butter Chicken that makes people cry happy tears',
    social: {
      instagram: '@chef_rajan_gossips',
      facebook: 'Chef Rajan Kumar',
      twitter: '@rajan_cooks'
    }
  },
  {
    id: 2,
    name: 'Chef Priya Sharma',
    title: 'Chief Story Collector',
    image: 'https://images.unsplash.com/photo-1594736797933-d0bdb73b2909?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Priya believes every recipe has a secret, and every secret deserves the perfect seasoning.',
    speciality: 'Continental & Fusion',
    experience: '12 Years',
    signature: 'Pasta that makes you spill all your secrets',
    social: {
      instagram: '@priya_chef_tales',
      facebook: 'Chef Priya Sharma',
      twitter: '@priya_kitchen'
    }
  },
  {
    id: 3,
    name: 'Chef Arjun Patel',
    title: 'Dessert Whisperer',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Sweet treats and sweeter conversations - Arjun knows the secret to both!',
    speciality: 'Desserts & Beverages',
    experience: '8 Years',
    signature: 'Gulab Jamun that starts neighborhood conversations',
    social: {
      instagram: '@arjun_sweet_talk',
      facebook: 'Chef Arjun Patel',
      twitter: '@arjun_desserts'
    }
  },
  {
    id: 4,
    name: 'Chef Meera Singh',
    title: 'Spice Gossip Guru',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Meera knows that the right spice blend can turn strangers into best friends.',
    speciality: 'South Indian & Street Food',
    experience: '10 Years',
    signature: 'Dosas that are worth traveling for',
    social: {
      instagram: '@meera_spice_tales',
      facebook: 'Chef Meera Singh',
      twitter: '@meera_flavors'
    }
  }
];

const Chefs = () => {
  return (
    <section id="chefs" className="py-20 bg-chugal-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our Chefs 👨‍🍳👩‍🍳
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The masterminds behind every delicious dish and every juicy story. 
            They don't just cook food, they create experiences!
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <Card 
              key={chef.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover-scale border-0 shadow-lg bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Chef Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm italic">"{chef.signature}"</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Chef Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-1">{chef.name}</h3>
                <p className="text-chugal-red font-semibold mb-3">{chef.title}</p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{chef.bio}</p>
                
                {/* Chef Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Speciality:</span>
                    <span className="text-gray-700 font-medium">{chef.speciality}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Experience:</span>
                    <span className="text-gray-700 font-medium">{chef.experience}</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chef's Special Section */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              What Our Chefs Say 💭
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="chat-bubble">
                <p className="text-gray-700 italic">
                  "Cooking is like storytelling - you need the right ingredients, perfect timing, 
                  and a pinch of drama to make it memorable!" 
                  <span className="block mt-2 text-chugal-red font-semibold">- Chef Rajan</span>
                </p>
              </div>
              
              <div className="chat-bubble">
                <p className="text-gray-700 italic">
                  "The best recipes come from late-night conversations with friends. 
                  That's where real magic happens!" 
                  <span className="block mt-2 text-chugal-red font-semibold">- Chef Priya</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Kitchen Facts */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-gray-800 mb-8">Kitchen Gossip 🍳</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover-scale">
              <div className="text-3xl mb-2">🔥</div>
              <h5 className="font-bold text-chugal-red">Hot Kitchen</h5>
              <p className="text-gray-600 text-sm">Our kitchen runs at 200% gossip capacity daily!</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover-scale">
              <div className="text-3xl mb-2">🧂</div>
              <h5 className="font-bold text-chugal-red">Secret Spices</h5>
              <p className="text-gray-600 text-sm">We have a spice called "Neighborhood News" - it's classified!</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover-scale">
              <div className="text-3xl mb-2">⏰</div>
              <h5 className="font-bold text-chugal-red">24/7 Stories</h5>
              <p className="text-gray-600 text-sm">Our chefs collect stories around the clock for authentic flavors!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
