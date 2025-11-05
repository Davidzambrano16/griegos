import React from "react";
import { motion } from "framer-motion";

const toppings = [
  "Granola",
  "Fruta fresca",
  "Chía",
  "Maní",
  "Chispas de chocolate",
  "Avena",
];

const syrups = [
  "Sirope de arequipe",
  "Sirope de chocolate",
  "Sirope de fresa",
  "Sirope de mora",
  "Sirope de piña",
  "Sirope de durazno",
];

export default function Toppings() {
  return (
    <div className="toppings-section">
      <h2>Elige tus toppings</h2>
      <div className="toppings-grid">
        {toppings.map((t, i) => (
          <motion.div
            key={i}
            className="topping-card"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            {t}
          </motion.div>
        ))}
      </div>

      <h2>Elige tu sirope</h2>
      <div className="syrups-grid">
        {syrups.map((s, i) => (
          <motion.div
            key={i}
            className="syrup-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {s}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
