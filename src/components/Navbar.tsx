'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Using Link for internal navigation if sections were separate pages
import { Menu, X, Waves } from 'lucide-react'; // Using Soundwave as a placeholder logo
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(70); // Default navbar height

  useEffect(() => {
    const navElement = document.getElementById('navbar');
    if (navElement) {
      setNavbarHeight(navElement.offsetHeight);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };
  
  // Custom SVG Logo from original HTML
  const LogoSvg = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-10 h-10 text-primary-foreground"
    >
      <path d="M20 50 Q30 20, 40 50 T60 50 Q70 80, 80 50"></path>
      <path d="M25 50 L35 50 M65 50 L75 50" opacity="0.6" strokeWidth="6"></path>
    </svg>
  );


  return (
    <nav 
      id="navbar" 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-primary text-primary-foreground",
        (isScrolled || isMenuOpen) && "shadow-md"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 focus:outline-none">
            <LogoSvg />
            <span className="text-2xl font-semibold text-primary-foreground">SoundFast</span>
          </button>

          <div className="hidden md:flex space-x-1">
            <button 
              onClick={() => scrollToSection('home')} 
              className="px-3 py-2 rounded-md text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="px-3 py-2 rounded-md text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-colors"
            >
              Download
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none" 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-primary shadow-lg", { hidden: !isMenuOpen })}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('download')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-colors"
          >
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;