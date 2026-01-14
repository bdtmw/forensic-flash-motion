import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Phone, Calendar, Mail, MapPin, ExternalLink } from 'lucide-react';


const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background forensic-grid" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="evidence-tag mx-auto mb-4">
              <span>Book a Discovery Call Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">We Help Identify, </span>
              <span className="text-primary glow-text">Preserve</span>
              <span className="text-foreground">, and Analyze Digital Evidence</span>
            </h2>
            <p className="text-xl text-secondary font-mono glow-text-secondary">
              Digital Forensics Examiners | Expert Witness Support

            </p>
          </div>

          {/* Contact cards */}
          <div className={`grid md:grid-cols-2 gap-6 mb-12 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {/* Call card */}
            <div className="case-file group hover:border-primary/50 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-lg text-foreground mb-1">Direct Line</h3>
                  <a
                    href="tel:858-692-3306"
                    className="text-primary font-mono text-xl hover:glow-text transition-all duration-300"
                  >
                    858-692-3306
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">
                    Available for immediate consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule card */}
            <div className="case-file group hover:border-secondary/50 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-secondary/30 flex items-center justify-center shrink-0 group-hover:border-secondary group-hover:shadow-[0_0_15px_hsl(var(--secondary)/0.3)] transition-all duration-300">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-mono text-lg text-foreground mb-1">Book Appointment</h3>
                  <a
                    href="https://calendly.com/digitalforensics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-mono hover:glow-text-secondary transition-all duration-300 flex items-center gap-2"
                  >
                    calendly.com/digitalforensics
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">
                    Schedule a discovery call
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            <p className="text-muted-foreground mb-8 font-mono">
              {'>'} Ready to start your project? Let's investigate the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://calendly.com/digitalforensics" target="_blank">
                <Button variant="hero" size="xl" className="group">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Call Now
                </Button>
              </a>
              <a href="https://calendly.com/digitalforensics" target="_blank">
                <Button variant="outline" size="xl">
                  <Mail className="w-5 h-5" />
                  Send Message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
