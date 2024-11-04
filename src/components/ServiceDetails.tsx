import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { gsap } from 'gsap';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceDetailsProps {
  title: string;
  features: ServiceFeature[];
  image: string;
  reversed?: boolean;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ title, features, image, reversed }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageEl = imageRef.current;

    // Parallax effect for the image
    gsap.to(imageEl, {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      },
      y: 50,
      ease: "none"
    });

    // Feature cards stagger animation
    gsap.from(section.querySelectorAll('.feature-card'), {
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: {
        amount: 0.4,
        from: reversed ? "end" : "start"
      },
      ease: "power3.out"
    });

  }, [reversed]);

  return (
    <div ref={sectionRef} className="flex flex-col lg:flex-row items-center gap-12">
      <div className={`w-full lg:w-1/2 ${reversed ? 'lg:order-2' : ''}`}>
        <div ref={imageRef} className="relative group overflow-hidden rounded-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
      <div className={`w-full lg:w-1/2 ${reversed ? 'lg:order-1' : ''}`}>
        <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
        <div className="grid gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-blue-500/20 rounded-full">
                  <Check className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;