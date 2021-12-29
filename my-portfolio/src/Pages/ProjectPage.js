import React from 'react'
import Nav from '../Components/Nav'
import Project from '../Components/Project'
import styled from 'styled-components'
const ProjectPage = () => {
    return (
        <>
        <ProjectPageContainer>
            <Nav />
            <Project />
        </ProjectPageContainer>
        </>
    )
}

const ProjectPageContainer = styled.div
`
height: 90vh;
padding: 0 4.5%
`

export default ProjectPage
