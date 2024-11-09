"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing"; // Import de ton Link personnalisé
import { useTranslations } from "next-intl"; // Import de useTranslations pour la traduction
import { CiMenuFries } from "react-icons/ci";
import LocaleSwitcher from "./LocaleSwitcher";

const links = [
  {
    key: "home",
    path: "/",
  },
  {
    key: "about",
    path: "/about",
  },
  {
    key: "skills",
    path: "/skills",
  },
  {
    key: "projects",
    path: "/projects",
  },
  {
    key: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Nav"); // Utilisation des traductions pour la section 'Nav'

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu
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
            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick} // Ferme le menu lors du clic
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-3xl capitalize hover:text-accent transition-all`}
              >
                {t(link.key)}{" "}
                {/* Utilisation des clés de traduction du fichier en.json */}
              </Link>
            );
            <LocaleSwitcher />;
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
