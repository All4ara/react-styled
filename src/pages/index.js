import React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour, InfoDataFive } from '../data/InfoData';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection';
import InfoSectionTwo from '../components/InfoSectionTwo';
import InfoSectionThree from '../components/InfoSectionThree';
import AboutSection from '../components/AboutSection';
import ListingsSection from '../components/ListingsSection';
import DaoSection from '../components/DaoSection';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    padding: 5rem 0;
    font-size: 3rem;
    color: #F918FC;
    background-image:  #000d1a;
`
const Roadmap = styled.div`
  padding-bottom: 5rem;
  background: #000d1a;
`

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <AboutSection {...InfoData} />

      <Roadmap>
        <Title>Roadmap</Title>
        <InfoSection {...InfoDataTwo} />
        <InfoSectionTwo {...InfoDataThree} />
        <InfoSection {...InfoDataFour} />
        <InfoSectionThree {...InfoDataFive} />
      </Roadmap>
      <Features />
      <DaoSection />
      <ListingsSection />

    </>
  );
};

export default Home;
