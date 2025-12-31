import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Fingerprint, Shield, Code, TrendingUp } from 'lucide-react';
import profileHero from '@/assets/DerickP.png';

const AboutSection = () => {
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

  const skills = [
    { icon: Shield, label: 'Digital Forensics' },
    { icon: Code, label: 'Web Development' },
    { icon: TrendingUp, label: 'Growth Hacking' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 forensic-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual side */}
          <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Profile frame */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Fingerprint decoration */}
              <div className="absolute -top-8 -right-8 text-primary/20">
                <Fingerprint size={120} strokeWidth={1} />
              </div>
              
              {/* Glowing frame effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-xl" />
              
              {/* Main image container */}
              <div className="case-file p-2 relative">
                <div className="relative overflow-hidden">
                  {/* Actual profile image */}
                  <img 
                    src={profileHero} 
                    alt="Derick Downs - Digital Forensics Expert" 
                    className="w-full aspect-square object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/50 animate-scan-vertical" />
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-xs text-primary mb-1 uppercase tracking-widest">
                      Subject Profile
                    </div>
                    <div className="font-mono text-2xl text-foreground glow-text">
                      DERICK DOWNS
                    </div>
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="absolute -bottom-4 left-4 evidence-tag">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Status: Available</span>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -right-4 top-1/4 space-y-3">
                {skills.map((skill, i) => (
                  <div
                    key={skill.label}
                    className={`flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-3 py-2 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(i + 2) * 200}ms` }}
                  >
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <div className="evidence-tag mb-4">
              <span>Section 01</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Contract</span>
              <span className="text-primary block glow-text">Developer</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I can deliver your digital asset quickly, faster than any other digital agency. 
              With over <span className="text-primary font-semibold">20 years of experience</span>, 
              I leverage the latest A.I. tools to streamline the process and bring innovative solutions to clients.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I promise to <span className="text-secondary font-semibold">beat any agency's prices</span>, 
              turnaround times, and ROI for my clients. Hire me for efficient, expert service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: '20+', label: 'Years' },
                { value: '100+', label: 'Clients' },
                { value: '∞', label: 'Dedication' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center p-4 bg-card/50 border border-border relative overflow-hidden group hover:border-primary/50 transition-colors duration-300"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="text-3xl md:text-4xl font-mono font-bold text-primary glow-text relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1 relative z-10">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button variant="forensic" size="lg" className="group">
              View Past Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
