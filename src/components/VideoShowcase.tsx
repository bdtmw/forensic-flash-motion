import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

const VideoShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-card/30 to-background"
    >
      {/* Background grid */}
      <div className="absolute inset-0 forensic-grid opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="evidence-tag mx-auto mb-4">
            <span>Featured Reel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">See It In </span>
            <span className="text-primary glow-text">Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            {'>'} Visual evidence of digital excellence
          </p>
        </div>

        {/* Video container */}
        <div className={`relative max-w-5xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          {/* Video frame with forensic styling */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50 blur-lg group-hover:opacity-75 transition duration-500" />
            
            {/* Video wrapper */}
            <div className="relative bg-card border border-border overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-10" />

              {/* Video placeholder with animated gradient */}
              <div className="aspect-video bg-gradient-to-br from-muted via-card to-muted relative overflow-hidden">
                {/* Animated scanning effect */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent scan-effect" />
                </div>

                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-primary ml-1" />
                    </div>
                    <p className="font-mono text-muted-foreground">
                      [ Demo Reel Coming Soon ]
                    </p>
                  </div>
                </div>

                {/* Overlay grid pattern */}
                <div className="absolute inset-0 forensic-grid opacity-20" />
              </div>

              {/* Video controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={togglePlay}
                    className="bg-background/50 backdrop-blur-sm hover:bg-background/80"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="bg-background/50 backdrop-blur-sm hover:bg-background/80"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Progress bar placeholder */}
                <div className="flex-1 mx-4 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>

                <span className="font-mono text-xs text-muted-foreground">00:00 / 02:30</span>
              </div>
            </div>
          </div>

          {/* Video stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { label: 'Projects', value: '150+' },
              { label: 'Happy Clients', value: '100+' },
              { label: 'Years Experience', value: '20+' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center p-4 bg-card/50 border border-border ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(i + 3) * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-mono font-bold text-primary glow-text">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
