import React from 'react';
import { Modal } from 'react-bootstrap';

const SkillExplainerModal = ({ show, handleClose, skill }) => {
  const explanation = skill?.description || "No AI explanation available for this skill yet.";

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="glass-modal"
      contentClassName="p-4"
    >
      <Modal.Header closeButton>
        <Modal.Title>🤖 About {skill?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted">{explanation}</p>
      </Modal.Body>
    </Modal>
  );
};

export default SkillExplainerModal;
