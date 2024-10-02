import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const services = [
  {
    title: "Un Accompagnement Personnalisé",
    description: "Notre mission est d'offrir un soutien pratique et accessible aux patients atteints de la maladie d'Alzheimer.",
    btnText: "Learn more"
  },
  {
    title: "Un Soutien Fiable",
    description: "Nous permettons à nos utilisateurs de maintenir une certaine autonomie tout en offrant un moyen de les soutenir à distance.",
    btnText: "Learn more"
  },
  {
    title: "Espace Mémoire Partagée",
    description: "Un espace sécurisé où les proches peuvent collaborer et rester connectés.",
    btnText: "Learn more"
  },
  {
    title: "Suivi des Progrès",
    description: "Suivez les progrès et accédez aux mises à jour en pour garantir le bien-être de vos proches.",
    btnText: "Learn more"
  },
];

const Services = () => {
  return (
    <section>
      <Container className="bg-primary-gradient py-5 mt-5">
        <Row>
          <Col md={8} xl={6} className="text-center mx-auto">
            <p className="fw-bold text-success">Nos Services</p>
            <h3 className="fw-bold">Ce que Nous Faisons</h3>
          </Col>
        </Row>
        <div className="py-5 p-lg-5">
          <Row className="row-cols-1 row-cols-md-2 mx-auto" style={{ maxWidth: '900px' }}>
            {services.map((service, index) => (
              <Col key={index} className="mb-5">
                <Card className="shadow-sm">
                  <Card.Body className="px-4 py-5 px-md-5">
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                    <Card.Text className="text-muted mb-4">{service.description}</Card.Text>
                    <Button className="btn btn-primary shadow" type="button">{service.btnText}</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Services;
