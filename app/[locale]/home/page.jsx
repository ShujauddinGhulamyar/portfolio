"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";

const Home = () => {
  const t = useTranslations("Home");

  // États pour observer si la section est visible
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0); // Clé pour forcer la réinitialisation du Typewriter

  // Détecter la visibilité de la section
  useEffect(() => {
    const sectionElement = document.getElementById("home");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Section visible
            setKey((prevKey) => prevKey + 1); // Change la clé pour redémarrer le Typewriter
          } else {
            setIsVisible(false); // Section invisible
          }
        });
      },
      {
        threshold: 0.5, // Déclenche l'animation lorsque 50% de la section est visible
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
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-50">
          <div className="text-center xl:text-left xl:ml-40 mt-10">
            {/* Titre principal animé */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h1"
            >
              <span>{t("hello")}</span>
            </motion.h1>

            {/* Nom avec effet typewriter animé */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
              transition={{ duration: 2, delay: 1 }}
              className="h1 mb-4"
            >
              <span className="text-accent">
                <Typewriter
                  key={key} // Change la clé pour forcer la réinitialisation
                  onInit={(typewriter) => {
                    typewriter.typeString(`${t("name")}`).start();
                  }}
                  options={{
                    delay: 100, // Délai ajusté pour ralentir l'écriture
                    cursor: "|",
                  }}
                />
              </span>
            </motion.h1>

            {/* Titre supplémentaire animé */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10"
            >
              <span className="text-xl">{t("title")}</span>
            </motion.div>

            {/* Intro texte animé */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-[550px] mb-9 text-justify"
            >
              {t("intro")}
            </motion.p>

            {/* Boutons et icônes animés */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="flex items-center">
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
              </div>
              <div className="flex gap-6">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
