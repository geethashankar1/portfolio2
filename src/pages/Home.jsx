import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Full-Stack Developer • B.Tech CSE</span>
        <h1>Building practical web solutions for EV booking, e-commerce, and IoT-driven experiences.</h1>
        <p>
          I’m Geetha Shankar, a Computer Science graduate and full-stack developer with hands-on experience in
          building user-friendly applications, from EV charging booking platforms to smart agriculture systems.
        </p>
        <div className="hero-actions">
          <a href="/resume.pdf" download className="primary-btn">
            Download Resume
          </a>
          <Link to="/projects" className="secondary-btn">
            Explore Projects
          </Link>
        </div>
        <div className="hero-highlights">
          <div className="highlight-card">
            <strong>3</strong>
            <span>Featured projects</span>
          </div>
          <div className="highlight-card">
            <strong>React + Firebase</strong>
            <span>Core stack</span>
          </div>
          <div className="highlight-card">
            <strong>Internship</strong>
            <span>Unified Mentor</span>
          </div>
        </div>
      </div>

      <div className="hero-panel">
        <div className="panel-grid">
          <div className="panel-item">
            <h3>Recent experience</h3>
            <p>Built a full-stack EV charging booking system and developed real-time station and booking flows.</p>
          </div>
          <div className="panel-item">
            <h3>Core stack</h3>
            <p>React.js, JavaScript, HTML, CSS, Node.js, Express JS, MySQL, Firebase, Flask.</p>
          </div>
          <div className="panel-item">
            <h3>Current focus</h3>
            <p>Creating scalable, accessible web experiences backed by practical backend and deployment knowledge.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;