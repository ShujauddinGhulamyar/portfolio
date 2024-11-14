"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { CiMenuFries } from "react-icons/ci";
import LocaleSwitcher from "./LocaleSwitcher";

// Liste des liens de navigation
const links = [
  { key: "home", path: "#home" },
  { key: "about", path: "#about" },
  { key: "skills", path: "#skills" },
  { key: "projects", path: "#projects" },
  { key: "contact", path: "#contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const t = useTranslations("Nav");

  // Fonction pour obtenir le chemin sans le préfixe de langue
  const getPathWithoutLocalePrefix = (pathname) => {
    const pathParts = pathname.split("/");
    pathParts.shift(); // On enlève le premier segment (la langue)
    return "/" + pathParts.join("/");
  };

  const normalizedPathname = getPathWithoutLocalePrefix(pathname);

  // Observer les sections pour savoir quelle est la section active
  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.path));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Met à jour l'ID de la section visible
          }
        });
      },
      { threshold: 0.5 } // Quand 50% de la section est visible
    );

    // Observer chaque section
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect(); // Nettoie l'observer quand le composant se démonte
    };
  }, []); // Le useEffect se lance une fois à la première montée du composant

  // Fonction pour gérer le défilement fluide
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      history.pushState(null, "", id); // Met à jour l'URL sans recharger la page
    }
  };

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
          <LocaleSwitcher /> {/* Composant de changement de langue */}
          {links.map((link, index) => {
            // Vérification si le lien est actif
            const isActive = activeSection === link.path.substring(1);

            return (
              <Link
                href={link.path}
                key={index}
                onClick={(e) => {
                  handleLinkClick();
                  handleScroll(e, link.path);
                }} // Appliquer le défilement fluide
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
