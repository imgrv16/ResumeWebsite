import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Radar, Line, Bar } from "react-chartjs-2";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Dashboard.css";

import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend
);

const skillRadarData = {
  labels: ["React", "Redux", "JavaScript", "CSS", "TypeScript", "D3.js"],
  datasets: [
    {
      label: "Proficiency",
      data: [90, 80, 95, 85, 70, 65],
      backgroundColor: "rgba(13, 110, 253, 0.2)",
      borderColor: "#0d6efd",
      borderWidth: 2
    }
  ]
};

const radarOptions = {
  animation: {
    duration: 1000,
    easing: "easeOutQuart"
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `Skill: ${context.label} — ${context.parsed}% proficiency`;
        }
      }
    }
  }
};

const skillGrowthData = {
  labels: ["2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Skill Level Progress",
      data: [65, 75, 80, 90, 95],
      fill: true,
      backgroundColor: "rgba(13, 110, 253, 0.2)",
      borderColor: "#0d6efd"
    }
  ]
};

const lineOptions = {
  animation: {
    duration: 1000,
    easing: "easeOutQuart"
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `Year ${context.label}: ${context.parsed.y}% level`;
        }
      }
    }
  }
};

const projectData = {
  labels: ["React", "Redux", "TypeScript", "D3.js"],
  datasets: [
    {
      label: "Projects",
      data: [8, 5, 3, 2],
      backgroundColor: "#0d6efd"
    }
  ]
};

const barOptions = {
  animation: {
    duration: 1000,
    easing: "easeOutBack"
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.parsed.y} projects built`;
        }
      }
    }
  }
};

const Dashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="py-5 dashboard-section" id="dashboard">
      <Container>
        <h2 className="text-center mb-4">Developer Dashboard</h2>
        <Row className="g-4">
          <Col xs={12} md={4} data-aos="fade-up">
            <Card className="glass-card p-3 h-100">
              <h5 className="text-center">Top Skill Proficiency</h5>
              <div style={{ height: 220 }}>
                <Radar data={skillRadarData} options={radarOptions} />
              </div>
            </Card>
          </Col>
          <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="glass-card p-3 h-100">
              <h5 className="text-center">Skill Growth Over Time</h5>
              <div style={{ height: 220 }}>
                <Line data={skillGrowthData} options={lineOptions} />
              </div>
            </Card>
          </Col>
          <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="400">
            <Card className="glass-card p-3 h-100">
              <h5 className="text-center">Project Contributions</h5>
              <div style={{ height: 220 }}>
                <Bar data={projectData} options={barOptions} />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
