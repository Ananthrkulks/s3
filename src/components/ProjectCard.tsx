import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-video w-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-purple-400 text-sm mb-1">{category}</p>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;