import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import mszagImage from './images/mszag.jpeg';

const DeveloperPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={sectionRefs.home}
        className="hero min-h-screen flex flex-col items-center justify-center"
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in [animation-delay:0.2s]">
            <img src={mszagImage} alt="Developer Avatar" className="w-36 h-36 rounded-full mx-auto shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in [animation-delay:0.4s]">
            <span className="text-primary">Muhammad Syifa</span> Zai Al Ghani
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-in [animation-delay:0.6s]">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="opacity-0 animate-fade-in [animation-delay:0.8s]">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 mr-4 font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 font-semibold rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        className="about min-h-screen py-20 px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 opacity-0 animate-fade-in">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-slide-in-left">
              <img
                src="https://placeholder-image-service.onrender.com/image/400x500?prompt=Developer working on laptop with code editor visible&id=843224bc-f1dd-470d-bbd7-46126d3a7a5d"
                alt="Developer working on laptop with code editor visible"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="opacity-0 animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Passionate Developer with 5+ Years Experience
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in creating beautiful, functional, and user-friendly web applications 
                using modern technologies. My passion lies in solving complex problems with 
                elegant solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With expertise in React, TypeScript, Node.js, and various cloud platforms, 
                I deliver high-quality software that exceeds expectations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        className="min-h-screen py-20 px-6 bg-muted/30"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 opacity-0 animate-fade-in">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card opacity-0 animate-fade-in [animation-delay:0.2s]">
              <img
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=E-commerce website dashboard with modern design&id=843224bc-f1dd-470d-bbd7-46126d3a7a5d"
                alt="E-commerce website dashboard with modern design"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  Full-stack e-commerce solution with React, Node.js, and MongoDB
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  View Project
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-background rounded-lg shadow-lg overflow-hidden opacity-0 animate-fade-in [animation-delay:0.4s]">
              <img
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=Task management application interface&id=843224bc-f1dd-470d-bbd7-46126d3a7a5d"
                alt="Task management application interface"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">
                  Collaborative task management application with real-time updates
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Vue.js</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Firebase</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Tailwind</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  View Project
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-background rounded-lg shadow-lg overflow-hidden opacity-0 animate-fade-in [animation-delay:0.6s]">
              <img
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=Weather application with beautiful UI&id=843224bc-f1dd-470d-bbd7-46126d3a7a5d"
                alt="Weather application with beautiful UI"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weather Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Beautiful weather application with location-based forecasts
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">OpenWeather</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Chart.js</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={sectionRefs.skills}
        className="min-h-screen py-20 px-6 bg-background"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 opacity-0 animate-fade-in">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-8 text-primary">Frontend</h3>
              {[
                { skill: 'React', level: 90 },
                { skill: 'TypeScript', level: 85 },
                { skill: 'Vue.js', level: 80 },
                { skill: 'Tailwind CSS', level: 95 },
                { skill: 'Next.js', level: 88 },
              ].map((item, index) => (
                <div key={item.skill} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="opacity-0 animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-8 text-primary">Backend & Tools</h3>
              {[
                { skill: 'Node.js', level: 88 },
                { skill: 'Python', level: 82 },
                { skill: 'MongoDB', level: 85 },
                { skill: 'PostgreSQL', level: 80 },
                { skill: 'AWS', level: 78 },
              ].map((item) => (
                <div key={item.skill} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
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
        className="min-h-screen py-20 px-6 bg-muted/30"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 opacity-0 animate-fade-in">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Work Together</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and challenging projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">john@developer.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-slide-in-right">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {['github', 'linkedin', 'twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            ))}
          </div>
          <p className="text-muted-foreground">
            © 2024 John Developer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DeveloperPortfolio;