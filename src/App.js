import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "./styles.css";

export default function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      gsap.to(".hearts", {
        y: -500,
        opacity: 0,
        duration: 4,
        stagger: 0.5,
        repeat: -1,
        ease: "easeInOut"
      });
    }
  }, [opened]);

  return (
    <div className="container">
      <motion.div
        className="envelope"
        initial={{ y: 0 }}
        animate={opened ? { y: -100, opacity: 0 } : {}}
        onClick={() => setOpened(true)}
      >
        Open Me
      </motion.div>
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="message"
        >
          <h1>Happy Valentine's Day, Violet! ❤️</h1>
        </motion.div>
      )}
      {opened && (
        <div className="floating-hearts">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="heart"
              style={{ left: `${Math.random() * 100}%` }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
