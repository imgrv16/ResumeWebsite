import React from 'react';
import './Hero.css';
import { FaDownload, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleDownload = () => {
    console.log("Resume downloaded - tracking event");
  };

  return (
    <motion.section
      className="container hero-section"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-inner glass-card">
        <div className="hero-text">
          <h1>
            Hey, I'm Gaurav Anand <span className="emoji">👋</span>
          </h1>
          <p>
            A passionate React.js developer crafting clean and responsive web applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
            <a
              href="/resume_Gaurav.pdf"
              download="resume_Gaurav.pdf"
              onClick={handleDownload}
              className="btn btn-outline-secondary btn-lg"
              title="Click to Download"
            >
              <FaDownload className="me-2" />
              Download Resume
            </a>
            <a
              href="https://github.com/imgrv16"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg"
            >
              <FaGithub className="me-2" />
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/assets/IMG_1226.jpg"
            alt="Gaurav Anand"
            className="hero-image"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
