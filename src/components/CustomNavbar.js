import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../assets/css/CustomNavbar.css';

export default function CustomNavbar() {
  return (
    <div>
      <Navbar className = "customNavbar" bg = "" expand="md" fixed = "top" >
        <Navbar.Brand href="#home">Polipedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Politicians" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Old Politicians</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Former Politicians</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Present Politicians</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Young Leaders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aspiring Politicians</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women Politicians</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="State" id="basic-nav-dropdown">
              <NavDropdown.Item href="district">Karnataka</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Parties" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Indian National Congress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bharatiya Janata Party</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Janata Dal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bahujan Samaj Party</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Karnataka Pragyavanta Janata Party</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Independent Candidates</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Why Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Vision / Mission</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
