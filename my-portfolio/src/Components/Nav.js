import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavContainer>
            <h1><a>Ryan Neil Vega</a></h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </NavContainer>
    )
}

const NavContainer = styled.div
`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 3rem;
ul {
    display: flex;
    align-items: center;
}
li {
font-size: 2rem;
list-style: none;
padding: 0 2rem;
}
`
export default Nav
