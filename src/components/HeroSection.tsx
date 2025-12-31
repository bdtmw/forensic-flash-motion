import { Button } from './ui/button';
import TypewriterText from './TypewriterText';
import GlitchText from './GlitchText';
import { Phone, Calendar, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Digital forensics background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 forensic-grid opacity-30" />
      
      {/* Animated data streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px data-stream"
            style={{
              left: `${10 + i * 12}%`,
              height: `${100 + Math.random() * 100}px`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Evidence tag */}
          <div className="evidence-tag mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Case File: 001</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <GlitchText 
              text="DERICK" 
              className="block text-foreground glow-text" 
            />
            <span className="block text-primary glow-text">
              <TypewriterText text="DOWNS" delay={500} speed={100} />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in-up delay-300 font-mono">
            <span className="text-secondary">{'>'}</span> 20 years of digital experience specializing in{' '}
            <span className="text-primary">Digital Forensics</span>,{' '}
            <span className="text-primary">Investigations</span>,{' '}
            <span className="text-primary">Web Development</span>, and{' '}
            <span className="text-primary">Growth Hacking</span>.
          </p>

          {/* Quote */}
          <blockquote className="border-l-2 border-secondary pl-4 mb-10 animate-fade-in-up delay-400">
            <p className="text-xl md:text-2xl font-mono text-secondary glow-text-secondary italic">
              "Think Smarter, Not Harder"
            </p>
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
            <Button variant="hero" size="xl" className="group">
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call Now
            </Button>
            <Button variant="forensic" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in-up delay-700"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>

      {/* Decorative corner elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/20 opacity-50 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-secondary/20 opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
