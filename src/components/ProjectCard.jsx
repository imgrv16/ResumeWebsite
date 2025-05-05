import React from "react";

const ProjectCard = ({ title, image, description, onClick }) => {
  return (
    <div className="card h-100 project-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card-img-wrapper" style={{ position: "relative" }}>
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ objectFit: "cover", height: "200px", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
        />
        <div className="overlay-text position-absolute bottom-0 start-0 p-2 bg-dark bg-opacity-50 w-100">
          <h5 className="text-white">{title}</h5>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-muted" style={{ minHeight: "100px" }}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
