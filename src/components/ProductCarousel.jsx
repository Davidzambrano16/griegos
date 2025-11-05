import React, { useState, useEffect, useRef } from "react";
import clasico from "../assets/products/11.jpg";
import parfait from "../assets/products/5.jpg";
import mermelada from "../assets/products/4.jpg";
import bowl from "../assets/products/13.jpg";

// Si usas Vite y tienes las imágenes en src/assets:
const images = import.meta.glob("../assets/products/*.jpg", { eager: true });
const allImages = Object.values(images).map((mod) => mod.default);

export default function Products() {
  const productos = [
    {
      nombre: "Yogurt Griego Clásico",
      img: clasico,
      desc: "Cremoso, puro y naturalmente rico en proteína. Elaborado con leche fresca y fermentos vivos, es la base perfecta para quienes valoran lo auténtico."
    },
    {
      nombre: "Parfait",
      img: parfait,
      desc: "Capas de yogurt griego, fruta fresca y granola artesanal. Un equilibrio entre textura, sabor y nutrición que convierte cada bocado en un momento de indulgencia saludable."
    },
    {
      nombre: "Yogurt con Mermelada",
      img: mermelada,
      desc: "La dulzura justa, sin artificios. Con mermeladas elaboradas a partir de fruta real, este yogurt ofrece una experiencia suave y reconfortante."
    },
    {
      nombre: "Griego Bowl",
      img: bowl,
      desc: "Yogurt griego acompañado de toppings naturales como semillas, frutos secos y frutas de temporada. Ideal para desayunos energéticos o meriendas nutritivas."
    }
  ];

  const [selected, setSelected] = useState(null);
  const refs = useRef([]);

  // Intersection Observer para animación scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      refs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="products">
      <h2 className="section-title">Nuestros Productos</h2>
      <div className="products-list">
        {productos.map((p, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="product-card"
          >
            <img
              src={p.img}
              alt={p.nombre}
              className="product-img"
              onClick={() => setSelected(i)}
            />
            <h3>{p.nombre}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal con galería */}
      {selected !== null && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelected(null)}>✖</button>
            <h3>{productos[selected].nombre}</h3>
            <div className="gallery-grid">
              {allImages.map((img, idx) => (
                <div key={idx} className="gallery-item">
                  <img src={img} alt={`Variante ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
