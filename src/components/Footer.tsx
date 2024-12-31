import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/95 text-white/70">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span>contact@jdmdreams.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>123 JDM Street, Tokyo, Japan</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Inventory</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition-colors">Vehicle Import</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Modifications</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Compliance</a></li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube />
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Newsletter</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 rounded px-4 py-2 flex-grow focus:outline-none focus:border-red-500"
                />
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>&copy; 2024 JDM Dreams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;