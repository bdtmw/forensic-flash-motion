import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import VideoShowcase from '@/components/VideoShowcase';
import PortfolioGallery from '@/components/PortfolioGallery';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScanlineOverlay from '@/components/ScanlineOverlay';
import ParticleField from '@/components/ParticleField';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground noise-overlay">
      {/* Background effects */}
      <ParticleField />
      <ScanlineOverlay />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VideoShowcase />
        <PortfolioGallery />
        <ClientsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
