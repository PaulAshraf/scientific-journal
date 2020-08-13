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
				<script type="text/javascript"> var infolinks_pid = 3280308; var infolinks_wsid = 0; </script>
				<script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
			</Head>

			<main>
				<Header />
				<JournalForm />
			</main>

			<Footer />
		</>
	)
}

