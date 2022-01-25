import React from 'react'
import styled from 'styled-components'
import bot from'../img/bot.png'
import { Link } from 'react-router-dom'

const Introduction = () => {
    return (
        <>
        <IntroContainer>
            <LandingTextTitle>about.</LandingTextTitle>
            <p>I am a <span>MERN full stack web developer</span> with an interest in <span>UI and UX Design</span>.</p> <Link Component={Link} to="/about"><img src={bot} alt="Hello Bot Icon"></img></Link>
        </IntroContainer>
        <IntroContainer>
            <LandingTextTitle>projects.</LandingTextTitle>
            <LandingList>
                <li> Victoria Bryant|<span>Front End Consultant</span></li>
                <li><a href="/projects#Film_Portfolio" id="FilmPortfolio"> Film Portfolio </a>|<span>Lead Developer</span></li>
                <li><a href="/projects#Code_dot_log"> Code.log </a>|<span>Lead Front End Developer</span></li>
                <li><a href="/projects#Just_Your_Type"> JustYourType</a>|<span>Lead Front End Developer</span></li>
            </LandingList>
            </IntroContainer>
        <IntroContainer>
            <LandingTextTitle>contact.</LandingTextTitle>
            <LandingList>
                <li><a href="https://www.linkedin.com/in/ryan-neil-vega/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="mailto:vegaryanneil@gmail.com?subject=I saw your portfolio!">Email</a></li>
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
span {
    font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
    color: #fdc046;
}
img {
    transition-duration: 0.5s;
    padding: 0 0 2rem 1rem;
}
img:hover {
    transform: translateY(-1.5rem);
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
    a {
        font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
        text-decoration: none;
        cursor: pointer;
        transition-duration: 0.5s;
    }
    a:hover {
        color: #C84B31;
    }
}

`
export default Introduction
