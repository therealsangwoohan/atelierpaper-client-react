import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Button, Card } from 'react-bootstrap';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function RegisterView() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [specialPermission, setSpecialPermission] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      setConfirmPassword('');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('last_name', lastName);
    formData.append('first_name', firstName);
    formData.append('phone_number', phoneNumber);
    formData.append('specialPermission', specialPermission);

    const result = await fetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/users/`, {
      method: 'POST',
      body: formData,
    });

    const { error_message } = await result.json();

    if (error_message === undefined) {
      history.push('/login');
      return;
    }

    if (error_message === "You don't have the permission to create an account.") {
      alert("You don't have the permission to create an account.");
      setSpecialPermission('');
      return;
    }

    if (error_message === 'There exists a user with the same email and/or password.') {
      alert('There exists a user with the same email and/or password.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          Create New Account
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
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Reenter password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSpecialPermission">
            <Form.Label>Special Permission Code</Form.Label>
            <Form.Control type="text" placeholder="Enter special permission code" value={specialPermission} onChange={(e) => setSpecialPermission(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
