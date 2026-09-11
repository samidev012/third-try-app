import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function Projects() {
  const projects = [
    {
      title: "Digital Platform",
      category: "Web Development",
      className: "project-box-purple"
    },
    {
      title: "Creative Studio",
      category: "Brand Experience",
      className: "project-box-blue"
    },
    {
      title: "Tech Startup",
      category: "Product Design",
      className: "project-box-cyan"
    },
    {
      title: "Business Website",
      category: "Frontend Development",
      className: "project-box-violet"
    }
  ];

  return (
    <main className="inner-page">

      <section className="page-hero">

        <div className="page-hero-glow"></div>

        <div className="page-container">

          <span className="page-label">
            <i></i>
            OUR WORK
          </span>

          <h1>
            Projects we're
            <span> proud of.</span>
          </h1>

          <p>
            A selection of digital experiences we've
            designed and developed.
          </p>

        </div>

      </section>


      <section className="projects-page-section">

        <div className="page-container">

          <div className="project-page-grid">

            {projects.map((project, index) => (
              <article
                className={`project-page-card ${
                  index === 0 ? "featured-project" : ""
                }`}
                key={project.title}
              >

                <div
                  className={`project-page-image ${project.className}`}
                >

                  <div className="fake-browser">

                    <div className="browser-top">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-content">

                      <div className="browser-line"></div>

                      <div className="browser-line short"></div>

                      <div className="browser-blocks">
                        <div></div>
                        <div></div>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="project-page-info">

                  <div>

                    <span>
                      {project.category}
                    </span>

                    <h2>
                      {project.title}
                    </h2>

                  </div>

                  <button>
                    ↗
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      <section className="inner-cta">

        <div className="page-container">

          <h2>
            Want your project
            <span> here?</span>
          </h2>

          <Link to="/contact" className="main-button">
            Start Your Project ↗
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Projects;