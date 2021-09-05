import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Button } from 'react-bootstrap';

export default function NavigationBar() {
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/sessions/currentsessionid`);
      setCurrentUserId((await res.json()).currentUserId);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Navbar.Brand as={Link} to="/">
        Atelier Paper
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/users">Our Team</Nav.Link>
        </Nav>
        <Nav>
          {currentUserId && (
          <>
            <Nav.Link as={Link} to={`/users/${currentUserId}`}>My Profile</Nav.Link>
            <Nav.Link as={Link} to="/create_project">Create Project</Nav.Link>
            <Button size="sm">Log Out</Button>
          </>
          )}
          {!currentUserId && (
          <>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
          </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
