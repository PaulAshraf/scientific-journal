import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const LinkPanel = ({ id }) => {

    const url = `http://localhost:3000/journal/${id}`
    const href = `/journal/${id}`

    const copy = () => {
        const textArea = document.createElement("textarea");

        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = 0;
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';

        textArea.value = url;

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        document.execCommand('copy');

        document.body.removeChild(textArea);
    }


    return (
        <>
            <ButtonWrapper><Link href={href}><Code>{url}</Code></Link></ButtonWrapper>{' '}
            <ButtonWrapper><Button variant='outline-dark' size='sm' onClick={copy}>Copy</Button></ButtonWrapper>
        </>
    )
}

const Code = styled.code`
    font-size: 1.5em;
    cursor: pointer;
`

const ButtonWrapper = styled.div`
	margin: auto;
    width: fit-content;
    display: inline-block;
    vertical-align: middle;
`

export default LinkPanel
