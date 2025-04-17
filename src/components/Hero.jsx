// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section className="container hero-section">
//       <div className="hero-text">
//         <h1>Hey, I'm Gaurav Anand 👋</h1>
//         <p>
//           A passionate React.js developer crafting clean and responsive web applications.
//         </p>
//         <div className="hero-buttons">
//           <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
//           <a href="/resume_Gaurav.pdf" download="resume_Gaurav.pdf" className="btn btn-outline-secondary btn-lg" target="_blank" rel="noopener noreferrer">Download Resume</a>
//           <a
//             href="https://github.com/imgrv16"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-outline-primary btn-lg"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//       <div className="hero-image-wrapper">
//         <img
//           src="/assets/IMG_1226.jpg"
//           alt="Gaurav Anand"
//           className="hero-image"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import './Hero.css';
import { FaDownload, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const handleDownload = () => {
    console.log("Resume downloaded - tracking event");
    // Optional: Connect this to Google Analytics or any analytics tool
  };

  return (
    <section className="container hero-section">
      <div className="hero-text">
        <h1>Hey, I'm Gaurav Anand 👋</h1>
        <p>
          A passionate React.js developer crafting clean and responsive web applications.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>

          {/* Download Resume Button */}
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

          {/* GitHub Button */}
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
    </section>
  );
};

export default Hero;

