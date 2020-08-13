import React from 'react'
import Link from 'next/link'
import Head from "next/head"
import styled from 'styled-components'
import axios from 'axios'
import { Button } from 'react-bootstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Journal = ({ data }) => {

    const getImgUrl = (data) => {
        const type = data.type
        const base = 'https://scientific-journal.vercel.app'

        switch (type) {
            case 'nature':
                return base + '/nature.png'
            case 'ieee':
                return base + '/ieee.png'
            case 'pubmed':
                return base + '/pubmed.png'
            case 'bbc':
                return base + '/bbc.jpg'
            default:
                return ''
        }
    }

    return (
        <>
            <Head>
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:creator" content={data.name} />
                <meta name="twitter:card" content="summary" />
                <meta property="og:image" itemProp="image" content={getImgUrl(data)} />
                <meta property="og:url" content='https://scientific-journal.vercel.app' />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={data.description} />
                <meta property="og:title" content={data.title} />
                <meta name="description" content={data.description} />

                <title>fake Scientific Journal</title>
                <link rel="icon" href="/favicon.ico" />

                <script type="text/javascript"> var infolinks_pid = 3280308; var infolinks_wsid = 0; </script>
                <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
            </Head>

            <Header />
            <Text> 🤭 <br /> Uh oh, you've been bambozeled by <strong>{data.name !== '' ? `${data.name}` : 'someone'}</strong>. This is not a real journal.</Text>
            <Text>Create one for yourself by clicking below.</Text>
            <br />
            <ButtonWrapper><Link href='/'><Button variant='dark'>Create a Fake Journal →</Button></Link></ButtonWrapper>
            <br />
            <br />
            <Footer />
        </>
    )
}

const Text = styled.p`
    font-family: Lato;
    font-size: 2em;
    width: 70%;
    margin: auto;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

    margin-top: 2em;
    margin-bottom: 2em;
`

const ButtonWrapper = styled.div`
    width: fit-content;
    margin: auto;
    text-align: center;
`

export async function getServerSideProps(context) {

    const id = context.params.id

    // const base = context.req.headers.referer.split('journal')[0]
    const base = 'https://scientific-journal.vercel.app/'

    let data = null
    try {
        const res = await axios.get(`${base}/api/journal/${id}`)
        data = res.data
    }
    catch (err) {
        console.error(err)
    }

    return { props: { data } }
}

export default Journal