"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div className="relative w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] rounded-full overflow-hidden">
        <Image
          src="/assets/photo.webp"
          priority
          quality={75} // Réduire la qualité pour un meilleur chargement
          fill
          alt="Description of the image"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
