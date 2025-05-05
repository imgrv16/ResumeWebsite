import React, { useState } from "react";
import educationData from "../data/education.json";
import { Modal } from "react-bootstrap";

const Education = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="education"
      className="py-5"
      style={{
        backgroundColor: "#f8f9fa",
        borderTop: "2px solid #dee2e6",
        borderBottom: "2px solid #dee2e6",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4 text-dark">Education</h2>
        <div className="row justify-content-center">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="col-md-5 m-3 edu-card p-3 rounded shadow"
              style={{
                cursor: "pointer",
                backgroundColor: "#fff",
                color: "#212529",
              }}
              onClick={() => setSelected(edu)}
            >
              <img
                src={edu.images[0]}
                alt={edu.institute}
                className="img-fluid rounded mb-2"
              />
              <h5 className="text-dark">{edu.institute}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={!!selected}
        onHide={() => setSelected(null)}
        centered
        backdrop="static"
        keyboard
      >
        <Modal.Header closeButton>
          <Modal.Title>{selected?.institute}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={selected?.map}
            title="Google Map"
            style={{ border: 0, width: "100%", height: "300px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Education;
