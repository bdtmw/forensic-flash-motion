import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Tools', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className='h-[80px]'>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              {/* <div className="w-8 h-8 border border-primary glow-border flex items-center justify-center">
              <span className="text-primary font-mono font-bold text-lg">O</span>
            </div>
            <span className="font-mono text-xl tracking-wider glow-text hidden sm:block">
              Octo Digital Forensics
            </span> */}
              <img src={logo} alt="" className='w-[115px]' />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider uppercase"
                >
                  {link.label}
                </a>
              ))}
               <Link to="/spyware-scan"  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider uppercase">
                    Free Spyware Check
                  
                </Link>
              <a href="https://calendly.com/digitalforensics" target="_blank">
                <Button
                  variant="forensic"
                  size="sm"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </Button>
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="https://calendly.com/digitalforensics" target="_blank">
                  <Button variant="forensic" size="sm" className="w-full mt-2" >
                    Book a Call
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
