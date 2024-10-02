import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const CareGiverLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [caregiver, setCaregiver] = useState(null);


  useEffect(() => {
    const caregiverData = sessionStorage.getItem('caregiver');
    if (!caregiverData) {
      navigate("/caregiver-login");
    } else {
      setCaregiver(JSON.parse(caregiverData));
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('La géolocalisation n\'est pas supportée par ce navigateur.');
    }
  }, []);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {/* Patient Vitals Card */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="shadow rounded">
            <Card.Body>
              <Card.Title className="text-center">
                Vitals du Patient
              </Card.Title>
              <Card.Text>
                <div className="mb-3"><strong>Nom :</strong> Jean Dupont</div>
                <div className="mb-3"><strong>Âge :</strong> 30 ans</div>
                <div className="mb-3"><strong>Fréquence cardiaque :</strong> 72 bpm</div>
                <div className="mb-3"><strong>Tension artérielle :</strong> 120/80 mmHg</div>
                <div className="mb-3"><strong>Saturation en oxygène :</strong> 98%</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Map Container */}
        <Col md={6} lg={8}>
          <Card className="shadow rounded">
            <Card.Body>
              <Card.Title className="text-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />

                Localisation Du Patient En Temps Réel</Card.Title>
              <div style={{ height: '400px', width: '100%' }}>
                {location ? (
                  <MapContainer
                    center={[location.latitude, location.longitude]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker
                      position={[location.latitude, location.longitude]}
                      icon={L.icon({
                        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                        shadowSize: [41, 41],
                      })}
                    >
                      <Popup>
                        Localisation actuelle du patient.
                      </Popup>
                    </Marker>
                  </MapContainer>
                ) : (
                  <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Chargement...</span>
                    </div>
                  </div>
                )}
              </div>
              {error && <p className="text-danger text-center mt-3">{error}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CareGiverLocation;
