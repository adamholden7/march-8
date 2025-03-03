import { motion } from "framer-motion";

export function FloatingHearts() {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-red-400 w-4 h-4 rounded-full opacity-70"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 2 }}
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
}
