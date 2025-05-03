import React from 'react';

const EnterpriseHeroSection = () => {
  return (
    <div className="relative z-20 w-full min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 pb-24">
      
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0  bg-opacity-50 z-10" />

      
      <div className="relative z-20 w-full min-h-screen pt-28 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-start">
        
        
        <div className="mb-10">
          <div className="inline-flex backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-1 shadow-md">
            <button className="py-2 px-6 rounded-full bg-white text-gray-900 font-semibold shadow">
              Enterprise
            </button>
            <button className="py-2 px-6 rounded-full text-white hover:bg-white/10 font-medium transition">
              Express
            </button>
          </div>
        </div>

        
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Enterprise payments.<br />
            Engineered for<br />
            performance.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            South Africa's most reliable payment gateway. An end-to-end payments platform designed to optimise payments performance and streamline financial operations. We help enterprise businesses increase revenue and keep customers coming back.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300">
            TALK TO OUR TEAM
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseHeroSection;

