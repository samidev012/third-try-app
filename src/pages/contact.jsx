import React, { useEffect, useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Message sent successfully! 🚀");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      className="contact-page"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      {/* BACKGROUND */}
      <div className="contact-bg">
        <div className="contact-grid"></div>

        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>

        <div className="mouse-glow"></div>
      </div>

      {/* HERO / HEADING */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h1 className="contact-title">
            Let's create
            <br />
            something
            <br />
            <span>amazing.</span>
          </h1>

          <p className="contact-description">
            Have a project, idea or question? Tell us about it. We'd love to
            turn your vision into a digital experience.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-layout">
            {/* LEFT SIDE */}
            <div className="contact-info">
              <div className="info-item">
                <span className="info-label">EMAIL</span>
                <a href="mailto:hello@reactlab.com">hello@reactlab.com</a>
              </div>

              <div className="info-item">
                <span className="info-label">PHONE</span>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </div>

              <div className="info-item">
                <span className="info-label">LOCATION</span>
                <p>Karachi, Pakistan</p>
              </div>

              <div className="social-links">
                <a href="#instagram">
                  Instagram
                  <span>↗</span>
                </a>

                <a href="#linkedin">
                  LinkedIn
                  <span>↗</span>
                </a>

                <a href="#github">
                  GitHub
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-form-card">
              <div className="form-top">
                <div>
                  <span className="form-label">START A PROJECT</span>

                  <h2>
                    Tell us what you're
                    <span> building.</span>
                  </h2>
                </div>

                <div className="form-number">01</div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  {/* NAME */}
                  <div className="form-group">
                    <label>YOUR NAME</label>

                    <div className="input-wrap">
                      <span>01</span>

                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>

                    <div className="input-wrap">
                      <span>02</span>

                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row second-row">
                  {/* SUBJECT */}
                  <div className="form-group">
                    <label>SUBJECT</label>

                    <div className="input-wrap">
                      <span>03</span>

                      <input
                        type="text"
                        name="subject"
                        placeholder="What can we help you with?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="form-group">
                    <label>MESSAGE</label>

                    <div className="textarea-wrap">
                      <span>04</span>

                      <textarea
                        name="message"
                        placeholder="Tell us about your project, goals and ideas..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-bottom">
                  <div className="privacy-text">
                    <div className="privacy-icon">✓</div>

                    <span>Your information stays private.</span>
                  </div>

                  <button
                    type="submit"
                    className="send-button"
                    disabled={loading}
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>

                    <b>↗</b>
                  </button>
                </div>

                {/* SUCCESS MESSAGE */}
                {success && <div className="form-success">✓ {success}</div>}

                {/* ERROR MESSAGE */}
                {error && <div className="form-error">✕ {error}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
