import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Play } from 'lucide-react';

const ShowreelSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.showreel-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Showreel</h2>
          <div className="showreel-content relative aspect-video bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1626544827763-d516dce335e2" 
              alt="Showreel thumbnail"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:bg-blue-400">
                <Play className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;