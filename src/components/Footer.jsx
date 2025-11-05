import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © 2025 Griego's Yogurt
      </motion.p>

      <div className="footer-links">
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          Instagram
        </motion.a>
        <motion.a
          href="https://wa.me/58412XXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          WhatsApp
        </motion.a>
      </div>
    </footer>
  );
}
