"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing"; // Import de ton Link personnalisé
import { useTranslations } from "next-intl"; // Import de useTranslations pour la traduction
import { CiMenuFries } from "react-icons/ci";
import LocaleSwitcher from "./LocaleSwitcher";

// Liste des liens de navigation
const links = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "skills", path: "/skills" },
  { key: "projects", path: "/projects" },
  { key: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Nav");

  // Fonction pour obtenir le chemin sans le préfixe de langue
  const getPathWithoutLocalePrefix = (pathname) => {
    const pathParts = pathname.split("/");
    pathParts.shift(); // On enlève le premier segment (la langue)
    return "/" + pathParts.join("/");
  };

  const normalizedPathname = getPathWithoutLocalePrefix(pathname);

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu lorsque le lien est cliqué
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center h-full">
        <nav className="flex flex-col justify-center items-center gap-10">
          <LocaleSwitcher />
          {links.map((link, index) => {
            // Vérification si le lien est actif
            const isActive = normalizedPathname === link.path;

            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick} // Ferme le menu lors du clic
                className={`${
                  isActive
                    ? "text-accent border-b-2 border-accent"
                    : "hover:text-accent"
                } text-3xl capitalize transition-all`}
              >
                {t(link.key)} {/* Utilisation des clés de traduction */}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
