import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Phone, Calendar, Smartphone, Wifi, Lock, Search, CheckCircle2, Usb, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScanlineOverlay from '@/components/ScanlineOverlay';
import ParticleField from '@/components/ParticleField';
import GlitchText from '@/components/GlitchText';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo.png';

// WebUSB API types
interface USBDevice {
  productName?: string;
  manufacturerName?: string;
}

interface USB {
  requestDevice(options: { filters: object[] }): Promise<USBDevice>;
}

declare global {
  interface Navigator {
    usb?: USB;
  }
}
const SpywareScan = () => {
  const [connectionState, setConnectionState] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);
  const [currentCheck, setCurrentCheck] = useState('');
  const [connectedDevice, setConnectedDevice] = useState<string | null>(null);

  const scanChecks = [
    'Analyzing system processes...',
    'Checking for hidden applications...',
    'Scanning network connections...',
    'Detecting keyloggers...',
    'Analyzing data transmission patterns...',
    'Checking for root access exploits...',
    'Scanning for surveillance software...',
    'Verifying app permissions...',
    'Analyzing background services...',
    'Final security assessment...',
  ];

  // Request USB device connection using WebUSB API
  const connectDevice = async () => {
    try {
      // Check if WebUSB is supported
      if (!navigator.usb) {
        alert('WebUSB is not supported in this browser. Please use Chrome or Edge.');
        return;
      }

      setConnectionState('connecting');

      // Request USB device - this will show the browser's device picker
      const device = await navigator.usb.requestDevice({
        filters: [] // Empty filters to show all devices
      });

      // Device selected successfully
      setConnectedDevice(device.productName || device.manufacturerName || 'Unknown Device');
      setConnectionState('connected');
    } catch (error) {
      // User cancelled or no device selected
      console.log('Device connection cancelled or failed:', error);
      setConnectionState('disconnected');
    }
  };

  useEffect(() => {
    if (scanState === 'scanning') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 3;
          const checkIndex = Math.floor((newProgress / 100) * scanChecks.length);
          setCurrentCheck(scanChecks[Math.min(checkIndex, scanChecks.length - 1)]);

          if (newProgress >= 100) {
            clearInterval(interval);
            setScanState('complete');
            return 100;
          }
          return newProgress;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [scanState]);

  const startScan = () => {
    if (connectionState !== 'connected') return;
    setScanState('scanning');
    setProgress(0);
  };

  const resetScan = () => {
    setScanState('idle');
    setProgress(0);
    setCurrentCheck('');
    setConnectionState('disconnected');
    setConnectedDevice(null);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground noise-overlay">
      <ParticleField />
      <ScanlineOverlay />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Octo Digital Forensics" className="h-10 w-auto" />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">← Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <GlitchText text="FREE Cell Phone" />
              <br />
              <span className="text-primary">Spyware Scan</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              by Octo Digital Forensics
            </p>
          </div>

          {/* Scan Interface */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-8 overflow-hidden">
              {/* Scan line effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-horizontal" />
              </div>

              {scanState === 'idle' && (
                <div className="text-center space-y-6">
                  {/* Warning notice */}
                  <div className="flex items-center justify-center gap-2 text-amber-500">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="font-mono text-sm">This scan may take up to 5 minutes to complete</span>
                  </div>

                  {/* Device connection status */}
                  <div className="space-y-4">
                    <div className={`w-24 h-24 mx-auto rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      connectionState === 'connected' 
                        ? 'bg-green-500/10 border-green-500/50' 
                        : connectionState === 'connecting'
                        ? 'bg-amber-500/10 border-amber-500/50 animate-pulse'
                        : 'bg-primary/10 border-primary/30'
                    }`}>
                      {connectionState === 'connecting' ? (
                        <Loader2 className="w-12 h-12 text-amber-500 animate-spin" />
                      ) : connectionState === 'connected' ? (
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      ) : (
                        <Smartphone className="w-12 h-12 text-primary" />
                      )}
                    </div>

                    <div className="space-y-2">
                      {connectionState === 'disconnected' && (
                        <p className="text-muted-foreground">
                          Connect your cell phone via USB to begin analysis.
                        </p>
                      )}
                      {connectionState === 'connecting' && (
                        <p className="text-amber-500 font-mono text-sm animate-pulse">
                          Waiting for device selection...
                        </p>
                      )}
                      {connectionState === 'connected' && (
                        <div className="space-y-1">
                          <p className="text-green-500 font-mono text-sm">
                            Device connected successfully
                          </p>
                          {connectedDevice && (
                            <p className="text-muted-foreground text-xs">
                              {connectedDevice}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Begin Scan Button - Only works after device is connected */}
                  <Button
                    variant="hero"
                    size="xl"
                    onClick={connectionState === 'connected' ? startScan : connectDevice}
                    className="w-full max-w-xs"
                  >
                    {connectionState === 'connected' ? (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Begin Secure Scan
                      </>
                    ) : (
                      <>
                        <Usb className="w-5 h-5 mr-2" />
                        Begin Secure Scan
                      </>
                    )}
                  </Button>

                  {/* Progress indicator at 0% */}
                  <div className="pt-4">
                    <div className="text-4xl font-mono font-bold text-primary/50">0%</div>
                  </div>
                </div>
              )}

              {scanState === 'scanning' && (
                <div className="text-center space-y-6">
                  <div className="relative w-32 h-32 mx-auto">
                    {/* Spinning ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                    <div
                      className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"
                      style={{ animationDuration: '1.5s' }}
                    />
                    {/* Center percentage */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-mono font-bold text-primary">
                        {Math.floor(progress)}%
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-mono font-bold">Scanning in Progress</h2>
                    <p className="text-primary font-mono text-sm animate-pulse">
                      {currentCheck}
                    </p>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {scanState === 'complete' && (
                <div className="space-y-6">
                  {/* Warning Banner */}
                  <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4 animate-pulse-glow">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                      <div>
                        <h3 className="text-destructive font-mono font-bold text-lg">SECURITY WARNING</h3>
                        <p className="text-destructive/80 text-sm">Potential spyware indicators detected.</p>
                      </div>
                    </div>
                  </div>

                  {/* Detection Results */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-sm text-muted-foreground">DETECTED INDICATORS:</h4>
                    <div className="space-y-2">
                      {[
                        { icon: Wifi, text: 'Suspicious network activity detected' },
                        { icon: Lock, text: 'Unauthorized background processes' },
                        { icon: Search, text: 'Hidden application signatures found' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 border border-destructive/20 rounded">
                          <item.icon className="w-5 h-5 text-destructive" />
                          <span className="text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <a href="tel:8586923306">
                      <Button variant="hero" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call / Text 858-692-3306
                      </Button>
                    </a>
                    <a href="https://calendly.com/digitalforensics" target="_blank" rel="noopener noreferrer">
                      <Button variant="forensic" className="w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Forensic Appointment →
                      </Button>
                    </a>
                  </div>

                  <Button variant="ghost" onClick={resetScan} className="w-full mt-2">
                    Run Another Scan
                  </Button>
                </div>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: Shield, label: '256-bit Encryption' },
                { icon: Lock, label: 'Privacy Protected' },
                { icon: CheckCircle2, label: 'Certified Analysis' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4">
                  <item.icon className="w-6 h-6 text-primary/60" />
                  <span className="text-xs text-muted-foreground font-mono">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpywareScan;
