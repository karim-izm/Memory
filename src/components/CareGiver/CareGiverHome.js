import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import PatientVitals from './PatientVitals'; // Import the PatientVitals component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faHeartbeat, faBell } from '@fortawesome/free-solid-svg-icons';

const CareGiverHome = () => {
  const [caregiver, setCaregiver] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const caregiverData = sessionStorage.getItem('caregiver');
    if (!caregiverData) {
      navigate("/caregiver-login");
    } else {
      setCaregiver(JSON.parse(caregiverData));
    }
  }, [navigate]);

  return (
    <Container className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Row>
        {/* Patient Information and Patient Vitals Side by Side */}
        <Col md={6}>
          {caregiver ? (
            <Card className="shadow rounded mb-4">
              <Card.Header className="bg-primary text-white text-center">
                <h4 className="mb-0">Informations sur le Patient</h4>
              </Card.Header>
              <Card.Body>
                <div className="text-center mb-3">
                  <FontAwesomeIcon icon={faUserMd} size="3x" color="blue" />
                </div>
                <Card.Text>
                  <div className="mb-3">
                    <strong>Nom du Patient:</strong> {caregiver.user.fullName}
                  </div>
                  <div className="mb-3">
                    <strong>Genre:</strong> {caregiver.user.gender}
                  </div>
                  <div className="mb-3">
                    <strong>État du Patient:</strong> {caregiver.user.status}
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center mt-4">
                  <Button variant="primary" onClick={() => navigate('/caregiver-followUp')}>
                    Voir le Suivi du Patient
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <div className="text-center">
              <p>Chargement des informations du soignant...</p>
            </div>
          )}
        </Col>

        {/* Patient Vitals */}
        <Col md={6}>
          <Card className="shadow rounded mb-4">
            <Card.Header className="bg-info text-white text-center">
              <h4 className="mb-0">Signes Vitaux du Patient</h4>
            </Card.Header>
            <Card.Body>
              <div className="text-center mb-3">
                <FontAwesomeIcon icon={faHeartbeat} size="3x" color="teal" />
              </div>
              <PatientVitals />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Notifications Card (Full Width) */}
      <Row>
        <Col>
          <Card className="shadow rounded mb-4">
            <Card.Header className="bg-success text-white text-center">
              <h4 className="mb-0">Notifications</h4>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Card.Text>
                  <p><strong>Notification 1:</strong> Vous avez un nouveau message du patient.</p>
                  <p><strong>Notification 2:</strong> Prochain rendez-vous de suivi prévu.</p>
                  <p><strong>Notification 3:</strong> Dosage de médicament mis à jour.</p>
                </Card.Text>
              </div>
              <div className="text-center">
                <Button variant="outline-success"><FontAwesomeIcon icon={faBell} /> Voir toutes les notifications</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CareGiverHome;
