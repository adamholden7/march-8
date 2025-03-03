import { motion } from "framer-motion";

export function Envelope({ opened, onOpen }) {
  return (
    <motion.div className="relative flex flex-col items-center cursor-pointer" onClick={onOpen}>
      {/* Envelope Flap */}
      <motion.div
        className="w-40 h-20 bg-red-600 absolute top-0 rounded-t-lg"
        animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Envelope Body */}
      <div className="w-40 h-28 bg-red-500 rounded-b-lg shadow-lg" />
    </motion.div>
  );
}
