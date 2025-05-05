import React from "react";
import { Container, Accordion } from "react-bootstrap";

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">Project TimeLine</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Infosys Experience</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>Runner Redesign –</strong> (Feb 2020 – Aug 2020)</li>
                <ul>
                  <li>Built dynamic user module with config-driven forms.</li>
                  <li>Developed frontend with HTML/CSS and timezone logic.</li>
                  <li>Handled API integration and production issues.</li>
                </ul>
                <li><strong>CRM Activity Dashboard –</strong> (Jul 2020 – Sep 2020)</li>
                <ul>
                  <li>Created dashboard with D3.js graphs and filters.</li>
                  <li>Implemented upload/download features and Talend API.</li>
                  <li>Managed testing, deployment, and documentation.</li>
                </ul>
                <li><strong>ForteKnox –</strong> (Sep 2020 – Feb 2021)</li>
                <ul>
                  <li>Automated workflows within CST portal for Apple.</li>
                  <li>Used Context API for state management.</li>
                  <li>Designed animated UI for enhanced UX.</li>
                </ul>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Accenture Experience</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>Employee Connect Portal –</strong> (Jul 2021 – Nov 2021)</li>
                <ul>
                  <li>Built responsive SPA with ReactJS and MUI.</li>
                  <li>Integrated SharePoint for large dataset UIs.</li>
                  <li>Delivered custom tables and UI components.</li>
                </ul>
                <li><strong>SkillNavigator –</strong> (Nov 2021 – Apr 2022)</li>
                <ul>
                  <li>Managed user certification scheduling UI.</li>
                  <li>Developed complex date/time logic in TypeScript.</li>
                  <li>Collaborated on UX and mentored juniors.</li>
                </ul>
                <li><strong>B2B Activity Dashboard –</strong> (May 2022 – Nov 2022)</li>
                <ul>
                  <li>Built dashboard app with Redux for state.</li>
                  <li>Handled real-time API integration and UI updates.</li>
                  <li>Wrote unit tests and optimized performance.</li>
                </ul>
                <li><strong>ToolTip –</strong> (Feb 2023 – Aug 2023)</li>
                <ul>
                  <li>Built reusable UI components for legacy upgrade.</li>
                  <li>Led frontend migration with vanilla JS and CSS.</li>
                  <li>Implemented accessibility and UX parity.</li>
                </ul>
                <li><strong>SharePoint Front-End – Avanade –</strong> (Mar 2024 – Present)</li>
                <ul>
                  <li>Led React-based UI dev for Microsoft migrations.</li>
                  <li>Enhanced accessibility and responsiveness.</li>
                  <li>Developed pixel-perfect replicas and new features.</li>
                </ul>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Experience;
