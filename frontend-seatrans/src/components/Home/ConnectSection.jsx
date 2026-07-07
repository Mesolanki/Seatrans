"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ConnectSection.module.css";

const CARDS_DATA = [
  {
    title: <>GLOBAL NETWORK <br /> COVERAGE</>,
    description: "Continually reintermediate user web through functional sound logistics solutions.",
    image: "/images/Hero_img/shipping_last_mile.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.icon}
      >
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </svg>
    ),
    theme: "blue",
    link: "#network",
    ariaLabel: "Global Network Coverage"
  },
  {
    title: <>FAST AND RELIABLE <br /> DELIVERY</>,
    description: "Continually reintermediate user web through functional sound logistics solutions.",
    image: "/images/Hero_img/shipping_warehouse.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.icon}
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    theme: "blue",
    link: "#delivery",
    ariaLabel: "Fast and Reliable Delivery"
  },
  {
    title: <>SECURE CARGO <br /> HANDLING</>,
    description: "Continually reintermediate user web through functional sound logistics solutions.",
    image: "/images/Hero_img/shipping_ocean_freight.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.icon}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    ),
    theme: "navy",
    link: "#secure",
    ariaLabel: "Secure Cargo Handling"
  }
];

export default function ConnectSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger animation
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current[0],
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className={styles.section} id="features">
      <div className={styles.container}>
        {/* HEADER AREA */}
        <div ref={headerRef} className={styles.header}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>FEATURE</span>
          </div>
          <h2 className={styles.title}>
            CONNECT YOUR BUSINESS <br />
            TO THE WORLD
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className={styles.grid}>
          {CARDS_DATA.map((card, idx) => {
            const isActive = hoveredIndex === idx;
            return (
              <div
                key={idx}
                ref={addToRefs}
                className={`${styles.card} ${isActive ? styles.isActive : styles.isInactive} ${
                  card.theme === "blue" ? styles.themeBlue : styles.themeNavy
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                {/* Accent notch on top right */}
                <div className={styles.cornerNotch} />

                <div className={styles.cardContent}>
                  <div className={styles.iconCircle}>
                    {card.icon}
                  </div>

                  <div className={styles.textContent}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>

                  <Link href={card.link} className={styles.arrowButton} aria-label={card.ariaLabel}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.arrowIcon}
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>

                {/* Always render layout wrapper for transition styling */}
                <div className={styles.cardImageWrapper}>
                  <div className={styles.imageClip}>
                    <Image
                      src={card.image}
                      alt={card.ariaLabel}
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
