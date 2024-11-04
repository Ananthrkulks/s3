import React from 'react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, bio }) => {
  return (
    <div className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="relative mb-6">
        <img 
          src={image} 
          alt={name}
          className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-blue-400"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-blue-400 mb-3">{role}</p>
        <p className="text-gray-400 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;