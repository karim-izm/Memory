import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileMedical, faPeopleGroup, faLocationDot, faBrain, faComments, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const PatientHomepage = ({ fullName }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = sessionStorage.getItem('patient');
    if (!userData) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const cardData = [
    {
      title: "Suivi Médical",
      icon: faFileMedical,
      link: "/suivi-medical",
    },
    {
      title: "Vous Proches",
      icon: faPeopleGroup,
      link: "/relatives-page",
    },
    {
      title: "Suivi Direct",
      icon: faLocationDot,
      link: "/suivi-direct",
    },
    {
      title: "Soutien affectif",
      icon: faBrain,
      link: "/soutien-affectif",
    },
    {
      title: "Support Psychologique",
      icon: faComments,
      link: "/support-psychologique",
    },
    {
      title: "À propos de nous",
      icon: faInfoCircle,
      link: "/a-propos",
    },
  ];

  return (
    <Container className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Greeting and Task Overview */}
      <Row className="mb-4">
        <Col>
          <div className="text-center mb-4">
            <h1 className="mb-3" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#343a40" }}>
              Bonjour, {user.fullName}!
            </h1>
            <h4 className="text-secondary" style={{ fontSize: "1.2rem" }}>
              Il vous reste <span style={{ color: "#28a745" }}>10</span> tâches à réaliser aujourd'hui
            </h4>
          </div>
        </Col>
      </Row>

      {/* Cards Section */}
      <Row className="gy-4">
        {cardData.map((card, index) => (
          <Col xs={12} md={4} key={index}>
            <a href={card.link} className="text-decoration-none">
              <Card
                className="text-center shadow-sm h-100"
                style={{
                  transition: "transform 0.3s ease",
                  borderRadius: "15px",
                  backgroundColor: "#ffffff",
                  padding: "20px",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <Card.Body>
                  <div
                    className="mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#e9ecef",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                  >
                    <FontAwesomeIcon icon={card.icon} className="fs-1 text-success" />
                  </div>
                  <Card.Title
                    className="text-dark"
                    style={{ fontSize: "1.25rem", fontWeight: "600" }}
                  >
                    {card.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PatientHomepage;
