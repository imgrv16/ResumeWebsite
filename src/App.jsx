import React , {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route , } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Dashboard from "./components/DashBoard";
import Dashboard from "./components/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    function handleOutsideClick(event) {
      const toggler = document.querySelector(".navbar-toggler");
      const collapse = document.querySelector(".navbar-collapse");
  
      if (
        collapse &&
        collapse.classList.contains("show") &&
        !collapse.contains(event.target) &&
        !toggler.contains(event.target)
      ) {
        toggler.click();
      }
    }
  
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Experience />
              <Dashboard />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
