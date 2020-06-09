import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

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
            <div>
              <h7 className="footerText">Colin Gawronski</h7>
            </div>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
