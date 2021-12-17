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
            <LandingTextTitle>project.</LandingTextTitle>
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
p {
    font-size: 7rem;
}

`
const LandingTextTitle = styled.h1
`
font-size: 3rem;
width: 13rem;
padding-top: 1rem;
`

const LandingList = styled.ul
`
li {
    font-size: 7rem;
    list-style: none;
}
`
export default Introduction
