import React, { useState, useEffect } from "react";
import educationData from "../data/education.json";
import EducationModal from "./EducationModal";

const Education = () => {
  const [selected, setSelected] = useState(null);
  const [activeImages, setActiveImages] = useState({});

  // Flip background images every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImages((prev) => {
        const updated = {};
        educationData.forEach((edu) => {
          const current = prev[edu.id] ?? 0;
          updated[edu.id] = (current + 1) % edu.images.length;
        });
        return updated;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="education" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-5">Education</h2>
        <div className="row justify-content-center">
          {educationData.map((edu) => {
            const currentImg = edu.images[activeImages[edu.id] || 0];
            return (
              <div
                key={edu.id}
                className="col-md-5 m-3 p-0"
                onClick={() => setSelected(edu)}
                style={{ cursor: "pointer" }}
                data-aos="zoom-in-up"
              >
                <div
                  className="edu-card glass-card shadow-sm position-relative overflow-hidden"
                  style={{
                    height: "300px",
                    borderRadius: "20px",
                    backgroundImage: `url(${currentImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 0.5s ease-in-out",
                  }}
                >
                  {/* Logo on top-right */}
                  <img
                    src={edu.logo || "/assets/edu-icon.png"}
                    alt="logo"
                    className="position-absolute"
                    style={{
                      top: 12,
                      right: 12,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "#ffffffdd",
                      padding: "6px",
                      zIndex: 2,
                    }}
                  />

                  {/* Overlay text */}
                  <div
                    className="position-absolute bottom-0 w-100 p-4 text-white"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      zIndex: 2,
                    }}
                  >
                    <h5 className="fw-bold mb-1" style={{ color: "#ffffff" }}>
                      {edu.institution}
                    </h5>
                    <p className="mb-0">{edu.degree}</p>
                    <small>{edu.duration}</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Map Modal */}
      <EducationModal
        show={!!selected}
        onHide={() => setSelected(null)}
        mapEmbed={selected?.mapEmbed}
        title={selected?.institution}
      />
    </section>
  );
};

export default Education;
