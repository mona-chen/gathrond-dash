import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateStatusModal = ({ show, handleClose, handleUpdateStatus }) => {
  const [status, setStatus] = useState('success'); // Initial status, you can set it to 'failed' if needed
  const [confirm, setConfirm] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = () => {
    if (confirm) {
      // Call your update status function with the selected status
      handleUpdateStatus(status);
      handleClose(); // Close the modal after updating status
    } else {
      // Show a warning or perform other actions for unconfirmed update
      console.log('Update not confirmed');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Transaction Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="statusSelect">
          <Form.Label>Select Status</Form.Label>
          <Form.Control as="select" value={status} onChange={handleStatusChange}>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mt-5 mb-5" controlId="confirmationCheckbox">
          <Form.Check
            type="checkbox"
            label="I confirm that I want to perform this action"
            onChange={() => setConfirm((prevConfirm) => !prevConfirm)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate} disabled={!confirm}>
          Update Status
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateStatusModal;
