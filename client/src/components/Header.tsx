import { 
  FaLinkedin, 
  FaGithub,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full py-6 md:py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
          <span className="text-primary">N</span>eketha <span className="text-primary">S</span>uresh
        </h1>
        <div className="flex items-center space-x-3 md:space-x-4">
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a 
            href="mailto:sureshneketha@gmail.com" 
            className="text-white/70 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a 
            href="tel:+17042226867" 
            className="text-white/70 hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <FaPhone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
