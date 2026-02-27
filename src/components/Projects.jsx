import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Make My Tour - Travel Booking Website',
      description: 'Comprehensive travel booking platform enabling users to search, compare, and book flights, hotels, and vacation packages. Features user authentication, real-time availability checking, secure payment integration, booking management, and interactive travel itinerary planning.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      color: '#00d9ff',
      icon: 'plane'
    },
    {
      title: 'Arogya - Digital Rural Healthcare',
      description: 'Full-stack healthcare web application enabling patients to book online doctor consultations and access essential medical services. Features secure user authentication, appointment scheduling, product management, chatbot assistance, and e-commerce functionality.',
      tech: ['JavaScript', 'HTML/CSS', 'SQL'],
      color: '#00ffcc',
      icon: 'health'
    },
    {
      title: 'NZT Stock Price Prediction System',
      description: 'AI-powered stock price prediction system analyzing historical market data to forecast future price trends. Applied machine learning algorithms on time-series financial data with data preprocessing, feature engineering, and trend analysis.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      color: '#0a4d68',
      icon: 'stock'
    }
  ]

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'plane':
        return (
          <svg className="project-icon" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <g className="plane-animation">
              {/* Plane body */}
              <path d="M 60 40 L 80 60 L 60 65 L 40 60 Z" fill="currentColor" opacity="0.8"/>
              {/* Wings */}
              <path d="M 30 55 L 60 60 L 90 55 L 85 65 L 60 65 L 35 65 Z" fill="currentColor" opacity="0.6"/>
              {/* Tail */}
              <path d="M 60 65 L 55 80 L 65 80 Z" fill="currentColor" opacity="0.7"/>
              {/* Window */}
              <circle cx="60" cy="55" r="4" fill="white" opacity="0.9"/>
            </g>
            {/* Cloud 1 */}
            <ellipse className="cloud cloud-1" cx="20" cy="30" rx="12" ry="8" fill="currentColor" opacity="0.3"/>
            {/* Cloud 2 */}
            <ellipse className="cloud cloud-2" cx="95" cy="85" rx="15" ry="10" fill="currentColor" opacity="0.3"/>
          </svg>
        )
      case 'health':
        return (
          <svg className="project-icon" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <g className="health-animation">
              {/* Heart shape */}
              <path d="M 60 85 C 60 85 35 65 35 50 C 35 40 42 35 50 35 C 55 35 60 40 60 40 C 60 40 65 35 70 35 C 78 35 85 40 85 50 C 85 65 60 85 60 85 Z" 
                    fill="currentColor" opacity="0.8" stroke="currentColor" strokeWidth="2"/>
              {/* Pulse line */}
              <path className="pulse-line" d="M 20 60 L 35 60 L 42 45 L 50 75 L 58 60 L 70 60 L 78 45 L 85 60 L 100 60" 
                    stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9"/>
            </g>
            {/* Plus symbols */}
            <g className="plus-symbol plus-1" opacity="0.5">
              <line x1="25" y1="25" x2="25" y2="35" stroke="currentColor" strokeWidth="2"/>
              <line x1="20" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="2"/>
            </g>
            <g className="plus-symbol plus-2" opacity="0.5">
              <line x1="95" y1="25" x2="95" y2="35" stroke="currentColor" strokeWidth="2"/>
              <line x1="90" y1="30" x2="100" y2="30" stroke="currentColor" strokeWidth="2"/>
            </g>
          </svg>
        )
      case 'stock':
        return (
          <svg className="project-icon" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <g className="stock-animation">
              {/* Stock chart line */}
              <path className="stock-line" d="M 20 80 L 35 70 L 45 75 L 55 55 L 70 60 L 85 40 L 100 45" 
                    stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Chart bars */}
              <rect className="bar bar-1" x="25" y="85" width="8" height="15" fill="currentColor" opacity="0.6"/>
              <rect className="bar bar-2" x="45" y="75" width="8" height="25" fill="currentColor" opacity="0.6"/>
              <rect className="bar bar-3" x="65" y="65" width="8" height="35" fill="currentColor" opacity="0.6"/>
              <rect className="bar bar-4" x="85" y="55" width="8" height="45" fill="currentColor" opacity="0.6"/>
            </g>
            {/* Arrow up */}
            <g className="arrow-up">
              <line x1="95" y1="30" x2="95" y2="15" stroke="currentColor" strokeWidth="2"/>
              <polyline points="90,20 95,15 100,20" stroke="currentColor" strokeWidth="2" fill="none"/>
            </g>
            {/* Dollar sign */}
            <text x="15" y="25" fill="currentColor" fontSize="20" opacity="0.7">$</text>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ '--project-color': project.color }}
            >
              <div className="project-image">
                {renderIcon(project.icon)}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
