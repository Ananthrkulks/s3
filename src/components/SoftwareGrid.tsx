import React from 'react';
import { Software } from '../types';

interface SoftwareGridProps {
  software: Software[];
}

const SoftwareGrid: React.FC<SoftwareGridProps> = ({ software }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {software.map((item, index) => (
        <div 
          key={index}
          className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 relative">
              <img 
                src={item.logo} 
                alt={item.name}
                className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftwareGrid;