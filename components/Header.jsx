import { Link } from "@/i18n/routing"; // Import de ton propre Link personnalisé
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-3 mb-8 text-white bg-[#051926]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Lien vers la page d'accueil */}
        <Link href="/">
          <h1 className="text-4xl hover:text-accent font-semibold">S.G</h1>
        </Link>
        {/* Navigation desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        {/* Navigation mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
