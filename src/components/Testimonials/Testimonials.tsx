"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Globe2,
} from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "The onboarding process was simple, professional, and transparent. The team guided me at every step.",
    name: "Sonia Deshmukh",
    title: "Growth Partner, Pune",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Ariston helped me build valuable business connections while creating new income opportunities.",
    name: "Pooja Kulkarni",
    title: "Business Partner, Bengaluru",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "A reliable platform focused on long-term growth rather than short-term gains. Highly recommended!",
    name: "Vikram Sengupta",
    title: "Investor, Kolkata",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
  },
];

const highlights = [
  { icon: ShieldCheck, title: "Trusted Business Platform" },
  { icon: RotateCcw, title: "Transparent Process" },
  { icon: Headphones, title: "Dedicated Partner Support" },
  { icon: Globe2, title: "Expanding Professional Network" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Real People. Real Growth.</h2>
        </motion.div>

        {/* 3 Column Cards Grid */}
        <div className={styles.cardGrid}>
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* 5 Stars */}
              <div className={styles.starsRow}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={styles.starIcon} />
                ))}
              </div>

              {/* Quote */}
              <p className={styles.quote}>“{item.quote}”</p>

              {/* User Profile Footer */}
              <div className={styles.userProfile}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className={styles.avatarImg}
                />
                <div className={styles.userInfo}>
                  <h3 className={styles.userName}>{item.name}</h3>
                  <p className={styles.userTitle}>{item.title}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Dark Navy Accent Value Strip */}
      <div className={styles.valueBar}>
        <div className={styles.valueBarContainer}>
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.title} className={styles.valueItem}>
                <IconComponent className={styles.valueIcon} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}