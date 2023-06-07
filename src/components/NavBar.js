//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default class NavBar extends Component {
  render() {
    return (
          <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid>
              <Navbar.Brand><Link to="/" style={{color: "white", textDecorationLine: "none"}}>NewsLetter</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" >
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link><Link to="/" style={{color: "white", textDecorationLine: "none"}}>Home</Link></Nav.Link>
                  <Nav.Link><Link to="/business" style={{color: "white", textDecorationLine: "none"}}>Business</Link></Nav.Link>
                  <Nav.Link><Link to="/entertainment" style={{color: "white", textDecorationLine: "none"}}>Entertainment</Link></Nav.Link>
                  <Nav.Link><Link to="/general" style={{color: "white", textDecorationLine: "none"}}>General</Link></Nav.Link>
                  <Nav.Link><Link to="/health" style={{color: "white", textDecorationLine: "none"}}>Health</Link></Nav.Link>
                  <Nav.Link><Link to="/science" style={{color: "white", textDecorationLine: "none"}}>Science</Link></Nav.Link>
                  <Nav.Link><Link to="/sports" style={{color: "white", textDecorationLine: "none"}}>Sports</Link></Nav.Link>
                  <Nav.Link><Link to="/technology" style={{color: "white", textDecorationLine: "none"}}>Technology</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    )
  }
}

