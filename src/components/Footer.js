import React, { Component, useState } from "react";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar bg="light" className="footer">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={require("../images/cg-logo.png")}
            width="30"
            className="d-inline-block align-middle"
          />{" "}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <div className="footerText">
              <p>Colin Gawronski</p>
            </div>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
