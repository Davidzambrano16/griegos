import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import logo from "../assets/Logo.png";
import banner1 from "../assets/banners/BANNER1.jpg";
import banner2 from "../assets/banners/BANNER2.jpg";
import banner3 from "../assets/banners/BANNER3.jpg";

export default function Hero() {
  const banners = [banner1, banner2, banner3];

  return (
    <div className="hero-container">
      {/* Hero con banner full screen */}
      <header className="hero">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={true}
          effect="fade"
          className="hero-swiper"
        >
          {banners.map((b, i) => (
            <SwiperSlide key={i}>
              <img src={b} alt={`Banner ${i + 1}`} className="hero-banner fade-in" />
            </SwiperSlide>
          ))}
        </Swiper>
      </header>

      {/* Logo en sección aparte (aparece al bajar) */}
      <section className="hero-logo-section">
        <img src={logo} alt="Griego's Logo" className="hero-logo fade-down" />
      </section>
    </div>
  );
}
