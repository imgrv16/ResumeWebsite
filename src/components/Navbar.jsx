import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const CustomNavbar = ({ toggleTheme, isDark }) => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section.id;
      }
    });
    setActive(current);
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.documentElement.style.scrollBehavior = "smooth";
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      variant={isDark ? "dark" : "light"}
    >
      <Container>
        <motion.a
          href="#hero"
          className="navbar-brand fw-bold text-white"
          initial={{ opacity: 0, y: -20, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          Gaurav Anand
        </motion.a>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {[
              "hero",
              "about",
              "skills",
              "projects",
              "experience",
              "education",
              "contact",
              "dashboard"
            ].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={`text-white mx-2 ${
                  active === link ? "fw-bold border-bottom" : ""
                }`}
                style={{ transition: "all 0.3s", position: "relative" }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
            <Button
              variant="outline-light"
              onClick={toggleTheme}
              className="ms-3"
              title="Toggle Theme"
            >
              {isDark ? "☀️" : "🌙"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
