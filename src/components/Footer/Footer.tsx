"use client";

import styles from "./Footer.module.css";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative top accent border line */}
      <div className={styles.topGlowBorder} />

      <div className={styles.inner}>
        {/* Brand Section with Logo */}
        <div className={styles.brandBlock}>
          <a href="#hero" className={styles.logoLink}>
            <img
              src="/AristonL.png"
              alt="Ariston Investa Group Logo"
              className={styles.logoImage}
            />
          </a>
          <p className={styles.brandDesc}>
            <strong>Ariston Investa Group</strong>
            <br />
            Established: 1990
            <br />
            Headquartered in Singapore
            <br />
            <br />
            Committed to professionalism, innovation, and trusted global partnerships.
          </p>
        </div>

        {/* Links Grid */}
        <div className={styles.linksGrid}>
          {/* Quick Links matching Navbar */}
          <div className={styles.col}>
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="#about">
                  <span>About Us</span>
                  <ArrowUpRight size={13} className={styles.linkIcon} />
                </a>
              </li>
              <li>
                <a href="#why-choose-us">
                  <span>Why Ariston</span>
                  <ArrowUpRight size={13} className={styles.linkIcon} />
                </a>
              </li>
              <li>
                <a href="#vision-mission">
                  <span>Vision &amp; Mission</span>
                  <ArrowUpRight size={13} className={styles.linkIcon} />
                </a>
              </li>
              <li>
                <a href="#our-values">
                  <span>Our Values</span>
                  <ArrowUpRight size={13} className={styles.linkIcon} />
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span>Contact</span>
                  <ArrowUpRight size={13} className={styles.linkIcon} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.col}>
            <h3>Get in Touch</h3>
            <ul className={styles.contactList}>
              <li>
                <Mail size={16} className={styles.contactIcon} />
                <a href="mailto:info@aristoninvestagroup.com">
                  info@aristoninvestagroup.com
                </a>
              </li>
       
              <li>
                <MapPin size={16} className={styles.contactIcon} />
                <span>Raffles Place, Singapore</span>
              </li>
            </ul>
          </div>

          {/* Social Media / Connect */}
          <div className={styles.col}>
            <h3>Connect</h3>
            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/profile.php?id=61594086961638"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialBtn}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ariston_investa_group/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialBtn}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:info@aristoninvestagroup.com"
                aria-label="Email"
                className={styles.socialBtn}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer Bar */}
      <div className={styles.copyContainer}>
        <div className={styles.copy}>
          <p>© 2026 Ariston Investa Group. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <span className={styles.dot}>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}