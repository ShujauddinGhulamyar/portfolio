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
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="h-full py-10"
    >
      <div className="container mx-auto h-full flex flex-col">
        {/* Animation de la section title */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          <h1 className="text-4xl font-bold text-accent mb-4">{t("title")}</h1>

          {/* Paragraphe introductif court */}
          <p className="mt-4 text-lg max-w-3xl mx-auto text-center px-4">
            {t("description")}
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-16"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", bounce: 0.3, stiffness: 80 },
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {/* Frontend Skills */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-center mb-8">
              {t("frontEnd.title")}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8 justify-center items-center place-items-center">
              {frontEndLogos.map((logo) => (
                <motion.div
                  key={logo.alt}
                  className="flex flex-col items-center justify-center border border-white/10 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-all duration-300 hover:shadow-xl w-36 h-36 flex-shrink-0"
                  initial={{ opacity: 0, y: 50, rotate: -45 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1.05,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                  <span className="text-sm text-white">{logo.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-center mb-8">
              {t("backEnd.title")}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8 justify-center items-center place-items-center">
              {backEndLogos.map((logo) => (
                <motion.div
                  key={logo.alt}
                  className="flex flex-col items-center justify-center border border-white/10 p-4 rounded-lg shadow-lg hover:scale-110 transform transition-all duration-300 hover:shadow-xl w-36 h-36 flex-shrink-0"
                  initial={{ opacity: 0, y: 50, rotate: -45 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1.05,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                  <span className="text-sm text-white">{logo.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
