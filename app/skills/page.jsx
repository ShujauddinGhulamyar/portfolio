"use client";
import { motion } from "framer-motion";

const skills = () => {
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
          {/* Div for the text */}
          <motion.div
            className="flex-1 text-center xl:text-left mb-8 xl:mb-0 xl:order-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-accent">Skills</h1>

            {/* Description of skills */}
            <div className="mb-6 text-justify">
              <h2 className="text-xl font-semibold mb-2">Front-End</h2>
              <p className="mb-4">
                As a front-end developer, I specialize in crafting visually
                appealing and responsive user interfaces. My proficiency in
                <span className="text-accent"> HTML</span>,
                <span className="text-accent"> CSS</span>, and
                <span className="text-accent"> JavaScript</span> enables me to
                develop dynamic web applications. I employ frameworks like
                <span className="text-accent"> React</span> and
                <span className="text-accent"> Angular</span> to enhance user
                interaction and streamline navigation. Additionally, I use
                <span className="text-accent"> Bootstrap</span> for quick and
                efficient styling, ensuring that my projects maintain a modern
                aesthetic.
                <span className="text-accent"> Tailwind CSS</span> complements
                my workflow by allowing for rapid design adjustments without
                sacrificing quality.
              </p>

              {/* Front-End Icons */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {frontEndLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex flex-col items-center justify-center w-24 h-32 border border-white/10 rounded-lg p-4 shadow-lg transition-transform duration-200 transform hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-16 h-16 mb-2"
                    />
                    <span className="text-center text-sm">{logo.name}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold mb-2">Back-End</h2>
              <p className="mb-4">
                On the back-end, I leverage technologies such as
                <span className="text-accent"> Node.js</span> and
                <span className="text-accent"> ASP.NET Core</span> to build
                robust servers and manage databases effectively.
                <span className="text-accent"> Node.js</span> empowers me to
                create scalable applications that can handle real-time data,
                while
                <span className="text-accent"> ASP.NET Core</span> provides a
                solid foundation for developing high-performance web
                applications. I also work with
                <span className="text-accent"> SQL Server</span> to design and
                optimize databases, ensuring data integrity and efficient query
                performance. Also, I use
                <span className="text-accent"> Firebase</span> for real-time
                database capabilities and user authentication.
                <span className="text-accent"> Git</span> is also an essential
                tool in my workflow for version control, facilitating
                collaboration and maintaining a clear project history.
              </p>

              {/* Back-End Icons */}
              <div className="flex flex-wrap gap-4 justify-center">
                {backEndLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex flex-col items-center justify-center w-24 h-32 border border-white/10 rounded-lg p-4 shadow-lg transition-transform duration-200 transform hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-16 h-16 mb-2"
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

export default skills;
