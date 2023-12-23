import React from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GameSwitchModal = ({ show, handleClose, content }) => {
  const navigate = useNavigate();

  const handleViewUser = (username) => {
    window.location.replace(`${window.location.origin}/users?q=${username}`);
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Game Switch Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {/* Current Game Card */}
          <Col sm={6}>
            <div className="card">
              <img src={content?.image} className="card-img-top" alt="Current Game Image" />
              <div className="card-body">
                <h5 className="card-title">Current Game</h5>
                <p className="card-text">{content?.game_name}</p>
                <small style={{ fontSize: 12 }} className="card-text">
                  {content?.description?.slice(0, 90)}...
                </small>
                <p className="card-text mt-3">Category: {content?.category}</p>
                <p className="card-text mt-3">Invoice ID: {content?.invoice_id}</p>
                <p className="card-text mt-3">Phone: {content?.phone}</p>
                <p className="card-text">Genre: {content?.genre}</p>
                <p style={{ fontSize: 14, marginBottom: '-4px' }} className="text-primary ">
                  Delivery Address:
                </p>
                <small style={{ fontSize: 12 }} className="card-text">
                  {content?.address}
                </small>
              </div>
            </div>
          </Col>
          {/* Desired Game Card */}
          <Col sm={6}>
            <div className="card">
              <img src={content?.user_game_image} className="card-img-top" alt="Desired Game Image" />
              <div className="card-body">
                <h5 className="card-title">Desired Game</h5>
                <p className="card-text">{content?.user_game_name}</p>
                <small style={{ fontSize: 12 }} className="card-text">
                  {content?.user_game_description?.slice(0, 90)}...
                </small>
                <p className="card-text mt-3">Category: {content?.category}</p>
                <p className="card-text mt-3">Invoice ID: {content?.invoice_id}</p>
                <p className="card-text mt-3">Phone: {content?.phone}</p>
                <p className="card-text">Genre: {content?.user_game_genre}</p>
                <p className="card-text">User: {content?.firstname + ' ' + content?.lastname}</p>
                <Button variant="link" onClick={() => handleViewUser(content?.email)}>
                  View User
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameSwitchModal;
