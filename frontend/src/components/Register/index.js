import React, { useState } from 'react';
import './style.css';
import { register } from '../../httpClient/axios';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@material-ui/core';

function Register() {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await register(userName, email);
			console.log('Register Await response', res.data);
		} catch (error) {
			console.log(error);
		}
		setUserName('');
		setEmail('');
		history.push('/');
	};

	return (
		<div className='home__container'>
			<Box m={1}>
				<Typography className='home__title' variant='h4'>
					Register New User
				</Typography>
			</Box>
			<Box m={2}>
				<form id='register' onSubmit={handleSubmit}>
					<Box m={1}>
						<TextField
							className='home__emailfield'
							type='text'
							label='Name'
							variant='outlined'
							required
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</Box>
					<Box m={1}>
						<TextField
							className='home__emailfield'
							type='email'
							variant='outlined'
							label='Email'
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Box>
					<Box m={1}>
						<Button
							type='submit'
							form='register'
							value='Submit'
							variant='contained'
							color='primary'
						>
							Register
						</Button>
					</Box>
				</form>
			</Box>
			<Box>
				<img
					src='https://upload.wikimedia.org/wikipedia/en/9/96/UEFA_Euro_2020_Logo.svg'
					width='85%'
					alt='EUFA Euro 2020 Logo'
				/>
				<div>
					<a
						href='//en.wikipedia.org/wiki/File:UEFA_Euro_2020_Logo.svg'
						title='Fair use of copyrighted material in the context of UEFA Euro 2020'
					>
						<Typography variant='caption'>
							By The logo is from the UEFA.,{' '}
						</Typography>
					</a>
					<a href='https://en.wikipedia.org/w/index.php?curid=51705124'>
						<Typography variant='caption'>Fair use</Typography>
					</a>
				</div>
			</Box>
		</div>
	);
}

export default Register;
