import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 py-8 px-4 md:px-8 mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="futuristic-subtitle text-lg font-medium mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              A passionate software engineer with a focus on creating innovative solutions. 
              Constantly exploring new technologies and methodologies to stay at the forefront of software development.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="futuristic-subtitle text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="futuristic-subtitle text-lg font-medium mb-4">Get In Touch</h3>
            <p className="text-gray-400 text-sm mb-2">
              Feel free to reach out to discuss potential opportunities or collaborations.
            </p>
            <a 
              href="mailto:neketha@example.com"
              className="inline-block text-primary hover:text-primary/80 transition-colors text-sm"
            >
              neketha@example.com
            </a>
            <div className="mt-4">
              <a 
                href="tel:+17042226867"
                className="inline-block tech-card px-4 py-2 rounded-md neon-border text-sm"
              >
                +1 (704) 222-6867
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <div className="grid-background h-px w-full my-4"></div>
          <p>© {currentYear} Neketha Suresh. All rights reserved.</p>
          <p className="mt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            Built with React and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;