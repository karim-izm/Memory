import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTaskOrMedicationModal = ({ show, handleClose, handleSubmit }) => {
  const [formData, setFormData] = useState({
    type: 'task', // or 'medication'
    name: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    handleClose(); // Close the modal after submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task or Medication</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="type">
            <Form.Label>Select Type</Form.Label>
            <Form.Control as="select" name="type" value={formData.type} onChange={handleChange}>
              <option value="task">Task</option>
              <option value="medication">Medication</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="name" className="mt-3">
            <Form.Label>{formData.type === 'task' ? 'Task Name' : 'Medication Name'}</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder={`Enter ${formData.type} name`}
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="date" className="mt-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="description" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4">
            Add {formData.type === 'task' ? 'Task' : 'Medication'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskOrMedicationModal;
