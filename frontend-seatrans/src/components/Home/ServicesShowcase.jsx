"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesShowcase.module.css";

const SERVICES = [
  {
    id: "01",
    category: "FIRST MILE",
    title: "FIRST MILE\nSERVICES",
    checklist: ["Efficient local cargo pickups & routing", "Seamless transit to hub facilities", "Flexible origin dispatch management"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "First mile pickup and warehousing",
    imageLeft: true,
  },
  {
    id: "02",
    category: "CUSTOMS",
    title: "EXPORT CUSTOMS\nCLEARANCE",
    checklist: ["End-to-end documentation & compliance", "Automated customs tariff processing", "Fast-track seaport & airport clearance"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Customs clearance shipping terminal",
    imageLeft: false,
  },
  {
    id: "03",
    category: "WAREHOUSING",
    title: "FTWZ & BONDED\nWAREHOUSING",
    checklist: ["Free Trade Warehousing Zone tax benefits", "Duty deferment & consolidation solutions", "Highly secure climate-controlled storage"],
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "FTWZ bonded warehouse",
    imageLeft: true,
  },
  {
    id: "04",
    category: "DELIVERY",
    title: "DOOR TO DOOR\nDELIVERY",
    checklist: ["Global multi-modal freight solutions", "Integrated final-mile fleet distribution", "Dedicated support & single bill-of-lading"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Door to door logistics truck",
    imageLeft: false,
  },
  {
    id: "05",
    category: "TRACKING",
    title: "REAL-TIME\nCARGO TRACKING",
    checklist: ["24/7 container tracking & GPS feeds", "Automated milestones & delay warnings", "Comprehensive digital client dashboard"],
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Real-time cargo tracking software",
    imageLeft: true,
  },
];

export default function ServicesShowcase() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const rowRefs    = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const imageHalf   = row.querySelector(`.${styles.imageHalf}`);
        const contentHalf = row.querySelector(`.${styles.contentHalf}`);
        const connector   = row.querySelector(`.${styles.connector}`);
        const isReverse   = i % 2 !== 0;

        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 80%", toggleActions: "play none none none" },
        });

        tl.fromTo(imageHalf,
          { opacity: 0, x: isReverse ? 50 : -50 },
          { opacity: 1, x: 0, duration: 0.85, ease: "power3.out" }, 0
        )
        .fromTo(contentHalf,
          { opacity: 0, x: isReverse ? -50 : 50 },
          { opacity: 1, x: 0, duration: 0.85, ease: "power3.out" }, 0
        )
        .fromTo(connector,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.8)" }, 0.35
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services-showcase" className={styles.section}>

      {/* ── Section Header ── */}
      <div ref={headerRef} className={styles.header}>
        <span className={styles.badge}>SERVICES</span>
        <h2 className={styles.sectionTitle}>
          OUR SERVICE <br />
          <span className={styles.blueAccent}>OUR EXPERTISE</span>
        </h2>
      </div>

      {/* ── Service Rows ── */}
      <div className={styles.rowsWrapper}>
        {SERVICES.map((svc, idx) => (
          <div
            key={svc.id}
            ref={(el) => (rowRefs.current[idx] = el)}
            className={styles.serviceRow}
          >
            {/* IMAGE — grid-column set inline for alternating layout */}
            <div
              className={`${styles.imageHalf} ${svc.imageLeft ? styles.imageLeft : styles.imageRight}`}
            >
              <Image
                src={svc.image}
                alt={svc.imageAlt}
                fill
                sizes="50vw"
                className={styles.serviceImage}
                unoptimized
              />
              <div className={`${styles.imageOverlay} ${svc.imageLeft ? styles.overlayRight : styles.overlayLeft}`} />
            </div>

            {/* CENTER CONNECTOR */}
            <div className={styles.connector}>
              <div className={styles.triangleDownWrapper}>
                <svg viewBox="0 0 100 80" className={styles.triangleDownSvg}>
                  <path d="M 10,10 L 90,10 A 5,5 0 0,1 94,18 L 55,74 A 6,6 0 0,1 45,74 L 6,18 A 5,5 0 0,1 10,10 Z" fill="var(--brand-blue)" />
                </svg>
              </div>
              <a href="#quote" className={styles.circleArrow} aria-label="Learn more">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4">
                  <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* CONTENT CARD */}
            <div
              className={`${styles.contentHalf} ${svc.imageLeft ? styles.contentRight : styles.contentLeft}`}
            >
              <div className={styles.contentInner}>
                <span className={styles.categoryBadge}>{svc.category}</span>
                <span className={styles.ghostNumber}>{svc.id}</span>
                <h3 className={styles.serviceTitle}>
                  {svc.title.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < svc.title.split("\n").length - 1 && <br />}</span>
                  ))}
                </h3>
                <div className={styles.contentDivider} />
                <ul className={styles.checklist}>
                  {svc.checklist.map((item, i) => (
                    <li key={i} className={styles.checkItem}>
                      <span className={styles.checkIcon}>
                        <svg viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="10" fill="#1e65b3" />
                          <polyline points="5,10 8.5,13.5 15,6.5" stroke="white" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
