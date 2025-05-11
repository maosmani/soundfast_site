import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}