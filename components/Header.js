import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <TitleWrapper>
            <SubTitleLeft>
                fake
            </SubTitleLeft>
            <SubTitleRight>
                Scientific Journal
            </SubTitleRight>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
	margin: auto;
    width: fit-content;
`

const Title = styled.div`
    font-size: 5em;
    
	display: inline-block;
    margin: 0.1em;
    
    @media (max-width: 768px) {
        font-size: 3em;
        margin: auto;
        width: fit-content;
        display: block;
    }

`

const SubTitleLeft = styled(Title)`
	font-family: 'Permanent Marker', cursive;
`

const SubTitleRight = styled(Title)`
	font-family: Oswald;
`

export default Header
