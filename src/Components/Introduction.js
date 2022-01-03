import React from 'react'
import styled from 'styled-components'

const Introduction = () => {
    return (
        <>
        <IntroContainer>
            <LandingTextTitle>about.</LandingTextTitle>
            <p>I am a full stack web developer with an interest in UI and UX Design.</p>
        </IntroContainer>
        <IntroContainer>
            <LandingTextTitle>projects.</LandingTextTitle>
            <LandingList>
                <li> Victoria Bryant // Front End Consultant</li>
                <li> Film Portfolio // Lead Developer</li>
                <li> Code.log // Lead Front End Developer</li>
                <li> JustYourType // Lead Front End Developer</li>
            </LandingList>
            </IntroContainer>
        <IntroContainer>
            <LandingTextTitle>contact.</LandingTextTitle>
            <LandingList>
                <li>LinkedIn</li>
                <li>Email</li>
                <li>Instagram</li>
            </LandingList>
        </IntroContainer>
        </>
    )
}

const IntroContainer = styled.div
`
display: flex;
padding: 2.5% 4.5%;
align-items: center;
p {
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
}
@media (max-width: 1024px) {
    flex-direction: column;
    align-items: normal;
}
`
const LandingTextTitle = styled.h2
`
font-size: 5rem;
padding-right: 4.5%;
width: 20rem;
`

const LandingList = styled.ul
`
li {
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
    list-style: none;
}
`
export default Introduction
