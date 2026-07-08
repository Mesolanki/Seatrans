"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll sizing transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Main navigation container */}
      <div className={styles.navbarContainer}>
        {/* Brand Logo (Positioned absolutely outside the clipped body to prevent clipping) */}
        <Link href="/" className={styles.logoContainer} onClick={handleLinkClick}>
          <Image 
            src="/images/Seatrans-logo.png" 
            alt="Seatrans Logo" 
            className={styles.logoImage} 
            width={684}
            height={662}
            priority
          />
        </Link>

        {/* White center trapezoid body */}
        <div className={styles.navbarBody}>
          {/* Navigation links & dropdowns */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink} onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink} onClick={handleLinkClick}>
              About Us
            </Link>
            <Link href="#service" className={styles.navLink} onClick={handleLinkClick}>
              Services
            </Link>
            <Link href="#industry-we-serve" className={styles.navLink} onClick={handleLinkClick}>
              Industries Served
            </Link>
            <Link href="#3pl-solution" className={styles.navLink} onClick={handleLinkClick}>
              3PL Solutions
            </Link>
            <Link href="#blog" className={styles.navLink} onClick={handleLinkClick}>
              Blog
            </Link>
            <Link href="#contactus" className={styles.navLink} onClick={handleLinkClick}>
              Contact Us
            </Link>
          </nav>

          {/* Right widgets */}
          <div className={styles.widgetsContainer}>



            {/* Mobile hamburger button */}
            <button
              className={`${styles.hamburgerButton} ${isMobileMenuOpen ? styles.active : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          </div>
        </div>

        {/* Slanted blue CTA button */}
        <Link href="#quote" className={styles.ctaButton} onClick={handleLinkClick}>
          <span className={styles.ctaText}>Get A Quote</span>
          <div className={styles.ctaIconWrapper}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.ctaIcon}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Mobile drawer menu */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Home
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="/about" className={styles.mobileNavLink} onClick={handleLinkClick}>
            About Us
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="#service" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Services
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="#industry-we-serve" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Industries Served
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="#3pl-solution" className={styles.mobileNavLink} onClick={handleLinkClick}>
            3PL Solutions
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="#blog" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Blog
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="#contactus" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Contact Us
          </Link>
          
          <div className={styles.mobileDrawerFooter}>

            <Link
              href="#quote"
              className={styles.mobileCta}
              onClick={handleLinkClick}
            >
              Get A Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
