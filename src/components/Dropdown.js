import React from 'react'
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, #2adaae, #9335e0);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 2.6rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)``
const DropdownWrapper = styled.div``
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`
const DropdownLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>

                    <DropdownLink href={'https://discord.gg/FZVDSs45sM'} target={"_blank"}>
                        Discord
                    </DropdownLink>
                    <DropdownLink href={"https://twitter.com/EthFanatics"} target={"_blank"}>
                        Twitter
                    </DropdownLink>
                    <DropdownLink href={"https://bunches.chat/invite/znxo8/a4n6r5"} target={"_blank"}>
                        Bunches
                    </DropdownLink>
                    <DropdownLink href={"https://www.instagram.com/ethfanatics/"} target={"_blank"}>
                        Instagram
                    </DropdownLink>
                </DropdownMenu>
                <BtnWrap>
                    <DropdownLink href={'https://discord.gg/FZVDSs45sM'} target={"_blank"}>
                        Mint
                    </DropdownLink>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
