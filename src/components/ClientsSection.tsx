import { useEffect, useRef, useState } from 'react';
import sonyLogo from '@/assets/logos/sony.svg';
import gmcLogo from '@/assets/logos/gmc.svg';
import michelinLogo from '@/assets/logos/michelin.svg';

const clients = [
  { name: 'Sony', logo: sonyLogo },
  { name: 'GMC', logo: gmcLogo },
  { name: 'Costco', logo: null },
  { name: 'Miva', logo: null },
  { name: 'NoteVault', logo: null },
  { name: 'eSUB', logo: null },
  { name: 'Refi', logo: null },
  { name: 'SCISO', logo: null },
  { name: 'InDev', logo: null },
  { name: 'Refinance', logo: null },
  { name: 'Michelin', logo: michelinLogo },
  { name: 'Speed Society', logo: null },
];

const ClientsSection = () => {
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

  // Double the clients for seamless loop
  const marqueeClients = [...clients, ...clients];

  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="evidence-tag mx-auto mb-4">
            <span>Section 03</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Evidence </span>
            <span className="text-secondary glow-text-secondary">Board</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            {'>'} Verified collaborations with industry leaders
          </p>
        </div>

        {/* Marquee Container */}
        <div className={`relative ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Marquee track */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee hover:pause">
              {marqueeClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="group relative flex-shrink-0 mx-4 bg-muted/30 border border-border hover:border-primary/50 p-8 flex items-center justify-center transition-all duration-500 min-w-[200px] h-[120px]"
                >
                  {/* Logo or name */}
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-12 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="font-mono text-lg text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {client.name}
                    </div>
                  )}

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-transparent group-hover:border-primary/50 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-transparent group-hover:border-primary/50 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - reverse direction */}
          <div className="overflow-hidden mt-4">
            <div className="flex animate-marquee-reverse hover:pause">
              {[...marqueeClients].reverse().map((client, index) => (
                <div
                  key={`${client.name}-reverse-${index}`}
                  className="group relative flex-shrink-0 mx-4 bg-muted/30 border border-border hover:border-secondary/50 p-8 flex items-center justify-center transition-all duration-500 min-w-[200px] h-[120px]"
                >
                  {/* Logo or name */}
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-12 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="font-mono text-lg text-muted-foreground group-hover:text-secondary transition-colors duration-300 text-center">
                      {client.name}
                    </div>
                  )}

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-transparent group-hover:border-secondary/50 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-transparent group-hover:border-secondary/50 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative string/thread connecting elements */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="10" y1="10" x2="90" y2="90" stroke="hsl(var(--primary))" strokeWidth="0.1" />
            <line x1="90" y1="10" x2="10" y2="90" stroke="hsl(var(--secondary))" strokeWidth="0.1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
