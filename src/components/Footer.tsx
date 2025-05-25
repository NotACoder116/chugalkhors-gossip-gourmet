
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold text-chugal-red">Chugalkhors</span>
              <span className="text-2xl">🍲</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Where every meal comes with a side of stories and every conversation 
              is seasoned with flavor. Join us for food, fun, and fabulous gossip!
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors hover-scale" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors hover-scale" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors hover-scale" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors hover-scale" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-chugal-red">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#chefs" className="text-gray-300 hover:text-white transition-colors">Our Chefs</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-chugal-red">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-chugal-green mb-2">📍 Address</h5>
                <p className="text-gray-300 text-sm">
                  123 Gossip Lane,<br />
                  Chatter Colony,<br />
                  Mumbai - 400001
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-chugal-green mb-2">📞 Phone</h5>
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div>
                <h5 className="font-semibold text-chugal-green mb-2">✉️ Email</h5>
                <p className="text-gray-300 text-sm">hello@chugalkhors.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-xl font-bold mb-6 text-center text-chugal-red">Opening Hours</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
            {[
              { day: 'Mon', hours: '9:00 AM - 11:00 PM' },
              { day: 'Tue', hours: '9:00 AM - 11:00 PM' },
              { day: 'Wed', hours: '9:00 AM - 11:00 PM' },
              { day: 'Thu', hours: '9:00 AM - 11:00 PM' },
              { day: 'Fri', hours: '9:00 AM - 12:00 AM' },
              { day: 'Sat', hours: '9:00 AM - 12:00 AM' },
              { day: 'Sun', hours: '10:00 AM - 11:00 PM' }
            ].map((schedule, index) => (
              <div key={index} className="text-center p-3 bg-gray-800 rounded-lg">
                <div className="font-bold text-chugal-green">{schedule.day}</div>
                <div className="text-gray-300 text-sm mt-1">{schedule.hours}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Footer Section */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-chugal-red mb-4">🎉 Fun Fact of the Day</h4>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Did you know? The average Chugalkhor spends 2.5 hours here per visit! 
              That's more time than most people spend watching a movie. Now that's what we call 
              quality entertainment! 🍿🎬
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-chugal-red mb-4">Stay in the Loop! 📬</h4>
          <p className="text-gray-300 mb-6">
            Get the latest gossip, menu updates, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address..." 
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-chugal-green"
            />
            <button className="px-6 py-3 bg-chugal-red hover:bg-red-600 text-white rounded-lg font-semibold transition-colors hover-scale">
              Subscribe 📮
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Chugalkhors. All rights reserved. Made with ❤️ and lots of masala.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              💫 Remember: Life's too short for bland food and boring conversations! 💫
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
