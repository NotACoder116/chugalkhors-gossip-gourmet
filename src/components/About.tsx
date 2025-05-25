
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why "Chugalkhors"? 🤔
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              A place made for stories, laughter, and full tummies.
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                It all started when Rajesh and Priya realized that the best conversations 
                happen over good food. They noticed how their friends would gather at their 
                tiny kitchen, sharing stories, secrets, and endless chatter while munching 
                on homemade delicacies.
              </p>
              <p>
                "Chugalkhors" - literally meaning "gossip lovers" - was born from this beautiful 
                chaos. We believe that food tastes better when shared with stories, and every 
                meal should come with a side of laughter and connection.
              </p>
              <p>
                Today, we're not just a restaurant; we're a community of food lovers who 
                understand that the best ingredient in any dish is the company you share it with. ❤️
              </p>
            </div>
          </div>

          {/* Image with Story Bubbles */}
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Friends dining together"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating Story Bubbles */}
            <div className="absolute -top-4 -left-4 chat-bubble max-w-40 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm">💬 "This pasta is amazing!"</p>
            </div>
            
            <div className="absolute -bottom-4 -right-4 chat-bubble max-w-48 animate-bounce-in" style={{ animationDelay: '1s' }}>
              <p className="text-sm">🤫 "Did you hear about what happened next door?"</p>
            </div>
            
            <div className="absolute top-1/2 -right-8 chat-bubble max-w-36 animate-bounce-in" style={{ animationDelay: '1.5s' }}>
              <p className="text-sm">😍 "I'm definitely coming back!"</p>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="bg-chugal-beige rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Fun Facts About Chugalkhors 📊
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🗣️</div>
                <h4 className="text-2xl font-bold text-chugal-red mb-2">10,000+</h4>
                <p className="text-gray-600">Stories shared over meals</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-scale border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="text-2xl font-bold text-chugal-red mb-2">50+</h4>
                <p className="text-gray-600">New friendships formed monthly</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-scale border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">☕</div>
                <h4 className="text-2xl font-bold text-chugal-red mb-2">2 hrs</h4>
                <p className="text-gray-600">Average gossip session length</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What We Believe In 💝
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Community First', desc: 'Building connections one meal at a time' },
              { icon: '🍳', title: 'Fresh & Authentic', desc: 'Every dish made with love and care' },
              { icon: '💬', title: 'Stories Matter', desc: 'Everyone has a story worth sharing' },
              { icon: '😊', title: 'Joy in Simplicity', desc: 'Finding happiness in good food and company' }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
