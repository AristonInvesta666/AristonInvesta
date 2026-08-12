"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Building2, Handshake, Globe } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    icon: Award,
    title: "Experience Since 1990",
    description: "More than three decades of industry knowledge and professional expertise.",
  },
  {
    icon: Building2,
    title: "Singapore-Based",
    description: "Operating from one of the world's leading financial and business hubs.",
  },
  {
    icon: Handshake,
    title: "Trusted Relationships",
    description: "Built on integrity, transparency, and long-term partnerships.",
  },
  {
    icon: Globe,
    title: "Global Outlook",
    description: "Connecting businesses and opportunities across international markets.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2>Why Choose Us</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                whileHover="hover"
              >
                <motion.div
                  className={styles.iconWrapper}
                  variants={{
                    hover: { scale: 1.08, rotate: 2 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className={styles.icon} />
                </motion.div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}