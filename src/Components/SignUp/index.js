import {Box, Button, TextField} from '@mui/material'
import React, {useState} from 'react'
import './SignUp.css'
const url = process.env.REACT_APP_API_URL || 'http://localhost:3005'

function SignUp({setWelcome, setName, setPassword}) {
	const [signUpUser, setSignUpUser] = useState('')
	const [signUpPass, setSignUpPass] = useState('')

	//! Function that sends the object to server
	async function onClick(event) {
		event.preventDefault()
		try {
			// const body = {signUpUser, signUpPass}
			// console.log(body)

			const response = await fetch(`${url}/user`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({name: signUpUser, password: signUpPass}),
			})
			setWelcome(true)
			const data = await response.json()
			console.log('data: ', data)
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<div>
			<div id='welcome-input'>
				<Box
					component='form'
					sx={{
						'& > :not(style)': {m: 1, width: '25ch'},
					}}
					noValidate
					autoComplete='off'>
					<TextField
						onChange={e => setSignUpUser(e.target.value)}
						label='What shall I call you?'
						variant='standard'
					/>
					<TextField
						onChange={e => setSignUpPass(e.target.value)}
						label='and a password?'
						variant='standard'
					/>
					<Button onClick={onClick}>Sign in</Button>
				</Box>
			</div>
		</div>
	)
}

export default SignUp
