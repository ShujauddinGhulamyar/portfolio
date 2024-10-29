"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
        {/* logo */}
        <div className="mb-10 text-center text-2xl text-accent">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font semibold">S.G</h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-10">
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
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
