"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

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

  return (
    <motion.section id="about" className="h-full py-10">
      <div className="container mx-auto h-full flex flex-col">
        {/* Titre avec animation identique à Skills */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }} // Initialisation similaire à celle de Skills
          whileInView={{ opacity: 1, y: 0 }} // L'élément devient visible avec translation
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
          whileInView={{ opacity: 1 }} // Devenez visible lorsque la section entre dans la vue
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
        >
          {/* Div pour les paragraphes */}
          <div className="flex-1 text-center xl:text-left mb-8 xl:mb-0">
            <motion.p
              variants={paragraphVariants}
              custom="left" // Le premier paragraphe vient de gauche
              initial="hidden"
              whileInView="visible" // Devient visible lorsque l'élément est dans la vue
              transition={{ delay: 0.1 }}
              className="mb-6 text-justify"
            >
              {t("intro")}
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              custom="right" // Le deuxième paragraphe vient de droite
              initial="hidden"
              whileInView="visible" // Devient visible lorsque l'élément est dans la vue
              transition={{ delay: 0.2 }}
              className="mb-6 text-justify"
            >
              {t("journey")}
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              custom="left" // Le troisième paragraphe revient de gauche
              initial="hidden"
              whileInView="visible" // Devient visible lorsque l'élément est dans la vue
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
