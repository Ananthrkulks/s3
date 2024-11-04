import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg" />
              <span className="text-white font-bold text-xl">AFlariastudio</span>
            </div>
            <p className="text-gray-400">
              Creating stunning digital experiences through animation and design.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" /> contact@aflaria.studio
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" /> Los Angeles, CA
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">3D Animation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Game Art</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Character Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Environment Art</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} AFlariastudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;