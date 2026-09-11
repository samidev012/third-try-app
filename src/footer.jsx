import React from "react";
import './main.css';


function Footer() {
  return (
    <footer className="modern-footer">

      {/* Animated Background */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">

        {/* Top Footer */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">

            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">R</span>

              <span className="footer-logo-text">
                React<span>Lab</span>
              </span>
            </a>

            <p className="footer-description">
              Building modern, fast and interactive digital
              experiences with creativity and technology.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">

              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="GitHub">
                &lt;/&gt;
              </a>

            </div>

          </div>


          {/* Navigation */}
          <div className="footer-column">

            <h3>Navigation</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>


          {/* Services */}
          <div className="footer-column">

            <h3>Services</h3>

            <a href="#web-development">
              Web Development
            </a>

            <a href="#ui-design">
              UI / UX Design
            </a>

            <a href="#react-development">
              React Development
            </a>

            <a href="#frontend">
              Frontend Development
            </a>

            <a href="#consulting">
              Consulting
            </a>

          </div>


          {/* Contact */}
          <div className="footer-column footer-contact">

            <h3>Get In Touch</h3>

            <a href="mailto:hello@reactlab.com">
              hello@reactlab.com
            </a>

            <a href="tel:+1234567890">
              +1 234 567 890
            </a>

            <span>
              Karachi, Pakistan
            </span>

            <a href="#contact" className="footer-contact-btn">
              Start a Project
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* Newsletter */}
        <div className="footer-newsletter">

          <div>
            <span className="newsletter-label">
              STAY UPDATED
            </span>

            <h2>
              Let's build something
              <span> amazing.</span>
            </h2>
          </div>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <button type="submit">
              Subscribe
              <span>↗</span>
            </button>

          </form>

        </div>


        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            © 2026 ReactLab. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;