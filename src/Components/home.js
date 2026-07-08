import React, { useEffect, useState } from "react";
import heroImg from "../Images/me.webp";
import Instagram from "../Images/instagram.png";
import Linkedin from "../Images/linkedin.png";
import Github from "../Images/github.png";



const roles = ["Student", "Creator", "Developer"];

function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <h1 className="highlight">
            I'm a{" "}
            <span className={`changing-text ${fade ? "fade-in" : "fade-out"}`} style={{ color: "#22bcac" }}>
              {roles[index]}
            </span>
          </h1>

          <p style={{fontWeight: "bold"}}>
            A passionate Front End Developer skilled in building responsive and
            interactive web applications using HTML, CSS, JavaScript, and React.
          </p>


          <div className="socials">
            <a href="https://www.instagram.com/giridaran_cb6?igsh=cHlqaGxuY2d0a3hy" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>

            <a href="https://www.linkedin.com/in/giridaran-balaji-654360296" target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="LinkedIn" />
            </a>

            <a href="https://github.com/Giridaran-95" target="_blank" rel="noreferrer">
              <img src={Github} alt="GitHub" />
            </a>
          </div>


        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-ring">
            <img src={heroImg} alt="profile" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
