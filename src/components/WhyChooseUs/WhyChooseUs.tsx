"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Headphones,
  Trophy,
  Handshake,
  Award,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Transparent Business Model",
  },
  {
    icon: TrendingUp,
    title: "Structured Growth Opportunities",
  },
  {
    icon: Headphones,
    title: "Dedicated Partner Support",
  },
  {
    icon: Trophy,
    title: "Performance-Based Rewards",
  },
  {
    icon: Handshake,
    title: "Long-Term Business Relationships",
  },
  {
    icon: Award,
    title: "Ethical & Professional Approach",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>Why Professionals Choose Ariston</h2>
        </motion.div>

        {/* 3x2 Matrix Grid */}
        <div className={styles.grid}>
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Content wrapper layered above animated gold pseudo-elements */}
                <div className={styles.cardContent}>
                  <motion.div
                    className={styles.iconWrapper}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <IconComponent className={styles.icon} />
                  </motion.div>

                  <p className={styles.cardTitle}>{item.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}