import React from "react";

function Skills() {
  const skillGroups = [
    {
      title: "Languages & Frameworks",
      items: ["JavaScript", "TypeScript", "ES6", "ReactJS", "Redux", "React Hooks"]
    },
    {
      title: "Styling & Markup",
      items: ["HTML5", "CSS3", "SASS", "Bootstrap", "MaterialUI", "Ant Design"]
    },
    {
      title: "Testing & Tools",
      items: ["Jest", "Enzyme", "Mocha", "Chai", "D3.js"]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Skills</h2>
        <div className="row">
          {skillGroups.map((group, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{group.title}</h5>
                  <ul className="list-unstyled">
                    {group.items.map((item, idx) => (
                      <li key={idx}>✅ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
