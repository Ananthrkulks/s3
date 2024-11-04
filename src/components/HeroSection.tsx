import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, Play } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center"
      aria-label="Professional Animation Services"
    >
      {/* Video Background - Hidden on Mobile */}
      <div className="absolute inset-0 hidden lg:block overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="https://player.vimeo.com/external/477735657.hd.mp4?s=6781fd5d4634c8c3b0b53d572ce0da48f6c9f734&profile_id=174" type="video/mp4" />
        </video>
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=2000"
          alt="Animation Studio Showcase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="hero-content max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Visual Stories with Precision
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
            Award-winning animation studio delivering world-class animation services for games, products, and digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#services"
              className="animated-button px-8 py-4 rounded-full font-medium relative group"
              aria-label="Explore our animation services"
            >
              <span className="shimmer"></span>
              <div className="button-content">
                <span>Explore Services</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </a>
            <a 
              href="#portfolio"
              className="px-8 py-4 rounded-full font-medium relative group border border-white/20 hover:bg-white/10 transition-all duration-300"
              aria-label="View our animation portfolio"
            >
              <div className="flex items-center gap-2 text-white">
                <Play className="w-5 h-5" />
                <span>View Portfolio</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        aria-hidden="true"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;