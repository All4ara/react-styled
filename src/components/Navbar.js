import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
// import { menuData } from '../data/MenuData.js'
// import { Button } from './Button.js';
import Bars from '../images/three-dots.png';
import EFLogo from '../images/ef-logo.png'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position fixed;
    width: 100%;
    
`
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 .5rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`
const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 38px;
        width: 38px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 25%)
    }
`
const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const NavMenuLinks = styled.a`
    ${NavLink}
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== '/' ? '#000d1a' : 'transparent',
    transition: '0.4s'
  };


  return (
    <Nav style={style}>
      <Logo to='/'><img src={EFLogo} alt='Logo' style={{ "width": "3.5rem" }} /></Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>

        <NavMenuLinks href={"https://discord.gg/ethfanatics"} target={"_blank"}>
          Discord
        </NavMenuLinks>
        <NavMenuLinks href={"https://twitter.com/EthFanatics"} target={"_blank"}>
          Twitter
        </NavMenuLinks>
        <NavMenuLinks href={"https://bunches.chat/invite/znxo8/a4n6r5"} target={"_blank"}>
          Bunches
        </NavMenuLinks>
        <NavMenuLinks href={"https://www.instagram.com/ethfanatics/"} target={"_blank"}>
          Instagram
        </NavMenuLinks>

      </NavMenu>
      <NavBtn>
        <NavMenuLinks href={"https://medium.com/@ethfanatics"} target={"_blank"}>
          Medium
        </NavMenuLinks>
      </NavBtn>
    </Nav>
  )
}
