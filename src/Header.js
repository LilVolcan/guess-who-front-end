import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      // <div>Hello Amber</div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Guess Who?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/game">Game</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
