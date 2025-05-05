import React, { useState, useEffect, useRef } from "react";
import {
  Container, Row, Col, Badge, ProgressBar,
  ButtonGroup, Button, OverlayTrigger, Tooltip, Form
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "../data/skills.json";
import SkillExplainerModal from "./SkillExplainerModal";

const categories = [
  "All", "Frontend", "Tools", "State Management",
  "Styling", "Animation", "Routing", "API",
  "Build Tools", "Testing", "Graph Management"
];

const skillLevels = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];
const tags = ["React", "Redux", "Animation", "Hooks", "TypeScript", "CSS", "API", "Testing"];
const ITEMS_PER_PAGE = 4;

const highlightText = (text, highlight) => {
  if (!highlight) return text;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <motion.span
        key={i}
        style={{ backgroundColor: "#fff3cd", borderRadius: "4px", padding: "0 2px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {part}
      </motion.span>
    ) : part
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const openModal = (skill) => {
    setActiveSkill(skill);
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveSkill(null);
    setShowModal(false);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedLevel]);

  useEffect(() => {
    const handleKey = (e) => {
      const cards = containerRef.current?.querySelectorAll(".skill-card");
      if (!cards?.length) return;

      const current = document.activeElement;
      const index = Array.from(cards).indexOf(current);

      let next = -1;
      if (e.key === "ArrowRight") next = Math.min(index + 1, cards.length - 1);
      else if (e.key === "ArrowLeft") next = Math.max(index - 1, 0);
      else if (e.key === "ArrowDown") next = Math.min(index + 2, cards.length - 1);
      else if (e.key === "ArrowUp") next = Math.max(index - 2, 0);
      else if (e.key === "Enter" && current?.href) current.click();

      if (next >= 0 && cards[next]) cards[next].focus();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filteredSkills = skillsData.filter(skill =>
    (selectedCategory === "All" || skill.category === selectedCategory) &&
    (selectedLevel === "All" || skill.level === selectedLevel) &&
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSkills.length / ITEMS_PER_PAGE);
  const currentSkills = filteredSkills.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleTagClick = (tag) => {
    setSearchTerm(tag);
    setCurrentPage(1);
  };

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-2">Skills</h2>
        <p className="text-center text-muted mb-4 fst-italic">
          Tap into the tech behind the suit — every skill card is clickable and takes you straight to its tutorial. Learn what powers Iron Man, one click at a time.
        </p>

        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control w-50 shadow-sm"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center flex-wrap mb-3">
          {tags.map(tag => (
            <motion.button
              key={tag}
              className="btn btn-sm btn-outline-secondary m-1"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </motion.button>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-center mb-4 gap-2">
          <ButtonGroup>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "dark" : "outline-dark"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>

          <Form.Select
            className="w-auto shadow-sm"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            {skillLevels.map(level => (
              <option key={level}>{level}</option>
            ))}
          </Form.Select>
        </div>

        <AnimatePresence mode="wait">
          {currentSkills.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center text-muted py-5"
            >
              <h5>No skills match your search.</h5>
              <p className="fst-italic">Try another keyword or explore a different category.</p>
            </motion.div>
          ) : (
            <Row key={currentPage + selectedCategory + searchTerm + selectedLevel} className="justify-content-center" ref={containerRef}>
              {currentSkills.map((skill) => (
                <Col key={skill.name} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <motion.a
                    href={skill.tutorialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={0}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.07 }}
                    className={`skill-card glass-card p-4 text-center d-block text-decoration-none ${skill.topSkill ? 'top-skill' : ''}`}
                  >
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                          {skill.tooltip || `Proficiency: ${skill.levelPercent}%`}
                        </Tooltip>
                      }
                    >
                      <div>
                        <i className={`${skill.iconClass} fa-2x mb-3`} style={{ color: "#0d6efd" }}></i>
                        {skill.topSkill && <Badge bg="warning" className="mb-2">Top Skill</Badge>}
                        <h6 className="fw-semibold mb-1 text-dark">
                          {highlightText(skill.name, searchTerm)}
                        </h6>
                        <Badge bg="secondary" className="small-badge mb-2">{skill.level}</Badge>
                        <ProgressBar
                          now={skill.levelPercent}
                          label={`${skill.levelPercent}%`}
                          className="animated-progress black-bar"
                        />
                        <button
                          className="btn btn-sm btn-outline-secondary mt-2"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal(skill);
                          }}
                        >
                          🤖 Learn More
                        </button>
                      </div>
                    </OverlayTrigger>
                  </motion.a>
                </Col>
              ))}
            </Row>
          )}
        </AnimatePresence>

        {totalPages > 1 && currentSkills.length > 0 && (
          <div className="d-flex justify-content-center mt-4">
            <motion.button
              className="btn btn-outline-dark me-2"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Prev
            </motion.button>
            <motion.button
              className="btn btn-outline-dark"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Next
            </motion.button>
          </div>
        )}

        <SkillExplainerModal show={showModal} handleClose={closeModal} skill={activeSkill} />
      </Container>
    </section>
  );
};

export default Skills;
