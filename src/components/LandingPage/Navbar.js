import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
  return (
    <Navbar expand="md" sticky="top" bg="light" className="navbar-shrink py-3">
      <Container>
        <Navbar.Brand href="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon" style={{ backgroundColor: 'blue', borderRadius: '50%' }}>
              {/* SVG Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
                {/* SVG paths */}
              </svg>
            </span>
            <span style={{ fontWeight: 'bold' }}>Memory</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto"></Nav>
          <div>
  <Link to="/login-caregiver">
    <Button variant="outline-primary" className="me-2" style={{ borderRadius: '20px', padding: '10px 20px' }}>Espace Accompagnant</Button>
  </Link>
  <Button variant="dark" href="login" className="me-2" style={{ borderRadius: '20px', padding: '10px 20px' }}>Login</Button>
  <Link to="/role-choose">
    <Button variant="primary" className="me-2" style={{ borderRadius: '20px', padding: '10px 20px' }}>Register</Button>
  </Link>
</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
