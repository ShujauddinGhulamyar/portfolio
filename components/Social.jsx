import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ShujauddinGhulamyar" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/shuja-ghulamyar" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <motion.a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
            initial={{ scale: 1 }} // État de base
            whileHover={{ scale: 1.3 }} // Effet de grossissement
            transition={{ type: "spring", duration: 0.1 }} // Transition rapide
          >
            {item.icon}
          </motion.a>
        );
      })}
    </div>
  );
};

export default Social;
