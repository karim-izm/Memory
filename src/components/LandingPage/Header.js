import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="bg-primary-gradient">
      <Container className="pt-4 pt-xl-5">
        <Row className="pt-5">
          <Col md={8} xl={6} className="text-center text-md-start mx-auto">
            <div className="text-center">
              <p className="fw-bold text-success mb-2">Un soutien quotidien pour mieux vivre avec Alzheimer.</p>
              <h1 className="fw-bold">Soutien et Accompagnement pour les Patients Atteints d'Alzheimer</h1>
            </div>
          </Col>
          <Col className="col-12 col-lg-10 mx-auto">
            <div className="position-relative d-flex flex-wrap justify-content-end">
              {/* Images */}
              <div className="flex-shrink-0" style={{ flex: '0 0 45%', transform: 'translate3d(-15%, 35%, 0)' }}>
                <img className="img-fluid" src="assets/img/image1.png" alt="brain, puzzle, logo" />
              </div>
              <div className="flex-shrink-0" style={{ flex: '0 0 45%', transform: 'translate3d(-5%, 20%, 0)' }}>
                <img className="img-fluid" src="assets/img/image2.png" alt="nursing, home, care" />
              </div>
              <div className="flex-shrink-0" style={{ flex: '0 0 60%', transform: 'translate3d(0, 0%, 0)' }}>
                <img className="img-fluid" src="assets/img/image3.png" alt="alzheimer's disease, dementia, brain" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
