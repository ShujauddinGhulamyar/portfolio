"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");

  const frontEndLogos = [
    { src: "/assets/html.svg", alt: "HTML", name: "HTML" },
    { src: "/assets/css.svg", alt: "CSS", name: "CSS" },
    { src: "/assets/javascript.svg", alt: "JavaScript", name: "JavaScript" },
    { src: "/assets/react.svg", alt: "React", name: "React" },
    { src: "/assets/nextjs.svg", alt: "Next.js", name: "Next.js" },
    { src: "/assets/angular.svg", alt: "Angular", name: "Angular" },
    { src: "/assets/typescript.svg", alt: "TypeScript", name: "TypeScript" },
    {
      src: "/assets/tailwind-css.svg",
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
    },
    { src: "/assets/bootstrap.svg", alt: "Bootstrap", name: "Bootstrap" },
  ];

  const backEndLogos = [
    { src: "/assets/node.svg", alt: "Node.js", name: "Node.js" },
    { src: "/assets/C-sharp.svg", alt: "C-sharp", name: "C#" },
    {
      src: "/assets/net-framework.svg",
      alt: "ASP.NET core",
      name: "ASP.NET core",
    },
    { src: "/assets/sql.svg", alt: "SQL server", name: "SQL Server" },
    { src: "/assets/Firebase.svg", alt: "Firebase", name: "Firebase" },
    { src: "/assets/git.svg", alt: "Git", name: "Git" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="h-full py-10"
    >
      <div className="container mx-auto h-full flex flex-col">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8" // Centered the title horizontally
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h1 className="text-4xl font-bold text-accent mb-4">{t("title")}</h1>
        </motion.div>

        {/* Front-End Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            {t("frontEnd.title")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {frontEndLogos.map((logo) => (
              <motion.div
                key={logo.alt}
                className="flex flex-col items-center justify-center border border-white/10 p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={48} // Reduced the size of the logos
                  height={48} // Reduced the size of the logos
                  className="mb-4"
                />
                <span className="text-sm text-white">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Back-End Skills */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-8">
            {t("backEnd.title")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {backEndLogos.map((logo) => (
              <motion.div
                key={logo.alt}
                className="flex flex-col items-center justify-center border border-white/10 p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={48} // Reduced the size of the logos
                  height={48} // Reduced the size of the logos
                  className="mb-4"
                />
                <span className="text-sm text-white">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
