import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer } from "@mui/material";
import { Menu, X } from "react-feather";
import home from "../Images/home.png";
import about from "../Images/about.png";
import skills from "../Images/skill.png";
import achievements from "../Images/achievement.png";
import contact from "../Images/contact.png";
import projects from "../Images/project.png";

const navItems = [
  { label: "Home", href: "#home", icon: home },
  { label: "About", href: "#about", icon: about },
  { label: "Skills", href: "#skills", icon: skills },
  { label: "Projects", href: "#projects", icon: projects },
  { label: "Achievements", href: "#achievements", icon: achievements },
  { label: "Contact", href: "#contact", icon: contact },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: 70,
          justifyContent: "center",
          backgroundColor: scrolled
            ? "rgba(26,26,26,0.6)"
            : "rgba(26,26,26,0.85)",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "all 0.3s ease",
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 8 } }}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
          >
            Giridaran.
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                startIcon={
                  <img src={item.icon} alt="" width={20} height={20} />
                }
                sx={{
                  color: "#00f2ff ",
                  fontWeight: "bold",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderBottom: "2px solid #22bcac",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            onClick={() => setMenuOpen((prev) => !prev)}
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
          >
            {menuOpen ? <X /> : <Menu />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(26,26,26,0.95)",
            paddingTop: "80px",
          },
        }}
      >

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              startIcon={
                <img src={item.icon} alt="" width={20} height={20} />
              }
              sx={{
                color: "#22bcac",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>

      {/* Spacer so content doesn't go under navbar */}
      <Box sx={{ height: 70 }} />
    </>
  );
}
