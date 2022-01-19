import React from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import One from '../images/rewards.png'
import Two from '../images/safe.png'
import Three from '../images/globe.png'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem calc((100vw - 1300px) / 2);
    background: #000d1a;
`
const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 1rem;
    color: white;
`
const Heading = styled.div`
    font-size: 2rem;
    padding: 1rem;
    text-align: center;
`
const Info = styled.div`
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 40px;
    text-align: center;
`
const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const InfoWrap = styled.div`
    padding: 0rem 1rem;
    min-height: 500px;
    height: 100%;
    text-align: center;
    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`
const Image = styled.img`
    width: 12rem;
    height: 12rem;
    max-width: 512px;
    max-height: 512px;
    object-fit: cover;
    margin-bottom: 1rem;
`



const ListingsSection = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1 data-aos='fade-right' data-aos-duration='1000' data-aos-anchor-placement='center-bottom'>The EthFamDAO</h1>
                </Heading>
                <Info>
                    <p data-aos='fade-left' data-aos-duration='1000' data-aos-anchor-placement='center-bottom'>For those that are new to the NFT space, a DAO is a fund created and ran by the community of NFT holders who decide the future of each collection. Decisions within the DAO are made by a voting system in which each individuals voice will be heard equally. Becoming a part of the EthFamDAO will unlock various features that grant you access to grow your collection as well as earn Eth rewards, among many other benefits.</p>
                </Info>
                <InfoRow>
                    <InfoWrap data-aos='zoom-out-up' data-aos-duration='1200' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                        <Image src={One} alt='home' />
                        <h2>EXCLUSIVE BENEFITS</h2>
                        <p>As members of the EthFamDAO you will have access to several exclusive benefits brought to you by Full Of Hits Cards. These benefits include weekly giveaways, exclusive discounts on products and breaks, as well as tips from experts on how to maximize your position in the card collecting industry.</p>
                    </InfoWrap>
                    <InfoWrap data-aos='zoom-out-up' data-aos-duration='1200' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                        <Image src={Two} alt='home' />
                        <h2>THE ETHFAN SAFE</h2>
                        <p>The EthFan Safe will allow all members in the EthFamDAO to fractionally own high-end cards. Upon the completion of our minting process, we will form the EthFamDAO to vote on what our purchasing strategy will be. 25% of all mint sales will go toward The EthFan Safe...how it's spent is up to the DAO!</p>
                    </InfoWrap>
                    <InfoWrap data-aos='zoom-out-up' data-aos-duration='1200' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                        <Image src={Three} alt='home' />
                        <h2>DIGITAL ACCESS</h2>
                        <p>DAO members hold the keys to the future of EthFans digital assets and Metaverese lifestyle. As we bridge the sport community to the future of Web3 digital ownership, we will need a headquarters to develop and curate to the communities needs. Which Metaverse? DAO members thats up to you!</p>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    )
}

export default ListingsSection
