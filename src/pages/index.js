import React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection';
import ListingsSection from '../components/ListingsSection';

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <ListingsSection />
      <Features />
      <InfoSection {...InfoDataTwo} />
    </>
  );
};

export default Home;
