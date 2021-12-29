import React from 'react'
import styled from 'styled-components'
import Introduction from '../Components/Introduction'
import Nav from '../Components/Nav'

const Landing = () => {
    return (
        <NavContainer>
            <Nav/>
            <Introduction/>
        </NavContainer>
    )
}


const NavContainer = styled.div
`
// width: 90vw;
height: 90vh;
padding: 0 4.5%
`
export default Landing;