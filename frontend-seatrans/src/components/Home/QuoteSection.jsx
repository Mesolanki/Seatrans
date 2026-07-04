"use client";

import { useState } from "react";
import styles from "./QuoteSection.module.css";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destinationFrom: "",
    destinationTo: "",
    logisticsType: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.destinationFrom.trim()) errors.destinationFrom = "Origin location is required";
    if (!formData.destinationTo.trim()) errors.destinationTo = "Destination location is required";
    if (!formData.logisticsType) errors.logisticsType = "Logistics type selection is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message details are required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        destinationFrom: "",
        destinationTo: "",
        logisticsType: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section id="quote" className={styles.section}>
      <div id="contactus" style={{ position: "absolute", top: 0 }} />
      {/* Decorative Blur Orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.container}>
        <div className={styles.layoutWrapper}>
          
          {/* Left Column: Information & Live Rate Index Card */}
          <div className={styles.colLeft}>
            <span className={styles.tagline}>Instant Quotation System</span>
            <h2 className={styles.title}>
              Request A <br />
              <span className={styles.highlightText}>Transport Quote</span>
            </h2>
            <div className={styles.divider} />
            <p className={styles.description}>
              Fill out our simple form to receive a detailed shipping and logistics quotation. Our team of specialists will analyze your routing and cargo dimensions to offer the most optimal lanes and competitive pricing.
            </p>

            {/* Premium Benefits List */}
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.svgIcon}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Global Shipping Corridors</h4>
                  <p className={styles.benefitText}>Custom clearance and transport lanes covering over 150 countries.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.svgIcon}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Competitive Air & Sea Rates</h4>
                  <p className={styles.benefitText}>Direct partnerships with ocean liners and cargo flight networks.</p>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column: Dynamic Form Glass Card */}
          <div className={styles.colRight}>
            <div className={styles.formCard}>
              {isSubmitted ? (
                <div className={styles.successWrapper}>
                  <div className={styles.successIconCircle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.successCheck}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Quote Request Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for your request. Our booking specialists are reviewing your shipping routing details and will get back to you with a competitive rate sheet within 2-4 hours.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className={styles.newQuoteBtn}>
                    Submit Another Quote
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3 className={styles.formHeaderTitle}>Request Pricing Details</h3>
                  <p className={styles.formHeaderDesc}>Provide your routing parameters for an optimized cargo rate estimation.</p>

                  <div className={styles.formGrid}>
                    {/* Name */}
                    <div className={`${styles.formGroup} ${formErrors.name ? styles.hasError : ""}`}>
                      <label htmlFor="name" className={styles.label}>Your Name *</label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={styles.input}
                          placeholder="John Doe"
                        />
                        {formErrors.name && <span className={styles.errorMessage}>{formErrors.name}</span>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className={`${styles.formGroup} ${formErrors.email ? styles.hasError : ""}`}>
                      <label htmlFor="email" className={styles.label}>Email Address *</label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={styles.input}
                          placeholder="john@company.com"
                        />
                        {formErrors.email && <span className={styles.errorMessage}>{formErrors.email}</span>}
                      </div>
                    </div>

                    {/* Destination From */}
                    <div className={`${styles.formGroup} ${formErrors.destinationFrom ? styles.hasError : ""}`}>
                      <label htmlFor="destinationFrom" className={styles.label}>Destination From (Origin) *</label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          id="destinationFrom"
                          name="destinationFrom"
                          value={formData.destinationFrom}
                          onChange={handleInputChange}
                          className={styles.input}
                          placeholder="e.g. Rotterdam Port, NL"
                        />
                        {formErrors.destinationFrom && <span className={styles.errorMessage}>{formErrors.destinationFrom}</span>}
                      </div>
                    </div>

                    {/* Destination To */}
                    <div className={`${styles.formGroup} ${formErrors.destinationTo ? styles.hasError : ""}`}>
                      <label htmlFor="destinationTo" className={styles.label}>Destination To *</label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          id="destinationTo"
                          name="destinationTo"
                          value={formData.destinationTo}
                          onChange={handleInputChange}
                          className={styles.input}
                          placeholder="e.g. New York Terminal, US"
                        />
                        {formErrors.destinationTo && <span className={styles.errorMessage}>{formErrors.destinationTo}</span>}
                      </div>
                    </div>

                    {/* Logistics Type */}
                    <div className={`${styles.formGroup} ${formErrors.logisticsType ? styles.hasError : ""}`}>
                      <label htmlFor="logisticsType" className={styles.label}>Logistics Type *</label>
                      <div className={styles.inputWrapper}>
                        <select
                          id="logisticsType"
                          name="logisticsType"
                          value={formData.logisticsType}
                          onChange={handleInputChange}
                          className={`${styles.input} ${styles.select}`}
                        >
                          <option value="">Select Service Type...</option>
                          <option value="Ocean Freight">Ocean Freight (FCL/LCL)</option>
                          <option value="Air Freight">Air Freight</option>
                          <option value="Warehousing & 3PL">Warehousing & 3PL</option>
                          <option value="Road Freight">Road & Rail Distribution</option>
                          <option value="Customs Brokerage">Customs Brokerage</option>
                        </select>
                        {formErrors.logisticsType && <span className={styles.errorMessage}>{formErrors.logisticsType}</span>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className={`${styles.formGroup} ${formErrors.subject ? styles.hasError : ""}`}>
                      <label htmlFor="subject" className={styles.label}>Subject *</label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={styles.input}
                          placeholder="e.g. Ocean FCL Rate Request"
                        />
                        {formErrors.subject && <span className={styles.errorMessage}>{formErrors.subject}</span>}
                      </div>
                    </div>

                    {/* Message */}
                    <div className={`${styles.formGroup} ${styles.fullWidth} ${formErrors.message ? styles.hasError : ""}`}>
                      <label htmlFor="message" className={styles.label}>Message / Cargo Details *</label>
                      <div className={styles.inputWrapper}>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className={styles.textarea}
                          rows="4"
                          placeholder="Describe your cargo dimensions, weight, and delivery timeline specifications..."
                        />
                        {formErrors.message && <span className={styles.errorMessage}>{formErrors.message}</span>}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ""}`}
                  >
                    {isSubmitting ? (
                      <span className={styles.btnContent}>
                        <span className={styles.spinner} />
                        Calculating Lanes...
                      </span>
                    ) : (
                      <span className={styles.btnContent}>
                        Send a Quote
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnArrow}>
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
