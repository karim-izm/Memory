import React from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

const MedicalFollowUp = () => {
  // Dummy data for the medical items
  const medicalItems = [
    { title: "Donepezil", icon: "bi bi-capsule", link: "#" },
    { title: "Marche Quotidienne", icon: "bi bi-clipboard-check", link: "#" },
    {
      title: "Participation à des groupes de soutien",
      icon: "bi bi-clipboard-check",
      link: "#",
    },
    { title: "Rivastigmine", icon: "bi bi-capsule", link: "#", hasArrow: true },
    { title: "Namzaric", icon: "bi bi-capsule", link: "#", hasArrow: true },
  ];

  return (
    <Container className="py-5">
      <Row className="mb-4 text-center">
        <Col>
          <Button variant="outline-primary" className="me-2">
            <i className="bi bi-capsule me-2"></i>Médicament
          </Button>
          <Button variant="outline-primary">
            <i className="bi bi-clipboard me-2"></i>Tâches
          </Button>
        </Col>
      </Row>

      <Row className="mb-4 text-center">
        <Col>
          <div className="bg-light py-2 rounded shadow-sm">
            <strong>le : 27/06/2024</strong>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <ListGroup className="rounded shadow-sm">
            {medicalItems.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center bg-white my-2 rounded shadow-sm"
                action
                href={item.link}
              >
                <div>
                  <i className={`${item.icon} me-2 text-primary`}></i>
                  {item.title}
                </div>
                {item.hasArrow && (
                  <i className="bi bi-arrow-right text-secondary"></i>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MedicalFollowUp;
