import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Card, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaBootstrap, FaChartBar } from "react-icons/fa";
import { SiRedux, SiTypescript, SiD3Dotjs, SiFramer } from "react-icons/si";

const About = () => {
  const techTags = [
    { label: "ReactJS", icon: <FaReact />, link: "https://reactjs.org/" },
    { label: "Redux", icon: <SiRedux />, link: "https://redux.js.org/" },
    { label: "JavaScript", icon: <FaJsSquare />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { label: "TypeScript", icon: <SiTypescript />, link: "https://www.typescriptlang.org/docs/" },
    { label: "D3.js", icon: <SiD3Dotjs />, link: "https://d3js.org/" },
    { label: "Bootstrap", icon: <FaBootstrap />, link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/" },
    { label: "Chart.js", icon: <FaChartBar />, link: "https://www.chartjs.org/docs/latest/" },
    { label: "Framer Motion", icon: <SiFramer />, link: "https://www.framer.com/motion/" }
  ];

  const liveDemoLinks = [
    { label: "Custom Search", link: "/demo/custom-search" },
    { label: "Dynamic Loader", link: "/demo/dynamic-loader" },
    { label: "Custom Table", link: "/demo/custom-table" }
  ];

  return (
    <section id="about" className="py-5" style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(8px)" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              whileHover={{ rotate: [-1, 1, -1, 0], transition: { duration: 0.6 } }}
              className="p-4 rounded shadow-lg bg-white"
              style={{ height: "100%", borderRadius: "1rem" }}
            >
              <h5 className="mb-3 fw-semibold">Live Demo Components</h5>
              <ListGroup variant="flush">
                {liveDemoLinks.map((item, idx) => (
                  <ListGroup.Item key={idx} className="border-0 ps-0">
                    <Link to={item.link} style={{ textDecoration: 'none', color: '#0d6efd' }}>
                      • {item.label}
                    </Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4 fw-bold">
  <span className="typewriter-text">About Me</span>
</h2>
              <div className="about-paragraph-box">
                <p>
                  I’m a seasoned <strong>Front-End Developer</strong> with 6+ years of experience building high-impact, responsive web applications using <strong>ReactJS</strong>, <strong>Redux</strong>, and modern UI frameworks. I’ve delivered enterprise-grade solutions for top-tier clients like <strong>Apple</strong> and <strong>Microsoft</strong>, with a focus on accessibility, performance, and cross-platform excellence. Skilled in collaborating across teams, mentoring developers, and solving complex UI challenges, I take pride in building scalable, elegant, and user-centric interfaces that truly deliver value.
                </p>
              </div>
              <div className="mb-3 mt-3">
                {techTags.map((tech, idx) => (
                  <motion.a
                    key={idx}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ textDecoration: "none" }}
                  >
                    <Badge
                      bg="dark"
                      className="me-2 mb-2 p-2 text-light rounded-pill shadow-sm d-inline-flex align-items-center"
                      style={{ transition: "all 0.3s ease-in-out", cursor: "pointer" }}
                    >
                      <span className="me-1">{tech.icon}</span> {tech.label}
                    </Badge>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

// CSS to include in App.css or About.css
/*
.typewriter-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid rgba(0,0,0,0.75);
  width: 0;
  animation: typing 2.5s steps(20, end) forwards, blink 0.7s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 8.5ch }
}

@keyframes blink {
  50% { border-color: transparent }
}
*/
