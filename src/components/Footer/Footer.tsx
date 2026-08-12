"use client";

import styles from "./Footer.module.css";
import { Link, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

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
                <a href="mailto:info@aristoninvesta.com">
                  info@aristoninvesta.com
                </a>
              </li>
              <li>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <MapPin size={16} className={styles.contactIcon} />
                <span>Singapore</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className={styles.col}>
            <h3>Connect</h3>
            <div className={styles.socials}>
              <a
                href="#"
                aria-label="LinkedIn"
                className={styles.socialBtn}
              >
                <Link size={18} />
              </a>
              <a
                href="mailto:info@aristoninvesta.com"
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