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
                <p>I am currently a freelance web developer with experience with the <span>MERN Stack</span>. I completed my certification through <span>University of North Carolina at Chapel Hill</span> as a <span>Full Stack Web developer</span>.
                    
                I am also self-taught web designer that is passionate about User interfaces and User experiences.</p>
                <p>My <span>passions</span> in code development are </p>
                <PassionList>
                    <li>CSS</li>
                    <li>UI/UX</li>
                    <li>Accessibility via W3C</li>
                </PassionList>
                
                <p>I am <span>fueled by</span> the neverending amount of <span>knowledge</span> available in this industry. There is so much content to consume to better improve the efficiency of my projects.</p>
                
                <p>I am always <span>interested</span> in a challenge. Feel free to <span><a href="https://www.linkedin.com/in/ryan-neil-vega/" target="_blank" rel="noreferrer">reach out!</a></span></p>
            </AboutText>   
        </AboutDisplay>
        <AboutDisplay>
        <ContactTitle>contact.</ContactTitle>
            <ContactList>
                <li><a href="https://www.linkedin.com/in/ryan-neil-vega/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="mailto:vegaryanneil@gmail.com?subject=I saw your portfolio!">Email</a></li>
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
    padding-top: 2rem;
}
span {
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
    color: #fdc046;
}
span > a {
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
    color: #C84B31;
    text-decoration: none;
}
`
const PassionList = styled.ul
`
li {
    list-style: none;
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
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
li  {
    list-style: none;
}
a   {
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.5s;
}  
a:hover {
    color: #C84B31;
}
`


export default AboutSection
