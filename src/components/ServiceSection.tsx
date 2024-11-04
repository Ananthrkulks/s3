import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceSectionProps {
  title: string;
  description: string;
  image: string;
  features: { title: string; description: string }[];
  reversed?: boolean;
  ctaLink: string;
  ctaText: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  image,
  features,
  reversed,
  ctaLink,
  ctaText
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 py-20 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className="w-full lg:w-1/2">
        <div className="relative group overflow-hidden rounded-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-8">{description}</p>
        <div className="space-y-6 mb-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <a 
          href={ctaLink}
          className="animated-button px-6 py-3 rounded-full font-medium relative inline-flex"
        >
          <span className="shimmer"></span>
          <div className="button-content">
            <span>{ctaText}</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceSection;