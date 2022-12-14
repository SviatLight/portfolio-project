import React from 'react';
import Header from '../components/Header';
import WorkSection from '../components/WorkSection';

const Work = () => {
  return (
    <div name="pet projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-4 py-20 flex flex-col justify-center w-full h-full">
        <Header title="Pet Projects" description="Check out some of my recent projects" />
        <WorkSection />
      </div>
    </div>
  );
};

export default Work;
