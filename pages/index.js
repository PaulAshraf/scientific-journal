import Head from "next/head"

import JournalForm from '../components/JournalForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

			<Footer />
		</>
	)
}

