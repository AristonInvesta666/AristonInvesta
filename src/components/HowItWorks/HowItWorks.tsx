"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, BookOpen, Users, TrendingUp } from "lucide-react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Join",
    description: "Become an Ariston Growth Partner.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn",
    description: "Understand the business model and opportunities.",
  },
  {
    number: "03",
    icon: Users,
    title: "Connect",
    description: "Introduce potential customers and partners.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow",
    description: "Expand your network and create long-term value.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Simple Steps. Lasting Growth.</h2>
        </motion.div>

        {/* Process Flow */}
        <div className={styles.stepsWrapper}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step.number}>
                <motion.div
                  className={styles.stepItem}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover="hover"
                >
                  {/* Icon Circle */}
                  <motion.div
                    className={styles.iconCircle}
                    variants={{
                      hover: { scale: 1.08, backgroundColor: "#0e1e36" },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className={styles.icon} />
                  </motion.div>

                  {/* Text Content */}
                  <div className={styles.stepContent}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </motion.div>

                {/* Horizontal Dashed Line Arrow (Desktop) */}
                {!isLast && (
                  <div className={styles.arrowConnector} aria-hidden="true">
                    <svg
                      width="48"
                      height="12"
                      viewBox="0 0 48 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6H42M42 6L37 1M42 6L37 11"
                        stroke="#c49a45"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                )}

                {/* Vertical Connector Line (Mobile Only) */}
                {!isLast && (
                  <div className={styles.mobileConnector} aria-hidden="true" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}