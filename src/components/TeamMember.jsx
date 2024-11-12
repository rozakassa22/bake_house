import React from 'react';

const TeamMember = ({ name, title, imgSrc }) => {
  return (
    <div className="text-center w-48 space-y-4">
      <img src="assets/raspberry-patch.PNG" alt={name} className="w-32 h-32 rounded-full mx-auto object-cover" />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default TeamMember;
