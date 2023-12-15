import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const TransactionDetailsModal = ({ show, handleClose, transactionDetails, image }) => {
  const renderDetails = () => {
    return Object.entries(transactionDetails).map(([key, value]) => (
      <ListGroup.Item key={key}>
        <strong>{key}:</strong> {value}
      </ListGroup.Item>
    ));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Transaction Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {image && <img src={image} className="card-img-top" alt="Game Image" />}

        {Object.keys(transactionDetails).length === 0 ? (
          <p>No details available.</p>
        ) : (
          <ListGroup>{renderDetails()}</ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionDetailsModal;
