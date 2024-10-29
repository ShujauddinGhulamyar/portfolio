// components/bird.jsx
import { motion } from "framer-motion";

const Bird = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="bird"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: -100, opacity: 0 }}
      exit={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <img src="/path/to/your/bird-image.png" alt="Oiseau" />
    </motion.div>
  );
};

export default Bird;
