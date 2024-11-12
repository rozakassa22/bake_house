import React from 'react';
import AboutHeader from '../components/AboutHeader';
import IntroSection from '../components/IntroSection';
import TeamSection from '../components/TeamSection';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50">
      <AboutHeader />
      <IntroSection />
      <TeamSection />
    </div>
  );
};

export default AboutUsPage;
