import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: "</>",
      title: "Web Development",
      text: "Fast, responsive and scalable websites built with modern technologies."
    },
    {
      number: "02",
      icon: "✦",
      title: "UI / UX Design",
      text: "Clean and engaging interfaces designed around users and business goals."
    },
    {
      number: "03",
      icon: "◈",
      title: "React Development",
      text: "Modern interactive React applications with reusable and scalable components."
    },
    {
      number: "04",
      icon: "∞",
      title: "Frontend Development",
      text: "Pixel-perfect frontend experiences optimized for performance and responsiveness."
    },
    {
      number: "05",
      icon: "◎",
      title: "Digital Strategy",
      text: "Smart digital strategies that help businesses build a stronger online presence."
    },
    {
      number: "06",
      icon: "↗",
      title: "Website Optimization",
      text: "Performance, usability and conversion improvements for existing websites."
    }
  ];

  return (
    <main className="inner-page">

      <section className="page-hero">

        <div className="page-hero-glow"></div>

        <div className="page-container">

          <span className="page-label">
            <i></i>
            OUR SERVICES
          </span>

          <h1>
            Digital solutions
            <span> built to perform.</span>
          </h1>

          <p>
            From strategy and design to development,
            we help brands create better digital experiences.
          </p>

        </div>

      </section>


      <section className="services-page-section">

        <div className="page-container">

          <div className="services-page-grid">

            {services.map((service) => (
              <div className="big-service-card" key={service.number}>

                <div className="service-card-top">

                  <div className="big-service-icon">
                    {service.icon}
                  </div>

                  <span>
                    {service.number}
                  </span>

                </div>

                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.text}
                </p>

                <Link to="/contact">
                  Let's Discuss
                  <span>↗</span>
                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>


      <section className="inner-cta">

        <div className="page-container">

          <h2>
            Don't see what you need?
            <span> Talk to us.</span>
          </h2>

          <Link to="/contact" className="main-button">
            Contact Us ↗
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Services;