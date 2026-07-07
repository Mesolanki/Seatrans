"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhyChooseUs.module.css";

const CARDS = [
  {
    id: "delivery",
    title: "QUICK AND FAST DELIVERY",
    description: "Seamlessly facilitate reliable after team building ideas equity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    id: "network",
    title: "GLOBAL NETWORK COVERAGE",
    description: "Seamlessly facilitate reliable after team building ideas equity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    id: "solutions",
    title: "COST-EFFECTIVE SOLUTIONS",
    description: "Seamlessly facilitate reliable after team building ideas equity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <path d="M16 12H12a2 2 0 1 0 0 4h4" />
        <path d="M8 12h4a2 2 0 1 0 0-4H8" />
      </svg>
    )
  },
  {
    id: "support",
    title: "24/7 CUSTOMER SUPPORT",
    description: "Seamlessly facilitate reliable after team building ideas equity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <text x="5" y="14" fill="currentColor" fontSize="7.5" fontWeight="900" fontFamily="var(--font-sans)">24h</text>
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(1); // Default to second card (Global Network) as in reference image
  
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const videoCapsuleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Badge pop-in
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Heading slide-up
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Video capsule slide-in & rotate
      gsap.fromTo(
        videoCapsuleRef.current,
        { opacity: 0, x: 50, scale: 0.9, rotation: 2 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotation: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards staggered entry
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.35,
            scrollTrigger: {
              trigger: cardsRef.current[0],
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsVideoOpen(false);
    }
  };

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // Helper to render single card item
  const renderCard = (card, index) => {
    const isActive = activeCardIndex === index;
    return (
      <div
        key={card.id}
        ref={addToRefs}
        className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
        onMouseEnter={() => setActiveCardIndex(index)}
        tabIndex={0}
        role="button"
        aria-label={`${card.title} - ${card.description}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setActiveCardIndex(index);
          }
        }}
      >
        <div className={styles.cardInner}>
          {/* Hexagonal Icon Box - turns white on active card */}
          <div className={`${styles.hexagonIconBox} ${isActive ? styles.activeHexagon : ""}`}>
            {card.icon}
          </div>

          {/* Thin connector arrow from icon down to title */}
          <div className={`${styles.connectorArrow} ${isActive ? styles.activeArrow : ""}`}>
            <svg viewBox="0 0 24 35" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.arrowSvg}>
              <line x1="12" y1="0" x2="12" y2="28" />
              <polyline points="8,23 12,28 16,23" />
            </svg>
          </div>

          <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.cardDesc}>{card.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className={styles.section} id="why-choose-us">
      {/* Background container overlay */}
      <div className={styles.bgOverlay} />

      <div className={styles.container}>
        {/* TOP SECTION: TITLE & VIDEO */}
        <div className={styles.topRow}>
          <div className={styles.titleCol}>
            <div ref={badgeRef} className={styles.badgeWrapper}>
              <span className={styles.badge}>WHY CHOOSE US</span>
            </div>
            <h2 ref={headingRef} className={styles.heading}>
              DELIVERING MORE THAN <br />
              AMAZING <span className={styles.accentText}>SHIPMENTS</span>
            </h2>
          </div>

          <div
            ref={videoCapsuleRef}
            className={styles.videoCapsule}
            onClick={() => setIsVideoOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Play video about shipping operations"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsVideoOpen(true);
              }
            }}
          >
            <div className={styles.videoThumbnailWrapper}>
              <Image
                src="/images/Hero_img/shipping_ocean_freight.png"
                alt="Cargo container ship"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className={styles.videoThumbnail}
              />
              <div className={styles.playButtonWrapper}>
                <span className={styles.pulseRing} />
                <span className={styles.pulseRing2} />
                <div className={styles.playIconContainer}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: CARDS GRID (Symmetrical 4 Column) */}
        <div className={styles.cardsGrid}>
          {renderCard(CARDS[0], 0)}
          {renderCard(CARDS[1], 1)}
          {renderCard(CARDS[2], 2)}
          {renderCard(CARDS[3], 3)}
        </div>
      </div>

      {/* VIDEO LIGHTBOX MODAL */}
      {isVideoOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsVideoOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video player"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className={styles.iframeWrapper}>
              <iframe
                src="https://www.youtube.com/embed/H0d8_A0w2vA?autoplay=1&rel=0"
                title="Seatrans Operations Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
