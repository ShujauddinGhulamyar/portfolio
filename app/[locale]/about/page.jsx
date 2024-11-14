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
    <motion.section id="about" className="h-full py-10">
      <div className="container mx-auto h-full flex flex-col">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        >
          <h1 className="text-4xl font-semibold text-accent mb-6">
            {t("title")}
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col xl:flex-row justify-center items-center xl:space-x-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex-1 text-center xl:text-left mb-8 xl:mb-0">
            <motion.p
              variants={paragraphVariants}
              custom="left"
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
              className="mb-6 text-justify"
            >
              {t("intro")}
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              custom="right"
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="mb-6 text-justify"
            >
              {t("journey")}
            </motion.p>

            <motion.p
              variants={paragraphVariants}
              custom="left"
              initial="hidden"
              whileInView="visible"
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
