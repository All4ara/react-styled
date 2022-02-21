import React from 'react'
import styled, { css } from 'styled-components/macro';
import { keyframes } from 'styled-components'

import One from '../images/1.png'
import Two from '../images/2.png'
import Three from '../images/3.png'
import Four from '../images/4.png'
import Five from '../images/5.png'
import Six from '../images/6.png'
import Seven from '../images/7.png'
import Eight from '../images/8.png'
import Nine from '../images/9.png'
import Ten from '../images/10.png'
import Eleven from '../images/11.png'
import Twelve from '../images/12.png'
import Thirteen from '../images/13.png'
import Fourteen from '../images/14.png'
import Fifteen from '../images/15.png'
import Sixteen from '../images/16.png'
import Seventeen from '../images/17.png'
import Eighteen from '../images/18.png'
import Nineteen from '../images/19.png'
import Twenty from '../images/20.png'

import {
  FaInstagram,
  FaDiscord,
  FaTwitter,
  FaMediumM
} from 'react-icons/fa';

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  min-height: 100vh;
  
`;
const Show = styled.div`
  display: grid;
  place-items: center;
  z-index: 1;
`;

const Slider = styled.div`
  height: 100px;
  margin: auto;
  position: relative
  width: 90%
  display: grid;
  place-items: center;
  
`;
const scroll = keyframes`
 0% { transform: translateX(0); }
 100% { transform: translateX(calc(-400px * 18)); }
`

const SlideTrack = styled.div`
  display: flex;
  width: calc(250px * 6);
  animation: ${scroll} 60s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;
const Slide = styled.div`
  height: 400px;
  width: 400px
  display: flex;
  align-itmes: center;
  padding: 15px;
  perspective: 300px
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  transition: transform 1s;
  &:hover {
    transform: translateZ(20px);
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Quote = styled.div`
  flex: 1;
  padding: 2rem 0rem;
  z-index: 2;
  color: #F918FC;
  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;


const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;
  padding: 10px 0;
  z-index: 2;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #F918FC;
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;
const Discord = styled(FaDiscord)`
  ${Icons}
`;
const Twitter = styled(FaTwitter)`
  ${Icons}
`;

const Medium = styled(FaMediumM)`
  ${Icons}
`;



const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h2>EthFanatics <br /> </h2>
            <h5>Join our community bellow</h5>
            <SocialIcons>
              <a
                href='https://discord.gg/ethfanatics'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Discord />
              </a>
              <a
                href='https://www.instagram.com/ethfanatics/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Instagram />
              </a>
              <a
                href='https://twitter.com/EthFanatics'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Twitter />
              </a>
              <a
                href='https://medium.com/@ethfanatics'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Medium />
              </a>
            </SocialIcons>
          </Quote>

          {/* <FooterInfo>
            <h4>Contact Us</h4>
            <Link to="/homes">FAQS</Link>
            <Link to="/homes">Support</Link>
            <Link to="/homes">Questions</Link>
          </FooterInfo>
          <FooterInfo>
            <h4>Offices</h4>
            <Link to="/homes">United States</Link>
            <Link to="/homes">Europe</Link>
            <Link to="/homes">Canada</Link>
          </FooterInfo> */}
        </FooterTop>
        <Show>
          <Slider>

            <SlideTrack>

              <Slide>
                <Image src={One} alt='1' />
              </Slide>
              <Slide>
                <Image src={Two} alt='1' />
              </Slide>
              <Slide>
                <Image src={Three} alt='1' />
              </Slide>
              <Slide>
                <Image src={Four} alt='1' />
              </Slide>
              <Slide>
                <Image src={Five} alt='1' />
              </Slide>
              <Slide>
                <Image src={Six} alt='1' />
              </Slide>
              <Slide>
                <Image src={Seven} alt='1' />
              </Slide>

              <Slide>
                <Image src={Eight} alt='1' />
              </Slide>
              <Slide>
                <Image src={Nine} alt='1' />
              </Slide>
              <Slide>
                <Image src={Ten} alt='1' />
              </Slide>
              <Slide>
                <Image src={Eleven} alt='1' />
              </Slide>
              <Slide>
                <Image src={Twelve} alt='1' />
              </Slide>
              <Slide>
                <Image src={Thirteen} alt='1' />
              </Slide>
              <Slide>
                <Image src={Fourteen} alt='1' />
              </Slide>
              <Slide>
                <Image src={Fifteen} alt='1' />
              </Slide>
              <Slide>
                <Image src={Sixteen} alt='1' />
              </Slide>
              <Slide>
                <Image src={Seventeen} alt='1' />
              </Slide>
              <Slide>
                <Image src={Eighteen} alt='1' />
              </Slide>
              <Slide>
                <Image src={Nineteen} alt='1' />
              </Slide>
              <Slide>
                <Image src={Twenty} alt='1' />
              </Slide>
            </SlideTrack>

          </Slider>
        </Show>
        <FooterBottom>

        </FooterBottom>

      </Container>

    </Section>
  )
}

export default Footer
