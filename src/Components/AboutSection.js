import React from 'react'
import styled from 'styled-components'

const AboutSection = () => {
    return (
        <div>
            <AboutDisplay>
        <TitleContainer>
            <AboutTextTitle>More</AboutTextTitle>
            <AboutTextTitle>About</AboutTextTitle>
            <AboutTextTitle>Me.</AboutTextTitle>
        </TitleContainer>
            <AboutText>
                <p>I am currently a freelance web developer with experience with the MERN Stack. I am also self-taught web designer that is passionate about User interfaces and User experiences.</p>
                
                <p>I am fueled by the neverending amount of knowledge available in this industry. There is so much content to consume to better improve the efficiency of my creations.</p>
                
                <p>I am always interested in a challenge. Feel free to reach out!</p>
            </AboutText>   
        </AboutDisplay>
        <AboutDisplay>
        <ContactTitle>contact.</ContactTitle>
            <ContactList>
                <li>LinkedIn</li>
                <li>Email</li>
                <li>Instagram</li>
            </ContactList>
        </AboutDisplay>
        </div>
    )
}

const TitleContainer = styled.div
`
display: flex;
flex-direction: column;
@media (max-width: 1024px) {
    flex-direction: row;
}

`
const AboutDisplay = styled.div
`
display: flex;
padding: 2.5% 4.5%;
@media (max-width: 1024px) {
    flex-direction: column;
}
`

const AboutTextTitle = styled.h2
`
font-size: 5rem;
width: 20rem;
padding-top: 2rem;
`

const AboutText = styled.div
`
p {
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
    // line-height: 6rem;
    padding-top: 2rem;
}
`

const ContactTitle = styled.h2
`
font-size: 5rem;
width: 20rem;
padding-top: 1rem;
`

const ContactList = styled.ul
`
li {
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
    list-style: none;
}
`


export default AboutSection
