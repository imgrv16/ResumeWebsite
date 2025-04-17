import React from "react";

function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-3 shadow-sm">
      <a className="navbar-brand fw-bold" href="#hero">Gaurav Anand</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
        <button onClick={toggleTheme} className="btn btn-outline-primary ms-3">Toggle Theme</button>
      </div>
    </nav>
  );
}

export default Navbar;
