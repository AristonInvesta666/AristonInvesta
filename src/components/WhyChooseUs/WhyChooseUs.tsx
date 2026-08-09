"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Building2,
  Handshake,
  Globe,
  Eye,
  Target,
  ShieldCheck,
  Lightbulb,
  UserCheck,
} from "lucide-react";

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

const valuesList = [
  { icon: ShieldCheck, title: "Integrity" },
  { icon: Award, title: "Excellence" },
  { icon: Lightbulb, title: "Innovation" },
  { icon: UserCheck, title: "Professionalism" },
  { icon: Handshake, title: "Long-Term Relationships" },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<"reasons" | "visionMission">("reasons");

  // Switch tab when clicked from Mobile Side Navbar
  useEffect(() => {
    const handleOpenValues = () => {
      setActiveTab("visionMission");
    };

    window.addEventListener("open-our-values", handleOpenValues);
    return () => {
      window.removeEventListener("open-our-values", handleOpenValues);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Optimized Section & Container Spacing */
        .why-us-section {
          width: 100%;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          padding: 36px 24px 28px;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          scroll-margin-top: 80px;
          position: relative;
          overflow: hidden;
        }

        .why-us-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header Styling */
        .why-us-header {
          text-align: center;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .why-us-header h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          color: #0b1727;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
        }

        /* Tab Switcher Control */
        .why-us-tabContainer {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #edf2f7;
          padding: 4px;
          border-radius: 99px;
          border: 1px solid #e2e8f0;
        }

        .why-us-tabBtn {
          background: transparent;
          border: none;
          padding: 6px 18px;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #526071;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .why-us-activeTab {
          background: #ffffff;
          color: #0b1727;
          box-shadow: 0 2px 8px rgba(11, 23, 39, 0.08);
        }

        /* Grid Layouts */
        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .why-us-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px 20px;
          min-height: 210px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 20px rgba(11, 23, 39, 0.03);
          overflow: hidden;
        }

        .why-us-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #c49a45, #f5d76e);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .why-us-card:hover {
          background-color: #ffffff;
          border-color: rgba(196, 154, 69, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(11, 23, 39, 0.08),
            0 0 18px rgba(196, 154, 69, 0.1);
        }

        .why-us-card:hover::before {
          opacity: 1;
        }

        .why-us-iconWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(196, 154, 69, 0.08);
          margin-bottom: 14px;
          transition: all 0.35s ease;
        }

        .why-us-card:hover .why-us-iconWrapper {
          background: #c49a45;
          box-shadow: 0 6px 16px rgba(196, 154, 69, 0.25);
        }

        .why-us-icon {
          width: 26px;
          height: 26px;
          color: #c49a45;
          stroke-width: 1.75px;
          transition: color 0.35s ease, transform 0.35s ease;
        }

        .why-us-card:hover .why-us-icon {
          color: #ffffff;
        }

        .why-us-cardTitle {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #0b1727;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 8px 0;
        }

        .why-us-cardDescription {
          font-size: 0.85rem;
          color: #526071;
          line-height: 1.5;
          margin: 0;
        }

        .why-us-vmWrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .why-us-vmGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .why-us-vmCard {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 4px 20px rgba(11, 23, 39, 0.03);
        }

        .why-us-vmIconBox {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(196, 154, 69, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .why-us-vmIcon {
          color: #c49a45;
        }

        .why-us-vmTitle {
          font-family: Georgia, serif;
          font-size: 1.3rem;
          color: #0b1727;
          margin-bottom: 8px;
        }

        .why-us-vmDesc {
          color: #526071;
          font-size: 0.88rem;
          line-height: 1.55;
          margin: 0;
        }

        .why-us-valuesBlock {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 18px 24px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(11, 23, 39, 0.03);
        }

        .why-us-valuesHeading {
          font-family: Georgia, serif;
          font-size: 1.1rem;
          color: #0b1727;
          margin-bottom: 12px;
        }

        .why-us-valuesList {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .why-us-valuePill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          background: #f8fafc;
          border: 1px solid rgba(196, 154, 69, 0.3);
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #0b1727;
        }

        .why-us-pillIcon {
          color: #c49a45;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .why-us-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .why-us-vmGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .why-us-section {
            padding: 28px 16px;
          }

          .why-us-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .why-us-card {
            padding: 20px 16px;
            min-height: auto;
            align-items: flex-start;
            text-align: left;
          }

          .why-us-valuesList {
            justify-content: flex-start;
          }
        }
      `}</style>

      <section id="why-choose-us" className="why-us-section">
        <div className="why-us-container">
          <motion.div
            className="why-us-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2>Why Choose Us</h2>

            <div className="why-us-tabContainer">
              <button
                type="button"
                className={`why-us-tabBtn ${
                  activeTab === "reasons" ? "why-us-activeTab" : ""
                }`}
                onClick={() => setActiveTab("reasons")}
              >
                Why Ariston
              </button>
              <button
                type="button"
                className={`why-us-tabBtn ${
                  activeTab === "visionMission" ? "why-us-activeTab" : ""
                }`}
                onClick={() => setActiveTab("visionMission")}
              >
                Vision & Mission
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === "reasons" ? (
              <motion.div
                key="reasons-grid"
                className="why-us-grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {reasons.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="why-us-card"
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
                        className="why-us-iconWrapper"
                        variants={{
                          hover: { scale: 1.08, rotate: 2 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="why-us-icon" />
                      </motion.div>

                      <h3 className="why-us-cardTitle">{item.title}</h3>
                      <p className="why-us-cardDescription">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="vm-grid"
                className="why-us-vmWrapper"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="why-us-vmGrid">
                  <div className="why-us-vmCard">
                    <div className="why-us-vmIconBox">
                      <Eye size={24} className="why-us-vmIcon" />
                    </div>
                    <h3 className="why-us-vmTitle">Vision</h3>
                    <p className="why-us-vmDesc">
                      To build a globally respected organization that creates
                      lasting value through innovation, trust, and meaningful
                      business relationships.
                    </p>
                  </div>

                  <div className="why-us-vmCard">
                    <div className="why-us-vmIconBox">
                      <Target size={24} className="why-us-vmIcon" />
                    </div>
                    <h3 className="why-us-vmTitle">Mission</h3>
                    <p className="why-us-vmDesc">
                      To foster strategic partnerships, encourage sustainable
                      growth, and deliver professional solutions that support
                      long-term success.
                    </p>
                  </div>
                </div>

                <div className="why-us-valuesBlock">
                  <h4 className="why-us-valuesHeading">Our Core Values</h4>
                  <div className="why-us-valuesList">
                    {valuesList.map((val) => {
                      const ValIcon = val.icon;
                      return (
                        <div key={val.title} className="why-us-valuePill">
                          <ValIcon size={15} className="why-us-pillIcon" />
                          <span>{val.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}