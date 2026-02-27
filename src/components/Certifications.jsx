import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Academy Graduate',
      issuer: 'Amazon Web Services',
      description: 'Generative AI Foundations',
      date: '2025',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2" rx="5"/>
          <path d="M20 30 L30 40 L45 20" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Google Cloud Career Launchpad',
      issuer: 'Google Cloud',
      description: 'Cloud Engineer Track',
      date: '2025',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2" rx="5"/>
          <path d="M20 30 L30 40 L45 20" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      )
    },
    {
      title: 'JavaScript Certification',
      issuer: 'Professional Certification',
      description: 'Advanced JavaScript Programming',
      date: '2024',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2" rx="5"/>
          <path d="M20 30 L30 40 L45 20" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Programming for Everybody',
      issuer: 'Coursera / University of Michigan',
      description: 'Getting Started with Python',
      date: '2023',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2" rx="5"/>
          <path d="M20 30 L30 40 L45 20" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte',
      description: 'Certificate of Completion',
      date: '2024',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2" rx="5"/>
          <path d="M20 30 L30 40 L45 20" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Cloud Computing Fundamentals',
      issuer: 'AWS & Cloud Platforms',
      description: 'Cloud Architecture & Services',
      date: '2024',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2" rx="5"/>
          <path d="M20 30 L30 40 L45 20" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      )
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications & Achievements</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">
                {cert.icon}
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
