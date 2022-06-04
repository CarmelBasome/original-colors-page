import React from "react";
import {} from "@mui/material";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './Nav.css';

function Carmel() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
       <Container fluid className="">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse className="dropdown">
              <Nav>
                <NavDropdown
                  className="dropdown-content"
                  title="Dropdown"
                  menuVariant="dark"
                >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
  );
}
export default Carmel;
