"use client";

import React from "react";
import Image from "next/image"; // Optional: Use Next.js Image for optimal loading
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, TrendingUp } from "lucide-react";
import styles from "./Hero.module.css";

interface HeroFeature {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const heroHighlights: HeroFeature[] = [
  {
    id: "transparent",
    title: "Transparent Business Model",
    icon: ShieldCheck,
  },
  {
    id: "global",
    title: "Global Investment Vision",
    icon: Globe,
  },
  {
    id: "guidance",
    title: "Expert Guidance",
    icon: Users,
  },
  {
    id: "wealth",
    title: "Long-Term Wealth Creation",
    icon: TrendingUp,
  },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* 
        OPTION A: Next.js <Image /> Component in .backdrop for auto-optimization.
        Replace '/images/hero-bg.jpg' with your actual generated image path.
      */}
      <div className={styles.backdrop}>
        <Image
          src="/hero-bg.png" // Place your generated image inside public/images/
          alt="Ariston Executive Boardroom and City Skyline"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Dark overlay to keep text high contrast and readable */}
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        {/* Main Content Area */}
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Become a <br />
              Growth Partner. <br />
              <span className={styles.goldText}>Build a Better Future.</span>
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Ariston Investa Group and unlock new opportunities through our
              structured Growth Partner Program, designed to help individuals and
              businesses grow with confidence.
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#contact" className={styles.primaryButton}>
                Become a Partner &rarr;
              </a>
              <a href="#plans" className={styles.secondaryButton}>
                Explore Plans &rarr;
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Ribbon */}
        <motion.div
          className={styles.featureBar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {heroHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <Icon size={24} />
                </div>
                <span className={styles.featureTitle}>{item.title}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}