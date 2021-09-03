import React from 'react';

import { Card } from 'react-bootstrap';

export default function FullUserComponent({ user }) {
  const {
    email, last_name, first_name, phone_number,
  } = user;

  return (
    <Card className="FullUserComponent">
      <Card.Body>
        <Card.Title className="text-center">{last_name} {first_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">{email}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted text-center">{phone_number}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
