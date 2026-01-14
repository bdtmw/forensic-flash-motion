import { Button } from './ui/button';
import TypewriterText from './TypewriterText';
import GlitchText from './GlitchText';
import { Phone, Calendar, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/digital-forensics-businessman-working-with-virtual-2025-12-09-08-25-33-utc.mov';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <video
          src="https://todolist.freelancerportfolio.me/wp-content/uploads/2025/12/digital-forensics-businessman-working-with-virtual-2025-12-09-08-25-33-utc-1.mp4"   // your video file or URL
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          Your browser does not support the video tag.
        </video>

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
            <span>San Diego Digital Forensics Agency</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <GlitchText
              text="OCTO DIGITAL"
              className="block text-foreground glow-text"
            />
            <span className="block text-primary glow-text">
              <TypewriterText text="FORENSICS" delay={500} speed={100} />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in-up delay-300 font-mono">
            <span className="text-secondary">{'- '}</span>
            Octo Digital Forensics is a digital forensics and incident response firm specializing
            in high-integrity, confidential investigations. Our examiners apply court-defensible
            methodologies, validated forensic tools, and industry-standard procedures to produce
            accurate, repeatable, and legally sound findings. Book a FREE Call to discuss your
            situation.
            {/* {' '}
            <span className="text-primary">mobile device</span>,{' '}
            <span className="text-primary">computer extractions</span>,{' '}
            <span className="text-primary">digital evidence recovery</span>,{' '}
            <span className="text-primary">cyber intrusion analysis</span>, and{' '}
            <span className="text-primary">complex digital investigations</span>. */}
          </p>

          {/* Quote */}
          <blockquote className="border-l-2 border-secondary pl-4 mb-10 animate-fade-in-up delay-400">
            <p className="text-xl md:text-2xl font-mono text-secondary glow-text-secondary italic">
              "Where Digital Evidence Is Examined, Preserved, and Proven"
            </p>
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
            <a href="https://calendly.com/digitalforensics" target="_blank">
              <Button variant="hero" size="xl" className="group">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Now
              </Button>
            </a>     
            <a href="https://calendly.com/digitalforensics" target="_blank">
            <Button variant="forensic" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </Button>
          </a>
        </div>
      </div>
    </div>

      {/* Scroll indicator */ }
  <a
    href="#about"
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in-up delay-700"
  >
    <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
    <ChevronDown className="w-6 h-6 animate-bounce" />
  </a>

  {/* Decorative corner elements */ }
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/20 opacity-50 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-secondary/20 opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />

  {/* Glowing orbs */ }
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section >
  );
};

export default HeroSection;
