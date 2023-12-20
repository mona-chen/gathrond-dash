import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdatePurchase = ({ show, handleClose, handleUpdateStatus }) => {
  const [status, setStatus] = useState('-se'); // Initial status, you can set it to 'failed' if needed
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
        <Modal.Title>Update Purchase Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="statusSelect">
          <Form.Label>Select Status</Form.Label>
          <Form.Control as="select" value={status} onChange={handleStatusChange}>
            <option disabled value="-se">
              Select Something
            </option>
            <option value="0">Pending</option>
            <option value="1">Approved</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mt-5 mb-5" controlId="confirmationCheckbox">
          <Form.Check
            type="checkbox"
            label="I confirm that I want to perform this action"
            onChange={(e) => setConfirm(e.target.checked)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleUpdate();
            setConfirm(false);
            setStatus('-se');
          }}
          disabled={!confirm || status === '-se'}
        >
          Update Status
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdatePurchase;
