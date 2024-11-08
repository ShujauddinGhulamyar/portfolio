"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("Home"); // Utilisation des traductions pour la section 'Home'

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-50">
          <div className="text-center xl:text-left xl:ml-40">
            <h1 className="h1">
              <span className="text-[24px] xl:text-[32px]">{t("hello")}</span>
            </h1>
            <h1 className="h1 mb-4">
              <span className="text-accent">{t("name")}</span>
            </h1>
            <div className="mb-10">
              <span className="text-xl">{t("title")}</span>
            </div>
            <p className="max-w-[550px] mb-9 text-justify">{t("intro")}</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="flex items-center">
                <a
                  href="/assets/Shuja_Ghulamyar_CV.pdf"
                  download
                  className="uppercase flex items-center gap-2"
                  aria-label={t("download_cv")}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <Button variant="outline" size="lg">
                      <span>{t("download_cv")}</span>
                      <FiDownload className="text-xl" />
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