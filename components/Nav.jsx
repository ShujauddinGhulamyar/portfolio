"use client";

import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { useState, useEffect } from "react";

// Liste des liens de navigation
const links = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "skills", path: "#skills" },
  { name: "projects", path: "#projects" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  const pathname = usePathname(); // Récupère le pathname actuel
  const t = useTranslations("Nav"); // Traductions pour le menu

  // State pour savoir quelle section est actuellement active
  const [activeSection, setActiveSection] = useState(null);

  // Fonction pour obtenir le chemin sans le préfixe de langue
  const getPathWithoutLocalePrefix = (pathname) => {
    const pathParts = pathname.split("/");
    pathParts.shift(); // Retire le segment de la langue
    return "/" + pathParts.join("/");
  };

  const normalizedPathname = getPathWithoutLocalePrefix(pathname);

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

  // Observer les sections et mettre à jour l'état de la section active
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

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = activeSection === link.path.substring(1); // Comparer avec l'ID de la section
        return (
          <div key={index}>
            <a
              href={link.path}
              onClick={(e) => handleScroll(e, link.path)} // Gestion du scroll fluide
              className={`capitalize font-medium transition-all ${
                isActive
                  ? "text-accent border-b-2 border-accent" // Style de l'élément actif
                  : "hover:text-accent"
              }`}
            >
              {t(link.name)} {/* Affichage du texte traduit */}
            </a>
          </div>
        );
      })}
      <LocaleSwitcher /> {/* Composant de changement de langue */}
    </nav>
  );
};

export default Nav;
