import React, {Component}  from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavContainer>
            <Logo><StyledLink Component={Link} to="/">Ryan Neil Vega</StyledLink></Logo>
            <ul>
                <li><StyledLink Component={Link} to="/about">About</StyledLink></li>
                <li><StyledLink Component={Link} to="/projects">Projects</StyledLink></li>
                <li><StyledLink Component={Link} to="/contact">Contact</StyledLink></li>
            </ul>
        </NavContainer>
    )
}


const NavContainer = styled.div
`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1% 4.5% 1% 4.5%;


justify-content: space-between;
ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
}
`

const StyledLink = styled(Link)
`
    text-decoration: none;
    font-size: 2.25rem;
    cursor: pointer;

`

const Logo = styled.h1 
`
`
export default Nav
