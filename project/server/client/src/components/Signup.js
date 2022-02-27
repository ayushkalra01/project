import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Alert, Col, Container, Row } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [password, setPassword] = useState('');
	const { signUp } = useUserAuth();
	let history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signUp(email, password);
			history.push('/login');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<Container>
				<h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
					Sign Up
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
									Sign up
								</Button>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
			<div className="p-4 box mt-3 text-center">
				Already have an account? <Link to="/login">Log In</Link>
			</div>
		</>
	);
};

export default Signup;
