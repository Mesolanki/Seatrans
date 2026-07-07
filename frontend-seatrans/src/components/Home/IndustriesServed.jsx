"use client";

import { useRef } from "react";
import styles from "./IndustriesServed.module.css";

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

export default function IndustriesServed() {
  const cardsRef = useRef([]);

  const handleMouseMove = (e, idx) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="industry-we-serve" className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>OPERATIONAL SYSTEM</span>
          <h2 className={styles.title}>Bespoke Solutions & End-to-End System Integrations</h2>
          <div className={styles.divider} />
          <p className={styles.leadText}>
            Delivering highly optimized supply chain architecture built for maximum container security, complete compliance, and seamless cross-border transit.
          </p>
        </div>

        {/* Glow Cards Grid */}
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
