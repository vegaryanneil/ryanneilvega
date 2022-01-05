import React from 'react'
import styled from 'styled-components'
import PortfolioProjectGIF from '../img/FilmPortfolioGIF.gif'
import CodedotlogGIF from '../img/CodedotlogGIF.gif'
import JYTGIF from'../img/JYTGIF.gif'   
const Project = () => {
    return (
        <>
        <ProjectContainer>
            <EachProject>
                <TitleContainer>
                    <AboutTextTitle id='Film_Portfolio'>Film Portfolio</AboutTextTitle>
                </TitleContainer>
                <ProjectImageContainer>
                <ProjectImg src={PortfolioProjectGIF} alt="GIF File of Film Portfolio Website" />
                </ProjectImageContainer>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perspiciatis aspernatur ratione voluptatum unde similique asperiores delectus architecto rem molestias eligendi, ea optio a vero maxime odio eveniet reiciendis illum?</p>
                <ButtonContainer>
                    <ViewButton><a href="https://github.com/vegaryanneil/portfolio-template-videographer" target="_blank" rel="noreferrer">View Code</a></ViewButton>
                    <ViewButton><a href="https://film-portfolio.netlify.app/" target="_blank" rel="noreferrer">Live Site</a></ViewButton>
                </ButtonContainer>
            </EachProject>
           
            <EachProject>
                <TitleContainer>
                    <AboutTextTitle id='Code_dot_log'>Code.log</AboutTextTitle>
                </TitleContainer>
                <ProjectImageContainer>
                <ProjectImg src={CodedotlogGIF} alt="GIF File of Codedotlog Website" />
                </ProjectImageContainer>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perspiciatis aspernatur ratione voluptatum unde similique asperiores delectus architecto rem molestias eligendi, ea optio a vero maxime odio eveniet reiciendis illum?</p>
                <ButtonContainer>
                    <ViewButton><a href="https://github.com/hanlee-311/codedotlog" target="_blank" rel="noreferrer">View Code</a></ViewButton>
                    <ViewButton><a href="https://codedotlog.herokuapp.com/" target="_blank" rel="noreferrer">Live Site</a></ViewButton>
                </ButtonContainer>
            </EachProject>
        
            <EachProject>
                <TitleContainer>
                    <AboutTextTitle id='Just_Your_Type'>Just Your Type</AboutTextTitle>
                </TitleContainer>
                <ProjectImageContainer>
                <ProjectImg src={JYTGIF} alt="GIF File of Just Your Type Website" />
                </ProjectImageContainer>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perspiciatis aspernatur ratione voluptatum unde similique asperiores delectus architecto rem molestias eligendi, ea optio a vero maxime odio eveniet reiciendis illum?</p>
                <ButtonContainer>
                    <ViewButton><a href="https://github.com/hanlee-311/Just-Your-Type" target="_blank" rel="noreferrer">View Code</a></ViewButton>
                    <ViewButton><a href="https://hanlee-311.github.io/Just-Your-Type/" target="_blank" rel="noreferrer">Live Site</a></ViewButton>
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
height: 100vh;
width: auto;
p{
    font-size: 2rem;
    padding: 2% 0;

}
@media (max-width: 1024px) {
height: auto;
width: 90vw;
padding: 5% 0;
}

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
justify-content: center;
`

const ProjectImg = styled.img
`
height: auto;
width: 65%;
@media (max-width: 1024px) {
    width: 100vw;
    height: auto;
}
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
text-decoration: none;
}

a:hover {
    transform: translateY(-1rem);
    cursor: pointer;
}
`
export default Project
