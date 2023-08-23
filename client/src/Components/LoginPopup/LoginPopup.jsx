import React, { useState } from 'react';
import '../../base.css';
import './loginPopup.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import axios from 'axios';

const LoginPopup = (props) => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loginSignupState, setLoginSignupState] = useState(false);
	const LOGIN_USER = 'http://127.0.0.1:8000/api/login';
	const REGISTER_USER = 'http://127.0.0.1:8000/api/register';

	async function handleLogin(e) {
		e.preventDefault();
		const userAccount = {
			email: email,
			password: password,
		};
		try {
			const response = await axios.post(`${LOGIN_USER}`, userAccount);
			console.log(response.data.authorization);
			if (response) {
				e.preventDefault();
				localStorage.setItem('access_token', response.data.authorization);
				console.log('User Logged In!');
				props.closePopup();
			}
		} catch {
			document.getElementById('login-failed').style.display = 'block';
		}
	}

	async function handleSignup(e) {
		e.preventDefault();
		const userAccount = {
			username: username,
			email: email,
			password: password,
		};
		try {
			const response = await axios.post(`${REGISTER_USER}`, userAccount);
			if (response) {
				e.preventDefault();
				console.log('User Registered!');
				setLoginSignupState(!loginSignupState);
				setEmail('');
				setPassword('');
			}
		} catch {
			document.getElementById('register-failed').style.display = 'block';
		}
	}

	const toggleSignup = () => {
		setEmail('');
		setPassword('');
		setLoginSignupState(!loginSignupState);
	};

	function hidePopup() {
		console.log('blocker clicked');
		props.closePopup();
	}

	return (
		<div className="popup">
			<div className="blocker" onClick={hidePopup}></div>
			{loginSignupState ? (
				<div className="popup_inner flex flex-col justify-center align-center gap-m">
					<h2>Create an Account!</h2>
					<div className="input-container flex flex-col gap-m align-center">
						<Input
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						>
							Username:
						</Input>
						<Input onChange={(e) => setEmail(e.target.value)} value={email}>
							E-mail:
						</Input>
						<Input
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						>
							Password:
						</Input>
					</div>

					<div id="register-failed" className="register-failed">
						Please Enter Correct Values
					</div>
					<Button onClick={handleSignup}>Signup</Button>
					<p>
						Already a User? &nbsp;&nbsp;&nbsp;
						<Button onClick={toggleSignup}>Login</Button>
					</p>
				</div>
			) : (
				<div className="popup">
					<div className="blocker" onClick={hidePopup}></div>
					<div className="popup_inner flex flex-col justify-center align-center gap-m">
						<h2>Welcome Back!</h2>
						<div className="input-container flex flex-col gap-m align-center">
							<Input onChange={(e) => setEmail(e.target.value)} value={email}>
								E-mail:
							</Input>
							<Input
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							>
								Password:
							</Input>
						</div>
						<div id="login-failed" className="login-failed">
							Please Enter Correct Credentials
						</div>
						<Button onClick={handleLogin}>Login</Button>
						<p>
							Not a user? &nbsp;&nbsp;&nbsp;
							<Button onClick={toggleSignup}>Signup</Button>
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default LoginPopup;
