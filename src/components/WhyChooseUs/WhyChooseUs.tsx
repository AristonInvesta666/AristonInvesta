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

        {/* 3x2 Grid Matrix */}
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
                whileHover="hover"
              >
                {/* Gold Line Icon */}
                <motion.div
                  className={styles.iconWrapper}
                  variants={{
                    hover: { scale: 1.1, rotate: 2 },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <IconComponent className={styles.icon} />
                </motion.div>

                <p className={styles.cardTitle}>{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}