"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About"); // Utilisation des traductions pour la section 'About'

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="h-full py-10"
    >
      <div className="container mx-auto h-full flex flex-col">
        {/* Centrage du titre */}
        <motion.div
          className="text-center mb-8"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <h1 className="text-4xl font-semibold text-accent mb-6">
            {t("title")}
          </h1>
        </motion.div>

        {/* Section de texte */}
        <motion.div
          className="flex flex-col xl:flex-row justify-center items-center xl:space-x-10"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          {/* Div pour les paragraphes */}
          <div className="flex-1 text-center xl:text-left mb-8 xl:mb-0">
            <p className="mb-6 text-justify">{t("intro")}</p>
            <p className="mb-6 text-justify">{t("journey")}</p>
            <p className="mb-6 text-justify">{t("passion")}</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
