import React, { Component, useState } from "react";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="brandName"
          onClick={() => setExpanded(false)}>
          DEBUGGIN'
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="New Ticket" id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/tickets/new-bug"
                onClick={() => setExpanded(false)}>
                New Bug
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/tickets/new-proposal"
                onClick={() => setExpanded(false)}>
                New Proposal
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/tickets/new-question"
                onClick={() => setExpanded(false)}>
                New Question
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              All Tickets
            </Nav.Link>
            <GoogleAuth onClick={() => setExpanded(false)} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
