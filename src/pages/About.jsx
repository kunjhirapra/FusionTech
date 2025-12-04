import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content" data-aos="fade-up">
            <h1>About FusionTech</h1>
            <p>Pioneering the future of technology solutions since 2016</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link> / <span>About</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="company-story">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content" data-aos="fade-right">
              <h2 className="section-title">Our Story</h2>
              <p className="section-description">
                Founded in 2016, FusionTech emerged from a simple yet powerful
                vision: to bridge the gap between cutting-edge technology and
                real-world business solutions. What started as a small team of
                passionate developers has grown into a comprehensive IT
                solutions company serving clients worldwide.
              </p>
              <p>
                Our journey began when our founders recognized the growing need
                for businesses to embrace digital transformation. We witnessed
                companies struggling to keep pace with technological
                advancements, and we knew we could make a difference.
              </p>
              <p>
                Today, we're proud to have completed over 500 projects, served
                150+ satisfied clients, and built a reputation for excellence in
                the IT industry. Our commitment to innovation, quality, and
                client satisfaction continues to drive us forward.
              </p>
            </div>
            <div className="visual-content" data-aos="fade-left">
              <div className="story-timeline">
                <div
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay="100">
                  <div className="timeline-year">2016</div>
                  <div className="timeline-content">
                    <h4>Founded</h4>
                    <p>
                      FusionTech was established with a team of 3 developers
                    </p>
                  </div>
                </div>
                <div
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay="200">
                  <div className="timeline-year">2018</div>
                  <div className="timeline-content">
                    <h4>Expansion</h4>
                    <p>Grew to 15 team members and opened our first office</p>
                  </div>
                </div>
                <div
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay="300">
                  <div className="timeline-year">2020</div>
                  <div className="timeline-content">
                    <h4>Innovation</h4>
                    <p>Launched cloud solutions division and AI services</p>
                  </div>
                </div>
                <div
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay="400">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-content">
                    <h4>Global Reach</h4>
                    <p>Expanded internationally with 50+ team members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card" data-aos="fade-up">
              <div className="card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that
                drive growth, enhance efficiency, and create lasting competitive
                advantages in the digital age.
              </p>
            </div>

            <div
              className="vision-card"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading global technology partner, recognized for
                transforming businesses through cutting-edge solutions and
                exceptional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="values-grid">
            <div className="value-item" data-aos="fade-up" data-aos-delay="100">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>Innovation</h4>
              <p>
                We constantly push boundaries and explore new technologies to
                deliver cutting-edge solutions.
              </p>
            </div>

            <div className="value-item" data-aos="fade-up" data-aos-delay="200">
              <div className="value-icon">
                <i className="fas fa-shield-check"></i>
              </div>
              <h4>Integrity</h4>
              <p>
                We maintain the highest ethical standards in all our business
                relationships and practices.
              </p>
            </div>

            <div className="value-item" data-aos="fade-up" data-aos-delay="300">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Collaboration</h4>
              <p>
                We believe in the power of teamwork and foster strong
                partnerships with our clients.
              </p>
            </div>

            <div className="value-item" data-aos="fade-up" data-aos-delay="400">
              <div className="value-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h4>Excellence</h4>
              <p>
                We strive for perfection in every project and continuously
                improve our services.
              </p>
            </div>

            <div className="value-item" data-aos="fade-up" data-aos-delay="500">
              <div className="value-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h4>Growth</h4>
              <p>
                We are committed to the continuous growth of our team, clients,
                and communities.
              </p>
            </div>

            <div className="value-item" data-aos="fade-up" data-aos-delay="600">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Trust</h4>
              <p>
                We build lasting relationships based on transparency,
                reliability, and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle">
              The visionaries driving FusionTech's success
            </p>
          </div>

          <div className="team-grid">
            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="100">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Alex Rodriguez</h4>
                <span className="position">CEO & Founder</span>
                <p>
                  Visionary leader with 15+ years of experience in technology
                  and business strategy.
                </p>
              </div>
            </div>

            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Chen</h4>
                <span className="position">CTO & Co-Founder</span>
                <p>
                  Technology expert specializing in cloud architecture and
                  emerging technologies.
                </p>
              </div>
            </div>

            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="300">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Michael Thompson</h4>
                <span className="position">Head of Operations</span>
                <p>
                  Operations specialist ensuring seamless project delivery and
                  client satisfaction.
                </p>
              </div>
            </div>

            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="400">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <i className="fas fa-user"></i>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Emily Davis</h4>
                <span className="position">Head of Design</span>
                <p>
                  Creative director with expertise in UX/UI design and brand
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="awards-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="section-subtitle">
              Celebrating our achievements and industry recognition
            </p>
          </div>

          <div className="awards-grid">
            <div className="award-item" data-aos="fade-up" data-aos-delay="100">
              <div className="award-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h4>Best IT Solutions Company 2023</h4>
              <p>Tech Excellence Awards</p>
            </div>

            <div className="award-item" data-aos="fade-up" data-aos-delay="200">
              <div className="award-icon">
                <i className="fas fa-medal"></i>
              </div>
              <h4>Innovation in Cloud Services</h4>
              <p>Cloud Computing Awards 2022</p>
            </div>

            <div className="award-item" data-aos="fade-up" data-aos-delay="300">
              <div className="award-icon">
                <i className="fas fa-star"></i>
              </div>
              <h4>Client Satisfaction Excellence</h4>
              <p>Business Service Awards 2022</p>
            </div>

            <div className="award-item" data-aos="fade-up" data-aos-delay="400">
              <div className="award-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h4>Top Employer of the Year</h4>
              <p>Tech Industry Recognition 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="company-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">150+</div>
              <div className="stat-label">Happy Clients</div>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Served</div>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-number">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="500">
              <div className="stat-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="600">
              <div className="stat-icon">
                <i className="fas fa-percentage"></i>
              </div>
              <div className="stat-number">99%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Work With Us?</h2>
            <p>
              Join the 150+ companies that trust FusionTech for their technology
              needs.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Get In Touch
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <i className="fas fa-cogs"></i>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
