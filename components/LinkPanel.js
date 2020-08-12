import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const LinkPanel = ({ id }) => {

    const base = 'https://scientific-journal.vercel.app'
    const url = `${base}/journal/${id}`
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
        <Cont>
            <ButtonWrapper><Link href={href}><Code>{id}</Code></Link></ButtonWrapper>{' '}
            <ButtonWrapper><Button variant='outline-dark' size='sm' onClick={copy}>Copy Link</Button></ButtonWrapper>
        </Cont>
    )
}

const Code = styled.code`
    font-size: 1.3em;
    cursor: pointer;
    word-wrap: break-word;
`

const ButtonWrapper = styled.div`
    display: inline-block; 
    vertical-align: middle;
    margin: auto; 
    width: fit-content; 
`

const Cont = styled.div`
    margin: auto; 
    width: fit-content; 
`

export default LinkPanel
