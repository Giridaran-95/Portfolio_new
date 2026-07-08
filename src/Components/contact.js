import React from "react";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import github from "../Images/github.png";
import email from "../Images/gmail.png";



const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-overlay">
        {/* Left Side */}
        <div className="contact-left">
          <h1 className="logo-name">Giridaran.</h1>
          <p className="logo-tagline">Let’s connect & build something amazing</p>
        </div>

        {/* Right Side */}
        <div className="contact-right">

          <a className="instagram" href="https://www.instagram.com/giridaran_cb6?igsh=cHlqaGxuY2d0a3hy" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
            <span>Instagram (Dm)</span>
          </a>

          <a className="linkedin" href="https://www.linkedin.com/in/giridaran-balaji-654360296" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>

          <a className="github" href="https://github.com/Giridaran-95" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" />
            <span>GitHub</span>
          </a>

          <a className="email" href="mailto:yourmail@gmail.com">
            <img src={email} alt="Email" />
            <span>cbgiridaran95@gmail.com</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
