"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Users, Globe } from "lucide-react";
import styles from "./Opportunities.module.css";

const opportunities = [
  {
    icon: Building2,
    title: "Real Estate Investments",
    description:
      "Invest in high-potential real estate projects with strong growth prospects.",
  },
  {
    icon: TrendingUp,
    title: "Wealth Growth Programs",
    description:
      "Structured programs designed for individuals seeking long-term wealth creation.",
  },
  {
    icon: Users,
    title: "Referral Partnership",
    description:
      "Earn by referring potential customers and growing your network.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "A vision that extends beyond borders with limitless possibilities.",
  },
];

export default function Opportunities() {
  return (
    <section id="opportunities" className={styles.section}>
      <div className={styles.container}>
        {/* Animated Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>Choose the Path That Matches Your Goals</h2>
        </motion.div>

        {/* Animated 4-Column Card Grid */}
        <div className={styles.cardGrid}>
          {opportunities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.article
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover="hover"
              >
                {/* Circular Navy Icon Badge with Animated Hover State */}
                <motion.div
                  className={styles.iconCircle}
                  variants={{
                    hover: { scale: 1.08, backgroundColor: "#0e1e36" },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    variants={{
                      hover: { scale: 1.1, rotate: 3 },
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <IconComponent className={styles.icon} />
                  </motion.div>
                </motion.div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>

                {/* Bottom Animated Gold Accent Bar */}
                <motion.div
                  className={styles.goldDivider}
                  variants={{
                    hover: { width: "54px", backgroundColor: "#d8ad56" },
                  }}
                  transition={{ duration: 0.25 }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}