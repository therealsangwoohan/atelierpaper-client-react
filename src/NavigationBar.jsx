import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Button } from 'react-bootstrap';

import useFetch from './CustomHooks/useFetch';

export default function NavigationBar() {
  const { error, isPending, data: userData } = useFetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/sessions/currentsessionid`);

  console.log(error);
  console.log(isPending);

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
          {userData && <Nav.Link as={Link} to={`/users/${userData[0].user_id}`}>Create Project</Nav.Link>}
          <Nav.Link as={Link} to="/create_project">Create Project</Nav.Link>
          <Button size="sm">Log Out</Button>

          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/login">Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
