import React, { useState } from 'react';
import './style.css';
import { register } from '../../httpClient/axios';
import { useHistory } from 'react-router-dom';

function Register() {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Register handleSubmit fired');
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
		<div className='create'>
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input
					type='text'
					required
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<label>Email:</label>
				<input
					type='email'
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default Register;
