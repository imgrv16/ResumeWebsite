import React from "react";

const ProjectCard = ({ title, company, period, description, image, onClick }) => {
  return (
    <div
      className="card glass-card h-100 shadow-sm project-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-img-wrapper position-relative">
        {image && (
          <img
            src={image}
            alt={title}
            className="card-img-top"
            style={{
              height: 180,
              objectFit: "cover",
              borderTopLeftRadius: "0.75rem",
              borderTopRightRadius: "0.75rem",
              filter: "brightness(70%)"
            }}
          />
        )}
        <div className="overlay-text position-absolute top-50 start-50 translate-middle text-white text-center px-3">
          <h5 className="mb-1 fw-bold">{title}</h5>
          <small>{company} • {period}</small>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
