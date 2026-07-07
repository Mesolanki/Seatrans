"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const slides = [
  {
    id: 1,
    image: "/images/Hero_img/shipping_ocean_freight.png",
    step: "01",
    tabTitle: "Port & Ocean",
  
    title: "Seamless Loading & Ocean Transit",
    description: "Your cargo begins its journey with our world-class port logistics. We coordinate complex container loadings, terminal handling, and global ocean freight networks.",
    btnPrimaryText: "Book Shipment",
    btnPrimaryHref: "#quote",
    btnSecondaryText: "Ocean Services",
    btnSecondaryHref: "#service",
  },
  {
    id: 2,
    image: "/images/Hero_img/shipping_air_freight.png",
    step: "02",
    tabTitle: "Air Freight",
   
    title: "Express Global Air Freight",
    description: "For time-sensitive cargo, our air transport solutions ensure priority flight scheduling, rapid airport handling, and direct global flight paths.",
    btnPrimaryText: "Request Air Quote",
    btnPrimaryHref: "#quote",
    btnSecondaryText: "Air Fleet",
    btnSecondaryHref: "#service",
  },
  {
    id: 3,
    image: "/images/Hero_img/shipping_warehouse.png",
    step: "03",
    tabTitle: "Storage & Warehousing",
  
    title: "Smart Warehousing & Customs",
    description: "We offer secure, automated warehousing facilities and professional customs brokerage to simplify import/export compliance and speed up sorting.",
    btnPrimaryText: "Inspect Facilities",
    btnPrimaryHref: "#service",
    btnSecondaryText: "Warehouse Tech",
    btnSecondaryHref: "#service",
  },
  {
    id: 4,
    image: "/images/Hero_img/shipping_last_mile.png",
    step: "04",
    tabTitle: "Last-Mile Delivery",
 
    title: "Dynamic Multimodal Road Freight",
    description: "Completing the journey with swift and reliable land logistics. Our fleet of modern carriers delivers cargo directly from ports and warehouses to your doorstep.",
    btnPrimaryText: "Get Land Quote",
    btnPrimaryHref: "#quote",
    btnSecondaryText: "Track Delivery",
    btnSecondaryHref: "#tracking",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6s per slide
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startTimer(); // Reset timer on manual action
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
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
          {/* Dark Overlay with blue tint */}
          <div className={styles.heroOverlay} />

          {/* Slide Content */}
          <div className={styles.slideContainer}>
            <div className={styles.contentContainer}>
              <span className={styles.tagline}>{slide.tagline}</span>
              <h1 className={styles.title}>
                {slide.title.includes("&") ? (
                  slide.title.split("&").map((part, i) => (
                    <span key={i}>
                      {i > 0 && " & "}
                      {i === 1 ? <span className={styles.highlight}>{part.trim()}</span> : part.trim()}
                    </span>
                  ))
                ) : (
                  slide.title
                )}
              </h1>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.btnGroup}>
                <a href={slide.btnPrimaryHref} className={styles.btnPrimary}>
                  <span>{slide.btnPrimaryText}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnIcon}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href={slide.btnSecondaryHref} className={styles.btnSecondary}>
                  {slide.btnSecondaryText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
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

      {/* Modern Flow/Step Navigation Panel */}
      <div className={styles.flowNav}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`${styles.flowNavItem} ${index === currentSlide ? styles.activeFlowNavItem : ""}`}
            onClick={() => goToSlide(index)}
          >
            <div className={styles.flowStepNum}>{slide.step}</div>
            <div className={styles.flowStepContent}>
              <span className={styles.flowStepLabel}>SHIPPING FLOW</span>
              <span className={styles.flowStepTitle}>{slide.tabTitle}</span>
            </div>
            {/* Progress line */}
            <div className={styles.progressTrack}>
              <div 
                className={styles.progressBar} 
                style={{ 
                  animationDuration: index === currentSlide ? '6.0s' : '0s',
                  width: index < currentSlide ? '100%' : (index > currentSlide ? '0%' : '')
                }} 
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
