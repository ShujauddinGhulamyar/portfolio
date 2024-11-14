"use client";

import React, { useState, useEffect } from "react";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { motion } from "framer-motion";

const Page = () => {
  // État pour suivre la position de la section active
  const [activeSection, setActiveSection] = useState(null);

  // Fonction pour observer le défilement et définir la section active
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
    handleScroll(); // Appeler la fonction au chargement initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Définir la largeur de la ligne en fonction de la section active
  const getLineWidth = (sectionId) => {
    return activeSection === sectionId ? "50%" : "20%"; // Largeur change selon la section active
  };

  return (
    <div>
      {/* Section d'accueil */}
      <Home />

      {/* Ligne séparatrice entre les sections */}
      <motion.div
        className="mx-auto my-16 h-[1px] bg-accent" // Réduction de l'épaisseur ici
        style={{ width: getLineWidth("home") }} // Change la largeur de la ligne
        initial={{ width: 0 }}
        animate={{ width: getLineWidth("home") }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Section À propos */}
      <About />

      {/* Ligne séparatrice entre les sections */}
      <motion.div
        className="mx-auto my-16 h-[1px] bg-accent" // Réduction de l'épaisseur ici
        style={{ width: getLineWidth("about") }}
        initial={{ width: 0 }}
        animate={{ width: getLineWidth("about") }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Section Compétences */}
      <Skills />

      {/* Ligne séparatrice entre les sections */}
      <motion.div
        className="mx-auto my-16 h-[1px] bg-accent" // Réduction de l'épaisseur ici
        style={{ width: getLineWidth("skills") }}
        initial={{ width: 0 }}
        animate={{ width: getLineWidth("skills") }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Section Projets */}
      <Projects />

      {/* Ligne séparatrice entre les sections */}
      <motion.div
        className="mx-auto my-16 h-[1px] bg-accent" // Réduction de l'épaisseur ici
        style={{ width: getLineWidth("projects") }}
        initial={{ width: 0 }}
        animate={{ width: getLineWidth("projects") }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Section Contact */}
      <Contact />
    </div>
  );
};

export default Page;
