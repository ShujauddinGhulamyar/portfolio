"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  // États pour observer si la section est visible
  const [isVisible, setIsVisible] = useState(false);

  // Définir les variantes d'animation pour chaque paragraphe
  const paragraphVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50, // Déplacer légèrement vers la gauche ou la droite
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80, // Rendre le mouvement plus rapide
        damping: 20, // Ajuster l'amortissement pour une transition fluide
      },
    },
  };

  // Hook d'effet pour observer la visibilité de la section avec IntersectionObserver
  useEffect(() => {
    const sectionElement = document.getElementById("about");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la section est visible à 50% dans la fenêtre
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // Déclencher lorsque 50% de la section est visible
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      className="h-full py-10"
    >
      <div className="container mx-auto h-full flex flex-col">
        {/* Titre avec animation identique à Skills */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }} // Initialisation similaire à celle de Skills
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }} // Le titre devient visible avec une translation
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }} // Durée et timing identiques
        >
          <h1 className="text-4xl font-semibold text-accent mb-6">
            {t("title")}
          </h1>
        </motion.div>

        {/* Section de texte */}
        <motion.div
          className="flex flex-col xl:flex-row justify-center items-center xl:space-x-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
        >
          {/* Div pour les paragraphes */}
          <div className="flex-1 text-center xl:text-left mb-8 xl:mb-0">
            <motion.p
              variants={paragraphVariants}
              custom="left" // Le premier paragraphe vient de gauche
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="mb-6 text-justify"
            >
              {t("intro")}
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              custom="right" // Le deuxième paragraphe vient de droite
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="mb-6 text-justify"
            >
              {t("journey")}
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              custom="left" // Le troisième paragraphe revient de gauche
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              className="mb-6 text-justify"
            >
              {t("passion")}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
