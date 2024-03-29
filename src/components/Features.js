import React from 'react'
import styled from 'styled-components';
import ImageOne from '../images/nextlvl.jpeg'

const Section = styled.section`
  background: #2adaae;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 15rem;
`;

const Container = styled.div`
  background: linear-gradient(to top, #2adaae, #9335e0);;
  padding: 3rem 2rem;
  position: relative;
  color: white;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const InfoLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #F65EF8 ;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content data-aos='fade-right' data-aos-duration='1200' data-aos-once='true' data-aos-delay='300' data-aos-anchor-placement='center-bottom'>
              <h1>Giving Back</h1>
              <p>We want to support empowering athletes, despite any stereotypes they may face, and realize their potential through sports as their medium.</p>
              <p>Next Level Basketball is a player development company that has been promoting growth in the South Florida community since 2014.</p>

              <p>By donating , it will allow for more athletes onto the playing field. This is just one of the six organizations we plan to empower. More details on our Medium.</p>
              <InfoLink href='https://medium.com/@ethfanatics' target={"_blank"}>Read More...</InfoLink>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image data-aos='fade-left' data-aos-duration='1000' data-aos-once='true' data-aos-anchor-placement='center-bottom' src={ImageOne} />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  )
}

export default Features
