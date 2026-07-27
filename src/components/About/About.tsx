"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Column: Refined Content */}
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className={styles.subheading}>ABOUT ARISTON</span>

          <h2 className={styles.heading}>
            Building Growth <br />
            Through Meaningful <br />
            Partnerships.
          </h2>

          <p className={styles.description}>
            Ariston Investa Group empowers entrepreneurs, professionals, and
            referral partners with a transparent business model focused on
            sustainable growth, long-term relationships, and rewarding
            opportunities.
          </p>

          <a href="#contact" className={styles.ctaButton}>
            Learn More <span className={styles.arrow}>&rarr;</span>
          </a>
        </motion.div>

        {/* Right Column: Controlled Frame Image with Subtle Card Elevation */}
        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div className={styles.imageCard}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Ariston Corporate Executive Boardroom"
              className={styles.boardroomImage}
            />

            {/* Elegant Floating Stat Badge */}
            <div className={styles.floatingBadge}>
              <span className={styles.badgeNumber}>10+</span>
              <span className={styles.badgeText}>Years of Financial Growth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}