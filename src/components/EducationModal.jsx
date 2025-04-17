import React from "react";
import { Modal, Button } from "react-bootstrap";

const EducationModal = ({ show, onHide, mapEmbed, title }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0" style={{ height: "400px" }}>
        {mapEmbed ? (
          <iframe
            title={title}
            src={mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "0 0 12px 12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <p className="text-center mt-5">Map unavailable.</p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EducationModal;
