import React from 'react'
import Nav from '../Components/Nav'
import styled from 'styled-components'
import AboutSection from '../Components/AboutSection'

const AboutPage = () => {
    return (
        <AboutPageContainer>
        <Nav/>
        <AboutSection />
        </AboutPageContainer>
    )
}

const AboutPageContainer = styled.div
`
height: 90vh;
padding: 0 4.5%
`

export default AboutPage
