import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavContainer>
            <Logo><a href="/home">Ryan Neil Vega</a></Logo>
            <ul>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
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
