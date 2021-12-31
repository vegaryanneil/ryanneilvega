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

`

export default AboutPage
