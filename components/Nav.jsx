"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const links = [
  {
    name: "home",
    path: "/home",
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
  const t = useTranslations("Nav"); // Utilisation des traductions pour la section 'Nav'

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <div key={index}>
            <Link
              href={link.path}
              className={`capitalize font-medium ${
                isActive
                  ? "text-accent border-b-2 border-accent"
                  : "hover:text-accent"
              } transition-all`}
            >
              {t(link.name)}{" "}
              {/* Remplacer le texte statique par la clé de traduction */}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
