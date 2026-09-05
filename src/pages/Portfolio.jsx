import { useEffect, useRef, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'ColdFusion (CFML)', 'PHP', 'Python', 'Java', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Angular', 'jQuery', 'Bootstrap 5', 'Node.js'],
  },
  {
    title: 'APIs & Practices',
    items: ['REST APIs', 'ES Modules', 'AJAX', 'Responsive Web Design', 'Web Performance'],
  },
  {
    title: 'Databases & Tools',
    items: ['MySQL', 'Git', 'Docker', 'Nginx', 'Figma', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'Cloud & Deployment',
    items: ['Oracle Cloud Infrastructure (OCI)', 'Netlify'],
  },
];

const experienceCards = [
  {
    title: 'Persona Nutrition',
    role: 'E-commerce platform',
    tags: ['ColdFusion (CFML)', 'JavaScript', 'AJAX', 'HTML/CSS'],
    bullets: [
      'Implemented a new brand-wide UI design across Persona’s core customer-facing pages — the main landing page, product recommendations page, and checkout flow — converting Figma designs into production, mobile-responsive HTML/CSS/JavaScript.',
      'Developed the customer login dashboard end-to-end and integrated the REST APIs powering it.',
      'Built a custom server-side A/B testing framework in ColdFusion — deterministic MD5-hash 50/50 traffic split with cookie- and database-backed visitor persistence — enabling controlled experiments without a third-party SDK.',
    ],
  },
  {
    title: 'VblueLINK',
    role: 'Link-management platform',
    tags: ['Angular 20', 'TypeScript', 'SCSS'],
    bullets: [
      'Standardized the UI of a production link-management platform by defining an 8-color design-token system and Manrope typography scale, applying shared styling across 25+ pages — dashboards, link & QR analytics, QR generation, barcode studio, contact cards, bulk QR, protected images, and the public marketing site.',
      'Rebuilt page layouts for 320px–2000px responsive breakpoints and resolved production rendering issues involving flexbox min-content overflow, position: sticky failures caused by ancestor overflow, stacking contexts, and CSS specificity conflicts.',
      'Developed a sticky global navigation with desktop hover mega-menus and mobile accordion menus, route-level SEO meta titles/descriptions for public and dynamic pages, and consolidated standalone link-management pages into filterable analytics views.',
      'Redesigned the authenticated application shell with a collapsible sidebar, mobile header actions, and account menu, while modernizing settings, subscription/billing, API client-token management, and authentication flows — adding consistent loading states and page-transition animations.',
    ],
  },
];

const certs = [
  { title: 'OCI 2025 Foundations Associate', provider: 'Oracle', year: '2025', image: '/cert2.png' },
  { title: 'JavaScript Essentials', provider: 'Cisco', year: '2024', image: '/cert3.png' },
  { title: 'Angular', provider: 'Infosys Springboard', year: '2025', image: '/cert1.png' },
];

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5.3-8-5.3V6l8 5.3L20 6Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.7 11.7 0 0 0 3.7.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 2 3a1 1 0 0 1 1-1h2.7a1 1 0 0 1 1 1 11.7 11.7 0 0 0 .6 3.7 1 1 0 0 1-.2 1l-2.2 2.2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.4a1.56 1.56 0 0 0 0 3.1ZM5.5 9.3h2.88V18H5.5Zm4.84 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.91 3.43 4.39V18H16.7v-7.47c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V18H10.34Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .8a12 12 0 0 0-3.8 23.1c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.7-.8 2.1-1.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2a11.3 11.3 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.7 1 .7 2v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .8Z" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.2 3.3 9.8 8 11 4.7-1.2 8-5.8 8-11V5l-8-3Zm0 3.2 5.5 2.1v4.4c0 3.8-2.2 7.3-5.5 8.6-3.3-1.3-5.5-4.8-5.5-8.6V7.3L12 5.2Zm-1 3.1h2v4.4l3 2.1-1 1.6-3-2.1-3 2.1-1-1.6 3-2.1V8.3Z" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 1 7l11 4 11-4-11-4Zm0 6.2L4 8.6v3.5c0 3.4 2.2 6.4 6 7.5 3.8-1.1 6-4.1 6-7.5V8.6l-4 1.6V12h-4V9.2Zm0 2v2.3h2.4V11.2H12Z" />
    </svg>
  );
}

function Portfolio() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={(event) => event.stopPropagation()}>
            <div className="cert-modal-header">
              <div>
                <p className="eyebrow small">Certificate preview</p>
                <h3>{selectedCert.title}</h3>
              </div>
              <button type="button" className="cert-modal-close" onClick={() => setSelectedCert(null)} aria-label="Close certificate preview">
                ×
              </button>
            </div>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
            <p className="cert-modal-meta">{selectedCert.provider} · {selectedCert.year}</p>
          </div>
        </div>
      )}
      <div
        className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="logo">MENU</span>
          <button type="button" className="mobile-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        <div className="nav-pill-group mobile-nav-group">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${active === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <nav className="navbar" aria-label="Main navigation">
        <div className="container nav-bar-inner">
          <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
            GEETHA<span>SHANKAR</span>
          </a>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="nav-pill-group desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${active === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="section hero-section" ref={(el) => (sectionRefs.current[0] = el)}>
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">FRONTEND DEVELOPER · HYDERABAD, IN</span>
              <h1>
                Converting Figma designs into <span>production-ready</span> interfaces — in Angular,
                React, and JavaScript.
              </h1>
              <p>
                I’m Geetha Shankar, a frontend developer with over a year of production experience building
                responsive web interfaces in Angular, TypeScript, React, and JavaScript. I convert Figma designs
                into clean, cross-browser HTML, CSS, and SCSS — design-token systems, reusable components,
                320px–2000px responsive layouts, and REST API integration — and also work across the stack with
                ColdFusion (CFML), PHP, MySQL, and Docker-based CI/CD deployment.
              </p>
              <div className="hero-actions">
                <a href="/resume.pdf" download className="btn btn-primary">
                  Download résumé
                </a>
                <a href="#projects" className="btn btn-secondary">
                  Explore projects
                </a>
              </div>
              {/* <div className="stat-row">
                {heroStats.map((item) => (
                  <div key={item.value} className="stat-card">
                    <strong>{item.value}</strong>
                    <span>{item.caption}</span>
                  </div>
                ))}
              </div>*/}
            </div>

            <aside className="info-card">
              <div className="info-pill">
                <span className="live-dot" />
                <span>Now at Vayublue</span>
              </div>
              <div className="info-block">
                <h3>Now at Vayublue</h3>
                <p>Building customer-facing interfaces for two products — the Persona Nutrition e-commerce platform (ColdFusion/JavaScript) and the VblueLINK link-management platform (Angular) — from Figma design to production release.</p>
              </div>
              <div className="info-block">
                <h3>Core stack</h3>
                <p>Angular, TypeScript, React, JavaScript, ColdFusion (CFML), PHP, MySQL, Docker.</p>
              </div>
              <div className="info-block">
                <h3>Current focus</h3>
                <p>Design-token systems, 320px–2000px responsive layouts, and REST API integration.</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="section" ref={(el) => (sectionRefs.current[1] = el)}>
          <div className="container">
            <div className="section-heading">
              <h2>Skills & expertise</h2>
              <p>The stack I use to design, build, and ship production web apps — front end, back end, and everything between.</p>
            </div>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="glass-card skill-card">
                  <h3>{group.title}</h3>
                  <div className="pill-list">
                    {group.items.map((item) => (
                      <span key={item} className="pill">{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section" ref={(el) => (sectionRefs.current[2] = el)}>
          <div className="container">
            <div className="section-heading">
              <h2>Experience</h2>
              <p>Production work across two platforms — owning features from Figma design to production release.</p>
            </div>
            <div className="experience-card glass-card">
              <div className="experience-header">
                <div className="experience-title-row">
                  <div className="badge-chip">V</div>
                  <div>
                    <h3>Vayublue Pvt. Ltd.</h3>
                    <p className="role">Frontend Developer</p>
                  </div>
                </div>
                <div className="experience-meta">
                  <p>Jul 2025 — Present</p>
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
              <p className="experience-summary">
                I build customer-facing web interfaces for two products — the Persona Nutrition e-commerce platform (ColdFusion/JavaScript) and the VblueLINK link-management platform (Angular) — from Figma design to production release.
              </p>
              <div className="experience-grid">
                {experienceCards.map((item) => (
                  <div key={item.title} className="sub-card">
                    <div className="sub-card-header">
                      <h4>{item.title}</h4>
                      <span>{item.role}</span>
                    </div>
                    <div className="pill-list compact">
                      {item.tags.map((tag) => (
                        <span key={tag} className="pill">{tag}</span>
                      ))}
                    </div>
                    <ul className="bullet-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="education-strip glass-card">
              <div className="education-icon">
                <GraduationIcon />
              </div>
              <div className="education-copy">
                <h3>VIT-AP University</h3>
                <p>B.Tech, Computer Science</p>
              </div>
              <div className="education-year">2021 — 2025</div>
            </div>
          </div>
        </section>

        <section id="projects" className="section" ref={(el) => (sectionRefs.current[3] = el)}>
          <div className="container">
            <div className="section-heading">
              <h2>Selected projects</h2>
              <p>A self-driven build focused on real architecture, payments, and end-to-end delivery.</p>
            </div>
            <div className="featured-card glass-card">
              <div className="featured-left">
                <span className="eyebrow small">Flagship · Web + Mobile</span>
                <div className="year-pill">2025</div>
                <h3>my_eshop — Multi-Tenant E-commerce Marketplace</h3>
                <p>
                  A multi-tenant e-commerce platform (PHP, MySQL) with separate admin, seller, and customer roles. Sellers manage their own products and orders from a dashboard; customers browse, cart, and checkout with Razorpay/Authorize.Net payments. Includes a JWT-secured REST API, and runs on Docker with Jenkins CI/CD.
                </p>
                <div className="pill-list">
                  {['PHP', 'MySQL', 'Docker', 'Nginx', 'React Native (Expo)', 'REST / JWT'].map((tag) => (
                    <span key={tag} className="pill">{tag}</span>
                  ))}
                </div>
                <a href="https://github.com/geethashankar1/my_eshop" className="btn btn-primary view-project-btn">
                  View project →
                </a>
              </div>
              <div className="featured-right sub-card">
                <h4>HIGHLIGHTS</h4>
                <ul className="bullet-list">
                  <li>Multi-tenant roles — admin, seller, and customer</li>
                  <li>Dual gateways — Razorpay + Authorize.Net payments</li>
                  <li>JWT-secured REST API</li>
                  <li>React Native (Expo) companion mobile app</li>
                  <li>Docker + Jenkins CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="certs" className="section" ref={(el) => (sectionRefs.current[4] = el)}>
          <div className="container">
            <div className="section-heading">
              <h2>Certifications</h2>
              <p>Structured technical training I’ve completed alongside hands-on work.</p>
            </div>
            <div className="cert-grid">
              {certs.map((cert) => (
                <article key={cert.title} className="glass-card cert-card">
                  <div className="icon-chip">
                    <BadgeIcon />
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.provider} · {cert.year}</p>
                  <button type="button" className="btn btn-primary cert-btn" onClick={() => setSelectedCert(cert)}>
                    View certificate
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section" ref={(el) => (sectionRefs.current[5] = el)}>
          <div className="container">
            <div className="section-heading">
              <h2>Let’s build something meaningful</h2>
              <p>I’m open to full-stack roles, freelance work, and collaborations where thoughtful UI and dependable engineering matter.</p>
            </div>
            <div className="contact-grid">
              <a href="mailto:geethashankar433@gmail.com" className="glass-card contact-card">
                <div className="icon-chip">
                  <EmailIcon />
                </div>
                <h3>Email</h3>
                <p>geethashankar433@gmail.com</p>
              </a>
              <a href="tel:+918885475210" className="glass-card contact-card">
                <div className="icon-chip">
                  <PhoneIcon />
                </div>
                <h3>Phone</h3>
                <p>+91 88854 75210</p>
              </a>
              <a href="https://www.linkedin.com/in/pindiboyina-geetha-shankar-216a0627b/" target="_blank" rel="noreferrer" className="glass-card contact-card">
                <div className="icon-chip">
                  <LinkedInIcon />
                </div>
                <h3>LinkedIn</h3>
                <p>Geetha Shankar</p>
              </a>
              <a href="https://github.com/geethashankar1" target="_blank" rel="noreferrer" className="glass-card contact-card">
                <div className="icon-chip">
                  <GithubIcon />
                </div>
                <h3>GitHub</h3>
                <p>View my repositories</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Geetha Shankar · Frontend Developer</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/pindiboyina-geetha-shankar-216a0627b/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/geethashankar1" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:geethashankar433@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
