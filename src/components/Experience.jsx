import React, { useState, useEffect } from "react";
import experienceData from "../data/experience.json";
import Timeline from "./Timeline";

function Experience() {
  const [openSection, setOpenSection] = useState(null); // "accenture" | "infosys" | null
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [experience, setExperience] = useState({
    accenture: [],
    infosys: [],
  });

  useEffect(() => {
    const acc = experienceData.find((e) => e.name === "accenture");
    const infy = experienceData.find((e) => e.name === "infosys");

    setExperience({
      accenture: acc?.items || [],
      infosys: infy?.items || [],
    });
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
    setExpandedTimeline(null); // close timeline when toggling sections
  };

  return (
    <section id="experience" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4">Experience</h2>
        <div className="accordion" id="experienceAccordion">

          {/* Accenture Accordion */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button ${openSection === "accenture" ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleSection("accenture")}
              >
                Accenture – Sr. Application Development Analyst
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${openSection === "accenture" ? "show" : ""}`}>
              <div className="accordion-body">
                <button
                  className="btn btn-sm btn-outline-primary mb-3"
                  onClick={() =>
                    setExpandedTimeline(
                      expandedTimeline === "accenture" ? null : "accenture"
                    )
                  }
                >
                  {expandedTimeline === "accenture"
                    ? "Hide Timeline"
                    : "View Timeline"}
                </button>
                {expandedTimeline === "accenture" && (
                  <Timeline entries={experience.accenture} />
                )}
              </div>
            </div>
          </div>

          {/* Infosys Accordion */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button ${openSection === "infosys" ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleSection("infosys")}
              >
                Infosys – Sr. Software Engineer
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${openSection === "infosys" ? "show" : ""}`}>
              <div className="accordion-body">
                <button
                  className="btn btn-sm btn-outline-primary mb-3"
                  onClick={() =>
                    setExpandedTimeline(
                      expandedTimeline === "infosys" ? null : "infosys"
                    )
                  }
                >
                  {expandedTimeline === "infosys"
                    ? "Hide Timeline"
                    : "View Timeline"}
                </button>
                {expandedTimeline === "infosys" && (
                  <Timeline entries={experience.infosys} />
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
