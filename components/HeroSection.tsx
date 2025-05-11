'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    // Assuming navbar height is around 70px, adjust if necessary
    const navbarHeight = 70; 
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="pt-[70px] bg-background text-foreground flex items-center min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Experience Sound <span className="text-primary">Like Never Before</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              SoundFast delivers crystal-clear audio and seamless performance. Elevate your listening experience with our cutting-edge technology.
            </p>
            <button 
              onClick={() => scrollToSection('download')}
              className="btn btn-default btn-lg px-8 py-3 text-lg"
            >
              Download Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative aspect-[12/7] w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/soundfastapp/1200/700"
                alt="SoundFast application interface"
                width={1200}
                height={700}
                className="object-cover w-full h-full"
                priority // For LCP
                data-ai-hint="audio software interface"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-transparent opacity-75 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;