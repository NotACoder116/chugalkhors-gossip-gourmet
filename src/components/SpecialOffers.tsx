
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const offers = [
  {
    id: 1,
    title: 'Weekend Gossip Special',
    description: 'Get 50% off on all meals when you bring 3 friends!',
    discount: '50% OFF',
    code: 'GOSSIP50',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    validUntil: 'Valid till Sunday',
    bgColor: 'bg-gradient-to-r from-chugal-red to-red-600'
  },
  {
    id: 2,
    title: 'First Timer\'s Secret',
    description: 'New to Chugalkhors? Get 30% off on your first order!',
    discount: '30% OFF',
    code: 'NEWBIE30',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    validUntil: 'For new customers only',
    bgColor: 'bg-gradient-to-r from-chugal-green to-green-600'
  },
  {
    id: 3,
    title: 'Midnight Munchies',
    description: 'Late night cravings? Get free delivery after 10 PM!',
    discount: 'FREE DELIVERY',
    code: 'MIDNIGHT',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    validUntil: '10 PM - 2 AM',
    bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600'
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-chugal-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Exclusive Offers 🎉
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Psst... want to know a secret? These deals are too good to keep quiet about!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card 
              key={offer.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover-scale border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute inset-0 ${offer.bgColor} opacity-85`}></div>
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-white text-gray-800 px-4 py-2 rounded-full font-bold text-lg animate-bounce-in">
                  {offer.discount}
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-white/90 text-sm">{offer.validUntil}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Use Code:</span>
                    <span className="font-mono font-bold text-chugal-red text-lg">
                      {offer.code}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full bg-chugal-red hover:bg-red-600 text-white font-semibold py-3 transition-all duration-300">
                  🛒 Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="chat-bubble max-w-2xl mx-auto mb-8">
            <p className="text-gray-700 text-lg">
              🤫 <strong>Insider Tip:</strong> Follow us on social media for flash sales and secret menu items. 
              Our followers get first dibs on all the good stuff!
            </p>
          </div>
          
          <Button 
            size="lg"
            className="bg-chugal-green hover:bg-chugal-darkGreen text-white px-8 py-4 text-lg font-semibold hover-scale"
          >
            📱 Follow for More Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
