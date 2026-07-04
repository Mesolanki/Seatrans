"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutUs.module.css";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience", isFloat: false, detail: "GLOBAL OPERATIONS" },
  { value: 150, suffix: "+", label: "Global Corridors", isFloat: false, detail: "ACTIVE MARITIME NETS" },
  { value: 10, suffix: "M+", label: "Tons Cargo Handled", isFloat: false, detail: "COMPLETED VOYAGES" },
  { value: 99.9, suffix: "%", label: "On-Time Delivery", isFloat: true, detail: "SATISFACTION INDEX" }
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="grad-truck" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e65b3" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect x="2" y="5" width="12" height="11" rx="1.5" fill="url(#grad-truck)" strokeWidth="1.2" />
        <line x1="5" y1="5" x2="5" y2="16" strokeOpacity="0.3" />
        <line x1="8" y1="5" x2="8" y2="16" strokeOpacity="0.3" />
        <line x1="11" y1="5" x2="11" y2="16" strokeOpacity="0.3" />
        <path d="M14 8h4.5L22 12v4a1 1 0 0 1-1 1h-7V8z" fill="rgba(30, 101, 179, 0.05)" />
        <path d="M18.5 8L17 11.5h4.5L20 8h-1.5z" fill="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
        <circle cx="5.5" cy="18" r="2" fill="#0c2340" />
        <circle cx="16.5" cy="18" r="2" fill="#0c2340" />
        <path d="M1 9h1M0 12h2" strokeWidth="1.5" strokeOpacity="0.6" />
      </svg>
    ),
    title: "First Mile Service",
    description: "Seamless inland transport, factory-gate pickups, and port-side consolidation to initiate your international cargo lifecycle.",
    tag: "SYS_FIRST_MILE",
    accentColor: "#1e65b3"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="grad-customs" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="url(#grad-customs)" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="12" cy="14" r="3.5" stroke="#0d9488" fill="rgba(13, 148, 136, 0.1)" />
        <path d="M10.5 14l1 1 2-2" stroke="#0d9488" strokeWidth="1.6" />
        <line x1="7" y1="18" x2="17" y2="18" strokeOpacity="0.4" />
      </svg>
    ),
    title: "Export Custom Clearance",
    description: "Certified customs brokers handling intricate export regulations, paperwork clearance, and port terminal processing with zero friction.",
    tag: "SYS_CUSTOMS_OK",
    accentColor: "#0d9488"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="grad-warehouse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e65b3" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#4c94e6" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d="M3 21h18" strokeWidth="1.6" />
        <path d="M4 21V10l8-6 8 6v11" fill="url(#grad-warehouse)" />
        <rect x="7" y="14" width="4" height="7" fill="rgba(30, 101, 179, 0.1)" />
        <rect x="13" y="14" width="4" height="7" fill="rgba(30, 101, 179, 0.1)" />
        <path d="M12 4v17" strokeDasharray="2 2" strokeOpacity="0.6" />
        <circle cx="12" cy="8" r="1.5" stroke="#1e65b3" fill="#ffffff" />
      </svg>
    ),
    title: "FTWZ Handling / Bonded Warehousing",
    description: "Duty-deferred storage solutions, packaging optimization, and global re-export processing in high-grade Free Trade Warehousing Zones.",
    tag: "SYS_FTWZ_SECURE",
    accentColor: "#1e65b3"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="grad-door" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1e65b3" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" fill="url(#grad-door)" />
        <path d="M9 9l3-1.5L15 9l-3 1.5L9 9z" fill="#ffffff" stroke="#1e65b3" strokeWidth="1" />
        <path d="M9 9v3l3 1.5V10.5L9 9z" fill="rgba(30, 101, 179, 0.1)" stroke="#1e65b3" strokeWidth="1" />
        <path d="M15 9v3l-3 1.5V10.5L15 9z" fill="rgba(30, 101, 179, 0.2)" stroke="#1e65b3" strokeWidth="1" />
        <path d="M7 19h10" strokeDasharray="3 2" strokeOpacity="0.6" />
      </svg>
    ),
    title: "Door to Door Delivery",
    description: "End-to-end multimodal transport solutions delivering goods securely from the loading deck directly to the final recipient destination.",
    tag: "SYS_DOOR_DELIVERY",
    accentColor: "#1e65b3"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="grad-tracking" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e65b3" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="9" fill="url(#grad-tracking)" />
        <circle cx="12" cy="12" r="5" strokeDasharray="3 3" strokeOpacity="0.6" />
        <circle cx="12" cy="12" r="1.5" fill="#1e65b3" />
        <line x1="12" y1="1" x2="12" y2="23" strokeOpacity="0.4" />
        <line x1="1" y1="12" x2="23" y2="12" strokeOpacity="0.4" />
        <path d="M16 6l1.5-1.5M17.5 4.5h3v3" stroke="#1e65b3" strokeWidth="1.5" />
      </svg>
    ),
    title: "Cargo Tracking",
    description: "Instant container milestone updates, active tracking sensors, and real-time transit status check portals.",
    tag: "SYS_TRACK_ON",
    accentColor: "#1e65b3"
  }
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const collageRef = useRef(null);
  const textColumnRef = useRef(null);
  const expRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);
  
  // Animation states
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Main Entrance Timeline for collage items
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: collageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onEnter: () => setIsActive(true)
        }
      });

      // 1. Grid fade
      tl.fromTo(
        `.${styles.gridOverlay}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      );

      // 2. Workers Card slides up/in from left
      tl.fromTo(
        `.${styles.workersCard}`,
        { y: 80, x: -40, opacity: 0 },
        { y: 0, x: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
        "-=0.6"
      );

      // 3. Forklift Card slides up/in from right
      tl.fromTo(
        `.${styles.forkliftCard}`,
        { y: 80, x: 40, opacity: 0 },
        { y: 0, x: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
        "-=0.8"
      );

      // 4. Experience Badge scales & pops in
      tl.fromTo(
        `.${styles.experienceBadge}`,
        { scale: 0.7, opacity: 0, y: -20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.6)" },
        "-=0.6"
      );

      // 5. Plane path stroke-dash draw
      const path = document.querySelector("#plane-path");
      if (path) {
        const pathLength = path.getTotalLength();
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        tl.to(
          path,
          { strokeDashoffset: 0, duration: 1.4, ease: "power1.inOut" },
          "-=0.5"
        );
      }

      // Entrance animation for Right Text Column
      if (textColumnRef.current) {
        const textElements = textColumnRef.current.children;
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textColumnRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Counting up the Experience Badge value
      if (expRef.current) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 25,
          duration: 2.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: expRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          onUpdate: () => {
            if (expRef.current) {
              expRef.current.innerText = Math.floor(obj.val);
            }
          }
        });
      }

      // Stats numerical count up trigger
      stats.forEach((stat, idx) => {
        const el = statsRef.current[idx];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onUpdate: () => {
            if (!el) return;
            if (stat.isFloat) {
              el.innerText = obj.val.toFixed(1);
            } else {
              el.innerText = Math.floor(obj.val).toLocaleString();
            }
          }
        });
      });

      // Reveal & Rotate Value Cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 45, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.3,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCollageMouseMove = (e) => {
    const container = collageRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Parallax displacements to CSS variables
    container.style.setProperty("--move-x-bg", `${x * 12}px`);
    container.style.setProperty("--move-y-bg", `${y * 12}px`);
    container.style.setProperty("--move-x-mid", `${x * -18}px`);
    container.style.setProperty("--move-y-mid", `${y * -18}px`);
    container.style.setProperty("--move-x-fg", `${x * 20}px`);
    container.style.setProperty("--move-y-fg", `${y * 20}px`);
    
    // Smooth 3D tilt angles
    const rotateX = -y * 10;
    const rotateY = x * 10;
    container.style.setProperty("--tilt-x", `${rotateX}deg`);
    container.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const handleCollageMouseLeave = () => {
    const container = collageRef.current;
    if (!container) return;
    container.style.setProperty("--move-x-bg", "0px");
    container.style.setProperty("--move-y-bg", "0px");
    container.style.setProperty("--move-x-mid", "0px");
    container.style.setProperty("--move-y-mid", "0px");
    container.style.setProperty("--move-x-fg", "0px");
    container.style.setProperty("--move-y-fg", "0px");
    container.style.setProperty("--tilt-x", "0deg");
    container.style.setProperty("--tilt-y", "0deg");
  };

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section ref={sectionRef} id="about" className={styles.section}>
      {/* Dynamic ambient backgrounds */}
      <div className={styles.meshBackground} />
      <div className={styles.ambientLight1} />
      <div className={styles.ambientLight2} />
      <div className={styles.ambientLight3} />

      <div className={styles.container}>
        {/* Upper Segment: Interactive Collage and Copyside */}
        <div className={styles.introSegment}>
          
          {/* Left Column: Interactive 3D Parallax Collage */}
          <div 
            ref={collageRef} 
            className={styles.collageColumn}
            onMouseMove={handleCollageMouseMove}
            onMouseLeave={handleCollageMouseLeave}
          >
            {/* Grid Overlay background animation */}
            <div className={styles.gridOverlay}>
              <div className={styles.scanLine} />
            </div>

            {/* Workers Port Card (Left) */}
            <div className={`${styles.imageCard} ${styles.workersCard}`}>
              <div className={styles.workersCardStripe} />
              <div className={styles.imageOverlay} />
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
                alt="Seatrans Cargo Port Terminal Workers"
                width={360}
                height={500}
                className={styles.image}
                unoptimized
              />
            </div>

            {/* Forklift Warehouse Card (Right) */}
            <div className={`${styles.imageCard} ${styles.forkliftCard}`}>
              <div className={styles.imageOverlay} />
              <Image 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"
                alt="Forklift logistics warehouse"
                width={300}
                height={460}
                className={styles.image}
                unoptimized
              />
            </div>

            {/* Experience Badge (Floats at top center overlap) */}
            <div className={styles.experienceBadge}>
              <div className={styles.expNumberWrapper}>
                <span ref={expRef} className={styles.expNumber}>0</span>
                <span className={styles.expPlus}>+</span>
              </div>
              <span className={styles.expLabel}>Years of experience</span>
            </div>

            {/* SVG Flight Path for Plane Motion */}
            <svg className={styles.planePathSvg} viewBox="0 0 300 200" fill="none">
              <path
                id="plane-path"
                d="M 10,80 Q 70,20 100,50"
                stroke="rgba(30, 101, 179, 0.25)"
                strokeWidth="2.2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Animated Plane Icon */}
            <div className={`${styles.planeIcon} ${isActive ? styles.planeActive : ""}`}>
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M12 32 L28 26 L38 10 L44 10 L38 26 L52 26 L56 18 L60 18 L56 32 L60 46 L56 46 L52 38 L38 38 L44 54 L38 54 L28 38 L12 32 Z" />
              </svg>
            </div>

          </div>

          {/* Right Column: Title, Copy Text & Service List */}
          <div ref={textColumnRef} className={styles.textColumn}>
            <div className={styles.whoWeAreBadge}>
              <span className={styles.whoWeAreText}>WHO WE ARE</span>
              <span className={styles.whoWeArePlane}>✈</span>
            </div>

            <h2 className={styles.mainHeading}>
              Leading Global Logistic <br />
              And Transport <span className={styles.accentText}>AGENCY</span>
            </h2>

            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Global Service</h4>
                  <p className={styles.featureDesc}>We always provide people a complete solution focused of any business.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Local Service</h4>
                  <p className={styles.featureDesc}>We always provide people a complete solution focused of any business.</p>
                </div>
              </div>
            </div>

            <a href="#quote" className={styles.moreAboutBtn}>
              <span>More About Us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnIcon}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

        </div>

        {/* Middle Segment: Stats Grid */}
        <div className={styles.statsPanel}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statCardGlass} />
              <div className={styles.statIndex}>0{idx + 1}</div>
              
              <div className={styles.statDotIndicator}>
                <span className={styles.statGreenDot} />
                <span className={styles.statActiveLabel}>SYNCED</span>
              </div>

              <div className={styles.statValueWrapper}>
                <span ref={(el) => (statsRef.current[idx] = el)} className={styles.statValNum}>
                  0
                </span>
                <span className={styles.statValSuffix}>{stat.suffix}</span>
              </div>
              <div className={styles.statLabelName}>{stat.label}</div>
              <div className={styles.statCardDetail}>{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Intersecting Marquee Loop */}
        <div className={styles.nauticalMarquee}>
          <div className={styles.marqueeTrack}>
            {["SEATRANS GLOBAL", "OCEAN FREIGHT CARRIERS", "CUSTOMS BROKERAGE", "AIR CHARTER SOLS", "PROJECT LOGISTICS", "REAL-TIME TRACKING", "COMPLIANCE ASSURED"].map((text, idx) => (
              <div key={idx} className={styles.marqueeContent}>
                <span className={styles.marqueeText}>{text}</span>
                <span className={styles.marqueeSeparator}>✦</span>
              </div>
            ))}
            {/* Duplicate for wrap */}
            {["SEATRANS GLOBAL", "OCEAN FREIGHT CARRIERS", "CUSTOMS BROKERAGE", "AIR CHARTER SOLS", "PROJECT LOGISTICS", "REAL-TIME TRACKING", "COMPLIANCE ASSURED"].map((text, idx) => (
              <div key={`dup-${idx}`} className={styles.marqueeContent} aria-hidden="true">
                <span className={styles.marqueeText}>{text}</span>
                <span className={styles.marqueeSeparator}>✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Segment: 2x2 Feature Grid with Mouse Glow */}
        <div className={styles.valuesWrapperGrid}>
          {values.map((val, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={styles.valueGlowCard}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              style={{ "--accent-hover": val.accentColor }}
            >
              <div className={styles.radialShineBg} />
              
              <div className={styles.cardWaveWrap}>
                <div className={styles.cardWave} style={{ "--wave-color": val.accentColor + "15" }} />
                <div className={styles.cardWave2} style={{ "--wave-color": val.accentColor + "0d" }} />
              </div>
              
              <div className={styles.cardHeaderArea}>
                <div className={styles.cardIconBox}>
                  {val.icon}
                </div>
                <span className={styles.cardBadge}>{val.tag}</span>
              </div>

              <h3 className={styles.cardTitle}>{val.title}</h3>
              <p className={styles.cardDesc}>{val.description}</p>
              
              <a href="#quote" className={styles.cardHoverFooter}>
                <span className={styles.footerLinkText}>EXPLORE SYSTEM SPEC</span>
                <svg className={styles.footerArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}