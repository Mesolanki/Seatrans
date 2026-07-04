"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const slides = [
  { id: 1, image: "/images/Hero_img/Hero1.jpg" },
  { id: 2, image: "/images/Hero_img/Hero2.jpg" }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-play every 5s
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.hero}>
      {/* Background Images Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slideImage} ${index === currentSlide ? styles.activeSlide : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Blue overlay inside slide to only affect image, not text */}
          <div className={styles.heroOverlay} />

          {/* Slide specific content */}
          <div className={styles.slideContainer}>
            {index === 0 ? (
              <div className={styles.contentContainer}>
                <span className={styles.tagline}>GLOBAL MARITIME & LAND LOGISTICS</span>
                <h1 className={styles.title}>
                  Secure & Efficient <span className={styles.highlight}>Cargo Logistics</span>
                </h1>
                <p className={styles.description}>
                  Delivering reliability across global trade lanes with end-to-end container tracking, multimodal solutions, and secure transport networks.
                </p>
                <div className={styles.btnGroup}>
                  <a href="#service" className={styles.btnPrimary}>
                    <span>Our Services</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnIcon}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <a href="#quote" className={styles.btnSecondary}>Get a Quote</a>
                </div>
              </div>
            ) : (
              <div className={styles.contentContainer}>
                <span className={styles.tagline}>PRIORITY AIR FREIGHT COURIER</span>
                <h1 className={styles.title}>
                  Next-Flight-Out <span className={styles.highlight}>Priority Air Cargo</span>
                </h1>
                <p className={styles.description}>
                  Express global logistics offering dedicated cargo space, swift customs clearance, and charter services for urgent shipments.
                </p>
                <div className={styles.btnGroup}>
                  <a href="#quote" className={styles.btnPrimary}>
                    <span>Request Air Quote</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnIcon}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <a href="#service" className={styles.btnSecondary}>Charter Solutions</a>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button className={`${styles.sliderArrow} ${styles.prevArrow}`} onClick={prevSlide} aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className={`${styles.sliderArrow} ${styles.nextArrow}`} onClick={nextSlide} aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className={styles.sliderDots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
