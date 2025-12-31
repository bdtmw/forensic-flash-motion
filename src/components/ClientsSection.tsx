import { useEffect, useRef, useState } from 'react';

const clients = [
  { name: 'Sony', color: '#000000' },
  { name: 'GMC', color: '#C41E3A' },
  { name: 'Costco', color: '#E31837' },
  { name: 'Miva', color: '#5C2D91' },
  { name: 'NoteVault', color: '#00A3E0' },
  { name: 'eSUB', color: '#FF6600' },
  { name: 'Refi', color: '#00C853' },
  { name: 'SCISO', color: '#1A237E' },
  { name: 'InDev', color: '#FF5722' },
  { name: 'Refinance', color: '#2196F3' },
  { name: 'Michelin', color: '#FFD100' },
  { name: 'Speed Society', color: '#212121' },
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

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group relative bg-muted/30 border border-border hover:border-primary/50 p-8 flex items-center justify-center transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Client name as placeholder */}
              <div className="font-mono text-lg text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                {client.name}
              </div>

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
