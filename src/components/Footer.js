import React from 'react'
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
  FaTwitter,
  FaMedium,
  FaMediumM
} from 'react-icons/fa';

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);
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

  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;

const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
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

const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;

const Youtube = styled(FaYoutube)`
  ${Icons}
`;

const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h2>EthFanatics <br /> </h2>
            <h5>Join our community bellow</h5>
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
        <FooterBottom>
          <SocialIcons>
            <a
              href='https://discord.gg/FZVDSs45sM'
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
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Medium />
            </a>
          </SocialIcons>
          {/* <Contact>
            <Button to='/homes'>
              Let's Chat <IoMdArrowRoundForward />
            </Button>
          </Contact> */}
        </FooterBottom>
      </Container>
    </Section>
  )
}

export default Footer
