import React from "react";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Experience from "./Components/experience";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import Achievements from "./Components/achievements";
import Contact from "./Components/contact";
import "./App.css";
import "./Styles/about.css";
import "./Styles/achievements.css";
import "./Styles/contact.css";    
import "./Styles/experience.css";
import "./Styles/skills.css";
import "./Styles/home.css";
import "./Styles/navbar.css";
import "./Styles/projects.css";

function App() {
  return (
    <>
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      </div>
    </>
  );
}

export default App;
