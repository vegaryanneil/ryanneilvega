import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <ContactList>
                <li><a href="https://www.linkedin.com/in/ryan-neil-vega/" target="_blank" rel="noreferrer">LinkedIn</a></li>

                <li><a href="mailto:vegaryanneil@gmail.com?subject=I saw your portfolio!">Email</a></li>
    
            </ContactList>
        </div>
    )
}

const ContactList = styled.ul
`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
gap: 3rem;
li  {
    list-style: none;
}
a   {
    font-size: calc(100px + (50 - 42) * (100vw - 640px) / (1439 - 640));
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.5s;
}  
a:hover {
    color: #C84B31;
}

@media only screen and (max-width: 1024px) {
    flex-direction: column;
}



`

export default Contact
