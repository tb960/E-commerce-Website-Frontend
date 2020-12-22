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
                width="160"
                height="55"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Button className="btn-phone-whatsapp" variant="success" href="https://api.whatsapp.com/send?phone=15551234567">Whatsapp Us    <i className="fa fa-whatsapp"></i></Button>
                <Navbar.Collapse className="nav-size" id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="navbar-link" href="#features">About Us</Nav.Link>
                        <Nav.Link className="navbar-link" href="#FAQs">Contact Us</Nav.Link>
                        <Nav.Link className="navbar-link" href="https://docs.google.com/forms/d/e/1FAIpQLSc-bZBqLav-TTlZ8IKRxo2jdxRkm6pHnPThrPjsN-ssaEXrWQ/viewform">For Drivers</Nav.Link>
                        <Nav.Link className="navbar-link" href="www.google.com">For Merchants</Nav.Link>
                    </Nav>
                
                </Navbar.Collapse>
            </Nav>
            </Navbar>
        </Container>
    );
  }

export default NavBar