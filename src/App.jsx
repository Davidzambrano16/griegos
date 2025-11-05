import React from "react";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import Toppings from "./components/Toppings";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <section className="section">
        <ProductCarousel />
      </section>

      <section className="section">
        <h2 className="section-title">Personaliza tu Yogurt</h2>
        <Toppings />
      </section>
      <Footer />
    </div>
  );
}

export default App;

