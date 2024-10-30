"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    name: "skills",
    path: "/skills",
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
          <div key={index}>
            {" "}
            {/* Retire le motion.div ici */}
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
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
