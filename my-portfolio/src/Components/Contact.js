import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <ContactList>
                <li><a href="https://www.linkedin.com/in/ryan-neil-vega/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://www.linkedin.com/in/ryan-neil-vega/" target="_blank" rel="noreferrer">Instagram</a></li>
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
    font-size: 10rem;
    transition-duration: 0.5s;
    text-decoration: none;
}  
a:hover {
    color: red;
}

@media only screen and (max-width: 1024px) {
    flex-direction: column;
}

`

export default Contact
