import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import react-confirm-alert

import { Link } from 'react-router-dom';

const CareGiverNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Confirmation dialogue in French
    confirmAlert({
      title: "Confirmation de déconnexion",
      message: "Êtes-vous sûr de vouloir vous déconnecter ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            // Clear user data from localStorage
            localStorage.removeItem('user');
            // Redirect to the homepage
            navigate('/');
            // Optionally prevent the user from going back to the previous protected page
            window.history.pushState(null, '', window.location.href);
            window.onpopstate = function () {
              navigate('/');
            };
          }
        },
        {
          label: "Non",
          // No action needed for "Non"
        }
      ]
    });
  };

  return (
    <Navbar expand="md" sticky="top" bg="light" className="navbar-shrink py-3">
      <Container>
        <Navbar.Brand href="/caregiver-home">
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
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/suivi-medicalCG">Suivi Quotidienne</Nav.Link>
            <Nav.Link as={Link} to="/track-patient">Suivi Direct</Nav.Link>
            <Nav.Link as={Link} to="/placeholder2">Placeholder 3</Nav.Link>
          </Nav>
          <Button onClick={handleLogout} variant="primary" className="me-2" style={{ borderRadius: '20px', padding: '10px 20px' }}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CareGiverNavbar;
