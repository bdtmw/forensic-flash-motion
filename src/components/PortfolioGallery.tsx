import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import serviceWeb from '@/assets/service-web.jpg';
import serviceForensics from '@/assets/service-forensics.jpg';
import serviceEcommerce from '@/assets/service-ecommerce.jpg';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: serviceEcommerce,
    description: 'Full-stack online store with payment integration',
  },
  {
    title: 'Forensic Analysis Tool',
    category: 'Digital Forensics',
    image: serviceForensics,
    description: 'Custom investigation and data recovery software',
  },
  {
    title: 'Corporate Website',
    category: 'Web Design',
    image: serviceWeb,
    description: 'Modern responsive website with CMS integration',
  },
  {
    title: 'Brand Identity System',
    category: 'Design',
    image: serviceWeb,
    description: 'Complete visual identity and brand guidelines',
  },
  {
    title: 'Security Audit Platform',
    category: 'Digital Forensics',
    image: serviceForensics,
    description: 'Enterprise security monitoring dashboard',
  },
  {
    title: 'Mobile Commerce App',
    category: 'App Development',
    image: serviceEcommerce,
    description: 'Cross-platform shopping experience',
  },
];

const PortfolioGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filters = ['All', 'Web Development', 'Digital Forensics', 'Design'];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute inset-0 forensic-grid opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="evidence-tag mx-auto mb-4">
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Case </span>
            <span className="text-secondary glow-text-secondary">Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            {'>'} Evidence of successful digital transformations
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                  : 'bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`group relative overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-card border border-border">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Scan line effect */}
                <div className={`absolute inset-0 overflow-hidden ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-horizontal" />
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/0 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/0 group-hover:border-primary transition-colors duration-300" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Category tag */}
                  <div className="evidence-tag mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span>{item.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-mono font-bold text-foreground mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {item.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                    <button className="p-2 bg-primary/20 hover:bg-primary/40 border border-primary/30 backdrop-blur-sm transition-colors duration-300">
                      <Eye className="w-4 h-4 text-primary" />
                    </button>
                    <button className="p-2 bg-primary/20 hover:bg-primary/40 border border-primary/30 backdrop-blur-sm transition-colors duration-300">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
