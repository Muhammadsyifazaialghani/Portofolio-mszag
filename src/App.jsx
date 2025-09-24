import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const ProfessionalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  // Typewriter effect
  useEffect(() => {
    const text = 'Muhammad Syifa';
    let index = 0;
    
    const timer = setTimeout(() => {
      setIsTyping(true);
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTyping(false), 500);
        }
      }, 150); // Speed of typing (150ms per character)
      
      return () => clearInterval(typeInterval);
    }, 800); // Delay before starting to type
    
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Update active section
      const offset = 100;
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && scrollPosition >= ref.current.offsetTop - offset) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.opacity-0');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">Portfolio</div>
          <ul className="nav-links">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={sectionRefs.home}
        id="home"
        className="hero-section section"
      >
        <div className="hero-content">
          <div className="opacity-0" style={{animationDelay: '0.2s'}}>
            <img
              src="/src/assets/images/mszag.jpeg"
              alt="Developer Portrait"
              className="hero-image"
            />
          </div>
          <div className="hero-text-content">
            <h1 className="hero-title opacity-0" style={{animationDelay: '0.4s'}}>
              <span className={`hero-name-primary ${isTyping ? 'typing' : ''}`}>
                {displayText}
                {isTyping && <span className="cursor">|</span>}
              </span> Zai Al Ghani
            </h1>
            <p className="hero-subtitle opacity-0" style={{animationDelay: '0.6s'}}>
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <div className="hero-buttons opacity-0" style={{animationDelay: '0.8s'}}>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        id="about"
        className="about-section section"
      >
        <div className="section-container">
          <h2 className="section-title opacity-0">About Me</h2>
          <div className="about-grid">
            <div className="about-image-container opacity-0 animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop"
                alt="Developer workspace"
                className="about-image"
              />
            </div>
            <div className="about-content opacity-0 animate-slide-in-right">
              <h3>Passionate Developer with 5+ Years Experience</h3>
              <p>
                I specialize in creating beautiful, functional, and user-friendly web applications
                using modern technologies. My passion lies in solving complex problems with
                elegant solutions.
              </p>
              <p>
                With expertise in React, TypeScript, Node.js, and various cloud platforms,
                I deliver high-quality software that exceeds expectations.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Awards Won</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        id="projects"
        className="projects-section section"
      >
        <div className="section-container">
          <h2 className="section-title opacity-0">Featured Projects</h2>
          <div className="projects-grid">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
                tags: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management application with real-time updates',
                image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
                tags: ['Vue.js', 'Firebase', 'Tailwind']
              },
              {
                title: 'Weather Dashboard',
                description: 'Beautiful weather application with location-based forecasts',
                image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
                tags: ['React', 'OpenWeather', 'Chart.js']
              }
            ].map((project, index) => (
              <div
                key={index}
                className="project-card opacity-0"
                style={{animationDelay: `${0.2 * (index + 1)}s`}}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <button className="btn-primary">View Project</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={sectionRefs.skills}
        id="skills"
        className="skills-section section"
      >
        <div className="section-container">
          <h2 className="section-title opacity-0">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category opacity-0 animate-slide-in-left">
              <h3>Frontend</h3>
              {[
                { skill: 'React', level: 90 },
                { skill: 'TypeScript', level: 85 },
                { skill: 'Vue.js', level: 80 },
                { skill: 'Tailwind CSS', level: 95 },
                { skill: 'Next.js', level: 88 }
              ].map((item) => (
                <div key={item.skill} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{item.skill}</span>
                    <span className="skill-percentage">{item.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="skill-category opacity-0 animate-slide-in-right">
              <h3>Backend & Tools</h3>
              {[
                { skill: 'Node.js', level: 88 },
                { skill: 'Python', level: 82 },
                { skill: 'MongoDB', level: 85 },
                { skill: 'PostgreSQL', level: 80 },
                { skill: 'AWS', level: 78 }
              ].map((item) => (
                <div key={item.skill} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{item.skill}</span>
                    <span className="skill-percentage">{item.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        id="contact"
        className="contact-section section"
      >
        <div className="section-container">
          <h2 className="section-title opacity-0">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info opacity-0 animate-slide-in-left">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and challenging projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <div>Email</div>
                  <div>mszag@developer.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <div>Phone</div>
                  <div>+62 (542) 123-4567</div>
                </div>
              </div>
            </div>
            <div className="contact-form opacity-0 animate-slide-in-right">
              <form>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    rows={5}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          {[
            { name: 'GitHub', icon: '🔗', url: '#' },
            { name: 'LinkedIn', icon: '💼', url: '#' },
            { name: 'Twitter', icon: '🐦', url: '#' },
            { name: 'Instagram', icon: '📷', url: '#' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="social-link"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p>© 2024 Muhammad Syifa Zai Al Ghani. All rights reserved.</p>
        <p>Built with React & passion for elegant design</p>
      </footer>
    </div>
  );
};

export default ProfessionalPortfolio;