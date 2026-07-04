"use client";

import styles from "./IndustriesServed.module.css";

const industries = [
  {
    id: "energy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.industryIcon}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Chemical & Energy",
    description: "Specialized transportation solutions and temperature-controlled logistics for hazardous materials, liquids, and bulk fuel shipments."
  },
  {
    id: "auto",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.industryIcon}>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12.5V16c0 .6.4 1 1 1h2" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
      </svg>
    ),
    title: "Automotive & Parts",
    description: "Just-in-time delivery networks supporting automotive assembly lines, spare parts supply chains, and vehicle transit corridors."
  },
  {
    id: "retail",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.industryIcon}>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 12.5c.2 1 1 1.7 2 1.7h9.7c1 0 1.8-.7 2-1.7L23 6H6" />
      </svg>
    ),
    title: "Consumer & Retail",
    description: "End-to-end shipping solutions for FMCG, apparel, and high-volume consumer goods from manufacturers direct to retail outlets."
  },
  {
    id: "pharma",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.industryIcon}>
        <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6s1.5-5.5 4-7.5c2.5-2 5.5-2 7.5-.5m3.5 3.5c1.5 1.5 2.5 3.5 2.5 6s-1.5 5.5-4 7.5-5.5 2-7.5.5m0-13.5l10 10" />
      </svg>
    ),
    title: "Healthcare & Pharma",
    description: "Highly secure GDP-compliant cold-chain logistics preserving integrity for vaccines, medicines, and medical equipment transit."
  },
  {
    id: "aero",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.industryIcon}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Aerospace & Aviation",
    description: "Time-critical shipping and charter solutions for aerospace engines, heavy avionics, AOG (Aircraft on Ground) support."
  },
  {
    id: "tech",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.industryIcon}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    title: "High-Tech & Electronics",
    description: "Enhanced-security, climate-regulated logistics for fragile electronic items, microchips, data servers, and mobile technology."
  }
];

export default function IndustriesServed() {
  return (
    <section id="industry-we-serve" className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>INDUSTRIES WE SERVE</span>
          <h2 className={styles.title}>Tailored Solutions for Diverse Sectors</h2>
          <div className={styles.divider} />
          <p className={styles.leadText}>
            Delivering bespoke, sector-specific logistics frameworks optimized for maximum cargo security, industry standards compliance, and swift transit.
          </p>
        </div>

        {/* 3x2 Grid layout */}
        <div className={styles.grid}>
          {industries.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{item.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
