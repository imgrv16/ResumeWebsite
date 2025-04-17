import React from "react";

function Projects() {
  const projects = [
    {
      title: "Employee Connect Portal",
      description: "Responsive single-page app with Material UI and React Hooks integration.",
      tech: ["ReactJS", "Material UI", "SharePoint"]
    },
    {
      title: "SkillNavigator",
      description: "Web tool for training management and certification scheduling.",
      tech: ["React", "TypeScript", "Material UI"]
    },
    {
      title: "CRM Activity Dashboard",
      description: "D3.js-based sales dashboard with API integrations and custom filter options.",
      tech: ["D3.js", "Jest", "Talend"]
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          {projects.map((proj, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                  <div>
                    {proj.tech.map((tech, idx) => (
                      <span key={idx} className="badge bg-primary me-1">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
