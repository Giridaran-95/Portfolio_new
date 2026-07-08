import React, { useState } from "react";
import tvsLogo from "../Images/tvsscs.jpg";
import certificate from "../Images/tvs-certificate.png"; 

const Experience = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="experience-section" id="experience">
        <h2 className="experience-title">
          My <span>Experience</span>
        </h2>

        <div className="experience-card">
          <div className="experience-header">
            <img
              src={tvsLogo}
              alt="Company Logo"
              className="experience-logo"
            />

            <div>
              <h3>FrontEnd Intern</h3>
              <p className="company">
                TVS Supply Chain Solutions, Chennai
              </p>
            </div>
          </div>

          <span className="duration">Sep 2025 – Dec 2025</span>

          <p className="experience-desc">
            Successfully Completed a 3-month Frontend Internship, structured into a learning phase followed by hands-on project implementation.
          </p>

          <ul className="experience-points">
            <li>Gained strong foundations in JavaScript and React.js during the initial phase, focusing on component-based architecture, state management, and reusable UI design.</li>
            <li>Worked on practical frontend tasks including UI designing, layout implementation, and minor bug fixes across multiple pages.</li>
            <li>Contributed to a large real-time project currently under revamp, supporting applications used by US and UK clients.</li>
            <li>Assisted in updating and improving existing UI components as part of the revamp process, ensuring responsiveness and consistency.</li>
            <li>Actively participated in Scrum meetings, revamp discussions, and regular progress update meetings.</li>
            <li>Followed proper version control workflows, implementing changes and updates as assigned by the team.</li>
            <li>Demonstrated strong team collaboration, communication, and problem-solving skills throughout the internship.</li>
          </ul>

          {/* Button */}
          <button className="issued-btn" onClick={() => setOpen(true)}>
            Issued By: TVS Supply Chain Solutions
          </button>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={() => setOpen(false)}>
              &times;
            </span>

            <h3>Internship Certificate</h3>

            <img
              src={certificate}
              alt="TVS Certificate"
              className="certificate-img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
