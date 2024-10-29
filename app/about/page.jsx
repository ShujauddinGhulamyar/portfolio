"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="h-full pt-10"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-start justify-between">
          <motion.div
            className="flex-1 text-center xl:text-left mb-8 xl:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-accent">
              About Me
            </h1>
            <p className="mb-6 text-justify">
              I'm a passionate Full Stack Developer living in the greater
              Montreal area. I graduated in 2023 with a DEC in Computer Science
              from Cégep Édouard-Montpetit. My interest in technology began at a
              young age; I’ve always been fascinated by how things work and have
              dreamed of creating beautiful websites since I was a kid. This
              passion led me to pursue a career in software development, where I
              enjoy turning ideas into engaging, user-friendly applications. In
              my free time, I also like to keep learning, especially on Udemy,
              which helps me stay up-to-date with the latest trends. I also
              enjoy gaming, which provides a great escape and inspires my
              creativity.
            </p>
            <p>Let’s connect and create something amazing together!</p>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center items-start mt-10"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { src: "/assets/html.svg", alt: "HTML", name: "HTML" },
                { src: "/assets/css.svg", alt: "CSS", name: "CSS" },
                {
                  src: "/assets/javascript.svg",
                  alt: "JavaScript",
                  name: "JavaScript",
                },
                { src: "/assets/node.svg", alt: "Node.js", name: "Node.js" },
                { src: "/assets/react.svg", alt: "React", name: "React" },
                { src: "/assets/nextjs.svg", alt: "Next.js", name: "Next.js" },
                {
                  src: "/assets/C-sharp.svg",
                  alt: "C-sharp",
                  name: "C#",
                },
                { src: "/assets/angular.svg", alt: "Angular", name: "Angular" },
                {
                  src: "/assets/typescript.svg",
                  alt: "TypeScript",
                  name: "TypeScript",
                },
                {
                  src: "/assets/tailwind-css.svg",
                  alt: "Tailwind CSS",
                  name: "Tailwind CSS",
                },
              ].map((logo) => (
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
