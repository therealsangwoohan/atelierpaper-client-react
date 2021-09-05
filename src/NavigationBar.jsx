import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Button } from 'react-bootstrap';

export default async function NavigationBar() {
  const currentUserId = await (await fetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/sessions/currentsessionid`));

  if (currentUserId === undefined) {
    return (
      <h1>Not Logged In</h1>
    );
  }

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
          <Nav.Link as={Link} to="/create_project">Create Project</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/login">Log In</Nav.Link>
          <Button size="sm">Log Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
