import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    years: 0,
  });

  useEffect(() => {
    // Animate stats numbers
    const animateValue = (key, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setStats((prev) => ({ ...prev, [key]: value }));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      animateValue("projects", 0, 500, 2000);
      animateValue("clients", 0, 150, 2000);
      animateValue("years", 0, 8, 2000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div
            className="hero-content"
            data-aos="fade-up"
            data-aos-duration="1000">
            <h1 className="hero-title">
              Transforming Ideas Into
              <span className="highlight"> Digital Reality</span>
            </h1>
            <p className="hero-description">
              We are FusionTech, a leading IT solutions company that specializes
              in innovative technology services, cutting-edge web development,
              cloud solutions, and comprehensive digital transformation
              strategies.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                Our Services
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                <i className="fas fa-eye"></i>
                View Portfolio
              </Link>
            </div>
            <div className="hero-stats">
              <div
                className="stat-item"
                data-aos="fade-up"
                data-aos-delay="200">
                <span className="stat-number">{stats.projects}+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div
                className="stat-item"
                data-aos="fade-up"
                data-aos-delay="300">
                <span className="stat-number">{stats.clients}+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div
                className="stat-item"
                data-aos="fade-up"
                data-aos-delay="400">
                <span className="stat-number">{stats.years}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div
            className="hero-visual"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200">
            <div className="tech-animation">
              <div className="floating-icon" style={{ "--delay": "0s" }}>
                <i className="fab fa-react"></i>
              </div>
              <div className="floating-icon" style={{ "--delay": "1s" }}>
                <i className="fab fa-node-js"></i>
              </div>
              <div className="floating-icon" style={{ "--delay": "2s" }}>
                <i className="fab fa-python"></i>
              </div>
              <div className="floating-icon" style={{ "--delay": "3s" }}>
                <i className="fab fa-aws"></i>
              </div>
              <div className="floating-icon" style={{ "--delay": "4s" }}>
                <i className="fab fa-docker"></i>
              </div>
              <div className="central-hub">
                <i className="fas fa-microchip"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-down" data-aos="fade-up" data-aos-delay="800">
            <span>Scroll Down</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="services-grid">
            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="100">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                Custom web applications built with modern technologies and
                responsive design principles.
              </p>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud Solutions</h3>
              <p>
                Scalable cloud infrastructure and migration services for
                enhanced performance and security.
              </p>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="300">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile Development</h3>
              <p>
                Native and cross-platform mobile applications for iOS and
                Android platforms.
              </p>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="400">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Cybersecurity</h3>
              <p>
                Comprehensive security solutions to protect your digital assets
                and data.
              </p>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="500">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Data Analytics</h3>
              <p>
                Transform your data into actionable insights with advanced
                analytics and visualization.
              </p>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="600">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>IT Consulting</h3>
              <p>
                Strategic technology consulting to optimize your business
                processes and efficiency.
              </p>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content" data-aos="fade-right">
              <h2 className="section-title">Why Choose FusionTech?</h2>
              <p className="section-description">
                We combine technical expertise with business acumen to deliver
                solutions that not only meet your requirements but exceed your
                expectations.
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Expert Team</h4>
                    <p>
                      Certified professionals with deep expertise in
                      cutting-edge technologies
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="feature-content">
                    <h4>24/7 Support</h4>
                    <p>
                      Round-the-clock technical support and maintenance services
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Scalable Solutions</h4>
                    <p>
                      Future-proof solutions that grow with your business needs
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Proven Track Record</h4>
                    <p>
                      Successfully delivered 500+ projects across various
                      industries
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>

            <div className="visual-content" data-aos="fade-left">
              <div className="stats-visual">
                <div
                  className="stat-circle"
                  data-aos="zoom-in"
                  data-aos-delay="200">
                  <span className="percentage">99%</span>
                  <span className="label">Client Satisfaction</span>
                </div>
                <div
                  className="stat-circle"
                  data-aos="zoom-in"
                  data-aos-delay="400">
                  <span className="percentage">24/7</span>
                  <span className="label">Support Available</span>
                </div>
                <div
                  className="stat-circle"
                  data-aos="zoom-in"
                  data-aos-delay="600">
                  <span className="percentage">100%</span>
                  <span className="label">On-Time Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Technologies We Master</h2>
            <p className="section-subtitle">
              Cutting-edge tools and frameworks we use to build exceptional
              solutions
            </p>
          </div>

          <div className="tech-categories">
            <div
              className="tech-category"
              data-aos="fade-up"
              data-aos-delay="100">
              <h3>Frontend</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="React">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="tech-icon" title="Vue.js">
                  <i className="fab fa-vuejs"></i>
                  <span>Vue.js</span>
                </div>
                <div className="tech-icon" title="Angular">
                  <i className="fab fa-angular"></i>
                  <span>Angular</span>
                </div>
                <div className="tech-icon" title="JavaScript">
                  <i className="fab fa-js-square"></i>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>

            <div
              className="tech-category"
              data-aos="fade-up"
              data-aos-delay="200">
              <h3>Backend</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="Node.js">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="tech-icon" title="Python">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="tech-icon" title="Java">
                  <i className="fab fa-java"></i>
                  <span>Java</span>
                </div>
                <div className="tech-icon" title="PHP">
                  <i className="fab fa-php"></i>
                  <span>PHP</span>
                </div>
              </div>
            </div>

            <div
              className="tech-category"
              data-aos="fade-up"
              data-aos-delay="300">
              <h3>Cloud & DevOps</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="AWS">
                  <i className="fab fa-aws"></i>
                  <span>AWS</span>
                </div>
                <div className="tech-icon" title="Docker">
                  <i className="fab fa-docker"></i>
                  <span>Docker</span>
                </div>
                <div className="tech-icon" title="Kubernetes">
                  <i className="fas fa-dharmachakra"></i>
                  <span>Kubernetes</span>
                </div>
                <div className="tech-icon" title="Git">
                  <i className="fab fa-git-alt"></i>
                  <span>Git</span>
                </div>
              </div>
            </div>

            <div
              className="tech-category"
              data-aos="fade-up"
              data-aos-delay="400">
              <h3>Database</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="MongoDB">
                  <i className="fas fa-leaf"></i>
                  <span>MongoDB</span>
                </div>
                <div className="tech-icon" title="PostgreSQL">
                  <i className="fas fa-database"></i>
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-icon" title="MySQL">
                  <i className="fas fa-database"></i>
                  <span>MySQL</span>
                </div>
                <div className="tech-icon" title="Redis">
                  <i className="fas fa-memory"></i>
                  <span>Redis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let's discuss how FusionTech can help you achieve your digital
              transformation goals.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Get In Touch
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                <i className="fas fa-folder-open"></i>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
