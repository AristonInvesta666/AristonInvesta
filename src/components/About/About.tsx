"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Column: Client Content */}
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className={styles.subheading}>ABOUT US</span>

          <h2 className={styles.heading}>
            About Ariston <br />
            Investa Group
          </h2>

          <p className={styles.description}>
            Founded in <strong>1990</strong>, <strong>Ariston Investa Group</strong> is a <strong>Singapore-based</strong> company with decades of experience in financial services, strategic partnerships, and global business development.
            <br /><br />
            Our focus is on creating meaningful connections, supporting sustainable growth, and building trusted relationships across international markets.
            <br /><br />
            Driven by professionalism, transparency, and innovation, we continue to expand our global presence while delivering excellence in everything we do.
          </p>

          <a href="#contact" className={styles.ctaButton}>
            Learn More <span className={styles.arrow}>&rarr;</span>
          </a>
        </motion.div>

        {/* Right Column: Image Frame with Updated Floating Badge */}
        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div className={styles.imageCard}>
            <img
              src="Office.png"
              alt="Ariston Corporate Executive Boardroom"
              className={styles.boardroomImage}
            />

            {/* Updated Badge reflecting 1990 foundation date */}
            <div className={styles.floatingBadge}>
              <span className={styles.badgeNumber}>35+</span>
              <span className={styles.badgeText}>Years of Global Excellence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}