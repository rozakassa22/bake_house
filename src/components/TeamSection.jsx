import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 text-center">
      <h2 className="text-4xl font-script font-black text-gray-800 mb-12">Meet Our Amazing Bakers</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        <TeamMember name="Eddie Johnson" title="Pastry Chef" imgSrc="/path/to/eddie.jpg" />
        <TeamMember name="Mary Wright" title="Cake Specialist" imgSrc="/path/to/mary.jpg" />
        <TeamMember name="Patricia Naumann" title="Pastry Chef" imgSrc="/path/to/patricia.jpg" />
        <TeamMember name="Charles Maple" title="Bread Specialist" imgSrc="/path/to/charles.jpg" />
      </div>
    </div>
  );
};

export default TeamSection;
