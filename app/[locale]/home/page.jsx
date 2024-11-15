"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="h-full py-10"
    >
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-50">
          <div className="text-center xl:text-left xl:ml-40 mt-10">
            {/* Titre principal animé */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h1"
            >
              <span>{t("hello")}</span>
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h1 mb-4"
            >
              <span className="text-accent">{t("name")}</span>
            </motion.h1>

            {/* Titre supplémentaire animé */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-10"
            >
              <span className="text-xl">{t("title")}</span>
            </motion.div>

            {/* Intro texte animé */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="max-w-[550px] mb-9 text-justify"
            >
              {t("intro")}
            </motion.p>

            {/* Boutons et icônes animés avec séquentialité */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center"
              >
                <a
                  href="/assets/Shuja_Ghulamyar_CV.pdf"
                  className="uppercase flex items-center gap-4"
                  aria-label={t("download_cv")}
                  download="Shuja_Ghulamyar_CV.pdf"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  >
                    <Button variant="outline" size="lg">
                      <span>{t("download_cv")}</span>
                      <FiDownload className="text-xl ml-2" />
                    </Button>
                  </motion.div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }} // Plus de délai pour une animation séquentielle
                className="flex gap-6"
              >
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
