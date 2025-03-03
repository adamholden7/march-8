import { motion } from "framer-motion";

export function LoveLetter({ opened }) {
  return (
    opened && (
      <motion.div
        className="absolute top-[-20px] w-36 h-20 bg-white rounded-lg shadow-md flex items-center justify-center text-red-600 font-bold text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        "Happy March 8th, Violet! 💖 You mean the world to me."
      </motion.div>
    )
  );
}
