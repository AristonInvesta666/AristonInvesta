"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin, ArrowRight, ChevronDown, Search, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const countries = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "+374", flag: "🇦🇲" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Belarus", code: "+375", flag: "🇧🇾" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Belize", code: "+501", flag: "🇧🇿" },
  { name: "Benin", code: "+229", flag: "🇧🇯" },
  { name: "Bhutan", code: "+975", flag: "🇧🇹" },
  { name: "Bolivia", code: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦" },
  { name: "Botswana", code: "+267", flag: "🇧🇼" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Brunei", code: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", code: "+226", flag: "🇧🇫" },
  { name: "Burundi", code: "+257", flag: "🇧🇮" },
  { name: "Cambodia", code: "+855", flag: "🇰🇭" },
  { name: "Cameroon", code: "+237", flag: "🇨🇲" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "Congo", code: "+242", flag: "🇨🇬" },
  { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
  { name: "Croatia", code: "+385", flag: "🇭🇷" },
  { name: "Cuba", code: "+53", flag: "🇨🇺" },
  { name: "Cyprus", code: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Djibouti", code: "+253", flag: "🇩🇯" },
  { name: "Dominican Republic", code: "+1809", flag: "🇩🇴" },
  { name: "Ecuador", code: "+593", flag: "🇪🇨" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "El Salvador", code: "+503", flag: "🇸🇻" },
  { name: "Estonia", code: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
  { name: "Fiji", code: "+679", flag: "🇫🇯" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Gabon", code: "+241", flag: "🇬🇦" },
  { name: "Gambia", code: "+220", flag: "🇬🇲" },
  { name: "Georgia", code: "+995", flag: "🇬🇪" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "Ghana", code: "+233", flag: "🇬🇭" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "Guatemala", code: "+502", flag: "🇬🇹" },
  { name: "Honduras", code: "+504", flag: "🇭🇳" },
  { name: "Hong Kong", code: "+852", flag: "🇭🇰" },
  { name: "Hungary", code: "+36", flag: "🇭🇺" },
  { name: "Iceland", code: "+354", flag: "🇮🇸" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Jamaica", code: "+1876", flag: "🇯🇲" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  { name: "Kyrgyzstan", code: "+996", flag: "🇰🇬" },
  { name: "Laos", code: "+856", flag: "🇱🇦" },
  { name: "Latvia", code: "+371", flag: "🇱🇻" },
  { name: "Lebanon", code: "+961", flag: "🇱🇧" },
  { name: "Libya", code: "+218", flag: "🇱🇾" },
  { name: "Lithuania", code: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
  { name: "Macau", code: "+853", flag: "🇲🇴" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "+960", flag: "🇲🇻" },
  { name: "Malta", code: "+356", flag: "🇲🇹" },
  { name: "Mauritius", code: "+230", flag: "🇲🇺" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Mongolia", code: "+976", flag: "🇲🇳" },
  { name: "Morocco", code: "+212", flag: "🇲🇦" },
  { name: "Myanmar", code: "+95", flag: "🇲🇲" },
  { name: "Nepal", code: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Panama", code: "+507", flag: "🇵🇦" },
  { name: "Paraguay", code: "+595", flag: "🇵🇾" },
  { name: "Peru", code: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Romania", code: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Slovakia", code: "+421", flag: "🇸🇰" },
  { name: "Slovenia", code: "+386", flag: "🇸🇮" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Taiwan", code: "+886", flag: "🇹🇼" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Tunisia", code: "+216", flag: "🇹🇳" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Ukraine", code: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Uruguay", code: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", code: "+998", flag: "🇺🇿" },
  { name: "Venezuela", code: "+58", flag: "🇻🇪" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "Yemen", code: "+967", flag: "🇾🇪" },
  { name: "Zimbabwe", code: "+263", flag: "🇿🇼" }
];

interface CountryType {
  name: string;
  code: string;
  flag: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);
  const [countrySearchQuery, setCountrySearchQuery] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const [selectedCode, setSelectedCode] = useState<CountryType | null>(null);
  const [codeSearchQuery, setCodeSearchQuery] = useState("");
  const [isCodeOpen, setIsCodeOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const countryRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
      if (codeRef.current && !codeRef.current.contains(event.target as Node)) {
        setIsCodeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(countrySearchQuery.toLowerCase())
  );

  const filteredCodes = countries.filter(c =>
    c.name.toLowerCase().includes(codeSearchQuery.toLowerCase()) ||
    c.code.includes(codeSearchQuery)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatusMessage(null);

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    // Combine custom custom-select data into hidden or template fields if needed, 
    // or pass template parameters manually:
    const templateParams = {
      from_name: (formRef.current.elements.namedItem("fullName") as HTMLInputElement)?.value,
      from_email: (formRef.current.elements.namedItem("email") as HTMLInputElement)?.value,
      phone_number: `${selectedCode ? selectedCode.code : ""} ${(formRef.current.elements.namedItem("mobile") as HTMLInputElement)?.value}`,
      country: selectedCountry ? selectedCountry.name : "Not specified",
      interest: (formRef.current.elements.namedItem("interest") as HTMLSelectElement)?.value,
      message: (formRef.current.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message has been sent successfully.",
        });
        formRef.current?.reset();
        setSelectedCountry(null);
        setSelectedCode(null);
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        setStatusMessage({
          type: "error",
          text: "Failed to send message. Please try again or email us directly.",
        });
      });
  };

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
                <Mail className={styles.contactIcon} />
                <a href="mailto:info@aristoninvesta.com">
                  info@aristoninvesta.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <Globe className={styles.contactIcon} />
                <a href="https://www.aristoninvesta.com" target="_blank" rel="noopener noreferrer">
                  www.aristoninvesta.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>Raffles Place, Singapore</span>
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
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                {/* Mobile Number with Searchable Code Dropdown */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="mobile">Mobile Number</label>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    {/* Country Code Dropdown Container */}
                    <div style={{ position: "relative", width: "115px", flexShrink: 0 }} ref={codeRef}>
                      <div
                        onClick={() => setIsCodeOpen(!isCodeOpen)}
                        className={styles.customSelectTrigger}
                      >
                        <span className={`${styles.selectTriggerText} ${!selectedCode ? styles.placeholderText : ""}`}>
                          {selectedCode ? `${selectedCode.flag} ${selectedCode.code}` : "Code"}
                        </span>
                        <ChevronDown size={14} className={styles.selectChevron} />
                      </div>

                      {isCodeOpen && (
                        <div className={styles.dropdownMenu}>
                          <div className={styles.dropdownSearchWrapper}>
                            <div className={styles.dropdownSearchBox}>
                              <Search size={14} className={styles.dropdownSearchIcon} />
                              <input
                                type="text"
                                placeholder="Search code..."
                                value={codeSearchQuery}
                                onChange={(e) => setCodeSearchQuery(e.target.value)}
                                className={styles.dropdownSearchInput}
                                autoFocus
                              />
                            </div>
                          </div>
                          <div className={styles.dropdownList}>
                            {filteredCodes.length > 0 ? (
                              filteredCodes.map((c) => (
                                <div
                                  key={c.name + c.code}
                                  onClick={() => {
                                    setSelectedCode(c);
                                    setIsCodeOpen(false);
                                    setCodeSearchQuery("");
                                  }}
                                  className={styles.dropdownItem}
                                >
                                  <span>{c.flag}</span>
                                  <span className={styles.dropdownItemName}>{c.name}</span>
                                  <span className={styles.dropdownItemCode}>{c.code}</span>
                                </div>
                              ))
                            ) : (
                              <div className={styles.dropdownNoResult}>No results</div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Mobile number"
                      style={{ flex: 1 }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                {/* Searchable Country Name Dropdown */}
                <div className={styles.fieldGroup} ref={countryRef}>
                  <label htmlFor="country">Country</label>
                  <div style={{ position: "relative", width: "100%" }}>
                    <div
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                      className={styles.customSelectTrigger}
                    >
                      <span className={`${styles.selectTriggerText} ${!selectedCountry ? styles.placeholderText : ""}`}>
                        {selectedCountry ? `${selectedCountry.flag} ${selectedCountry.name}` : "Select country"}
                      </span>
                      <ChevronDown size={14} className={styles.selectChevron} />
                    </div>

                    {isCountryOpen && (
                      <div className={styles.dropdownMenu}>
                        <div className={styles.dropdownSearchWrapper}>
                          <div className={styles.dropdownSearchBox}>
                            <Search size={14} className={styles.dropdownSearchIcon} />
                            <input
                              type="text"
                              placeholder="Type country name..."
                              value={countrySearchQuery}
                              onChange={(e) => setCountrySearchQuery(e.target.value)}
                              className={styles.dropdownSearchInput}
                              autoFocus
                            />
                          </div>
                        </div>
                        <div className={styles.dropdownList}>
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((c) => (
                              <div
                                key={c.name}
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsCountryOpen(false);
                                  setCountrySearchQuery("");
                                }}
                                className={styles.dropdownItem}
                              >
                                <span>{c.flag}</span>
                                <span>{c.name}</span>
                              </div>
                            ))
                          ) : (
                            <div className={styles.dropdownNoResult}>No country found</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="interest">I am interested in</label>
                <select id="interest" name="interest" defaultValue="" required>
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
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Started
                    <ArrowRight className={styles.btnIcon} />
                  </>
                )}
              </button>

              {statusMessage && (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "12px",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  backgroundColor: statusMessage.type === "success" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                  color: statusMessage.type === "success" ? "#10B981" : "#EF4444",
                  border: `1px solid ${statusMessage.type === "success" ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)"}`
                }}>
                  {statusMessage.type === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <span>{statusMessage.text}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}