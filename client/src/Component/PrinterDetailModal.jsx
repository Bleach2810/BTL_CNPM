import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function PrinterDetailModal({ show, onHide, printer }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Thông tin máy in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Mã Máy In:</strong> {printer._id}</p>
        <p><strong>Loại Máy In:</strong> {printer.type}</p>
        <p><strong>Mô Tả Ngắn:</strong> {printer.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Thoát</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PrinterDetailModal;
