"use client";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";

const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="h-full"
    >
      <div className="container mx-auto h-full flex flex-col justify-between">
        <div className="flex flex-col xl:flex-row justify-center items-center">
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
              Hello! My name is Shuja, and I&apos;m originally from Afghanistan.
              I&apos;ve lived in Canada since the age of 7 and am currently
              based in the greater Montreal area.
            </p>
            <p className="mb-6 text-justify">
              My journey into technology began at a young age, fueled by a
              curiosity about how things work—whether it&apos;s websites, video
              games, or innovative tech solutions. This curiosity led me to
              pursue a program in Computer Science at Cégep Édouard-Montpetit,
              where I graduated in 2023. Since then, I have been deepening my
              skills in modern web development on platforms like Udemy.
            </p>
            <p className="mb-6 text-justify">
              I&apos;m passionate about continuous learning and enjoy exploring
              new trends and skills. I love collaborating with others, as
              working with people brings fresh perspectives and enhances
              creativity. In my free time, I enjoy gaming, which not only
              entertains me but also sparks my imagination.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center items-start"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className="order-1 xl:order-none mb-8 xl:mb-0 ml-16 -mt-8">
              {" "}
              {/* Adjusted -mt-16 to -mt-8 */}
              <Photo />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
