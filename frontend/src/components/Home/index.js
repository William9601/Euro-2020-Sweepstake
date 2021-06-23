import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { login } from '../../httpClient/axios';
import './style.css';
import { useHistory } from 'react-router-dom';

function Home() {
	const [email, setEmail] = useState('');
	const [user, setUser] = useState({});
	const history = useHistory();

	const redirectToRegister = () => {
		history.push('/register');
	};

	const changeHandler = (e) => {
		setEmail(e.target.value);
	};

	const loginHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await login(email);
			if (res.data !== '') {
				setUser(res.data);
			}
		} catch (error) {
			console.log(error);
		}
		// else setEmail('');
	};

	const loginOrRedirect = user.id ? (
		<Redirect to={`/user/${user.id}`} />
	) : (
		<div className='home__container'>
			<Box m={1}>
				<Typography className='home__title' variant='h4'>
					Euro2020 Sweepstake
				</Typography>
			</Box>
			<Box m={5}>
				<form id='login' noValidate autoComplete='off' onSubmit={loginHandler}>
					<TextField
						className='home__emailfield'
						name='email'
						label='Email'
						variant='outlined'
						onChange={changeHandler}
						value={email}
						inputProps={{ 'data-testid': 'emailInput' }}
					/>
				</form>
				<Box m={2}>
					<Button
						type='submit'
						form='login'
						value='Submit'
						variant='contained'
						color='primary'
					>
						Login
					</Button>
				</Box>
				<Box m={1}>
					<Button
						type='submit'
						value='Submit'
						variant='contained'
						color='primary'
						onClick={redirectToRegister}
					>
						Register
					</Button>
				</Box>
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

	return <div className='home__container'>{loginOrRedirect}</div>;
}

export default Home;
