"use client";

import React, { useState, useEffect } from "react";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { motion } from "framer-motion";

const Page = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let currentSection = null;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineWidth = (sectionId) => {
    return activeSection === sectionId ? "80%" : "20%";
  };

  return (
    <div>
      <Home />
      <motion.div
        className="mx-auto my-16 h-[1px] bg-accent"
        style={{ width: getLineWidth("home") }}
        initial={{ width: 0 }}
        animate={{ width: getLineWidth("home") }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <About />
      <motion.div
        className="mx-auto my-16 h-[1px] bg-accent"
        style={{ width: getLineWidth("about") }}
        initial={{ width: 0 }}
        animate={{ width: getLineWidth("about") }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <Skills />
      <motion.div
        className="mx-auto my-16 h-[1px] bg-accent"
        style={{ width: getLineWidth("skills") }}
        initial={{ width: 0 }}
        animate={{ width: getLineWidth("skills") }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <Projects />
      <motion.div
        className="mx-auto my-16 h-[1px] bg-accent"
        style={{ width: getLineWidth("projects") }}
        initial={{ width: 0 }}
        animate={{ width: getLineWidth("projects") }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <Contact />
    </div>
  );
};

export default Page;
