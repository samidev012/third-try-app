

import "../main.css";
import heroMockup from "../images/hero-mockup.png";
import microsoftLogo from "../images/M-Patner-Resized-1.svg";
import awsLogo from "../images/AWS-Resized.svg";
import oracleLogo from "../images/Oracle-Resized.svg";
import salesforceLogo from "../images/Salesforce-Resized.svg";
import ctaBackground from "../images/bars_recolored-removebg-preview.png";

import aiAppImage from "../images/ai-app-development-cost.webp";
import fitnessImage from "../images/fitness-app-development-cost.webp";
import realEstateImage from "../images/cost-to-develop-real-estate-app-like-property-finder.webp";
import childSafetyImage00 from "../images/Fitbond.webp";
import childSafetyImage02 from "../images/Howwe.webp";
import childSafetyImage03 from "../images/Revme.webp";
import childSafetyImage04 from "../images/LittleBird.webp";
import bars from '../images/bars_recolored.png';
import FAQSection from "../FAQSection";
function Home() {
  
  return (
    
    <main>
 
      {/* HERO SECTION */}
        <section className="hero">
        <div className="hero-container">
          <h1>
            Smart Digital Solutions That
            <span> Drive Growth</span>
          </h1>
          <p>
            We build scalable, secure and high-performance digital
            products for businesses. From web to mobile app development,
            we help you innovate and grow with confidence.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>

        <div className="hero-image">
          <img src={heroMockup} alt="Product preview" />
        </div>
      </section>


            {/* TECH PARTNERS CAROUSEL */}
      <section className="tech-partners">
        <span className="section-label">OUR TECHNOLOGY PARTNERS</span>

        <div className="partners-track">
          <div className="partners-slide">
            <img src={microsoftLogo} alt="Microsoft" />
            <img src={awsLogo} alt="AWS" />
      
            <img src={oracleLogo} alt="Oracle" />
            <img src={awsLogo} alt="Azure" />
            <img src={salesforceLogo} alt="Salesforce" />
          </div>
          <div className="partners-slide">
        <img src={microsoftLogo} alt="Microsoft" />
            <img src={awsLogo} alt="AWS" />
            
            <img src={oracleLogo} alt="Oracle" />
            <img src={awsLogo} alt="Azure" />
            <img src={salesforceLogo} alt="Salesforce" />
          </div>
        </div>
      </section>
   
      {/* SERVICES GRID */}
            {/* SERVICES GRID */}
      <section className="services">
        <div className="services-grid">

          <div className="service-card active">
            <span className="service-icon">⚙️</span>
            <h3>Artificial Intelligence</h3>
            <p>
              AI delivers real value when it aligns with how a business
              operates. We help organizations use AI to make better
              decisions, reduce manual work, and support large-scale operations.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">📄</span>
            <h3>Generative AI</h3>
            <p>
              Generative AI works best when it's part of daily workflows.
              We integrate it into internal systems, customer experiences,
              and business tools, while maintaining the security enterprises need.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">🔗</span>
            <h3>Agentic AI</h3>
            <p>
              We support organizations adopting autonomous AI by implementing
              agents that can perform tasks across processes, with proper
              oversight, transparency, and accountability.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">📊</span>
            <h3>Machine Learning</h3>
            <p>
              In enterprise settings, machine learning needs to be reliable,
              not experimental. We help teams deploy models that remain
              accurate, monitored, and compliant in real-world use.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">🎯</span>
            <h3>Computer Vision</h3>
            <p>
              For use cases where speed and accuracy matter, we build
              computer vision systems that analyze visual data clearly
              and reliably.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">☁️</span>
            <h3>Cloud</h3>
            <p>
              Cloud modernization goes beyond moving systems online. We help
              teams build secure, resilient cloud infrastructure while
              optimizing performance and costs.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">📈</span>
            <h3>Data Science and Analytics</h3>
            <p>
              Data creates value when it's reliable and easy to use. We build
              data foundations that support analytics and insights across
              teams without unnecessary complexity.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">🛡️</span>
            <h3>Cybersecurity</h3>
            <p>
              Security is built into the system from the start. We design
              solutions that address governance, compliance, and risk as
              part of the core architecture.
            </p>
          </div>

          <div className="service-card">
            <span className="service-icon">📡</span>
            <h3>IoT</h3>
            <p>
              Connected devices matter when their data can be used effectively.
              We help organizations connect physical systems to digital
              platforms, improving visibility and operational control.
            </p>
          </div>

        </div>

        <div className="center-btn">
          <button className="outline-btn">View All Services</button>
        </div>
      </section>
        <section
  className="cta-section"
  style={{
    backgroundImage: `url(${ctaBackground})`,
  }}
>
  <div className="cta-inner">
    <div className="cta-content">

      <h2>
        Your Gateway to Digital Transformation
      </h2>

      <p>
        Start your journey toward smarter, faster, and more secure
        business operations. Our solutions in software, AI, cloud,
        and cybersecurity help you grow, innovate, and succeed globally.
      </p>

      <a className="banner-btn" href="/contact">
        Get a Quote
      </a>

    </div>
  </div>
</section>
     {/* CASE STUDIES */}
<section className="case-studies">
  <span className="section-label">SUCCESS STORIES</span>
  <h2>Projects That Made an Impact</h2>

  <div className="case-grid">

    <div className="case-card large">
      <div className="case-text">
        <span className="case-tag">HOWWE</span>
        <h3>Discover, Stream & Connect With Artists Worldwide</h3>
        <p>
          Howwe is a music and entertainment mobile app that connects
          users with artists worldwide. It makes discovering, streaming,
          and engaging with music simple, accessible, and community-focused.
        </p>
      </div>
      <div className="case-image">
        <img src={childSafetyImage00} alt="Howwe app" />
      </div>
    </div>

    <div className="case-row">
      <div className="case-card small">
        <div className="case-image">
          <img src={childSafetyImage02} alt="Fitbond app" />
        </div>
        <div className="case-text">
          <span className="case-tag">FITBOND</span>
          <h3>User-First Fitness App Design & Development</h3>
          <p>
            Fitbond is a gym and fitness app designed with a
            user-first approach. We handled user research, branding,
            UI/UX design, and development to deliver a simple,
            engaging, and easy-to-use fitness experience.
          </p>
        </div>
      </div>

      <div className="case-card small">
        <div className="case-image">
          <img src={childSafetyImage03} alt="RevMe app" />
        </div>
        <div className="case-text">
          <span className="case-tag">REVME</span>
          <h3>Empowering Independence Through Skill-Building</h3>
          <p>
            RevMe is a skill-building app that helps users develop
            daily living and independence skills. Through guided
            activities and tasks, it supports users in building
            confidence, self-reliance, and practical life abilities.
          </p>
        </div>
      </div>
    </div>

    <div className="case-card large reverse">
      <div className="case-text">
        <span className="case-tag">LITTLE BIRD</span>
        <h3>Smart Parental Monitoring for Child Safety</h3>
        <p>
          Little Bird is a parental monitoring mobile app designed to keep
          children safe online. It helps parents monitor their child's
          phone activity and detects adult or inappropriate content.
        </p>
      </div>
      <div className="case-image">
        <img src={childSafetyImage04} alt="Little Bird app" />
      </div>
    </div>

  </div>

  <div className="center-btn">
    <button className="outline-btn">View All Case Studies</button>
  </div>
</section>

      {/* INDUSTRIES */}
            {/* INDUSTRIES */}
      <section className="industries">
        <span className="section-label">INDUSTRY</span>
        <h2>Industries We Empower</h2>

        <div className="industries-vertical">
          <h3>Agriculture</h3>
          <h3>Automotive</h3>
          <h3>Education</h3>
          <h3>Finance</h3>
          <h3>Healthcare</h3>
          <h3>Logistics</h3>
          <h3>Manufacturing</h3>
          <h3>Real Estate</h3>
          <h3>Retail</h3>
          <h3>Travel</h3>
        </div>

        <div className="center-btn">
          <button className="outline-btn">View All Industries</button>
        </div>
      </section>

      {/* CTA BANNER */}
<section
  className="cta-section"
  style={{
    backgroundImage: `url(${ctaBackground})`,
  }}
>
  <div className="cta-inner">
    <div className="cta-content">

      <h2>
        Your Gateway to Digital Transformation
      </h2>

      <p>
        Start your journey toward smarter, faster, and more secure
        business operations. Our solutions in software, AI, cloud,
        and cybersecurity help you grow, innovate, and succeed globally.
      </p>

      <a href="/contact">
        Get a Quote
      </a>

    </div>
  </div>
</section>
      {/* BLOG */}
      <section className="blog">
        <span className="section-label">OUR BLOG</span>
        <h2>Expert Insights for Digital Growth</h2>

        <div className="blog-grid">

          <div className="blog-card">
            <img src={aiAppImage} alt="Blog 1" />
            <span className="blog-tag">AI</span>
            <h3>How Much Does AI App Development Cost?</h3>
            <a href="#">Read more →</a>
          </div>

          <div className="blog-card">
            <img src={fitnessImage} alt="Blog 2" />
            <span className="blog-tag">FITNESS</span>
            <h3>What Does It Cost to Build a Fitness App?</h3>
            <a href="#">Read more →</a>
          </div>

          <div className="blog-card">
            <img src={realEstateImage} alt="Blog 3" />
            <span className="blog-tag">REAL ESTATE</span>
            <h3>How to Build a Real Estate App?</h3>
            <a href="#">Read more →</a>
          </div>

        </div>
      </section>

     
      <FAQSection />
    </main>
  );
}

export default Home;