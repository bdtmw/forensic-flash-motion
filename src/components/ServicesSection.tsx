import { useEffect, useRef, useState } from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  MessageSquare, 
  Cloud, 
  Share2, 
  Search, 
  TrendingUp,
  Shield
} from 'lucide-react';
import serviceCloud from '@/assets/service_cloud.webp';
import serviceData from '@/assets/service_data.webp';
import serviceAnalysis from '@/assets/service_analysis.webp';
import serviceMobile from '@/assets/service_mobile.webp';
import serviceComp from '@/assets/service_comp.webp';
import servicePriv from '@/assets/service_private.webp';
import serviceWitness from '@/assets/service_witness.webp';
import serviceEvidence from '@/assets/service_evidence.webp';
const services = [
  {
    icon: Globe,
    title: 'Mobile Device Forensics',
    description: 'Court-admissible extraction and analysis of cell phones, tablets, and mobile data',
    image: serviceMobile,
    featured: true,
  },
  {
    icon: ShoppingCart,
    title: 'Computer & Server Forensics',
    description: 'Forensic examination of computers, servers, and storage media',
    image: serviceComp,
    featured: true,
  },
  {
    icon: Palette,
    title: 'Cloud & Account Forensics',
    description: 'Forensic collection and analysis of cloud, email, and online account data',
    image: serviceCloud,
    featured: true,
  },
  {
    icon: MessageSquare,
    title: 'Data Recovery & Extractions',
    description: 'Recovery of deleted, damaged, or inaccessible digital evidence',
    image: serviceData,
    featured: true,
  },
  {
    icon: Cloud,
    title: 'Incident Response & Breach Analysis',
    description: 'Forensic investigation of cyber intrusions and security incidents',
    image: serviceAnalysis,
    featured: true,
  },
  {
    icon: Share2,
    title: 'Private & Digital Investigations',
    description: 'Confidential investigations combining digital evidence and field intelligence',
    image: servicePriv,
    featured: true,
  },
  {
    icon: Search,
    title: 'Expert Witness & Litigation Support',
    description: 'Court-ready reporting, declarations, and expert testimony',
    image: serviceWitness,
    featured: true,
  },
  {
    icon: TrendingUp,
    title: 'Evidence Preservation & Chain of Custody',
    description: 'Defensible handling and documentation of digital evidence',
    image: serviceEvidence,
    featured: true,
  },

];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-card/50 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 forensic-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="evidence-tag mx-auto mb-4">
            <span>Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Case </span>
            <span className="text-primary glow-text">Files</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            {'>'} Services offered by Octo Digital Forensics

          </p>
        </div>

        {/* Featured services with images */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.filter(s => s.featured).map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image background */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image!}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                
                {/* Scan effect on hover */}
                <div className={`absolute inset-0 overflow-hidden transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary animate-scan-vertical" />
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-mono font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-13">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.filter(s => !s.featured).map((service, index) => (
            <div
              key={service.title}
              className={`case-file group cursor-pointer hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-mono font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>

              {/* Decorative number */}
              <div className="absolute top-4 right-8 font-mono text-4xl font-bold text-muted/20 group-hover:text-primary/10 transition-colors duration-300">
                {String(index + 4).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
