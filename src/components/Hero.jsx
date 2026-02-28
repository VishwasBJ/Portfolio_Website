import './Hero.css'

const Hero = ({ scrollY }) => {
  return (
    <section className="hero">
      <div className="social-sidebar">
        <a href="https://github.com/VishwasBJ" className="social-link" title="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/vishwas-b-j" className="social-link" title="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="mailto:vishwasjai2004@gmail.com" className="social-link" title="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
          </svg>
        </a>
        <a href="tel:+917022577494" className="social-link" title="Phone">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">Software Engineering Student</p>
          <h1 className="hero-title">
            Hi, I'm <strong>Vishwas B J</strong>
          </h1>
          <p className="hero-description">
            Software engineering student with strong foundations in Java and full-stack web development. 
            Experienced in building real-world academic and user-centric applications with focus on scalable software design.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/resume.pdf" download="Vishwas_BJ_Resume.pdf" className="btn btn-secondary">Download Resume</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-illustration">
            <div className="illustration-circle">
              <div className="illustration-content">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                  <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                  <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
                  <circle cx="100" cy="100" r="5" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="floating-elements">
            <div className="float-element">{'<>'}</div>
            <div className="float-element">{'{ }'}</div>
            <div className="float-element">{'[ ]'}</div>
            <div className="float-element">{'( )'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
