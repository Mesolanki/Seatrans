"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutUs.module.css";

const TABS = [
  { id: "about",    label: "ABOUT COMPANY" },
  { id: "overview", label: "COMPANY OVERVIEW" },
  { id: "mission",  label: "OUR MISSION AND VISION" },
];

const TAB_CONTENT = {
  about: {
    heading: <>POWERING SEAMLESS GLOBAL <span className={styles.orangeAccent}>LOGISTIC</span> WITH INTELLIGENT TRACKING</>,
    description: "Seamlessly facilitate reliable technologies after cross-unit potentialities team building ideas equity invested niche markets envisioneer end-to-end action items rather than robust testing.",
    features: [
      {
        label: "REALTIME SHIPMENT TRACKING",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
      {
        label: "GLOBAL SHIPPING NETWORK",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
    ],
    checklist: [
      "Empowering Modern Businesses with Flexible Solutions",
      "Delivering Speed, Reliability, and Precision",
    ],
    stats: null,
  },
  overview: {
    heading: <>SMART &amp; RELIABLE LOGISTICS SOLUTIONS FOR YOUR <span className={styles.orangeAccent}>BUSINESS</span></>,
    description: "Seamlessly facilitate reliable technologies after cross-unit potentialities team building ideas equity invested niche markets envisioneer end-to-end action items rather than robust testing.",
    features: null,
    checklist: [
      "Empowering Modern Businesses with Flexible Solutions",
      "Delivering Speed, Reliability, and Precision",
    ],
    stats: [
      { value: 100, suffix: "+", label: "Completed Work" },
      { value: 50,  suffix: "+", label: "Happy Clients" },
    ],
  },
  mission: {
    heading: <>TRANSFORMING SUPPLY CHAINS WITH <span className={styles.orangeAccent}>SMART LOGISTICS</span> SERVICES</>,
    description: "Seamlessly facilitate reliable technologies after cross-unit potentialities team building ideas equity invested niche markets envisioneer end-to-end action items rather than robust testing.",
    features: [
      {
        label: "SMART LOGISTICS SOLUTIONS",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
      },
      {
        label: "YOUR TRUSTED LOGISTICS PARTNER",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
    ],
    checklist: [
      "Zero-compromise freight safety standards",
      "125+ countries in our delivery network",
    ],
    stats: null,
  },
};

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("about");
  const sectionRef   = useRef(null);
  const headerRef    = useRef(null);
  const badgeRef     = useRef(null);
  const tabNavRef    = useRef(null);
  const contentRef   = useRef(null);
  const visualRef    = useRef(null);
  const statRefs     = useRef([]);
  const featRefs     = useRef([]);
  const checkRefs    = useRef([]);

  const content = TAB_CONTENT[activeTab];

  /* ── Initial scroll entrance ── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Badge label pop
      gsap.fromTo(badgeRef.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.8)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", toggleActions: "play none none none" }
        }
      );

      // Heading word-by-word slide
      const words = headerRef.current?.querySelectorAll("span, strong, em, b") ?? [];
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" }
        }
      );

      // Tab nav slide up
      gsap.fromTo(tabNavRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.3,
          scrollTrigger: { trigger: tabNavRef.current, start: "top 90%", toggleActions: "play none none none" }
        }
      );

      // Visual image + badge parallax
      gsap.fromTo(visualRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: visualRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Tab switch animation ── */
  useEffect(() => {
    if (!contentRef.current) return;

    // Content panel slides in
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: 30, filter: "blur(4px)" },
      { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }
    );

    // Feature cards stagger
    const feats = contentRef.current.querySelectorAll(`.${styles.featureCard}`);
    if (feats.length) {
      gsap.fromTo(feats,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.12, ease: "power2.out", delay: 0.2 }
      );
    }

    // Checklist items stagger
    const checks = contentRef.current.querySelectorAll(`.${styles.checkItem}`);
    if (checks.length) {
      gsap.fromTo(checks,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: "power2.out", delay: 0.35 }
      );
    }
  }, [activeTab]);

  /* ── Stats count-up ── */
  useEffect(() => {
    if (!content.stats) return;
    content.stats.forEach((stat, i) => {
      const el = statRefs.current[i];
      if (!el) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.value,
        duration: 2,
        ease: "power3.out",
        delay: 0.1 * i,
        onUpdate: () => { if (el) el.textContent = Math.floor(obj.val) + stat.suffix; },
      });
    });
  }, [activeTab, content.stats]);

  return (
    <section ref={sectionRef} id="about" className={styles.section}>

      {/* ── SECTION HEADER ── */}
      <div className={styles.sectionHeader}>
        <span ref={badgeRef} className={styles.sectionBadge}>ABOUT US</span>
        <h2 ref={headerRef} className={styles.sectionTitle}>
          WE&apos;VE <span className={styles.orangeAccent}>25 YEAR&apos;S</span> OF EXPERIENCE<br />
          IN TRANSPORTATION
        </h2>
      </div>

      {/* ── TAB NAVIGATION ── */}
      <div ref={tabNavRef} className={styles.tabNav}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── MAIN GRID ── */}
      <div className={styles.contentGrid}>

        {/* LEFT — Visual */}
        <div ref={visualRef} className={styles.visualCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/Hero_img/single-thumb-1.png"
              alt="Forklift carrying cargo box"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.forkliftImg}
              priority
            />

           

            {/* Floating accent dot */}
            <div className={styles.floatDot1} />
            <div className={styles.floatDot2} />
          </div>
        </div>

        {/* RIGHT — Content panel */}
        <div ref={contentRef} className={styles.textCol}>
          <div className={styles.leftBorderAccent} />

          <h3 className={styles.mainHeading}>{content.heading}</h3>
          <p className={styles.description}>{content.description}</p>

          {/* Features */}
          {content.features && (
            <div className={styles.featureGrid}>
              {content.features.map((feat, idx) => (
                <div key={idx} className={styles.featureCard}>
                  <div className={styles.featureIconBox}>{feat.icon}</div>
                  <span className={styles.featureLabel}>{feat.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Stats */}
          {content.stats && (
            <div className={styles.statsRow}>
              {content.stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <span ref={(el) => (statRefs.current[idx] = el)} className={styles.statValue}>
                    {stat.value}{stat.suffix}
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className={styles.divider} />

          {/* Checklist */}
          <ul className={styles.checklist}>
            {content.checklist.map((item, idx) => (
              <li key={idx} className={styles.checkItem}>
                <span className={styles.checkIcon}>
                  <svg viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="11" fill="#0c2340" />
                    <polyline points="5.5,11 9,14.5 16.5,7.5" stroke="white" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#quote" className={styles.ctaBtn}>
            <span className={styles.ctaBtnText}>More About</span>
            <span className={styles.ctaBtnIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.4"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}