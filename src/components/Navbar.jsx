import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './Navbar.css';
import logo from '../assets/orangeExpress.png';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';



function NavBar() {
    return (
        <Container fluid className = "nav-position" sticky="top">
            <Navbar collapseOnSelect expand="lg" sticky="top" className="color-nav" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className="nav-logo logo-center" href="#home">
            <img
                alt="logo"
                src={logo}
                width="180"
                height="55"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link className="navbar-link" href="#features">Pricing</Nav.Link>
                <Nav.Link className="navbar-link" href="#pricing">FAQs</Nav.Link>
                <Nav.Link className="navbar-link" href="#pricing">Contact</Nav.Link>
                <Nav.Link className="navbar-link" href="#pricing">Drive For Orange Express</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            <Button className="btn-sm btn-phone" variant="success" href="https://www.google.com/">Whatsapp</Button>
            </Navbar>
        </Container>
    );
  }

export default NavBar