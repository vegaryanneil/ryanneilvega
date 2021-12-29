import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavContainer>
            <Logo><Link to="/">Ryan Neil Vega</Link></Logo>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </NavContainer>
    )
}


const NavContainer = styled.div
`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 4.5% 1% 4.5%;

justify-content: space-between;
ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
}
li {
    font-size: 3rem;
}
`

const Logo = styled.h1 
`
font-size: 5rem;
a{
text-decoration: none;
cursor: pointer;
}
`
export default Nav
