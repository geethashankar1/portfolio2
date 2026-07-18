import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'EV Recharge Bunk Web App',
      year: '2025',
      description:
        'Developed a full-stack EV charging slot booking system with user authentication and real-time bunk data, and integrated Google Maps for interactive station location display.',
      tech: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
      link: '#',
    },
    {
      title: 'Online Retail Store Management Portal',
      year: '2024',
      description:
        'Built a full-stack e-commerce management system using PHP and MySQL that enables users to browse products, manage carts, place orders, and allows admins to add products and update order status.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      link: 'https://github.com/geethashankar1/my_eshop',
    },
    {
      title: 'IoT-Based Smart Agriculture System',
      year: '2023',
      description:
        'Developed an IoT-based smart agriculture system using Arduino, ESP8266, DHT22, and soil moisture sensors for automated irrigation and live visualization through a Flask web dashboard.',
      tech: ['C++', 'Flask', 'Arduino UNO', 'HTML', 'CSS'],
      link: 'https://github.com/geethashankar1/IoT-based-smart-agriculture-system',
    },
  ];

  return (
    <section className="projects-section">
      <div className="section-heading">
        <h2>Selected projects</h2>
        <p>Projects shaped around practical delivery, real-time functionality, and strong user experience.</p>
      </div>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <article className="project-card section-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-year">{project.year}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
