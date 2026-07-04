"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./GSAPImageSection.module.css";

export default function GSAPImageSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cargoRef = useRef(null);
  const shadowRef = useRef(null);
  const boxLeftRef = useRef(null);
  const boxRightRef = useRef(null);
  const contentRightRef = useRef(null); // Content A (Secure Storage)
  const contentLeftRef = useRef(null);  // Content B (Smart Fulfillment)

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 993px)", () => {
      // Desktop-only pinning and column swap animations
      gsap.set(cargoRef.current, {
        left: "25%",
        xPercent: -50,
        yPercent: -50,
        rotation: 0,
        scale: 1
      });

      gsap.set(shadowRef.current, {
        left: "25%",
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        opacity: 0.6
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80px",
          end: "+=800", // Pinned scroll duration
          pin: true,
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // Cargo Container Slide and Lift/Drop Scaling
      tl.to(cargoRef.current, {
        left: "75%",
        xPercent: -50,
        yPercent: -50,
        rotation: 0,
        duration: 1
      }, 0)
      .to(cargoRef.current, {
        scale: 1.25, // Elevated high-lift 3D scale effect for the scaled image
        duration: 0.5,
        ease: "power1.out"
      }, 0)
      .to(cargoRef.current, {
        scale: 1.0, // Soft drop landing
        duration: 0.5,
        ease: "power1.in"
      }, 0.5)

      // Cargo Drop-Shadow slide and fade/shrink in sync (3D depth)
      .to(shadowRef.current, {
        left: "75%",
        xPercent: -50,
        yPercent: -50,
        duration: 1
      }, 0)
      .to(shadowRef.current, {
        scale: 0.55, // Shadow shrinks more as cargo rises higher
        opacity: 0.1, // Shadow fades more as cargo rises higher
        duration: 0.5,
        ease: "power1.out"
      }, 0)
      .to(shadowRef.current, {
        scale: 1.0, // Shadow grows as cargo descends
        opacity: 0.6, // Shadow sharpens/darkens as cargo lands
        duration: 0.5,
        ease: "power1.in"
      }, 0.5)

      // Text Slide Out / Cross-Fades
      .to(contentRightRef.current, {
        opacity: 0,
        x: 60,
        pointerEvents: "none",
        duration: 0.8
      }, 0)
      .to(contentLeftRef.current, {
        opacity: 1,
        x: 0,
        pointerEvents: "auto",
        duration: 0.8
      }, 0.2);
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="3pl-solution" className={styles.section}>
      {/* Dynamic Background Glow Elements */}
      <div className={styles.glowBlob1} />
      <div className={styles.glowBlob2} />

      <div className={styles.container}>
        <div ref={wrapperRef} className={styles.layoutWrapper}>
          
          {/* Left Column */}
          <div className={styles.colLeft}>
            {/* Left Landing Zone (Starts visible) */}
            <div ref={boxLeftRef} className={styles.landingZone}>
              {/* Mobile static image, hidden on desktop */}
              <Image
                src="/images/Animation/new_container.png"
                className={styles.staticCargoMobile}
                alt="Cargo Container"
                width={480}
                height={310}
                unoptimized
              />
            </div>
            
            {/* Left Content (Slide 2 Content - starts hidden) */}
            <div ref={contentLeftRef} className={`${styles.contentCol} ${styles.slideLeftContent}`}>
              <span className={styles.subtitle}>Cross-Docking & Distribution</span>
              <h2 className={styles.title}>
                Fast-Track Fulfillment & <br />
                <span className={styles.highlightText}>Smart Dispatch</span>
              </h2>
              <div className={styles.divider} />
              <p className={styles.description}>
                Speed up delivery cycles with our automated cross-docking services. Move goods directly from incoming transport to outbound distribution vectors with minimal storage time and live transit dispatch.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureBullet}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.bulletIcon}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>Route Optimization</h4>
                    <p className={styles.featureText}>Intelligent dispatch algorithms mapping the fastest delivery paths.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureBullet}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.bulletIcon}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>Accelerated Clearance</h4>
                    <p className={styles.featureText}>Immediate customs documentation processing at transport transfer hubs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.colRight}>
            {/* Right Content (Slide 1 Content - starts visible) */}
            <div ref={contentRightRef} className={styles.contentCol}>
              <span className={styles.subtitle}>Warehousing & 3PL</span>
              <h2 className={styles.title}>
                Secure Storage & <br />
                <span className={styles.highlightText}>Automated Distribution</span>
              </h2>
              <div className={styles.divider} />
              <p className={styles.description}>
                Optimize your supply chain with our strategically located warehousing hubs. We offer comprehensive inventory management, pick-and-pack fulfillment, and real-time cargo status monitoring.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureBullet}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.bulletIcon}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>Inventory Integration</h4>
                    <p className={styles.featureText}>Real-time synchronization with major WMS and ERP systems.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureBullet}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.bulletIcon}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>Strategic Hubs</h4>
                    <p className={styles.featureText}>Locations situated next to key sea ports and priority airports.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Landing Zone (Starts faded/scale-down) */}
            <div ref={boxRightRef} className={`${styles.landingZone} ${styles.slideRightBox}`}>
              {/* Mobile static image, hidden on desktop */}
              <Image
                src="/images/Animation/new_container.png"
                className={styles.staticCargoMobile}
                alt="Cargo Container"
                width={480}
                height={310}
                unoptimized
              />
            </div>
          </div>

          {/* Floating Cargo Container Dynamic Shadow (Desktop only) */}
          <div
            ref={shadowRef}
            className={styles.cargoShadow}
          />

          {/* Floating Cargo Container (Desktop only) */}
          <Image
            ref={cargoRef}
            src="/images/Animation/new_container.png"
            className={styles.animatedCargo}
            alt="Animated Cargo Container"
            width={480}
            height={310}
            unoptimized
          />

        </div>
      </div>
    </section>
  );
}
