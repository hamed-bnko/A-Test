import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/logo.png";
const NavBars = () => {
  return (
    <>
      <Navbar variant="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} width="200" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">OurGames</Nav.Link>
            <Nav.Link href="#features">Platform</Nav.Link>
            <Nav.Link href="#pricing">Use Case</Nav.Link>
            <Nav.Link href="#pricing">Prices</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav.Link href="#pricing" className="btn btn-primary ml-5">
              Get Started Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBars;
