import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/screen1.jpg";
// import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/screen0.png";
// import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Website for Food Catering Service"
              description="In March 2022, I initiated a consultancy project for a hotel, focusing on creating a dynamic website for their catering service. The website, developed using HTML, CSS, PHP, and MySQL, aimed to enhance online visibility and streamline catering operations. Leveraging these technologies, the project delivered a comprehensive and user-friendly platform for menu browsing, ordering, and inquiries."
              ghLink="https://github.com/dhinakaran2425/website-for-catering-service"
              demoLink="https://sribalajimessandbakery.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Doctor Appointment App - DocOnline"
              description="A Mobile Application to aid specialists to view the active appointments and update their availability, and patients to schedule appointments based upon the availability of specialists."
              ghLink="https://github.com/dhinakaran2425/Doctor-Appointment-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
