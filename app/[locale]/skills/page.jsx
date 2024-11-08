"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills"); // Utilisation des traductions pour la page Skills

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
      className="h-full"
    >
      <div className="container mx-auto h-full flex flex-col justify-between">
        <div className="flex flex-col xl:flex-row justify-between items-start">
          <motion.div
            className="flex-1 text-center xl:text-left mb-8 xl:mb-0 xl:order-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-accent">
              {t("title")}
            </h1>

            <div className="mb-6 text-justify">
              <h2 className="text-xl font-semibold mb-2">
                {t("frontEnd.title")}
              </h2>
              <p className="mb-4">{t("frontEnd.description")}</p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {frontEndLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex flex-col items-center justify-center w-24 h-32 border border-white/10 rounded-lg p-4 shadow-lg transition-transform duration-200 transform hover:scale-105"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={64}
                      className="mb-2"
                    />
                    <span className="text-center text-sm">{logo.name}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {t("backEnd.title")}
              </h2>
              <p className="mb-4">{t("backEnd.description")}</p>

              <div className="flex flex-wrap gap-4 justify-center">
                {backEndLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex flex-col items-center justify-center w-24 h-32 border border-white/10 rounded-lg p-4 shadow-lg transition-transform duration-200 transform hover:scale-105"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={64}
                      className="mb-2"
                    />
                    <span className="text-center text-sm">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
