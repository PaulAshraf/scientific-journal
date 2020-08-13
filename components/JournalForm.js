import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Button, Spinner } from 'react-bootstrap'
import axios from 'axios'

import LinkPanel from './LinkPanel'


const JournalForm = () => {

	const [type, setType] = useState({
		nature: false,
		ieee: false,
		pubmed: false,
		bbc: false,
	})

	const [pressed, setPressed] = useState(false)
	const [loading, setLoading] = useState(false)
	const [id, setId] = useState(null)

	const generate = async (e) => {
		e.preventDefault()

		setPressed(true)
		setLoading(true)

		const data = {
			title: e.target.title.value,
			description: e.target.description.value,
			name: e.target.name.value,
			type: e.target.type.value,
		}

		let res = await axios.post('api/journal', data)

		setLoading(false)
		setId(res.data.id)
	}

	const handleType = (e) => {

		const typeName = e.target.value

		let newState = {
			nature: false,
			ieee: false,
			pubmed: false,
			bbc: false,
		}

		switch (typeName) {
			case 'nature':
				newState.nature = true
				break
			case 'ieee':
				newState.ieee = true
				break
			case 'pubmed':
				newState.pubmed = true
				break
			case 'bbc':
				newState.bbc = true
				break
			default:
				break
		}

		setType(newState)
	}

	return (
		<Wrapper>
			<Form onSubmit={generate} noValidate>

				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type='text' />
				</Form.Group>

				<Form.Group controlId="description">
					<Form.Label>Description</Form.Label>
					<Form.Control type='text' as='textarea' rows='2' />
				</Form.Group>

				<Form.Group controlId="name">
					<Form.Label>Your Name</Form.Label>
					<Form.Control type='text' />
				</Form.Group>

				<Form.Group controlId="type">
					<Form.Check value='nature' inline label="Nature" type='radio' checked={type.nature} onChange={handleType} />
					<Form.Check value='ieee' inline label="IEEE" type='radio' checked={type.ieee} onChange={handleType} />
					<Form.Check value='pubmed' inline label="PubMed" type='radio' checked={type.pubmed} onChange={handleType} />
					<Form.Check value='bbc' inline label="BBC Breaking News" type='radio' checked={type.bbc} onChange={handleType} />
				</Form.Group>

				<ButtonWrapper>
					<Button variant="dark" type='submit' >
						Generate Link
					</Button>
				</ButtonWrapper>
			</Form>
			<br />
			<br />
			{pressed ? loading ? <ButtonWrapper><Spinner animation="border" role="status" /></ButtonWrapper> : <LinkPanel id={id} /> : <></>}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: auto;
	width: 70%;

	margin-top: 2em;
    margin-bottom: 2em;
`
const ButtonWrapper = styled.div`
	margin: auto;
	width: fit-content;
`

export default JournalForm
