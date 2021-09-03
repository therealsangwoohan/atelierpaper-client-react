import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Button } from 'react-bootstrap';

export default function NavigationBar() {
  useEffect(async () => {
    const result = await fetch(`${process.env.REACT_APP_HOST}/api/sessions/currentsessionid`);
    console.log(result);
  }, []);

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
          <Button size="sm">Log Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
