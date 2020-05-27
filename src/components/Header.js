import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <b>DEBUGGIN'</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="New Ticket" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New Bug</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                New Proposal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                New Question
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/">
              All Tickets
            </Nav.Link>
            <Nav.Link eventKey={2}>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
