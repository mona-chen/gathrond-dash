import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

const GOffCanvas = ({ children, title, id, show, onHide }) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement="end" id={id} aria-labelledby={`${id}Label`}>
      <Offcanvas.Header closeButton>
        {title && <Offcanvas.Title id={`${id}Label`}>{title}</Offcanvas.Title>}
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default GOffCanvas;
