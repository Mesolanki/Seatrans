"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      {/* Background elements */}
      <div className={styles.bgOverlay} />
      <div className={styles.glowPill} />

      <div className={styles.container}>
        {/* MIDDLE SECTION: 4 COLUMNS */}
        <div className={styles.grid}>
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoWrapper}>
              <span className={styles.logoText}>
                SEA<span className={styles.accentWord}>TRANS</span>
              </span>
            </Link>
            <p className={styles.brandBio}>
              Leading global logistics provider offering sea freight forwarding, customs clearance, warehousing, and OOG project cargo solutions with 20+ years of regional excellence.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>About Company</Link>
              </li>
              <li>
                <a href="#service" className={styles.footerLink}>Services Desk</a>
              </li>
              <li>
                <a href="#industries" className={styles.footerLink}>Industries Served</a>
              </li>
              <li>
                <a href="#why-choose-us" className={styles.footerLink}>Why Choose Us</a>
              </li>
              <li>
                <a href="#quote" className={styles.footerLink}>Instant Quote</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics Services */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Core Expertise</h3>
            <ul className={styles.linkList}>
              <li>
                <span className={styles.serviceItem}>Freight Forwarding</span>
              </li>
              <li>
                <span className={styles.serviceItem}>Custom Clearance</span>
              </li>
              <li>
                <span className={styles.serviceItem}>FTWZ Storage & 3PL</span>
              </li>
              <li>
                <span className={styles.serviceItem}>Castor Oil Logistics</span>
              </li>
              <li>
                <span className={styles.serviceItem}>Heavy Project Cargo</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Reach Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className={styles.contactText}>
                  Corporate Office, Gandhidham, Kutch, Gujarat - 370201, India
                </span>
              </li>
              <li className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919999988888" className={styles.contactLink}>
                  +91 99999 88888
                </a>
              </li>
              <li className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:ops@seatrans.in" className={styles.contactLink}>
                  ops@seatrans.in
                </a>
              </li>
              <li className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className={styles.contactText}>
                  Mon - Sat: 9:30 AM - 6:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT AND CREDITS */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; {currentYear} Seatrans Shipping & Logistics. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.legalDivider}>•</span>
            <Link href="/" className={styles.legalLink}>Terms of Service</Link>
            <span className={styles.legalDivider}>•</span>
            <Link href="/" className={styles.legalLink}>Cookie Policy</Link>
          </div>
          <div className={styles.credits}>
            Designed & Developed by <span className={styles.creditTeam}>Seatrans Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
