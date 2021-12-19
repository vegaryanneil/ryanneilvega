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

const Logo = styled.h1 
`
a{
font-size: 10rem;
text-decoration: none;
cursor: pointer;
}
`

const NavContainer = styled.div
`
display: flex;
flex-direction: row;
justify-content: space-between;
ul {
    display: flex;
    align-items: center;
    display: none;
}
li {
font-size: 2rem;
list-style: none;
padding: 0 2rem;
}
`
export default Nav
