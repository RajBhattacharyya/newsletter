import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar() {
  const myStyle = { color: "white", textDecorationLine: "none" };
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" style={myStyle}>
            NewsLetter
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" style={myStyle}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/business" style={myStyle}>
                Business
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/entertainment" style={myStyle}>
                Entertainment
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/general" style={myStyle}>
                General
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/health" style={myStyle}>
                Health
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/science" style={myStyle}>
                Science
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/sports" style={myStyle}>
                Sports
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/technology" style={myStyle}>
                Technology
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
