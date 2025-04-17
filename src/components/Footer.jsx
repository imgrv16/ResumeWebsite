import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer-outro text-white py-4 mt-5"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <Container className="text-center">
        <h5
          className="mb-3 fw-light fst-italic"
          style={{ color: "#ffffff", marginTop: "1rem" }}
        >
          "Let’s build something awesome together."
        </h5>

        <div className="mb-3">
          <a
            href="https://github.com/imgrv16"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/imgrv16"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:gauravanand@example.com"
            className="footer-icon"
          >
            <FaEnvelope size={26} />
          </a>
        </div>

        <small className="text-light">&copy; 2025 Gaurav Anand. All rights reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;
