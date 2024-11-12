"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";
const Home = () => {
  const t = useTranslations("Home"); // Utilisation des traductions pour la section 'Home'

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.2, ease: "easeIn" }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-50">
          <div className="text-center xl:text-left xl:ml-40 mt-10">
            <h1 className="h1">
              <span>{t("hello")}</span>
            </h1>
            <h1 className="h1 mb-4">
              <span className="text-accent">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(`${t("name")}`).start();
                  }}
                  options={{
                    delay: 80, // Vitesse de frappe (en ms)
                    cursor: "|", // Personnalise le curseur
                  }}
                />
              </span>
            </h1>
            <div className="mb-10">
              <span className="text-xl">{t("title")}</span>
            </div>
            <p className="max-w-[550px] mb-9 text-justify">{t("intro")}</p>
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
                    transition={{ type: "spring" }}
                  >
                    <Button variant="outline" size="lg">
                      <span>{t("download_cv")}</span>
                      <FiDownload className="text-xl ml-2" />{" "}
                      {/* Ajout de ml-2 pour espacer l'icône */}
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
