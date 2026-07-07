"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Check1.module.css";

const STATS = [
  { id: "branches",   value: 430, suffix: "",  title: <>Branch <br /> Over the world</>, icon: <BranchIcon /> },
  { id: "team",       value: 600, suffix: "",  title: <>Our <br /> Team</>,             icon: <TeamIcon />   },
  { id: "experience", value: 20,  suffix: "+", title: <>Year <br /> Experiece</>,        icon: <ExpIcon />    },
  { id: "transport",  value: 230, suffix: "K", title: <>Product <br /> Transport</>,     icon: <BoxIcon />    },
];

function BranchIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="16" stroke="currentColor" strokeWidth="2" strokeDasharray="1 1" opacity="0.6"/>
      <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="22" cy="22" rx="5" ry="12" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
      <line x1="10" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="17" cy="16" r="3" fill="#ffffff" stroke="var(--brand-blue)" strokeWidth="2"/>
      <circle cx="28" cy="24" r="3" fill="#ffffff" stroke="var(--brand-blue)" strokeWidth="2"/>
      <circle cx="14" cy="28" r="3" fill="#ffffff" stroke="var(--brand-blue)" strokeWidth="2"/>
      <path d="M17 16 Q24 18 28 24 Q20 27 14 28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
    </svg>
  );
}
function TeamIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="18" r="4.5" stroke="currentColor" strokeWidth="1.8" opacity="0.6"/>
      <path d="M8 32 C8 27.5 11 25.5 15 25.5 C16.5 25.5 18 25.8 19 26.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <circle cx="29" cy="18" r="4.5" stroke="currentColor" strokeWidth="1.8" opacity="0.6"/>
      <path d="M36 32 C36 27.5 33 25.5 29 25.5 C27.5 25.5 26 25.8 25 26.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <circle cx="22" cy="14" r="5.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M13 32 C13 26.5 17 23.5 22 23.5 C27 23.5 31 26.5 31 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 25.5 L24 29.5 L22 32 L20 29.5 Z" fill="currentColor" opacity="0.8"/>
    </svg>
  );
}
function ExpIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 6 C13 8 10 12 10 18 C10 27 17 34 22 38 C27 34 34 27 34 18 C34 12 31 8 22 6 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M22 9 C15.5 10.5 13 14 13 18 C13 25 18 30.5 22 34 C26 30.5 31 25 31 18 C31 14 28.5 10.5 22 9 Z" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <path d="M22 13 L23.8 16.6 L27.8 17.2 L24.9 20 L25.6 24 L22 22.1 L18.4 24 L19.1 20 L16.2 17.2 L20.2 16.6 Z" fill="currentColor"/>
      <circle cx="22" cy="28" r="2.5" fill="currentColor" opacity="0.75"/>
      <line x1="16" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 6 L35 12.5 L22 19 L9 12.5 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M9 12.5 L9 27.5 L22 34 L22 19 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M22 19 L22 34 L35 27.5 L35 12.5 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <line x1="22" y1="19" x2="22" y2="34" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="9" y1="12.5" x2="22" y2="19" stroke="currentColor" strokeWidth="1"/>
      <line x1="35" y1="12.5" x2="22" y2="19" stroke="currentColor" strokeWidth="1"/>
      <path d="M6 24 Q22 38 38 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3"/>
      <path d="M38 24 L34 22 M38 24 L35 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export default function Check1() {
  const [counted, setCounted] = useState(false);
  const sectionRef = useRef(null);
  const numRefs    = useRef([]);
  const rafRefs    = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted) { setCounted(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [counted]);

  useEffect(() => {
    if (!counted) return;
    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const currentRafRefs = rafRefs.current;
    STATS.forEach((stat, i) => {
      const el = numRefs.current[i];
      if (!el) return;
      if (reduced) { el.textContent = stat.value; return; }
      const dur = 2400, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.floor(stat.value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) currentRafRefs[i] = requestAnimationFrame(tick);
        else el.textContent = stat.value;
      };
      currentRafRefs[i] = requestAnimationFrame(tick);
    });
    return () => currentRafRefs.forEach(id => id && cancelAnimationFrame(id));
  }, [counted]);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Company Statistics">
      {/* ── Subtle dot grid ── */}
      <div className={styles.dotGrid} aria-hidden="true"/>

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Our Global Impact <span className={styles.accent}>In Numbers</span>
          </h2>
          <p className={styles.sub}>Powering world trade through land, sea &amp; air — every day.</p>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {STATS.map((stat, i) => {
            return (
              <div
                key={stat.id}
                id={`sb-${stat.id}`}
                className={styles.card}
                tabIndex={0}
                role="button"
                aria-label={`${stat.id}: ${stat.value}${stat.suffix}`}
              >
                <div className={styles.iconBox} aria-hidden="true">
                  <span className={styles.iconGlow}/>
                  {stat.icon}
                </div>

                <div className={styles.cardFlipContainer}>
                  <div className={styles.cardFlipInner}>
                    {/* Front Face */}
                    <div className={styles.cardFront}>
                      <h3 className={styles.cardTitle}>{stat.title}</h3>
                      <h4 className={styles.cardCount}>
                        <span ref={el => (numRefs.current[i] = el)} className={styles.num}>0</span>
                        {stat.suffix && <span className={styles.sfx}>{stat.suffix}</span>}
                      </h4>
                    </div>
                    {/* Back Face */}
                    <div className={styles.cardBack}>
                      <span className={styles.backBadge}>SEATRANS INFO</span>
                      <p className={styles.backDetail}>
                        {stat.id === "branches" && "Accessing 430+ strategic logistics branches worldwide."}
                        {stat.id === "team" && "Dedicated team of 600+ supply chain experts."}
                        {stat.id === "experience" && "Over 20 years of trusted industry leadership."}
                        {stat.id === "transport" && "Successfully shipped 230K+ containers globally."}
                      </p>
                      <span className={styles.backLink}>Read More →</span>
                    </div>
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