"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-3 mb-8 text-white bg-[#051926] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.h1
            className="text-4xl hover:text-accent font-semibold flex items-center gap-1"
            initial={{ scale: 1, color: "#fff" }}
            whileHover={{ scale: 1.2, color: "#00e187" }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            S{" "}
            <span
              className="w-2 h-2 bg-accent"
              style={{ transform: "translateY(9px)" }}
            ></span>{" "}
            G
            <span
              className="w-2 h-2 bg-accent"
              style={{ transform: "translateY(9px)" }}
            ></span>{" "}
          </motion.h1>
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
