"use client";

import { useState } from "react";
import styles from "./QuoteSection.module.css";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    freightType: "",
    origin: "",
    destination: "",
    weight: "",
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
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.freightType) errors.freightType = "Freight type is required";
    if (!formData.origin.trim()) errors.origin = "Origin point is required";
    if (!formData.destination.trim()) errors.destination = "Destination point is required";
    
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
        phone: "",
        email: "",
        freightType: "",
        origin: "",
        destination: "",
        weight: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="quote" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layoutWrapper}>
          
          {/* Left Column: Heading & Information */}
          <div className={styles.infoCol}>
            <span className={styles.badge}>QUOTE DESK</span>
            <h2 className={styles.title}>
              Request a <br />
              <span className={styles.accentText}>Customized Quote</span>
            </h2>
            <div className={styles.divider} />
            <p className={styles.description}>
              Ready to streamline your global shipments? Provide your routing parameters and cargo dimensions to receive a custom rate card and transit schedule in less than 2 hours.
            </p>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4 className={styles.benefitTitle}>Fast Response Guarantee</h4>
                  <p className={styles.benefitText}>Custom clearing and freight rates quoted in under 2 hours.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4 className={styles.benefitTitle}>Global Lane Coverage</h4>
                  <p className={styles.benefitText}>Direct lanes across 150+ countries with competitive pricing.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4 className={styles.benefitTitle}>End-to-End Solutions</h4>
                  <p className={styles.benefitText}>Includes local pickup, customs clearance, and warehouse integration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Quote Form Card */}
          <div className={styles.formCol}>
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
                    Thank you. Our specialists are reviewing your parameters and will get back to you with an optimized shipping rate sheet in less than 2 hours.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className={styles.newQuoteBtn}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3 className={styles.formHeaderTitle}>Request Pricing Details</h3>
                  <p className={styles.formHeaderDesc}>Fill out the fields below for a custom rate sheet estimation.</p>

                  <div className={styles.formGrid}>
                    {/* Name */}
                    <div className={`${styles.formGroup} ${formErrors.name ? styles.hasError : ""}`}>
                      <label className={styles.label}>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="e.g. John Doe"
                      />
                      {formErrors.name && <span className={styles.errorText}>{formErrors.name}</span>}
                    </div>

                    {/* Phone */}
                    <div className={`${styles.formGroup} ${formErrors.phone ? styles.hasError : ""}`}>
                      <label className={styles.label}>Phone No. *</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="e.g. +91 98765 43210"
                      />
                      {formErrors.phone && <span className={styles.errorText}>{formErrors.phone}</span>}
                    </div>

                    {/* Email */}
                    <div className={`${styles.formGroup} ${styles.fullWidth} ${formErrors.email ? styles.hasError : ""}`}>
                      <label className={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="e.g. name@company.com"
                      />
                      {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
                    </div>

                    {/* Freight Type */}
                    <div className={`${styles.formGroup} ${styles.fullWidth} ${formErrors.freightType ? styles.hasError : ""}`}>
                      <label className={styles.label}>Freight Type *</label>
                      <select
                        name="freightType"
                        value={formData.freightType}
                        onChange={handleInputChange}
                        className={styles.select}
                      >
                        <option value="">Select Service Type...</option>
                        <option value="Ocean Freight">Ocean Freight (FCL/LCL)</option>
                        <option value="Air Freight">Air Freight</option>
                        <option value="Warehousing & 3PL">Warehousing & 3PL</option>
                        <option value="Road Distribution">Road & Rail Distribution</option>
                        <option value="Customs Brokerage">Customs Brokerage</option>
                      </select>
                      {formErrors.freightType && <span className={styles.errorText}>{formErrors.freightType}</span>}
                    </div>

                    {/* Origin */}
                    <div className={`${styles.formGroup} ${formErrors.origin ? styles.hasError : ""}`}>
                      <label className={styles.label}>Origin (Port / City) *</label>
                      <input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="e.g. Mundra Port, IN"
                      />
                      {formErrors.origin && <span className={styles.errorText}>{formErrors.origin}</span>}
                    </div>

                    {/* Destination */}
                    <div className={`${styles.formGroup} ${formErrors.destination ? styles.hasError : ""}`}>
                      <label className={styles.label}>Destination (Port / City) *</label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="e.g. Rotterdam, NL"
                      />
                      {formErrors.destination && <span className={styles.errorText}>{formErrors.destination}</span>}
                    </div>

                    {/* Weight */}
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label className={styles.label}>Estimated Weight (kg) / Cargo Info</label>
                      <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="e.g. 5000 kg or 2x 20ft Containers"
                      />
                    </div>

                    {/* Message */}
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label className={styles.label}>Additional Details (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={styles.textarea}
                        rows="3"
                        placeholder="Provide any specific custom clearance or warehousing details..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                  >
                    {isSubmitting ? (
                      <span className={styles.btnLoading}>
                        <span className={styles.spinner} />
                        Calculating Routes...
                      </span>
                    ) : (
                      "SUBMIT REQUEST"
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
