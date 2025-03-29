const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 bg-black/30 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/50 text-sm mb-3 md:mb-0">
          © {currentYear} Neketha Suresh. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a 
            href="#" 
            className="text-white/60 hover:text-primary transition-colors text-sm"
          >
            Resume
          </a>
          <a 
            href="#about" 
            className="text-white/60 hover:text-primary transition-colors text-sm"
          >
            Contact
          </a>
          <a 
            href="#" 
            className="text-white/60 hover:text-primary transition-colors text-sm"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
