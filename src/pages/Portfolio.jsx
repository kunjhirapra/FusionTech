import { useState } from "react";
import { Link } from "react-router-dom";
import projectData from "../data/projects.json";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = Object.values(projectData);

  const filterProjects = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filterCategory === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  // Helper function to get icon based on project category
  const getProjectIcon = (category) => {
    const iconMap = {
      ecommerce: "fas fa-shopping-cart",
      mobile: "fas fa-mobile-alt",
      cloud: "fas fa-cloud",
      analytics: "fas fa-chart-line",
      web: "fas fa-laptop-code",
    };
    return iconMap[category] || "fas fa-folder-open";
  };

  return (
    <div className="portfolio-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content" data-aos="fade-up">
            <h1>Our Portfolio</h1>
            <p>Showcasing successful projects that drive business growth</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link> / <span>Portfolio</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="portfolio-filter">
        <div className="container">
          <div className="filter-buttons" data-aos="fade-up">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => filterProjects("all")}>
              All Projects
            </button>
            <button
              className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
              onClick={() => filterProjects("web")}>
              Web Development
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "mobile" ? "active" : ""
              }`}
              onClick={() => filterProjects("mobile")}>
              Mobile Apps
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "cloud" ? "active" : ""
              }`}
              onClick={() => filterProjects("cloud")}>
              Cloud Solutions
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "ecommerce" ? "active" : ""
              }`}
              onClick={() => filterProjects("ecommerce")}>
              E-commerce
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "analytics" ? "active" : ""
              }`}
              onClick={() => filterProjects("analytics")}>
              Data Analytics
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.filterCategory}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <div className="project-image">
                  <div className="image-placeholder">
                    <i className={getProjectIcon(project.filterCategory)}></i>
                  </div>
                  <div className="project-overlay">
                    <div className="project-actions">
                      <button
                        className="action-btn"
                        onClick={() => openModal(project)}>
                        <i className="fas fa-eye"></i>
                      </button>
                      <a href="#" className="action-btn">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <i className="fas fa-search"></i>
              <p>No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Want to See Your Project Here?</h2>
            <p>
              Let's collaborate and create something amazing together that
              drives real business results.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Start Your Project
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <i className="fas fa-cogs"></i>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Hear from the businesses we've helped transform
            </p>
          </div>

          <div className="testimonials-grid">
            <div
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay="100">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  "FusionTech transformed our e-commerce platform, resulting in
                  a 300% increase in sales. Their attention to detail and
                  technical expertise is outstanding."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>John Smith</h4>
                  <span>CEO, TechMart</span>
                </div>
              </div>
            </div>

            <div
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  "The cloud migration project was flawless. FusionTech reduced
                  our infrastructure costs by 40% while improving performance
                  and security."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>CTO, GlobalCorp</span>
                </div>
              </div>
            </div>

            <div
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay="300">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  "Our mobile app developed by FusionTech has been downloaded
                  over 100,000 times. The user experience and performance are
                  exceptional."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>Mike Davis</h4>
                  <span>Founder, HealthTracker</span>
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
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can help you achieve similar success with
              your next project.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Start Your Project
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <i className="fas fa-cogs"></i>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal" id="projectModal" style={{ display: "block" }}>
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-body">
              <div className="project-modal-header">
                <div className="project-modal-image">
                  <div className="modal-image-placeholder">
                    <i className="fas fa-image"></i>
                    <span>Project Screenshot</span>
                  </div>
                </div>
                <div className="project-modal-info">
                  <div className="project-modal-category">
                    {selectedProject.category}
                  </div>
                  <h2 className="project-modal-title">
                    {selectedProject.title}
                  </h2>
                  <p className="project-modal-description">
                    {selectedProject.description}
                  </p>
                  <div className="project-modal-meta">
                    <div className="meta-item">
                      <i className="fas fa-user"></i>
                      <span>
                        <strong>Client:</strong> {selectedProject.client}
                      </span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>
                        <strong>Duration:</strong> {selectedProject.duration}
                      </span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-users"></i>
                      <span>
                        <strong>Team Size:</strong> {selectedProject.team}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-modal-content">
                <div className="project-modal-section">
                  <h3>
                    <i className="fas fa-cogs"></i> Technologies Used
                  </h3>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-modal-section">
                  <h3>
                    <i className="fas fa-list"></i> Key Features
                  </h3>
                  <ul className="modal-feature-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
