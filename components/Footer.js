import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <footer>
            <Wrapper>Made with ❤️ using Next.js • <a href='https://github.com/PaulAshraf/scientific-journal' target="_blank">Source Code</a></Wrapper>
            <Wrapper>{new Date().getFullYear()} © Paul Ashraf</Wrapper>
        </footer>
    )
}

const Wrapper = styled.div`
	width: fit-content;
	margin: auto;
`

export default Footer
