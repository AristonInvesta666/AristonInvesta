"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Lightbulb,
  UserCheck,
  Handshake,
} from "lucide-react";
import styles from "./OurValues.module.css";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Upholding high ethical standards, operational transparency, and complete honesty in every interaction.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Striving for superior quality and continuous improvement across all our solutions and services.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing creative strategies and modern technology to generate sustainable, long-term impact.",
  },
  {
    icon: UserCheck,
    title: "Professionalism",
    description:
      "Delivering dedicated expertise, reliability, and precision to meet global corporate standards.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    description:
      "Building enduring strategic alliances grounded in mutual growth, trust, and shared success.",
  },
];

export default function OurValues() {
  return (
    <section id="our-values" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <h2>Our Values</h2>
          <p>The foundational principles guiding our culture and partnerships</p>
        </motion.div>

        <div className={styles.grid}>
          {coreValues.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <motion.div
                key={val.title}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.iconBox}>
                  <IconComp className={styles.icon} />
                </div>
                <h3 className={styles.title}>{val.title}</h3>
                <p className={styles.desc}>{val.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}