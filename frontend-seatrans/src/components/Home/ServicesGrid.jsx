"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ServicesGrid.module.css";

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="service" 
      className={`${styles.servicesSection} ${inView ? styles.animateIn : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.layoutWrapper}>
          
          {/* Left Column: Sticky Introduction */}
          <div className={styles.introCol}>
            <span className={styles.subtitle}>Our Services & Expertise</span>
            <h2 className={styles.title}>
              End-to-End <br />
              <span className={styles.accentText}>Logistics Solutions</span>
            </h2>
            <div className={styles.divider} />
            <p className={styles.leadText}>
              Backed by <strong>more than 20 years of experience</strong>, Seatrans provides premium logistics management, custom clearance, and worldwide freight shipping corridors tailored to your industry standards.
            </p>
            <div className={styles.introAction}>
              <a href="#quote" className={styles.introBtn}>
                <span>Request a Free Quote</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnArrow}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Redesigned Capabilities Grid */}
          <div className={styles.gridCol}>
            <div className={styles.grid}>
              
              {/* Card 1: Core Business */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.serviceIcon}>
                      <circle cx="12" cy="5" r="3" />
                      <line x1="12" y1="8" x2="12" y2="20" />
                      <path d="M5 12h14" />
                      <path d="M12 20a7 7 0 0 0 7-7" />
                      <path d="M12 20a7 7 0 0 1-7-7" />
                    </svg>
                  </div>
                  <span className={styles.cardNumber}>01</span>
                </div>
                <h3 className={styles.cardTitle}>Core Business</h3>
                <p className={styles.cardDescription}>Premium freight logistics supporting international trade and customs gateways.</p>
                <ul className={styles.servicesList}>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    Freight Forwarding / Sea Freight
                  </li>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    Import Custom Clearance
                  </li>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    Warehousing & Storage
                  </li>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    Packing, Fumigation & Palletization
                  </li>
                </ul>
              </div>

              {/* Card 2: 3PL Solutions */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.serviceIcon}>
                      <polyline points="21 8 21 21 3 21 3 8" />
                      <rect x="1" y="3" width="22" height="5" rx="1" ry="1" />
                      <line x1="10" y1="12" x2="14" y2="12" />
                    </svg>
                  </div>
                  <span className={styles.cardNumber}>02</span>
                </div>
                <h3 className={styles.cardTitle}>3PL Solutions</h3>
                <p className={styles.cardDescription}>Supply chain integration, domestic transport, and specialty cargo management.</p>
                <ul className={styles.servicesList}>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    Surface Transports & First Mile
                  </li>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    Port Handling & OOG Project Cargo
                  </li>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    LCL Consolidation Services
                  </li>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    FTWZ Handling & Bonded Warehousing
                  </li>
                  <li>
                    <span className={styles.bulletCheck}>✓</span>
                    Door to Door Delivery & Tracking
                  </li>
                </ul>
              </div>

              {/* Card 3: Commodity Expertise */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.serviceIcon}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className={styles.cardNumber}>03</span>
                </div>
                <h3 className={styles.cardTitle}>Commodity Specialty</h3>
                <p className={styles.cardDescription}>Industry-leading expertise in handling bulk goods and specialized liquids.</p>
                <div className={styles.specialtyContainer}>
                  <div className={styles.specialtyItem}>
                    <span className={styles.specialtyLabel}>Castor Oil Exports:</span>
                    <span className={styles.specialtyText}>One of the major regional logistics operators for castor oil transport.</span>
                  </div>
                  <div className={styles.specialtyItem}>
                    <span className={styles.specialtyLabel}>Agri-Products Handling:</span>
                    <span className={styles.specialtyText}>Comprehensive bulk grain transit, custom clearance, and quality assurance.</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Request A Quote CTA */}
              <div className={`${styles.card} ${styles.ctaCard}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.serviceIcon}>
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                  <span className={styles.cardNumber}>04</span>
                </div>
                <h3 className={styles.cardTitle}>Request A Quote</h3>
                <p className={styles.cardDescription}>Need a customized rate card? Provide your routing parameters to receive a custom quote in 2-4 hours.</p>
                <Link href="#quote" className={styles.ctaLink}>
                  <span>Get Instant Quote</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.linkArrow}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
