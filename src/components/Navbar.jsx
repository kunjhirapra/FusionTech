import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add/remove scrolled class for styling
      setIsScrolled(currentScrollY > 100);

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      style={{ transform: hideNavbar ? "translateY(-100%)" : "translateY(0)" }}
      id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/images/FusionTechLogo.png" alt="FusionTech Logo" />
          </Link>
        </div>

        <ul
          className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}
          id="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${isActive("/services") ? "active" : ""}`}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link btn-cta">
              Get Quote
            </Link>
          </li>
        </ul>

        <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          id="hamburger"
          onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
