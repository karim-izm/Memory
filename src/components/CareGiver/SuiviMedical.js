import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import AddTaskOrMedicationModal from './AddTaskOrMedicationModal'; // Adjust the path as needed
import { BsPlusCircle } from 'react-icons/bs'; // Bootstrap Icons
import { getTasksForDate, addTask } from '../../services/TaskController'; // Import the taskService functions
import { FaClipboardList, FaPills } from 'react-icons/fa'; // Additional icons for tasks and medications
import { useNavigate } from 'react-router-dom';

const SuiviMedical = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [medications, setMedications] = useState([]);
  const [caregiver, setCaregiver] = useState(null);
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const formattedDate = new Date(today).toLocaleDateString('fr-FR'); // Format date to French format

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const caregiverData = sessionStorage.getItem('caregiver');
        const userData = sessionStorage.getItem('patient');
        if (!caregiverData && !userData) {
          navigate("/");
        } else {
          const parsedCaregiver = JSON.parse(caregiverData);
          setCaregiver(parsedCaregiver);
          
          // Use caregiver.id for fetching tasks
          const userId = parsedCaregiver.user.id;
          const data = await getTasksForDate(userId, today);
          setTasks(data.filter(task => task.type === 'task'));
          setMedications(data.filter(task => task.type === 'medication'));
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [today, navigate]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (data) => {
    try {
      const userId = caregiver.user.id; // Use caregiver's ID
      const newTask = await addTask(userId, data);
      setTasks(prevTasks => [...prevTasks, newTask].filter(task => task.type === 'task'));
      setMedications(prevMeds => [...prevMeds, newTask].filter(task => task.type === 'medication'));
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="mb-4 justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Suivi Médical</h2>
              <h4 className="text-center mb-4" style={{ color: 'black' }}>Aujourd'hui : {formattedDate}</h4>

              <Row className="mb-3 justify-content-center">
                <Col className="d-flex flex-column align-items-center justify-content-center">
                  <Button
                    variant="outline-primary"
                    onClick={handleShowModal}
                    style={{
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '24px',
                    }}
                  >
                    <BsPlusCircle />
                  </Button>
                  <p className="mt-2" style={{ color: '#007bff' }}>Ajouter une tâche ou un médicament</p>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Card className="mb-3" style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#007bff' }}><FaClipboardList /> Tâches</Card.Title>
                      {tasks.length > 0 ? (
                        tasks.map(task => (
                          <Card key={task.id} className="mb-3" style={{ backgroundColor: '#f8f9fa' }}>
                            <Card.Body>
                              <Card.Title style={{ color: 'black' }}>{task.name}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{task.date}</Card.Subtitle>
                              <Card.Text style={{ color: 'black' }}>{task.description}</Card.Text>
                            </Card.Body>
                          </Card>
                        ))
                      ) : (
                        <p style={{ color: 'black' }}>Aucune tâche disponible.</p>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-3" style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#007bff' }}><FaPills /> Médicaments</Card.Title>
                      {medications.length > 0 ? (
                        medications.map(medication => (
                          <Card key={medication.id} className="mb-3" style={{ backgroundColor: '#f8f9fa' }}>
                            <Card.Body>
                              <Card.Title style={{ color: 'black' }}>{medication.name}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{medication.date}</Card.Subtitle>
                              <Card.Text style={{ color: 'black' }}>{medication.description}</Card.Text>
                            </Card.Body>
                          </Card>
                        ))
                      ) : (
                        <p style={{ color: 'black' }}>Aucun médicament disponible.</p>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <AddTaskOrMedicationModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default SuiviMedical;
