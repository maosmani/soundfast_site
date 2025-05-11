'use client';

import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-muted border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="mb-1">&copy; {currentYear} SoundFast. All rights reserved.</p>
        <p className="text-sm">Designed for maosmani.</p>
      </div>
    </footer>
  );
};

export default Footer;