import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Container, Form } from 'react-bootstrap';
import { BsPlusCircle, BsArrowLeft } from 'react-icons/bs'; // Bootstrap Icons
import { getRelatives, addRelative } from '../../services/RelativesService'; // Import the relativeService functions
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const RelativesPage = () => {
  const [relatives, setRelatives] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newRelative, setNewRelative] = useState({
    name: '',
    relationship: '',
    phoneNumber: '',
    email: ''
  });

  // Parse user data from sessionStorage
  const userData = JSON.parse(sessionStorage.getItem('patient')); // Convert string back to object
  const userId = userData.id // Safely access the id in the object

  useEffect(() => {
    const fetchRelatives = async () => {
      try {
        const data = await getRelatives(userId);
        setRelatives(data);
      } catch (error) {
        console.error('Error fetching relatives:', error);
      }
    };

    if (userId) {
      fetchRelatives();
    }
  }, [userId]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRelative(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRelative(userId, newRelative);
      setRelatives(prevRelatives => [...prevRelatives, newRelative]);
      handleCloseModal();
      // Show success toast
      toast.success('Relative added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error adding relative:', error);
      // Show error toast
      toast.error('Failed to add relative. Try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
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
            <BsArrowLeft className="me-2" /> Return
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-5">
              <h2 className="text-center mb-5" style={{ fontWeight: 'bold', color: '#007bff' }}>
                <BsPlusCircle className="me-2" /> Manage Relatives
              </h2>

              <Row className="mb-4 justify-content-center">
                <Col className="d-flex flex-column align-items-center">
                  <Button
                    variant="primary"
                    onClick={handleShowModal}
                    style={{
                      borderRadius: '50%',
                      width: '70px',
                      height: '70px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '32px',
                      background: 'linear-gradient(135deg, #007bff, #00c853)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                      color: 'white'
                    }}
                  >
                    <BsPlusCircle />
                  </Button>
                  <p className="mt-3" style={{ fontWeight: 'bold', color: '#007bff' }}>Add Relative</p>
                </Col>
              </Row>

              <Row>
                {relatives.length > 0 ? (
                  relatives.map((relative, index) => (
                    <Col key={index} md={6} className="mb-4">
                      <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px', backgroundColor: '#fff' }}>
                        <Card.Body>
                          <Card.Title style={{ fontWeight: 'bold', color: '#343a40' }}>{relative.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{relative.relationship}</Card.Subtitle>
                          <Card.Text style={{ color: '#6c757d' }}>
                            <strong>Phone:</strong> {relative.phoneNumber}<br />
                            <strong>Email:</strong> {relative.email}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <p className="text-center text-muted" style={{ fontSize: '1.2rem' }}>No relatives available.</p>
                )}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for adding new relative */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Relative</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newRelative.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRelationship" className="mb-3">
              <Form.Label>Relationship</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter relationship"
                name="relationship"
                value={newRelative.relationship}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={newRelative.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newRelative.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Add Relative
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Toast Notification Container */}
      <ToastContainer />
    </Container>
  );
};

export default RelativesPage;
