import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";

const megaMenuData = [
  {
    title: "FOCUS",
    items: [
      { name: "Mobile App Development", desc: "Full-cycle mobile apps built for growth" },
      { name: "Software Development", desc: "Custom software built for your operations" },
      { name: "Web App Development", desc: "Web platforms built for speed and scale" },
      { name: "Game Development", desc: "Interactive games for web and mobile" },
      { name: "Website Development", desc: "Modern websites designed to convert" },
    ],
  },
  {
    title: "CONSULTING SOLUTION",
    items: [
      { name: "AI Consulting", desc: "Strategy, planning, and execution support" },
      { name: "Software Consulting", desc: "Architecture, delivery, and optimization guidance" },
      { name: "Mobile Consulting", desc: "Product planning and scaling support" },
      { name: "IT Consulting", desc: "Technology planning and transformation support" },
    ],
  },
  {
    title: "SMART AUTOMATION",
    items: [
      { name: "AI & Machine Learning Algorithms", desc: "Intelligent models built for business impact" },
      { name: "Data Management", desc: "Pipelines, governance, and clean data flow" },
      { name: "IoT Development", desc: "Connected systems with real-time monitoring" },
      { name: "Blockchain Development", desc: "Decentralized solutions built for trust" },
    ],
  },
  {
    title: "TECHNOLOGY",
    items: [
      { name: "Swift Development" },
      { name: "Kotlin Development" },
      { name: "Flutter Development" },
      { name: "VueJS Development" },
      { name: "ReactJS Development" },
      { name: "NodeJS Development" },
      { name: ".NET Development" },
      { name: "Python Development" },
      { name: "React Native Development" },
    ],
  },
  {
    title: "PLATFORMS",
    items: [
      { name: "Azure", desc: "Microsoft cloud solutions and migration" },
      { name: "AWS", desc: "Scalable infrastructure on Amazon Web Services" },
      { name: "GCP", desc: "Google Cloud for data and app workloads" },
      { name: "Oracle", desc: "Enterprise apps and database expertise" },
      { name: "SAP", desc: "SAP services for core operations" },
    ],
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
}, []);

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  setUser(null);
};

  return (
    <header className={`modern-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">

        <Link to="/" className="header-logo">
          <span className="logo-icon">R</span>

          <span className="logo-text">
            React<span>Lab</span>
          </span>
        </Link>

        <nav className="header-nav">

          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/services" className="nav-link">
              Services
              <span className={`nav-caret ${servicesOpen ? "open" : ""}`}>▾</span>
            </Link>

            <div className={`mega-menu ${servicesOpen ? "open" : ""}`}>
              <div className="mega-menu-inner">
                {megaMenuData.map((col, i) => (
                  <div className="mega-col" key={i}>
                    <span className="mega-col-title">{col.title}</span>
                    <div className="mega-col-items">
                      {col.items.map((item, j) => (
                        <Link to="/services" className="mega-item" key={j}>
                          <span className="mega-item-name">{item.name}</span>
                          {item.desc && (
                            <span className="mega-item-desc">{item.desc}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/projects" className="nav-link">
            Projects
          </Link>

          <Link to="/contact" className="nav-link">
            Contact
          </Link>

        </nav>
<div className="header-actions">

  {user ? (
    <>
      <span className="header-user">
        Hi, {user.name}
      </span>

      <button
        onClick={handleLogout}
        className="header-logout"
      >
        Logout
      </button>
    </>
  ) : (
    <Link to="/login" className="header-login">
      Login
    </Link>
  )}

  <Link to="/contact" className="header-cta">
    Let's Talk
    <span className="cta-arrow">↗</span>
  </Link>

</div>

        <button className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div className="header-glow glow-one"></div>
      <div className="header-glow glow-two"></div>

      {servicesOpen && <div className="mega-menu-backdrop"></div>}
    </header>
  );
}

export default Header;