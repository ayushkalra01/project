import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Alert, Col, Container, Row } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { logIn, googleSignIn } = useUserAuth();
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			history.push('/');
		} catch (err) {
			setError(err.message);
		}
	};

	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			history.push('/');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<Container>
				<h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
					Login
				</h1>

				{error && <Alert variant="danger">{error}</Alert>}
				<Row className="mt-2">
					<Col
						lg={5}
						md={6}
						sm={12}
						className="p-5 m-auto shadow-sm rounded-lg"
					>
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Control
									type="email"
									placeholder="Email address"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Control
									type="password"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>

							<div className="d-grid gap-2">
								<Button variant="primary" type="Submit">
									Log In
								</Button>
							</div>
						</Form>

						<hr />
						<div>
							<GoogleButton
								className="g-btn"
								type="dark"
								onClick={handleGoogleSignIn}
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="p-4 text-center">
				Don't have an account? <Link to="/signup">Sign up</Link>
			</div>
		</>
	);
};

export default Login;
