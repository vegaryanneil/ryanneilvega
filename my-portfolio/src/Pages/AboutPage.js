import React from 'react'
import Nav from '../Components/Nav'
import styled from 'styled-components'

const AboutPage = () => {
    return (
        <AboutPageContainer>
        <Nav/>
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
        </AboutPageContainer>
    )
}

const AboutPageContainer = styled.div
`
padding: 2rem 10rem;
`
const TitleContainer = styled.div
`
display: flex;
flex-direction: column;
`
const AboutDisplay = styled.div
`
display: flex;
`

const AboutTextTitle = styled.h2
`
font-size: 3rem;
width: 13rem;
padding-top: 2rem;
`

const AboutText = styled.div
`
p {
    font-size: 7rem;
    line-height: 6rem;
    padding-top: 2rem;
}
`

const ContactTitle = styled.h2
`
font-size: 3rem;
width: 13rem;
padding-top: 1rem;
`

const ContactList = styled.ul
`
li {
    font-size: 7rem;
    list-style: none;
}
`

export default AboutPage
