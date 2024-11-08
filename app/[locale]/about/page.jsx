"use client";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About"); // Utilisation des traductions pour la section 'About'

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="h-full"
    >
      <div className="container mx-auto h-full flex flex-col justify-between">
        <div className="flex flex-col xl:flex-row justify-center items-center">
          {/* Div pour le texte */}
          <motion.div
            className="flex-1 text-center xl:text-left mb-8 xl:mb-0 xl:order-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-accent">
              {t("title")}
            </h1>

            {/* Photo visible sur petits écrans, juste après le titre */}
            <motion.div
              className="flex justify-center mb-4 xl:hidden"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Photo />
            </motion.div>

            {/* Paragraphes de texte */}
            <p className="mb-6 text-justify">{t("intro")}</p>
            <p className="mb-6 text-justify">{t("journey")}</p>
            <p className="mb-6 text-justify">{t("passion")}</p>
          </motion.div>

          {/* Photo visible sur grands écrans uniquement */}
          <motion.div
            className="flex-1 hidden xl:flex justify-center items-start mb-8 xl:mb-0 xl:order-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
