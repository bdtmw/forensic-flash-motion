import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? 'glitch' : ''}>{text}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-primary/50"
            style={{ clipPath: 'inset(20% 0 50% 0)', transform: 'translateX(-2px)' }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 text-secondary/50"
            style={{ clipPath: 'inset(50% 0 20% 0)', transform: 'translateX(2px)' }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
