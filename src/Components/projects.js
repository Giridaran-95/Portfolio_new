import React from "react";
import portfolio from "../Images/portfolio-img.jpg";
import birthday from "../Images/bday.jpeg";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h1 className="project-title">
        My <span>Projects</span>
      </h1>

      <div className="project-card">


        {/* Project Content */}
        <div className="project-content">

          <h2>Personal Portfolio</h2>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Material UI</span>
            <span>PrimeReact</span>
          </div>

          <p>
            A responsive and modern personal portfolio website developed to
            showcase my skills, projects, certifications, achievements, and
            experience with a clean UI, smooth navigation, interactive
            animations, and a fully responsive design.
          </p>

          <ul>
            <li>🏠 Responsive Portfolio Home Page</li>
            <li>👤 About Me Section</li>
            <li>💼 Experience Timeline</li>
            <li>🛠 Technical Skills Showcase</li>
            <li>🚀 Featured Projects Gallery</li>
            <li>📧 Contact Form & Social Links</li>
          </ul>

          <div className="project-buttons">
            <a
              href="https://giridaran-95.github.io/Portfolio_new/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>

        </div>

        {/* Project Image */}
        <div className="project-image">
          <img src={portfolio} alt="Portfolio Project" />
        </div>
      </div>

      <div className="project-card">

        {/* Project Image */}
        <div className="project-image">
          <img src={birthday} alt="Birthday Invitation" />
        </div>

        {/* Project Content */}
        <div className="project-content">

          <h2>Birthday Invitation</h2>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <p>
            A responsive birthday invitation website designed with an attractive
            layout and interactive elements. It provides event details, date,
            venue information, and a visually appealing user experience across
            all devices.
          </p>

          <ul>
            <li>🎂 Attractive Invitation Landing Page</li>
            <li>📅 Event Date & Time Details</li>
            <li>📍 Venue Information</li>
            <li>🎨 Responsive User Interface</li>
            <li>✨ Interactive Design Elements</li>
            <li>📱 Mobile-Friendly Layout</li>
          </ul>

          <div className="project-buttons">
            <a
              href="https://giridaran-95.github.io/Birthday_Invitation/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>

        </div>

      </div>

    </section>

  );
}

export default Projects;