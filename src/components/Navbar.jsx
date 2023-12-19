import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ border: "4px solid purple" }}>
      <Container>
        <Navbar.Brand href="#">Lemon Terminal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Docs</Nav.Link>
            <Nav.Link href="#">$LMN</Nav.Link>
            <Nav.Link href="#">Calendar</Nav.Link>
            <Nav.Link href="#">On-Chain</Nav.Link>
            <NavDropdown title="Socials" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">Action 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
