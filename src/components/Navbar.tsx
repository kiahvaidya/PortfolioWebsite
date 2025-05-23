
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          KV<span className="text-green">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-item"
            >
              <span className="text-primary mr-1 text-sm">{index + 1}.</span> {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out md:hidden',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-5 right-5" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-2xl">&times;</span>
          </Button>

          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary mr-2">{index + 1}.</span> {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
