import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
    privacy: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          error = `${name === "firstName" ? "First" : "Last"} name is required`;
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters long";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "phone":
        if (value && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value)) {
          error = "Please enter a valid phone number";
        }
        break;

      case "service":
        if (!value) {
          error = "Please select a service";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Please provide project details";
        } else if (value.trim().length < 10) {
          error = "Please provide more details (at least 10 characters)";
        }
        break;

      case "privacy":
        if (!value) {
          error = "You must agree to the privacy policy";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (
        key !== "phone" &&
        key !== "company" &&
        key !== "budget" &&
        key !== "timeline" &&
        key !== "newsletter"
      ) {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
        newsletter: false,
        privacy: false,
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take 3-6 months or more. We provide detailed timeline estimates during the initial consultation.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project scope, technology stack, and timeline. Contact us for a customized quote.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive support and maintenance packages including bug fixes, security updates, feature enhancements, and 24/7 technical support. All our projects come with a warranty period.",
    },
    {
      question: "Can you work with our existing technology stack?",
      answer:
        "Absolutely! Our team has expertise in a wide range of technologies and frameworks. We can integrate with your existing systems or suggest modern alternatives if needed.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices including code reviews, automated testing, continuous integration, and quality assurance processes. Every project undergoes rigorous testing before deployment.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We have experience across various industries including healthcare, finance, e-commerce, education, logistics, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.",
    },
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content" data-aos="fade-up">
            <h1>Contact Us</h1>
            <p>Let's discuss your next project and how we can help</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link> / <span>Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form-section" data-aos="fade-right">
              <div className="form-header">
                <h2>Get In Touch</h2>
                <p>
                  Ready to start your project? Fill out the form below and we'll
                  get back to you within 24 hours.
                </p>
              </div>

              {submitSuccess && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </div>
              )}

              <form
                className="contact-form"
                id="contactForm"
                onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? "error" : ""}
                    />
                    {errors.firstName && (
                      <div className="error-message">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? "error" : ""}
                    />
                    {errors.lastName && (
                      <div className="error-message">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && (
                      <div className="error-message">{errors.phone}</div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={errors.service ? "error" : ""}>
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">
                        Mobile Development
                      </option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="it-consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <div className="error-message">{errors.service}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}>
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}>
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-plus-months">6+ months</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}></textarea>
                  {errors.message && (
                    <div className="error-message">{errors.message}</div>
                  )}
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    Subscribe to our newsletter for latest updates and insights
                  </label>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      className={errors.privacy ? "error" : ""}
                    />
                    <span className="checkmark"></span>I agree to the{" "}
                    <a href="#">Privacy Policy</a> and{" "}
                    <a href="#">Terms of Service</a> *
                  </label>
                  {errors.privacy && (
                    <div className="error-message">{errors.privacy}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section" data-aos="fade-left">
              <div className="contact-info-header">
                <h3>Let's Connect</h3>
                <p>
                  We're here to help you transform your business with
                  technology.
                </p>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="method-content">
                    <h4>Visit Our Office</h4>
                    <p>
                      123 Tech Street, Digital City
                      <br />
                      Innovation District, TC 12345
                    </p>
                    <a href="#" className="method-link">
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-content">
                    <h4>Call Us</h4>
                    <p>
                      +1 (555) 123-4567
                      <br />
                      Mon - Fri, 9AM - 6PM EST
                    </p>
                    <a href="tel:+15551234567" className="method-link">
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-content">
                    <h4>Email Us</h4>
                    <p>
                      info@fusiontech.com
                      <br />
                      We reply within 24 hours
                    </p>
                    <a
                      href="mailto:info@fusiontech.com"
                      className="method-link">
                      Send Email
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className="method-content">
                    <h4>Live Chat</h4>
                    <p>
                      Chat with our team
                      <br />
                      Available 24/7
                    </p>
                    <a href="#" className="method-link">
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? "active" : ""}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h4>{faq.question}</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
