"use client";

import styles from "./Footer.module.css";
import { Link, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <span>Ariston Investa Group</span>
          <p>Premium partnerships for sophisticated investors and business professionals.</p>
        </div>

        <div className={styles.linksGrid}>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#opportunities">Opportunities</a></li>
              <li><a href="#plans">Plans</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>info@aristoninvesta.com</li>
              <li>+91 98765 43210</li>
              <li>123 Business Hub, Andheri (E), Mumbai</li>
            </ul>
          </div>
          <div>
            <h3>Follow</h3>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn"><Link size={18} /></a>
              <a href="#" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p>© 2026 Ariston Investa Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
