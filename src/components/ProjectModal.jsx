import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="position-relative">
        {/* Blurred background image */}
        {project.image && (
          <div
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              opacity: 0.15,
              borderRadius: "0 0 12px 12px"
            }}
          />
        )}

        {/* Foreground content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <p>
            <strong>Company:</strong> {project.company}
          </p>
          <p>
            <strong>Period:</strong> {project.period}
          </p>
          <hr />
          <h6>Project Summary:</h6>
          <p>{project.summary}</p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
