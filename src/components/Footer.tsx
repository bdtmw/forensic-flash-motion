import { Fingerprint } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 forensic-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
              <Fingerprint className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-mono text-lg tracking-wider">
                DERICK<span className="text-primary">.</span>DOWNS
              </span>
              <p className="text-xs text-muted-foreground font-mono">
                Digital Forensics & Growth Hacking
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 font-mono text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">
              Tools
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">©</span> {new Date().getFullYear()} Derick Downs
          </div>
        </div>

        {/* Terminal style footer message */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-secondary">$</span> Building dope stuff online since 2004
            <span className="ml-2 inline-block w-2 h-4 bg-primary/50 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
