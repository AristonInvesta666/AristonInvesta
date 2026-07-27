"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Contact Information */}
          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Let’s Build Your Future Together.</h2>
            <p className={styles.description}>
              Whether you’re interested in becoming a Growth Partner or learning
              more about our investment opportunities, we’d love to connect.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>+91 98765 43210</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>info@aristoninvesta.com</span>
              </div>
              <div className={styles.contactItem}>
                <Globe className={styles.contactIcon} />
                <span>www.aristoninvesta.com</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>
                  123, Business Hub, Andheri (E), Mumbai – 400069, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lead Capture Card */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" placeholder="Enter city" />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="interest">I am interested in</label>
                <select id="interest" defaultValue="">
                  <option value="" disabled>
                    Select an Option
                  </option>
                  <option value="growth-partner">Growth Partner Program</option>
                  <option value="investment">Investment Plans</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Get Started
                <ArrowRight className={styles.btnIcon} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}