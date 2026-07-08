import React from "react";
import aboutImg from "../Images/aboutimg.png";

function About() {
  return (
    <>
    <section className="about-section" id="about">
      <h2 className="about-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        <div className="about-left">
          <img
            src={aboutImg} alt="About Illustration" className="about-image"
          />
        </div>

        <div className="about-card">
          <p>
            I'm <strong>Giridaran CB</strong>, Student at Jerusalem College of
            Engineering pursuing a Bachelor's degree in Information Technology(Pre-Final year). 
          </p>

          <p>
            I'm passionate about Front end development and have hands-on
            experience building interactive and responsive web applications
            using HTML, CSS, JavaScript, React.
          </p>

          <p>
            I have demonstrated leadership in academic and real-world projects,
            coordinating teams and delivering successful outcomes.
          </p>

          <button className="download-btn">Download CV</button>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
