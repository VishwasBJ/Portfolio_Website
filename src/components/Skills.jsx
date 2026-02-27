import { useState } from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Java & C/C++', level: 90, description: 'Core programming languages', icon: 'java' },
    { name: 'React & JavaScript', level: 85, description: 'Frontend development', icon: 'react' },
    { name: 'Node.js & Express', level: 80, description: 'Backend frameworks', icon: 'node' },
    { name: 'MongoDB & MySQL', level: 85, description: 'Database management', icon: 'database' },
    { name: 'Flutter & Android', level: 75, description: 'Mobile development', icon: 'mobile' },
    { name: 'Git & Linux', level: 80, description: 'Development tools', icon: 'git' }
  ]

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'java':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Coffee cup - Java symbol */}
            <g className="java-animation">
              <path d="M 20 35 L 20 45 Q 20 50 25 50 L 35 50 Q 40 50 40 45 L 40 35" 
                    stroke="currentColor" strokeWidth="2" fill="none"/>
              <line x1="20" y1="35" x2="40" y2="35" stroke="currentColor" strokeWidth="2"/>
              {/* Handle */}
              <path d="M 40 38 Q 48 38 48 43 Q 48 48 40 48" 
                    stroke="currentColor" strokeWidth="2" fill="none"/>
            </g>
            {/* Steam lines */}
            <path className="steam steam-1" d="M 25 28 Q 25 22 28 20" 
                  stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            <path className="steam steam-2" d="M 30 28 Q 30 20 33 18" 
                  stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            <path className="steam steam-3" d="M 35 28 Q 35 22 38 20" 
                  stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
          </svg>
        )
      case 'react':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* React atom symbol */}
            <g className="react-animation">
              {/* Center dot */}
              <circle cx="30" cy="30" r="4" fill="currentColor"/>
              {/* Orbits */}
              <ellipse className="orbit orbit-1" cx="30" cy="30" rx="20" ry="8" 
                       stroke="currentColor" strokeWidth="2" fill="none"/>
              <ellipse className="orbit orbit-2" cx="30" cy="30" rx="20" ry="8" 
                       stroke="currentColor" strokeWidth="2" fill="none" 
                       transform="rotate(60 30 30)"/>
              <ellipse className="orbit orbit-3" cx="30" cy="30" rx="20" ry="8" 
                       stroke="currentColor" strokeWidth="2" fill="none" 
                       transform="rotate(120 30 30)"/>
            </g>
          </svg>
        )
      case 'node':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Node.js hexagon */}
            <g className="node-animation">
              <path d="M 30 10 L 45 20 L 45 40 L 30 50 L 15 40 L 15 20 Z" 
                    stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
              {/* Inner lines */}
              <line x1="30" y1="10" x2="30" y2="50" stroke="currentColor" strokeWidth="2"/>
              <line x1="15" y1="20" x2="45" y2="40" stroke="currentColor" strokeWidth="2"/>
              <line x1="45" y1="20" x2="15" y2="40" stroke="currentColor" strokeWidth="2"/>
            </g>
            {/* Particles */}
            <circle className="particle particle-1" cx="30" cy="15" r="2" fill="currentColor"/>
            <circle className="particle particle-2" cx="42" cy="25" r="2" fill="currentColor"/>
            <circle className="particle particle-3" cx="18" cy="35" r="2" fill="currentColor"/>
          </svg>
        )
      case 'database':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Database cylinder */}
            <g className="database-animation">
              {/* Top ellipse */}
              <ellipse cx="30" cy="20" rx="15" ry="5" 
                       stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
              {/* Middle ellipse */}
              <ellipse className="db-line db-line-1" cx="30" cy="30" rx="15" ry="5" 
                       stroke="currentColor" strokeWidth="2" fill="none"/>
              {/* Bottom ellipse */}
              <ellipse className="db-line db-line-2" cx="30" cy="40" rx="15" ry="5" 
                       stroke="currentColor" strokeWidth="2" fill="none"/>
              {/* Sides */}
              <line x1="15" y1="20" x2="15" y2="40" stroke="currentColor" strokeWidth="2"/>
              <line x1="45" y1="20" x2="45" y2="40" stroke="currentColor" strokeWidth="2"/>
            </g>
            {/* Data flow */}
            <circle className="data-flow data-1" cx="30" cy="25" r="1.5" fill="currentColor"/>
            <circle className="data-flow data-2" cx="30" cy="35" r="1.5" fill="currentColor"/>
          </svg>
        )
      case 'mobile':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Mobile phone */}
            <g className="mobile-animation">
              <rect x="20" y="10" width="20" height="40" rx="2" 
                    stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
              {/* Screen */}
              <rect x="22" y="15" width="16" height="28" 
                    stroke="currentColor" strokeWidth="1" fill="none"/>
              {/* Home button */}
              <circle cx="30" cy="47" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
            </g>
            {/* Notification dots */}
            <circle className="notification notif-1" cx="25" cy="20" r="1.5" fill="currentColor"/>
            <circle className="notification notif-2" cx="30" cy="25" r="1.5" fill="currentColor"/>
            <circle className="notification notif-3" cx="35" cy="30" r="1.5" fill="currentColor"/>
            {/* Signal waves */}
            <path className="signal signal-1" d="M 42 15 Q 45 18 42 21" 
                  stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path className="signal signal-2" d="M 45 12 Q 50 18 45 24" 
                  stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        )
      case 'git':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Git branch structure */}
            <g className="git-animation">
              {/* Main branch */}
              <line x1="30" y1="15" x2="30" y2="45" stroke="currentColor" strokeWidth="2"/>
              {/* Branch line */}
              <path d="M 30 25 Q 35 25 40 30 L 40 45" 
                    stroke="currentColor" strokeWidth="2" fill="none"/>
              {/* Commits */}
              <circle className="commit commit-1" cx="30" cy="15" r="3" 
                      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
              <circle className="commit commit-2" cx="30" cy="25" r="3" 
                      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
              <circle className="commit commit-3" cx="40" cy="30" r="3" 
                      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
              <circle className="commit commit-4" cx="30" cy="35" r="3" 
                      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
              <circle className="commit commit-5" cx="40" cy="45" r="3" 
                      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
              <circle className="commit commit-6" cx="30" cy="45" r="3" 
                      stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
            </g>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {renderIcon(skill.icon)}
              </div>
              <h3>{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}% Proficiency</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
