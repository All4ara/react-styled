import React from 'react'
import styled from 'styled-components/macro';
import One from '../images/lior.png'
import Two from '../images/ariel.png'
import Three from '../images/orli.png'
import Four from '../images/tino.png'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem calc((100vw - 1300px) / 2);
    background: linear-gradient(to bottom, #2adaae, #F918FC);
`
const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 1rem;
`
const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2rem 1rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`
const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const InfoWrap = styled.div`
    padding: 0rem 1rem;
    min-height: 500px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 512px;
    max-height: 512px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 50%;
`



const ListingsSection = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1 data-aos='fade-right' data-aos-duration='1000' data-aos-anchor-placement='center-bottom'>Meet the Team</h1>
                </Heading>
                <InfoRow>
                    <InfoWrap data-aos='zoom-out-up' data-aos-duration='1400' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                        <Image src={One} alt='home' />
                        <h2>Lior aka Mr. Fanatic</h2>
                        <p>Creative Director</p>
                    </InfoWrap>
                    <InfoWrap data-aos='zoom-out-down' data-aos-duration='1400' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                        <Image src={Two} alt='home'
                            css={`
                            margin-top: 120px; 
                            @media screen and (max-width: 768px) {
                                margin-top: 0px;
                            }
                        `} />
                        <h2>Ariel aka Fanatic Dev</h2>
                        <p>Lead Developer</p>
                    </InfoWrap>
                    <InfoWrap data-aos='zoom-out-up' data-aos-duration='1600' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                        <Image src={Three} alt='home' />
                        <h2>Orli aka EthernalLama</h2>
                        <p>Creative Writer</p>
                    </InfoWrap>
                    <InfoWrap data-aos='zoom-out-down' data-aos-duration='1600' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                        <Image src={Four} alt='home'
                            css={`
                            margin-top: 120px; 
                            @media screen and (max-width: 768px) {
                                margin-top: 0px;
                            }
                        `} />
                        <h2>Tino aka Blugrove</h2>
                        <p>Artist | Developer</p>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    )
}

export default ListingsSection
