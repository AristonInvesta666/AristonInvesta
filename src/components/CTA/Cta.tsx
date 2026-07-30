"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./Cts.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      {/* Background Stock Trend Chart Graphic */}
      <div className={styles.chartOverlay} aria-hidden="true">
        <svg
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.chartSvg}
        >
          <path
            d="M 50 350 L 250 280 L 400 310 L 600 150 L 750 40"
            stroke="url(#goldGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="750" cy="40" r="10" fill="#c49a45" />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c49a45" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#d4a84e" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.container}>
        {/* Main Content Details */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.heading}>
            Your Growth Journey <br />
            <span className={styles.goldText}>Starts Here.</span>
          </h2>

          <p className={styles.description}>
            Take the first step toward building stronger business opportunities
            with Ariston Investa Group.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryButton}>
              Become a Growth Partner
              <ArrowRight className={styles.btnIcon} />
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Contact Our Team
              <ArrowRight className={styles.btnIcon} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}