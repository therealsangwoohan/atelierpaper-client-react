import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

export default function ReducedUserComponent({ user }) {
  const {
    user_id, last_name, first_name,
  } = user;

  return (
    <Link className="ReducedUserComponent" to={`/users/${user_id}`}>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">{last_name} {first_name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
