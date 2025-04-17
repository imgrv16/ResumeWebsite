import React, { useState , useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import Tests from "./components/Tests";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';



function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);

  

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} />
      {
      console.log({ Projects, Education, Contact })

      }
      <main className="container-fluid px-3 px-md-5 py-4">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
