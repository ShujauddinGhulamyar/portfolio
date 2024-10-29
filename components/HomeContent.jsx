"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Photo from "./Photo";

const HomeContent = ({ data }) => {
  const name = data?.name || "Nom par défaut";
  const title = data?.title || "Titre par défaut";

  const handlePhotoClick = () => {
    // Animation ou action à faire lors du clic sur la photo
    console.log("Photo clicked!");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              <span className="text-[24px] xl:text-[32px]">{`Hello! I'm`}</span>
            </h1>
            <h1 className="h1 mb-4">
              <span className="text-accent">{name}</span>
            </h1>
            <div className="mb-10">
              <span className="text-xl">{title}</span>
            </div>
            <p className="max-w-[550px] mb-9 text-justify">
              Welcome to my portfolio! I’m glad you’re here! While I’m currently
              working on my projects, this space will soon showcase my creative
              journey and future endeavors. Stay tuned for updates!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="flex items-center">
                <a
                  href="/assets/shuja_ghulamyar_cv.pdf" // Chemin vers ton CV
                  download
                  className="uppercase flex items-center gap-2"
                  aria-label="Télécharger le CV"
                >
                  <Button variant="outline" size="lg">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeContent;
