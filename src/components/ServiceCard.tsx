import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, className }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    // Hover animation for the icon
    const iconAnimation = gsap.to(card.querySelector('.icon-container'), {
      scale: 1.1,
      duration: 0.3,
      paused: true,
      ease: "power2.out"
    });

    // Hover animation for the card
    const cardAnimation = gsap.to(card, {
      y: -10,
      duration: 0.3,
      paused: true,
      ease: "power2.out"
    });

    card.addEventListener('mouseenter', () => {
      iconAnimation.play();
      cardAnimation.play();
    });

    card.addEventListener('mouseleave', () => {
      iconAnimation.reverse();
      cardAnimation.reverse();
    });

    return () => {
      iconAnimation.kill();
      cardAnimation.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 ${className}`}
    >
      <div className="icon-container w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white mb-4 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;