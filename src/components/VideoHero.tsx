import React from 'react';
import SearchFilter from './SearchFilter';

const VideoHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Hero-Video.webm"
      />
      
      {/* Overlay */}
     
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Ikigai <span className="text-red-500">Motors</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          Your trusted partner for USED & IMPORT CARS, PARTS, & SERVICE
        </p>
        <SearchFilter />
        
        <p className="mt-1 text-xl font-light text-white/90 tracking-wide animate-pulse">
          Discover Your Perfect Drive
        </p>
      </div>
    </div>
  );
};

export default VideoHero;