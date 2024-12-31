import React from 'react';
import JDMFact from '../components/JDMFact';
import VideoHero from '../components/VideoHero';
import CarListing from '../components/CarListing/index';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <>
      <JDMFact />
      <VideoHero />
      <CarListing />
      <WhyChooseUs />
      <Services />
      <Reviews />
    </>
  );
};

export default Home;