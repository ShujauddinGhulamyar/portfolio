"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Arrow icons
import { FiGithub, FiExternalLink } from "react-icons/fi"; // GitHub and External Link icons

const Projects = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      name: `${t("title_project")} 1`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, mi et bibendum auctor, leo ipsum gravida est, non luctus erat sapien id magna. Curabitur sit amet sem vitae orci ullamcorper gravida. Ut et nisi id leo tempor fermentum. Cras sed massa id nisl pharetra fermentum.",
      images: ["/assets/coming-soon.webp"], // List of images for the project
      demoLink: "#", // Demo link
      github: "https://github.com/username/project1", // GitHub link
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) % projects[currentProjectIndex].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? projects[currentProjectIndex].images.length - 1
        : prevIndex - 1
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.2, ease: "easeIn" }}
      className="h-full py-10"
    >
      <div className="container mx-auto h-full flex flex-col">
        <motion.div
          className="text-center mb-8"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-accent mb-4">{t("title")}</h1>
        </motion.div>

        <div
          key={projects[currentProjectIndex].name}
          className="relative flex flex-col lg:flex-row items-center justify-between border-white/10 p-8 rounded-xl w-full"
        >
          {/* Image on the left */}
          <div className="relative w-full lg:w-1/2 h-[200px] lg:h-[300px] mb-6 lg:mb-0 overflow-hidden rounded-lg">
            <Image
              src={projects[currentProjectIndex].images[currentImageIndex]}
              alt={`Image of ${projects[currentProjectIndex].name}`}
              width={800}
              height={400}
              className="object-cover w-full h-full"
            />
            {/* Navigation arrows with absolute positioning */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-gray-700 hover:text-accent transition-all duration-150 hover:scale-125 hover:shadow-lg"
            >
              <FiChevronLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-gray-700 hover:text-accent transition-all duration-150 hover:scale-125 hover:shadow-lg"
            >
              <FiChevronRight size={32} />
            </button>
          </div>

          {/* Description on the right */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="text-xl font-semibold mb-2">
              {projects[currentProjectIndex].name}
            </h3>
            <p className="text-gray-600 mb-4">
              {projects[currentProjectIndex].description}
            </p>

            {/* Links to view the code and demo with icons */}
            <div className="flex flex-wrap gap-6 mt-4 justify-center lg:justify-start">
              <a
                href={projects[currentProjectIndex].github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:underline"
              >
                <FiGithub className="mr-2" size={18} />
                {t("Source_code")}
              </a>
              <a
                href={projects[currentProjectIndex].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:underline"
              >
                <FiExternalLink className="mr-2" size={18} />
                {t("Demo")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
