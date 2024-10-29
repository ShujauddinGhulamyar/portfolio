"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <motion.div
            key={index}
            whileHover={{ x: [0, -2, 2, -2, 0] }} // Réduction des valeurs de translation
            transition={{ duration: 0.3 }} // Durée de l'animation
          >
            <Link
              href={link.path}
              className={`capitalize font-medium ${
                isActive
                  ? "text-accent border-b-2 border-accent"
                  : "hover:text-accent"
              } transition-all`}
            >
              {link.name}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Nav;
