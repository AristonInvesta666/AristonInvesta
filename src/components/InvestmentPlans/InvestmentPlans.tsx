"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import styles from "./InvestmentPlans.module.css";

const plans = [
  {
    name: "Foundation Plan",
    price: "₹10,000 – ₹50,000",
    detail: "Ideal for beginners starting their investment journey.",
    featured: false,
  },
  {
    name: "Alpha Start Plan",
    price: "₹50,001 – ₹2,000,000",
    detail: "Step up your investments with higher potential returns.",
    featured: false,
  },
  {
    name: "Growth Plan",
    price: "₹2,00,001 – ₹10,00,000",
    detail: "Balanced growth opportunities with consistent returns.",
    featured: true,
  },
  {
    name: "Titan Plan",
    price: "₹10,00,001 – ₹25,00,000",
    detail: "Accelerated growth plans for ambitious investors.",
    featured: false,
  },
  {
    name: "Private Wealth Plan",
    price: "₹25,00,001+",
    detail: "Exclusive opportunities for high-net-worth investors.",
    featured: false,
  },
];

export default function InvestmentPlans() {
  return (
    <section id="plans" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Designed for Different Investment Goals</h2>
        </motion.div>

        {/* 5-Column Cards Layout */}
        <div className={styles.planGrid}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${styles.planCard} ${
                plan.featured ? styles.featuredCard : ""
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className={styles.featuredBadge}>
                  <span>★ MOST POPULAR</span>
                </div>
              )}

              {/* Crown Icon */}
              <div className={styles.iconWrapper}>
                <Crown className={styles.crownIcon} />
              </div>

              {/* Title & Price */}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.price}>{plan.price}</p>

              {/* Detail Paragraph */}
              <p className={styles.detail}>{plan.detail}</p>

              {/* Action Button */}
              <a
                href="#contact"
                className={`${styles.planCta} ${
                  plan.featured ? styles.featuredCta : styles.standardCta
                }`}
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <p className={styles.disclaimer}>
          *Returns are subject to terms & conditions.
        </p>
      </div>
    </section>
  );
}