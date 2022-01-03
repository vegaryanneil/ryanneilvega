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
`
export default Landing;