import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "./styles.css";

export default function ValentineCard() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      gsap.to(".heart", {
        y: -500,
        opacity: 0,
        duration: 6,
        stagger: 0.8,
        repeat: -1,
        ease: "easeInOut"
      });
    }
  }, [opened]);

  return (
    <div className="valentine-container">
      {!opened && (
        <motion.div
          className="envelope"
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ yoyo: Infinity, duration: 1 }}
          onClick={() => setOpened(true)}
        >
          <img src="/envelope.png" alt="Envelope" className="envelope-img" />
        </motion.div>
      )}

      {opened && (
        <motion.div
          className="love-message"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="romantic-text">С любовью, в честь 8 марта, Россия! ❤️</h1>
          <p className="subtext">
            Ты самый светлый и прекрасный человек в моей жизни. Пусть этот день принесёт тебе радость и счастье!
          </p>
        </motion.div>
      )}

      {opened && (
        <div className="hearts-container">
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
