import { Shield, AlertTriangle, ArrowRight, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GlitchText from './GlitchText';

const SpywareCheckSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      {/* Animated warning stripes */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--destructive)) 35px, hsl(var(--destructive)) 70px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-destructive/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-destructive/50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-destructive/50" />

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-destructive/10 border border-destructive/30 rounded-full">
                  <AlertTriangle className="w-4 h-4 text-destructive animate-pulse" />
                  <span className="font-mono text-xs text-destructive uppercase tracking-wider">Security Alert</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  <GlitchText text="Is Someone" />
                  <br />
                  <span className="text-destructive">Spying On You?</span>
                </h2>
                
                <p className="text-muted-foreground">
                  Suspicious activity on your phone? Our free spyware scan can detect hidden 
                  surveillance software, keyloggers, and unauthorized monitoring applications.
                </p>

                <ul className="space-y-2 text-sm">
                  {[
                    'Detect hidden spyware & stalkerware',
                    'Identify unauthorized data access',
                    'Scan for keyloggers & trackers',
                    'Instant results, no installation required',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/spyware-scan">
                  <Button variant="hero" size="xl" className="group mt-5">
                    Free Spyware Check
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Right - Visual */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-destructive/20 animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="absolute inset-4 rounded-full border-2 border-destructive/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
                  <div className="absolute inset-8 rounded-full border-2 border-destructive/40 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.6s' }} />
                  
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-destructive/10 border-2 border-destructive/50 flex items-center justify-center">
                      <Smartphone className="w-12 h-12 text-destructive" />
                    </div>
                  </div>

                  {/* Warning indicators */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive rounded-full flex items-center justify-center animate-bounce">
                    <AlertTriangle className="w-4 h-4 text-destructive-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpywareCheckSection;
