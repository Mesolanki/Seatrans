"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./about.module.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const statsRef = useRef(null);
  const teamSectionRef = useRef(null);
  const teamRef = useRef(null);

  // New Sections Refs
  const valuesSectionRef = useRef(null);
  const hubsSectionRef = useRef(null);
  const roadmapSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const partnersSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const metricsSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);

  // Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 3D Tilt Card Refs for Core Values
  const valCardRef1 = useRef(null);
  const valCardRef2 = useRef(null);
  const valCardRef3 = useRef(null);
  const valCardRef4 = useRef(null);

  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -12; // tilt angle x
    const ry = ((x / rect.width) - 0.5) * 12;  // tilt angle y
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.setProperty("--opacity", "1");
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
    card.style.setProperty("--opacity", "0");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Center text block timeline reveal
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(titleRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 1 }, "-=0.6")
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(teamRef.current, { opacity: 0, y: 15, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, "-=0.8")
        .fromTo(btnRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.6");

      // 2. Left and Right Images slide-in
      gsap.fromTo(leftImageRef.current,
        { opacity: 0, x: -60, scale: 1.05 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftImageRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(rightImageRef.current,
        { opacity: 0, x: 60, scale: 1.05 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightImageRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 3. Staggered reveal for stats cards
      const cards = statsRef.current.children;
      gsap.fromTo(Array.from(cards),
        { opacity: 0, y: 45, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.18,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );

      // 4. Staggered reveal for team member cards
      const teamCards = teamSectionRef.current?.querySelectorAll(`.${styles.teamMemberCard}`);
      if (teamCards) {
        gsap.fromTo(Array.from(teamCards),
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.2,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: teamSectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // 5. Core Values Stagger Reveal
      const valCards = valuesSectionRef.current?.querySelectorAll(`.${styles.valueCard}`);
      if (valCards) {
        gsap.fromTo(Array.from(valCards),
          { opacity: 0, y: 70, rotationX: 18, transformPerspective: 1000 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.15,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: valuesSectionRef.current,
              start: "top 82%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // 6. Global Hubs Column Reveals
      const hubText = hubsSectionRef.current?.querySelector(`.${styles.hubsTextCol}`);
      const hubMap = hubsSectionRef.current?.querySelector(`.${styles.hubsMapCol}`);
      if (hubText && hubMap) {
        gsap.fromTo(hubText,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: hubsSectionRef.current, start: "top 80%" } }
        );
        gsap.fromTo(hubMap,
          { opacity: 0, x: 50, scale: 0.98 },
          { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "power2.out", scrollTrigger: { trigger: hubsSectionRef.current, start: "top 80%" } }
        );
      }

      // 7. Roadmap alternating timeline reveal
      const timelineItems = roadmapSectionRef.current?.querySelectorAll(`.${styles.roadmapItem}`);
      if (timelineItems) {
        timelineItems.forEach((item) => {
          const isLeft = item.classList.contains(styles.leftItem);
          gsap.fromTo(item,
            { opacity: 0, x: isLeft ? -60 : 60 },
            {
              opacity: 1,
              x: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        });
      }

      // 7b. Animate timeline progress fill line
      const progressBar = roadmapSectionRef.current?.querySelector(`.${styles.timelineProgress}`);
      if (progressBar) {
        gsap.to(progressBar, {
          height: "100%",
          duration: 2.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: roadmapSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        });
      }

      // 8. FAQ Section scroll trigger slide up
      const faqHeader = faqSectionRef.current?.querySelector(`.${styles.sectionHeader}`);
      const faqAccordion = faqSectionRef.current?.querySelector(`.${styles.accordionWrapper}`);
      if (faqHeader && faqAccordion) {
        gsap.fromTo(faqHeader, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: faqSectionRef.current, start: "top 85%" } });
        gsap.fromTo(faqAccordion, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, scrollTrigger: { trigger: faqAccordion, start: "top 85%" } });
      }

      // 9. Partners Section Stagger Reveal
      const partnerCards = partnersSectionRef.current?.querySelectorAll(`.${styles.partnerCard}`);
      if (partnerCards) {
        gsap.fromTo(Array.from(partnerCards),
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: partnersSectionRef.current,
              start: "top 85%"
            }
          }
        );
      }

      // 10. CTA Banner Slide Up
      if (ctaSectionRef.current) {
        gsap.fromTo(ctaSectionRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaSectionRef.current,
              start: "top 88%"
            }
          }
        );
      }

      // 11. Metrics strip counter reveal
      const metricItems = metricsSectionRef.current?.querySelectorAll(`.${styles.metricItem}`);
      if (metricItems) {
        gsap.fromTo(Array.from(metricItems),
          { opacity: 0, y: 40, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.9, ease: "back.out(1.5)",
            scrollTrigger: { trigger: metricsSectionRef.current, start: "top 85%" }
          }
        );
      }

      // 12. Testimonials reveal
      const testimonialCards = testimonialsSectionRef.current?.querySelectorAll(`.${styles.testimonialCard}`);
      if (testimonialCards) {
        gsap.fromTo(Array.from(testimonialCards),
          { opacity: 0, y: 60, rotationX: 12, transformPerspective: 900 },
          { opacity: 1, y: 0, rotationX: 0, stagger: 0.18, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: testimonialsSectionRef.current, start: "top 82%" }
          }
        );
      }

      // 13. Services matrix reveal
      const serviceItems = servicesSectionRef.current?.querySelectorAll(`.${styles.serviceRow}`);
      if (serviceItems) {
        gsap.fromTo(Array.from(serviceItems),
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, stagger: 0.1, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: servicesSectionRef.current, start: "top 82%" }
          }
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className={styles.main}>
      {/* Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>About Our Company</h1>
          <div className={styles.heroBreadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbActive}>About Us</span>
          </div>
        </div>
      </section>

      {/* Symmetrical Content Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          
          <div className={styles.topLayoutGrid}>
            {/* LEFT COLUMN: Cargo Ship */}
            <div ref={leftImageRef} className={styles.leftImageCol}>
              <div className={styles.leftImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
                  className={styles.cargoImg}
                  alt="Maritime shipping vessel loaded with containers"
                  fill
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* CENTER COLUMN: Text and Badge */}
            <div className={styles.centerTextCol}>
              <div ref={badgeRef} className={styles.overviewBadge}>
                COMPANY OVERVIEW
              </div>
              
              <h2 ref={titleRef} className={styles.mainHeading}>
                DATA-DRIVEN LOGISTIC <br />
                <span className={styles.orangeHighlight}>GLOBAL NETWORK</span>
              </h2>
              
              <p ref={descRef} className={styles.mainDescription}>
                Seamlessly facilitate reliable technologies after cross-unit team building idea
                invested niche market individual action items rather than testing aggregate
                functional best practices and frictionless.
              </p>

              <div ref={teamRef} className={styles.teamInlineRow}>
                <div className={styles.avatarGroup}>
                  <div className={styles.avatar}>
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80&auto=format&fit=crop"
                      alt="Team Member"
                      width={38}
                      height={38}
                      unoptimized
                    />
                  </div>
                  <div className={styles.avatar}>
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop"
                      alt="Team Member"
                      width={38}
                      height={38}
                      unoptimized
                    />
                  </div>
                  <div className={styles.avatar}>
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop"
                      alt="Team Member"
                      width={38}
                      height={38}
                      unoptimized
                    />
                  </div>
                </div>
                <div className={styles.teamText}>
                  <span className={styles.teamHighlight}>100+ High Professional</span> Team Members
                </div>
              </div>
              
              <div ref={btnRef} className={styles.btnWrapper}>
                <Link href="#contact" className={styles.moreBtn}>
                  More About Us
                  <div className={styles.btnCircle}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.planeIcon}>
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Cargo Truck */}
            <div ref={rightImageRef} className={styles.rightImageCol}>
              <div className={styles.rightImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  className={styles.cargoImg}
                  alt="Logistics transport container truck parked at terminal"
                  fill
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div ref={statsRef} className={styles.statsGrid}>
            <div className={styles.statCard1}>
              <div className={styles.cardIconWrapper}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.cardIcon}>
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <div className={styles.cardTextWrapper}>
                <span className={styles.cardValue}>16K+</span>
                <span className={styles.cardLabel}>Project Completed</span>
              </div>
            </div>

            <div className={styles.statCard2}>
              <div className={styles.cardIconWrapper}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.cardIconWhite}>
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className={styles.cardTextWrapper}>
                <span className={styles.cardValue}>1200</span>
                <span className={styles.cardLabel}>Satisfied Customers</span>
              </div>
            </div>

            <div className={styles.statCard3}>
              <div className={styles.cardIconWrapper}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.cardIcon}>
                  <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                </svg>
              </div>
              <div className={styles.cardTextWrapper}>
                <span className={styles.cardValue}>4.9*</span>
                <span className={styles.cardLabel}>Average Clients Rating</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Grid */}
      <section ref={valuesSectionRef} className={styles.valuesSection}>
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <div className={styles.overviewBadge}>OUR VALUES</div>
            <h2 className={styles.sectionTitle}>THE SEATRANS CORE PILLARS</h2>
            <div className={styles.headerSeparator} />
          </div>

          <div className={styles.valuesGrid}>
            {/* Value 1: Safety, Top-right chamfered */}
            <div
              ref={valCardRef1}
              className={styles.valueCard}
              id={styles.valCard1}
              onMouseMove={(e) => handleMouseMove(e, valCardRef1)}
              onMouseLeave={() => handleMouseLeave(valCardRef1)}
            >
              <div className={styles.valueCardInner1}>
                <span className={styles.watermarkNumber}>01</span>
                <div className={styles.valueIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.valueIcon}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Safety & Security</h3>
                <p className={styles.valueText}>
                  Rigorous safety guidelines and double-checked cargo operations under international maritime codes protect your valuable assets.
                </p>
              </div>
            </div>

            {/* Value 2: Eco, Top-left & top-right chamfered */}
            <div
              ref={valCardRef2}
              className={styles.valueCard}
              id={styles.valCard2}
              onMouseMove={(e) => handleMouseMove(e, valCardRef2)}
              onMouseLeave={() => handleMouseLeave(valCardRef2)}
            >
              <div className={styles.valueCardInner2}>
                <span className={styles.watermarkNumber}>02</span>
                <div className={styles.valueIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.valueIcon}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Green Logistics</h3>
                <p className={styles.valueText}>
                  Committed to sustainability, optimizing routing to reduce emission loads and deploying bio-fuel transport assets where possible.
                </p>
              </div>
            </div>

            {/* Value 3: Connect, Top-left chamfered */}
            <div
              ref={valCardRef3}
              className={styles.valueCard}
              id={styles.valCard3}
              onMouseMove={(e) => handleMouseMove(e, valCardRef3)}
              onMouseLeave={() => handleMouseLeave(valCardRef3)}
            >
              <div className={styles.valueCardInner3}>
                <span className={styles.watermarkNumber}>03</span>
                <div className={styles.valueIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.valueIcon}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Global Connect</h3>
                <p className={styles.valueText}>
                  Seamless links connecting sky, ocean channels, and road hubs with 180+ global gateway terminals.
                </p>
              </div>
            </div>

            {/* Value 4: SLA, Top-right & bottom-left chamfered */}
            <div
              ref={valCardRef4}
              className={styles.valueCard}
              id={styles.valCard4}
              onMouseMove={(e) => handleMouseMove(e, valCardRef4)}
              onMouseLeave={() => handleMouseLeave(valCardRef4)}
            >
              <div className={styles.valueCardInner4}>
                <span className={styles.watermarkNumber}>04</span>
                <div className={styles.valueIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.valueIcon}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>SLA Reliability</h3>
                <p className={styles.valueText}>
                  Absolute punctuality through predictive tracking analytics, route redundancy, and real-time custom brokers dispatch.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Roadmap Timeline */}
      <section ref={roadmapSectionRef} className={styles.roadmapSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeader}>
            <div className={styles.overviewBadge}>ROADMAP</div>
            <h2 className={styles.sectionTitle}>OUR HISTORICAL ROADMAP</h2>
            <p className={styles.roadmapSubtitle}>Three decades of evolution across ocean, air, and land freight networks</p>
            <div className={styles.headerSeparator} />
          </div>

          <div className={styles.timelineContainer}>
            {/* Animated Fill Line */}
            <div className={styles.timelineLine}>
              <div className={styles.timelineProgress} />
            </div>

            {/* Milestone 1: 1996 */}
            <div className={`${styles.roadmapItem} ${styles.leftItem}`}>
              <div className={styles.roadmapCard}>
                <div className={styles.roadmapCardGlow} />
                <div className={styles.roadmapCardTop}>
                  <span className={styles.roadmapYear}>1996</span>
                  <div className={styles.roadmapIconCircle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.roadmapIcon}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.42 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                </div>
                <h3 className={styles.roadmapTitle}>Maritime Founding</h3>
                <p className={styles.roadmapText}>
                  Seatrans was founded with two regional cargo vessels operating commercial routes. A small team with a giant vision.
                </p>
                <div className={styles.roadmapTag}>Foundation</div>
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeRing} />
              </div>
            </div>

            {/* Milestone 2: 2004 */}
            <div className={`${styles.roadmapItem} ${styles.rightItem}`}>
              <div className={styles.roadmapCard}>
                <div className={styles.roadmapCardGlow} />
                <div className={styles.roadmapCardTop}>
                  <span className={styles.roadmapYear}>2004</span>
                  <div className={styles.roadmapIconCircle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.roadmapIcon}>
                      <rect x="1" y="3" width="15" height="13" rx="2"/>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                      <circle cx="5.5" cy="18.5" r="2.5"/>
                      <circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                  </div>
                </div>
                <h3 className={styles.roadmapTitle}>Land Freight Network</h3>
                <p className={styles.roadmapText}>
                  Expanded into overland trucking with a fleet of 60 container trucks, connecting inland hubs to port terminals.
                </p>
                <div className={styles.roadmapTag}>Expansion</div>
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeRing} />
              </div>
            </div>

            {/* Milestone 3: 2008 */}
            <div className={`${styles.roadmapItem} ${styles.leftItem}`}>
              <div className={styles.roadmapCard}>
                <div className={styles.roadmapCardGlow} />
                <div className={styles.roadmapCardTop}>
                  <span className={styles.roadmapYear}>2008</span>
                  <div className={styles.roadmapIconCircle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.roadmapIcon}>
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                  </div>
                </div>
                <h3 className={styles.roadmapTitle}>Aviation Link Expansion</h3>
                <p className={styles.roadmapText}>
                  Launched custom air charter freight links, connecting transoceanic ports to express cargo flights worldwide.
                </p>
                <div className={styles.roadmapTag}>Air Freight</div>
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeRing} />
              </div>
            </div>

            {/* Milestone 4: 2015 */}
            <div className={`${styles.roadmapItem} ${styles.rightItem}`}>
              <div className={styles.roadmapCard}>
                <div className={styles.roadmapCardGlow} />
                <div className={styles.roadmapCardTop}>
                  <span className={styles.roadmapYear}>2015</span>
                  <div className={styles.roadmapIconCircle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.roadmapIcon}>
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                </div>
                <h3 className={styles.roadmapTitle}>Global Hub Certification</h3>
                <p className={styles.roadmapText}>
                  Earned ISO 9001 and IATA certifications. Opened global offices in Rotterdam, Singapore, and Houston.
                </p>
                <div className={styles.roadmapTag}>ISO · IATA</div>
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeRing} />
              </div>
            </div>

            {/* Milestone 5: 2020 */}
            <div className={`${styles.roadmapItem} ${styles.leftItem} ${styles.activeItem}`}>
              <div className={styles.roadmapCard}>
                <div className={styles.roadmapCardGlow} />
                <div className={styles.roadmapCardTop}>
                  <span className={styles.roadmapYear}>2020</span>
                  <div className={`${styles.roadmapIconCircle} ${styles.roadmapIconActive}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.roadmapIcon}>
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                </div>
                <h3 className={styles.roadmapTitle}>Next-Gen AI Fleet</h3>
                <p className={styles.roadmapText}>
                  Integrated predictive routing AI, cargo tracking analytics, and automated customs clearing broker terminals globally.
                </p>
                <div className={`${styles.roadmapTag} ${styles.roadmapTagActive}`}>Live · AI-Powered</div>
              </div>
              <div className={`${styles.timelineNode} ${styles.activeNode}`}>
                <div className={styles.nodeRing} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* NEW SECTION 4: FAQ Accordion Section */}
      <section ref={faqSectionRef} className={styles.faqSection}>
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <div className={styles.overviewBadge}>FAQ</div>
            <h2 className={styles.sectionTitle}>FREQUENTLY ASKED QUESTIONS</h2>
            <div className={styles.headerSeparator} />
          </div>

          <div className={styles.accordionWrapper}>
            {[
              {
                q: "What areas do your ocean freight services cover?",
                a: "We cover major global maritime lanes connecting Europe, Southeast Asia, and the Americas with scheduled weekly consolidation services (FCL & LCL)."
              },
              {
                q: "How does the real-time cargo tracking system work?",
                a: "Each dispatch receives a unique container reference ID. Our tracking panel links directly with port dispatch terminals and satellite AIS transponders to deliver hourly coordinates."
              },
              {
                q: "Do you assist with local customs documentation?",
                a: "Yes, we have licensed in-house customs brokerage desks at major terminals to handle clearance documentation, tariff classification, and local port taxes."
              }
            ].map((item, idx) => (
              <div key={idx} className={`${styles.accordionCard} ${activeFaq === idx ? styles.activeCard : ""}`}>
                <button className={styles.accordionTrigger} onClick={() => toggleFaq(idx)}>
                  <span className={styles.accordionQuestion}>{item.q}</span>
                  <span className={styles.accordionIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.chevronIcon}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className={styles.accordionContent} style={{ maxHeight: activeFaq === idx ? "200px" : "0" }}>
                  <div className={styles.accordionInner}>
                    <p className={styles.accordionAnswer}>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEW SECTION 5: Accreditations Grid */}
      <section ref={partnersSectionRef} className={styles.partnersSection}>
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <div className={styles.overviewBadge}>ACCREDITATIONS</div>
            <h2 className={styles.sectionTitle}>TRUSTED LOGISTICS STANDARDS</h2>
            <div className={styles.headerSeparator} />
          </div>

          <div className={styles.partnersGrid}>
            {/* Accreditation 1: ISO, top-right cut */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerCardInner1}>
                <div className={styles.partnerBadge}>ISO 9001:2015</div>
                <h4 className={styles.partnerName}>Quality Management</h4>
                <p className={styles.partnerDesc}>Certified global supply chain standards for cargo tracking, handling, and risk mitigation.</p>
              </div>
            </div>

            {/* Accreditation 2: IATA, top-left and top-right cut */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerCardInner2}>
                <div className={styles.partnerBadge}>IATA AGENT</div>
                <h4 className={styles.partnerName}>Air Charter Dispatch</h4>
                <p className={styles.partnerDesc}>Licensed international air freight operator agent coordinating priority direct cargo charters.</p>
              </div>
            </div>

            {/* Accreditation 3: FIATA, top-left cut */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerCardInner3}>
                <div className={styles.partnerBadge}>FIATA MEMBER</div>
                <h4 className={styles.partnerName}>Freight Forwarding</h4>
                <p className={styles.partnerDesc}>Approved member of international federation of freight forwarders associations representing elite operators.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION 6: Chamfered CTA Banner */}
      <section className={styles.ctaWrapperSection}>
        <div className={styles.container}>
          
          <div ref={ctaSectionRef} className={styles.ctaBanner}>
            <div className={styles.ctaOverlayGrid} />
            
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>READY TO DISPATCH YET? CONNECT WITH SEATRANS</h2>
              <p className={styles.ctaSubtext}>
                Contact our expert logistics coordinators today to schedule your next FCL maritime shipment or request a priority air charter slot.
              </p>
              
              <div className={styles.ctaBtnWrapper}>
                <Link href="#contact" className={styles.ctaWhiteBtn}>
                  Get A Quote
                  <div className={styles.ctaBtnCircle}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.ctaPlaneIcon}>
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION: Animated Metrics Strip ── */}
      <section ref={metricsSectionRef} className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>

            <div className={styles.metricItem}>
              <div className={styles.metricIconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metricIcon}>
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <span className={styles.metricValue}>99.4<span className={styles.metricSup}>%</span></span>
              <span className={styles.metricLabel}>On-Time Delivery</span>
            </div>

            <div className={styles.metricDivider} />

            <div className={styles.metricItem}>
              <div className={styles.metricIconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metricIcon}>
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <span className={styles.metricValue}>180<span className={styles.metricSup}>+</span></span>
              <span className={styles.metricLabel}>Global Ports</span>
            </div>

            <div className={styles.metricDivider} />

            <div className={styles.metricItem}>
              <div className={styles.metricIconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metricIcon}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span className={styles.metricValue}>1,200<span className={styles.metricSup}>+</span></span>
              <span className={styles.metricLabel}>Enterprise Clients</span>
            </div>

            <div className={styles.metricDivider} />

            <div className={styles.metricItem}>
              <div className={styles.metricIconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metricIcon}>
                  <rect x="1" y="3" width="15" height="13" rx="2"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <span className={styles.metricValue}>16K<span className={styles.metricSup}>+</span></span>
              <span className={styles.metricLabel}>Shipments Completed</span>
            </div>

            <div className={styles.metricDivider} />

            <div className={styles.metricItem}>
              <div className={styles.metricIconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metricIcon}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <span className={styles.metricValue}>4.9<span className={styles.metricSup}>★</span></span>
              <span className={styles.metricLabel}>Average Rating</span>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

