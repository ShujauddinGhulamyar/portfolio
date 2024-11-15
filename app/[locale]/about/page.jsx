"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  const paragraphVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="h-full py-10"
    >
      <div className="container mx-auto h-full flex flex-col">
        {/* Titre de la section */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          <h1 className="text-4xl font-semibold text-accent">{t("title")}</h1>
        </motion.div>

        {/* Contenu de la section */}
        <motion.div
          className="flex flex-col xl:flex-row justify-center items-center xl:space-x-10 gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
        >
          {/* Colonne de texte */}
          <div className="flex-1 text-center xl:text-left max-w-3xl">
            <motion.p
              variants={paragraphVariants}
              custom="left"
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
              className="mb-6 text-justify mx-auto"
            >
              {t("intro")}
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              custom="right"
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="mb-6 text-justify mx-auto"
            >
              {t("journey")}
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              custom="left"
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              className="mb-6 text-justify mx-auto"
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
