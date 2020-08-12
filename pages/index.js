import Head from "next/head"
import styled from 'styled-components'

import JournalForm from '../components/JournalForm'
import Header from '../components/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>fake Scientific Journal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header />
				<JournalForm />
			</main>

			<Footer>2020 © Paul Ashraf</Footer>
		</>
	)
}



const Footer = styled.footer`
	width: fit-content;
	margin: auto;
	margin-top: 2em;
`
