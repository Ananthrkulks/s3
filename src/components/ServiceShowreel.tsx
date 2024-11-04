import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { gsap } from 'gsap';

interface ServiceShowreelProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const ServiceShowreel: React.FC<ServiceShowreelProps> = ({
  title,
  description,
  videoUrl,
  thumbnailUrl,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="showreel-video mb-24">
      <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 max-w-2xl">{description}</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transform transition-all duration-500 hover:scale-110 hover:bg-blue-400 group">
              <Play className="w-8 h-8 transform transition-transform duration-500 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceShowreel;