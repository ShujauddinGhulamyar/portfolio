"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

// Liste des liens de navigation
const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "skills", path: "/skills" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  // Fonction pour obtenir le chemin sans le préfixe de langue
  const getPathWithoutLocalePrefix = (pathname) => {
    // Exemple : Si `pathname` est "/en/about", on veut obtenir "/about"
    const pathParts = pathname.split("/");
    // On enlève le premier segment (la langue)
    pathParts.shift();
    // On retourne le chemin restant
    return "/" + pathParts.join("/");
  };

  const normalizedPathname = getPathWithoutLocalePrefix(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        // Vérification exacte si le lien est actif
        const isActive = normalizedPathname === link.path;

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
              {t(link.name)}
            </Link>
          </div>
        );
      })}
      <LocaleSwitcher />
    </nav>
  );
};

export default Nav;
