"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import styles from "./Navbar.module.css";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Growth Partner", href: "#opportunities" },
  { label: "Investment Plans", href: "#plans" },
  { label: "Why Ariston", href: "#why-choose-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle background transition on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Update active section based on scroll position
  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.3,
    });

    navLinks.forEach((link) => {
      const target = document.querySelector(link.href);
      if (target) observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler for mobile links to guarantee navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.container}>
          {/* Logo Brand (Left) */}
          <motion.a
            className={styles.brand}
            href="#hero"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/AristonL.png" /* Update path to match your logo image source */
              alt="Ariston Investa Group Logo"
              className={styles.logoImage}
            />
          </motion.a>

          {/* Desktop Nav Links (Center) */}
          <nav className={styles.navbar} aria-label="Primary navigation">
            <ul
              className={styles.navList}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                const isHovered = hoveredLink === link.href;

                return (
                  <li
                    key={link.href}
                    className={styles.navItem}
                    onMouseEnter={() => setHoveredLink(link.href)}
                  >
                    <a
                      href={link.href}
                      className={`${styles.navLink} ${
                        isActive ? styles.activeLink : ""
                      }`}
                    >
                      {link.label}
                    </a>

                    {/* Animated Hover Background Glow */}
                    {isHovered && (
                      <motion.div
                        layoutId="hoverGlow"
                        className={styles.hoverBg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Animated Active Bottom Gold Indicator Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className={styles.activeLine}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions & Mobile Toggle (Right) */}
          <div className={styles.actions}>
            <motion.a
              href="#contact"
              className={styles.cta}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Become a Partner</span>
              <ArrowUpRight className={styles.ctaIcon} size={15} />
            </motion.a>

            {/* Mobile Toggle Button on RIGHT side */}
            <motion.button
              type="button"
              className={styles.mobileToggle}
              aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
              onClick={() => setIsOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Left Drawer & Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer sliding out from LEFT */}
            <motion.aside
              className={styles.mobileDrawer}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={styles.drawerHeader}>
                <img
                  src="/AristonL.png" /* Update path to match your logo image source */
                  alt="Ariston Investa Group Logo"
                  className={styles.logoImageDrawer}
                />
                <button
                  type="button"
                  className={styles.drawerCloseBtn}
                  onClick={() => setIsOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <ul className={styles.mobileMenuList}>
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className={`${styles.mobileMenuLink} ${
                        activeSection === link.href
                          ? styles.activeMobileLink
                          : ""
                      }`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={16}
                        className={styles.mobileLinkIcon}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className={styles.drawerFooter}>
                <a
                  href="#contact"
                  className={styles.mobileCta}
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  <span>Become a Partner</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}