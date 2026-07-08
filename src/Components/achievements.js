import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import acm from "../Certificates/acm.png";
import gaming from "../Certificates/gaming.png";
import advancedit from "../Certificates/advancedit.png";
import responsive from "../Certificates/responsive.png";
import sympo from "../Certificates/sympo.png";
import playtopia from "../Certificates/playtopia.png";
import skillsbuild from "../Certificates/skillsbuild.png";
import aifund from "../Certificates/aifund.png";
import networking from "../Certificates/networking.png";
import cyber from "../Certificates/cyber.png";

const achievementsData = [
  { icon: "♟️", title: "Arena Candidate Master", desc: "A chess title awarded for achieving strong ratings and consistent performance in official online arena tournaments.", image: acm },
  { icon: "🎮", title: "Gaming and Craft Studio", desc: "Gained hands-on experience in game design and creative crafting, combining technical skills with artistic creativity.", image: gaming },
  { icon: "🏗️", title: "Advanced IT Infrastructure", desc: "Completed an in-depth course on designing, managing, and optimizing complex IT systems and enterprise networks.", image: advancedit },
  { icon: "💻", title: "Responsive Web Designing", desc: "Completed a 300-hour intensive course focused on building fully responsive, user-friendly websites across multiple devices.", image: responsive },
  { icon: "🥁", title: "RHYTHM REBOOT - ZEPHYR’24", desc: "Participated in a high-energy cultural event showcasing rhythm, coordination, and teamwork during the Zephyr 2024 Symposium.", image: sympo },
  { icon: "🎉", title: "Playtopia", desc: "Participated in a college-level gaming and fun event, showcasing creativity, strategy, and teamwork.", image: playtopia },
  { icon: "🏅", title: "Professional Excellence for SkillsBuild", desc: "Earned recognition for demonstrating professional skills, workplace readiness, and continuous learning through the SkillsBuild program.", image: skillsbuild },
  { icon: "🤖", title: "Artificial Intelligence Fundamentals", desc: "Completed a course covering the basics of AI, including machine learning, neural networks, and real-world applications.", image: aifund },
  { icon: "🌐", title: "Networking Basics", desc: "Completed foundational training in computer networking concepts, including protocols, IP addressing, and network security fundamentals.", image: networking },
  { icon: "🛡️", title: "Introduction to Cybersecurity", desc: "Completed a foundational course on cybersecurity principles, threats, and best practices for protecting digital systems.", image: cyber }
];


const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 700,
  bgcolor: "#111",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  textAlign: "center"
};

export default function Achievements() {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");

  const handleOpen = (img, title) => {
    setCurrentImage(img);
    setCurrentTitle(title);
    setOpen(true);
  };

  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements-title">
        <span className="achievement-highlight">Achieve</span>ments
      </h2>

      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">{item.icon}</div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
            <button
              className="read-more-btn"
              onClick={() => handleOpen(item.image, item.title)}
            >
              Show Certificate
            </button>
          </div>
        ))}
      </div>

      {/* ===== MUI MODAL ===== */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ color: "#00f2ff", mb: 2 }}>
            {currentTitle}
          </Typography>

          {currentImage && (
            <img
              src={currentImage}
              alt="Certificate"
              style={{
                width: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                background: "#fff",
                borderRadius: "6px"
              }}
            />
          )}

          <Button
            variant="contained"
            color="error"
            sx={{ mt: 3 }}
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </section>
  );
}

