import '../styles/Contact.css';
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-page">
      <div className="section-heading">
        <h2>Let’s build something meaningful</h2>
        <p className="contact-intro">
          I’m available for collaboration, freelance work, and new opportunities where thoughtful UI and dependable development matter.
        </p>
      </div>

      <div className="contact-cards">
        <div className="contact-card section-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>
            <a href="mailto:geethashankar433@gmail.com">geethashankar433@gmail.com</a>
          </p>
        </div>

        <div className="contact-card section-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>
            <a href="tel:+918885475210">+91 8885475210</a>
          </p>
        </div>

        <div className="contact-card section-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>
            <a href="https://www.linkedin.com/in/pindiboyina-geetha-shankar-216a0627b/" target="_blank" rel="noopener noreferrer">
              Pindiboyina Geetha Shankar
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
