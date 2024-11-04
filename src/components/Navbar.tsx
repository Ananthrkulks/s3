import React, { useState } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const services = [
    { name: 'Character Animation', href: '#character-animation' },
    { name: 'Game Art', href: '#game-art' },
    { name: 'Product Animation', href: '#product-animation' },
    { name: 'Branding Animation', href: '#branding-animation' },
    { name: 'VFX', href: '#vfx' },
    { name: 'Motion Graphics', href: '#motion-graphics' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg pulse-effect" />
            <span className="text-white font-bold text-xl">AFlariastudio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-end flex-1">
            {/* Navigation Links */}
            <div className="flex items-center space-x-12 ml-16">
              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {showServices && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden transform transition-all duration-300 origin-top"
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-blue-400 transition"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition">Portfolio</a>
              <a href="#showreel" className="text-gray-300 hover:text-blue-400 transition">Showreel</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Let's Talk Button */}
            <div className="ml-12">
              <button className="animated-button px-6 py-2 rounded-full font-medium relative">
                <span className="shimmer"></span>
                <div className="button-content">
                  <MessageCircle className="w-4 h-4" />
                  <span>Let's Talk</span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition w-full"
                  onClick={() => setShowServices(!showServices)}
                >
                  Services <ChevronDown className={`w-4 h-4 transform transition-transform ${showServices ? 'rotate-180' : ''}`} />
                </button>
                {showServices && (
                  <div className="mt-2 pl-4 space-y-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-gray-300 hover:text-blue-400 transition py-1"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition">Portfolio</a>
              <a href="#showreel" className="text-gray-300 hover:text-blue-400 transition">Showreel</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
              <div className="pt-4 border-t border-white/10">
                <button className="animated-button w-full px-6 py-2 rounded-full font-medium relative">
                  <span className="shimmer"></span>
                  <div className="button-content justify-center">
                    <MessageCircle className="w-4 h-4" />
                    <span>Let's Talk</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;