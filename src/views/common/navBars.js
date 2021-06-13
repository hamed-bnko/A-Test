import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBars = () => {
  return (
    <>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo.png" width="200" />
          </Navbar.Brand>
          <Nav className="m-auto">
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
        </Container>
      </Navbar>
    </>
  );
};

export default NavBars;
