import '../styles/Skills.css';

function Skills() {
  const skillSections = [
    { title: 'Languages', items: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'] },
    { title: 'Relevant Coursework', items: ['Object-Oriented Programming', 'Data Structures', 'DBMS', 'Operating Systems', 'Software Engineering'] },
    { title: 'Frameworks', items: ['React.js', 'Node.js', 'Express JS', 'Flask'] },
    { title: 'Deployment', items: ['Firebase', 'Netlify', 'Railway'] },
    { title: 'Technologies', items: ['REST APIs', 'Agile Development'] },
    { title: 'Database Management', items: ['MySQL', 'MongoDB'] },
    { title: 'Soft Skills', items: ['Effective Communication', 'Team Collaboration', 'Problem-Solving', 'Adaptability'] },
  ];

  return (
    <section className="skills-section">
      <div className="section-heading">
        <h2>Skills & expertise</h2>
        <p>Built around web development, real-time applications, and practical problem solving from academic and internship work.</p>
      </div>
      <div className="skills-grid">
        {skillSections.map((section, index) => (
          <div key={index} className="skill-group section-card">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
