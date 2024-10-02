import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BsArrowLeft, BsFillPuzzleFill, BsFillGridFill, BsFillFileEarmarkTextFill , BsMemory} from 'react-icons/bs'; // Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const jeux = [
  { id: 1, name: 'Sudoku Quotidien', description: 'Un nouveau Sudoku chaque jour en 4 niveaux de difficulté.', icon: <BsFillGridFill /> },
  { id: 2, name: 'Mémoire Associative', description: 'Améliorez votre mémoire avec ce jeu stimulant.', icon: <BsMemory /> },
  { id: 3, name: 'Défi Casse-tête', description: 'Résolvez des casse-têtes pour booster vos fonctions cognitives.', icon: <BsFillPuzzleFill /> },
  { id: 4, name: 'Mots Croisés', description: 'Améliorez votre vocabulaire et vos connaissances générales.', icon: <BsFillFileEarmarkTextFill /> },
];

const handleCardClick = (gameName) => {
  alert(`Navigation vers ${gameName}`); // Replace with actual navigation logic
};

const SoutienAffectif = () => {
  return (
    <Container className="my-5" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      {/* Sticky Return Button */}
      <Row className="mb-4">
        <Col className="d-flex align-items-center">
          <Button 
            variant="light" 
            className="shadow-sm d-flex align-items-center sticky-top" // Make button sticky
            style={{
              backgroundColor: '#007bff', 
              color: 'white', 
              borderRadius: '50px', 
              padding: '10px 20px',
              zIndex: '1000',  // Ensure it's always on top
              top: '10px',     // Stick to the top with a little margin
              position: 'sticky',
            }}
            onClick={() => window.history.back()}
          >
            <BsArrowLeft className="me-2" /> Retour
          </Button>
        </Col>
      </Row>

      <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: 'black' }}>
        Jeux Cognitifs pour l'Amélioration des Capacités Mentales
      </h1>

      <Row>
        {jeux.map((jeu) => (
          <Col md={6} lg={3} className="mb-4" key={jeu.id}>
            <Card
              style={{ cursor: 'pointer', transition: 'transform 0.2s', backgroundColor: '#f8f9fa', borderRadius: '15px' }}
              className="h-100 shadow-sm border-light"
              onClick={() => handleCardClick(jeu.name)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div style={{ fontSize: '48px', color: '#007bff', marginBottom: '10px' }}>
                  {jeu.icon}
                </div>
                <Card.Title className="text-center" style={{ fontWeight: 'bold', color: '#343a40' }}>
                  {jeu.name}
                </Card.Title>
                <Card.Text className="text-center" style={{ color: '#6c757d' }}>
                  {jeu.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SoutienAffectif;
