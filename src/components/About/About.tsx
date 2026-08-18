"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./About.module.css";

// Array of 4 images for the slideshow
const images = [
  { src: "about2.png", alt: "Ariston Corporate Executive Boardroom" },
  { src: "about1.png", alt: "Ariston Global Strategy Meeting" },
  { src: "about3.jpeg", alt: "Ariston Modern Office Interior" },
  { src: "about4.png", alt: "Ariston Financial Services Discussion" },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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

        {/* Right Column: Image Slideshow Frame */}
        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div className={styles.imageCard}>
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className={styles.boardroomImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              />
            </AnimatePresence>

            {/* Pagination Dots Indicator */}
            <div className={styles.dotsContainer}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`${styles.dot} ${
                    currentIndex === index ? styles.activeDot : ""
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

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