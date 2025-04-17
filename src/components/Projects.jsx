import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectData from "../data/projects.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "aos/dist/aos.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((proj) =>
          proj.company.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <section id="projects" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-4">Projects</h2>

        {/* Filter Buttons */}
        <div className="mb-4 d-flex gap-2 flex-wrap">
          {["All", "Accenture", "Infosys"].map((label) => (
            <button
              key={label}
              onClick={() => setFilter(label)}
              className={`btn ${
                filter === label ? "btn-primary" : "btn-outline-primary"
              } btn-sm`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Carousel */}
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          transitionTime={800}
          emulateTouch
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} style={arrowStyle("left")}>‹</button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} style={arrowStyle("right")}>›</button>
            )
          }
        >
          {filteredProjects.map((proj, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard {...proj} onClick={() => setSelectedProject(proj)} />
            </motion.div>
          ))}
        </Carousel>

        {/* Modal */}
        <ProjectModal
          show={!!selectedProject}
          onHide={() => setSelectedProject(null)}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

const arrowStyle = (side) => ({
  position: "absolute",
  zIndex: 2,
  [side]: 35,
  top: "calc(50% - 45px)",
  background: "#0d6efd",
  border: "none",
  borderRadius: "50%",
  width: 40,
  height: 40,
  color: "#fff",
  fontSize: "1.2rem",
  cursor: "pointer",
});

export default Projects;
