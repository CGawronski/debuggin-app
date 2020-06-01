import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

export default class Header extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brandName">
            DEBUGGIN'
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="New Ticket" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/tickets/new-bug">
                  New Bug
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tickets/new-proposal">
                  New Proposal
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tickets/new-question">
                  New Question
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/">
                All Tickets
              </Nav.Link>
              <GoogleAuth />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
