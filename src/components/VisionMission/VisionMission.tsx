"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section id="vision-mission" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Vision Card */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6 }}
          >
            <motion.div 
              className={styles.iconBox}
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Eye size={26} className={styles.icon} />
            </motion.div>
            <h2 className={styles.title}>Vision</h2>
            <p className={styles.desc}>
              To build a globally respected organization that creates lasting value through innovation, trust, and meaningful business relationships.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -6 }}
          >
            <motion.div 
              className={styles.iconBox}
              whileHover={{ rotate: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Target size={26} className={styles.icon} />
            </motion.div>
            <h2 className={styles.title}>Mission</h2>
            <p className={styles.desc}>
              To foster strategic partnerships, encourage sustainable growth, and deliver professional solutions that support long-term success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}