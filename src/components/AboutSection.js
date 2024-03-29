import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    background-image: linear-gradient(360deg, #8D35FE  , #07000F  );
`
const Title = styled.h1`
    text-align: center;
    margin-top: 5rem;
    font-size: 3rem;
`
const Container = styled.div`
    padding: 6rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 570px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    color: white;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem)
    }
    p {
        margin-bottom: 2rem;
    }
`
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img { 
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%,
            height: 70%
        }
    }
`

const InfoSection = ({ heading, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, buttonLabel, reverse, image, delay, title }) => {
    return (
        <Section>
            <Title style={{ 'text-align': "center" }}>{title}</Title>
            <Container>
                <ColumnLeft reverse={reverse}
                    data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' data-aos-delay={delay} data-aos-anchor-placement='center-bottom'
                >
                    <h1>{heading}</h1>
                    <p>
                        {paragraphOne}
                    </p>
                    <p>
                        {paragraphTwo}
                    </p>
                    {/* <Button to="/homes" primary="true">{buttonLabel}</Button> */}
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' data-aos-delay={delay} data-aos-anchor-placement='center-bottom' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
