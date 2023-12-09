import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DiscardTransactionModal = ({ show, handleClose, handleDiscard }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Discard Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to discard this transaction?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDiscard}>
          Discard
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DiscardTransactionModal;
