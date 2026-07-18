import { useState } from 'react';
import '../styles/Certifications.css';

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { id: 1, title: 'Angular', image: '/cert1.png', issued: '2025', provider: 'Infosys Springboard' },
    { id: 2, title: 'Oracle Cloud Infrastructure Foundations Associate', image: '/cert2.png', issued: '2025', provider: 'Oracle' },
    { id: 3, title: 'Google Cloud Digital Leader', image: '/cert4.png', issued: '2025', provider: 'Google Cloud' },
    { id: 4, title: 'JavaScript Essentials', image: '/cert3.png', issued: '2024', provider: 'Cisco Networking Academy' },
    { id: 5, title: 'IoT', image: '/cert6.png', issued: '2023', provider: 'Vision Technologies' },
  ];

  return (
    <section className="certifications">
      <div className="section-heading">
        <h2>Certifications</h2>
        <p>Continuing to grow through hands-on learning and structured technical training.</p>
      </div>
      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-card section-card">
            <h3>{cert.title}</h3>
            <p>
              <strong>Issued:</strong> {cert.issued}
            </p>
            <p>
              <strong>Provider:</strong> {cert.provider}
            </p>
            <button onClick={() => setSelectedCert(cert)}>View Certificate</button>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="cert-preview section-card">
          <h3>{selectedCert.title}</h3>
          <img src={selectedCert.image} alt={selectedCert.title} className="cert-image" />
        </div>
      )}
    </section>
  );
}

export default Certifications;
