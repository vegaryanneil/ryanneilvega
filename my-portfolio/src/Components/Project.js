import React from 'react'
import styled from 'styled-components'
const Project = () => {
    return (
        <>
        <ProjectContainer>
            <EachProject>
                <TitleContainer>
                    <AboutTextTitle>Film Portfolio</AboutTextTitle>
                </TitleContainer>
                <ProjectImageContainer>
                
                </ProjectImageContainer>
                <ButtonContainer>
                    <ViewButton><a>View Code</a></ViewButton>
                    <ViewButton><a>Live Site</a></ViewButton>
                </ButtonContainer>
            </EachProject>
        
            <EachProject>
                <TitleContainer>
                    <AboutTextTitle>Code.log</AboutTextTitle>
                </TitleContainer>
                <ProjectImageContainer>
                
                </ProjectImageContainer>
                <ButtonContainer>
                    <ViewButton><a>View Code</a></ViewButton>
                    <ViewButton><a>Live Site</a></ViewButton>
                </ButtonContainer>
            </EachProject>
        
            <EachProject>
                <TitleContainer>
                    <AboutTextTitle>Just Your Type</AboutTextTitle>
                </TitleContainer>
                <ProjectImageContainer>
                
                </ProjectImageContainer>
                <ButtonContainer>
                    <ViewButton><a>View Code</a></ViewButton>
                    <ViewButton><a>Live Site</a></ViewButton>
                </ButtonContainer>
            </EachProject>
    
        </ProjectContainer>
        </>
    )
}


const ProjectContainer = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2.5%

`
const EachProject = styled.div
`
height: 90vh;
width: 90vw;
`
const TitleContainer = styled.div
`
`
const AboutTextTitle = styled.h2
`
font-size: 5rem;
text-align: left;
`
const ProjectImageContainer = styled.div
`
display: flex;
background-color: #ECDBBA;
height: 60vh;
`
const ButtonContainer = styled.div
`
display: flex;
justify-content: space-between;
padding-top: 2rem;


`
const ViewButton = styled.div
`
a{
font-size: 3rem;
display: inline-block;
background-color: #C84B31;
width: 12rem;
text-align: center;
border-radius: 4px;
transition-duration: 0.4s;
}

a:hover {
    transform: translateY(-1rem);
    cursor: pointer;
}
`
export default Project
