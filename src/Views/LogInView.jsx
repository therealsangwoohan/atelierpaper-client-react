import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Button, Card } from 'react-bootstrap';

export default function LogInView() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const result = await fetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/sessions/`, {
      method: 'POST',
      body: formData,
    });

    const resultJSON = await result.json();

    if (resultJSON.error_message === undefined) {
      history.push('/');
      return;
    }

    if (resultJSON.error_message === 'Wrong email and/or password.') {
      alert('Wrong email and/or password.');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          Are you an Employee?
        </Card.Title>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
