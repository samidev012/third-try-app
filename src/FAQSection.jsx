import { useState } from "react";

const faqData = [
  {
    question: "Which Companies And Industries Does MMC Serve?",
    answer:
      "MMC provides technology and ICT solutions for banks, financial institutions, regulators, enterprises, corporate organizations, and other businesses that require reliable and secure technology infrastructure.",
  },
  {
    question: "Does MMC Provide Complete Data Center Solutions?",
    answer:
      "Yes, MMC designs, builds, and manages complete data center solutions including infrastructure, cooling, security, and ongoing support tailored to your business needs.",
  },
  {
    question: "Can MMC Help Improve Our Organization's Cybersecurity?",
    answer:
      "Absolutely. MMC offers end-to-end cybersecurity services including risk assessment, threat monitoring, network security, and compliance support to protect your organization.",
  },
  {
    question: "Can MMC Provide Customized Technology Solutions?",
    answer:
      "Yes, we tailor every solution to fit your specific business requirements, whether it's software, hardware, or a combination of digital services.",
  },
  {
    question: "Does MMC Provide Hardware And Infrastructure Solutions?",
    answer:
      "MMC supplies and implements enterprise-grade hardware and infrastructure solutions designed for scalability, reliability, and long-term performance.",
  },
  {
    question: "How Can I Contact MMC For A Technology Solution?",
    answer:
      "You can reach out to us through our contact page, email, or phone, and our team will get back to you promptly to discuss your requirements.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-grid">

        {/* LEFT SIDE */}
        <div className="faq-left">
          <h2>
            FREQUENTLY <span className="highlight">ASKED</span>
            <br />
            QUESTIONS
          </h2>

          <div className="faq-box">
            <h3>Have A Technology Challenge?</h3>
            <p className="sub">Let's Build The Right Solution For Your Business.</p>
            <p className="desc">
              Whether You Need Cybersecurity, Enterprise Infrastructure, Data
              Center Solutions, Surveillance, Hardware, Software, Or Digital
              Services, MMC Can Help You Plan And Implement The Right
              Technology Solution.
            </p>
            <button className="faq-btn">Get In Touch</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="faq-right">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  {item.question}
                </button>

                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                  }}
                >
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQSection;