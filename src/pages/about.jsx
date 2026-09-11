import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function About() {
  return (
    <main className="inner-page">

      <section className="page-hero">

        <div className="page-hero-glow"></div>

        <div className="page-container">

          <span className="page-label">
            <i></i>
            ABOUT US
          </span>

          <h1>
            We turn ideas into
            <span> digital experiences.</span>
          </h1>

          <p>
            We are a creative digital team focused on
            design, development and technology.
          </p>

        </div>

      </section>


      <section className="about-story">

        <div className="page-container">

          <div className="two-column">

            <div>

              <span className="small-label">
                WHO WE ARE
              </span>

              <h2>
                Creativity meets
                <span> technology.</span>
              </h2>

            </div>

            <div>

              <p className="large-paragraph">
                We believe great digital products are more
                than just beautiful interfaces. They should
                solve real problems, feel effortless to use
                and create a lasting impression.
              </p>

              <p>
                Our team combines creative thinking,
                modern technology and strategic thinking
                to create websites and digital products
                that help businesses grow.
              </p>

            </div>

          </div>


          <div className="about-cards">

            <div className="about-card">
              <strong>50+</strong>
              <span>Projects Completed</span>
            </div>

            <div className="about-card">
              <strong>30+</strong>
              <span>Happy Clients</span>
            </div>

            <div className="about-card">
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>

            <div className="about-card">
              <strong>100%</strong>
              <span>Passion</span>
            </div>

          </div>

        </div>

      </section>


      <section className="values-section">

        <div className="page-container">

          <div className="center-heading">

            <span className="small-label">
              OUR VALUES
            </span>

            <h2>
              What drives
              <span> our work.</span>
            </h2>

          </div>


          <div className="values-grid">

            <div className="value-card">
              <span>01</span>
              <h3>Innovation</h3>
              <p>
                We constantly explore new ideas,
                technologies and creative approaches.
              </p>
            </div>

            <div className="value-card">
              <span>02</span>
              <h3>Quality</h3>
              <p>
                Every detail matters. We focus on
                creating reliable and polished products.
              </p>
            </div>

            <div className="value-card">
              <span>03</span>
              <h3>Collaboration</h3>
              <p>
                We work closely with our clients to
                turn ideas into meaningful results.
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="inner-cta">

        <div className="page-container">

          <h2>
            Have an idea?
            <span> Let's build it.</span>
          </h2>

          <Link to="/contact" className="main-button">
            Start a Conversation ↗
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;