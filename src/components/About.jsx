import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-image">
          <div className="about-illustration">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              {/* Face outline */}
              <ellipse cx="200" cy="220" rx="120" ry="140" fill="rgba(0, 217, 255, 0.1)" stroke="currentColor" strokeWidth="2"/>
              
              {/* Hair */}
              <path d="M 80 180 Q 80 80 200 80 Q 320 80 320 180" fill="rgba(0, 217, 255, 0.3)" stroke="currentColor" strokeWidth="2"/>
              <path d="M 120 100 Q 140 60 160 100" fill="rgba(0, 217, 255, 0.3)" stroke="currentColor" strokeWidth="2"/>
              <path d="M 180 90 Q 200 50 220 90" fill="rgba(0, 217, 255, 0.3)" stroke="currentColor" strokeWidth="2"/>
              <path d="M 240 100 Q 260 60 280 100" fill="rgba(0, 217, 255, 0.3)" stroke="currentColor" strokeWidth="2"/>
              
              {/* Eyes */}
              <ellipse cx="160" cy="200" rx="20" ry="30" fill="currentColor" opacity="0.8"/>
              <ellipse cx="240" cy="200" rx="20" ry="30" fill="currentColor" opacity="0.8"/>
              <circle cx="165" cy="195" r="8" fill="white"/>
              <circle cx="245" cy="195" r="8" fill="white"/>
              
              {/* Eyebrows */}
              <path d="M 135 170 Q 160 165 185 170" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 215 170 Q 240 165 265 170" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              {/* Nose */}
              <line x1="200" y1="220" x2="200" y2="240" stroke="currentColor" strokeWidth="2"/>
              <path d="M 200 240 L 210 245" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Mouth - smile */}
              <path d="M 170 270 Q 200 290 230 270" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              {/* Ears */}
              <ellipse cx="80" cy="220" rx="15" ry="30" fill="rgba(0, 217, 255, 0.1)" stroke="currentColor" strokeWidth="2"/>
              <ellipse cx="320" cy="220" rx="15" ry="30" fill="rgba(0, 217, 255, 0.1)" stroke="currentColor" strokeWidth="2"/>
              
              {/* Neck */}
              <path d="M 160 340 L 160 380 L 240 380 L 240 340" fill="rgba(0, 217, 255, 0.1)" stroke="currentColor" strokeWidth="2"/>
              
              {/* Collar/Shirt */}
              <path d="M 140 380 L 120 400 L 280 400 L 260 380" fill="rgba(0, 217, 255, 0.2)" stroke="currentColor" strokeWidth="2"/>
              
              {/* Anime sparkles */}
              <circle cx="130" cy="150" r="3" fill="currentColor" opacity="0.6"/>
              <circle cx="270" cy="150" r="3" fill="currentColor" opacity="0.6"/>
              <circle cx="100" cy="200" r="2" fill="currentColor" opacity="0.4"/>
              <circle cx="300" cy="200" r="2" fill="currentColor" opacity="0.4"/>
              
              {/* Blush marks */}
              <ellipse cx="130" cy="240" rx="15" ry="8" fill="rgba(255, 100, 150, 0.3)"/>
              <ellipse cx="270" cy="240" rx="15" ry="8" fill="rgba(255, 100, 150, 0.3)"/>
            </svg>
          </div>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a software engineering student at Vidyavardhaka College of Engineering with a CGPA of 8.06. 
            I have strong foundations in Java and full-stack web development, with experience in building real-world applications including travel booking platforms and healthcare systems.
          </p>
          <p>
            Interested in backend systems, problem-solving, scalable software design, and fundamentals of Full Stack Development and Network Security. 
            I focus on creating efficient, reliable solutions using modern technologies like React, Node.js, and cloud platforms.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">8.06</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
