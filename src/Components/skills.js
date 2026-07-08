import React from "react";


const skillSections = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "PrimeReact", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/primeng/primeng-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    title: "Developer and Designing Tools",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Figma (Basics)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" }
    ]
  }, 
  {
    title: "Soft Skills",
    skills: [
      { name: "Willingness to Learn", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" },
      { name: "Communication Skills", icon: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png" },
      { name: "Problem-Solving", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
      { name: "Team Collaboration", icon: "https://cdn-icons-png.flaticon.com/512/681/681494.png" },
      { name: "Time Management", icon: "https://cdn-icons-png.flaticon.com/512/833/833593.png" }
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        My <span>Skills</span>
      </h2>

      {skillSections.map((section, idx) => (
        <div key={idx} className="skills-category">
          <h3 className="skills-subtitle glow-text">{section.title}</h3>

          <div className="skills-wrapper">
            <div className="skills-grid">
              {section.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={skill.icon} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}

export default Skills;
