
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="social-icon" />, href: 'https://github.com/kiahvaidya'},
    { icon: <Linkedin className="social-icon" />, href: 'https://www.linkedin.com/in/kiahvaidya/'},
    { icon: <Instagram className="social-icon" />, href: 'https://www.instagram.com/kiahvaidya/'},
    { icon: <Mail className="social-icon" />, href: 'mailto:kiahv17@gmail.com' }
  ];
  

  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Designed & Built by Kiah Vaidya</p>
            <p>© {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
