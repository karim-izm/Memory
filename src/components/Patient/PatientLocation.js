import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const PatientLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSendLocation = () => {
    if (location) {
      // Replace this with your actual logic to send the location
      alert(`Sending location: Latitude ${location.latitude}, Longitude ${location.longitude}`);
    }
  };

  const handleSOS = () => {
    // Replace this with your actual SOS logic
    alert('SOS Alert triggered!');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Votre Localisation En Temps Reél</Card.Title>
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
                        Your current location.
                      </Popup>
                    </Marker>
                  </MapContainer>
                ) : (
                  <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
              {error && <p className="text-danger text-center mt-3">{error}</p>}
              <div className="d-flex justify-content-between mt-4">
                <Button
                  variant="primary"
                  onClick={handleSendLocation}
                  style={{ flex: 1, marginRight: '10px' }}
                >
                  Send Location
                </Button>
                <Button
                  variant="danger"
                  onClick={handleSOS}
                  style={{ flex: 1 }}
                >
                  SOS
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientLocation;
