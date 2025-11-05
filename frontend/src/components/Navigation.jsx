import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://customer-assets.emergentagent.com/job_436646e3-155e-4674-8b24-c3367a42203c/artifacts/o5bgt39t_1-removebg-preview.png"
            alt="Logo"
            className="h-8 w-auto cursor-pointer transition-transform hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white hover:text-white/80 transition-colors"
            onClick={() => scrollToSection('qualify')}
          >
            See if you qualify
          </Button>
          <Button
            className="bg-white text-black hover:bg-white/90 transition-all rounded-full px-6"
            onClick={() => scrollToSection('estimate')}
          >
            Get your estimate
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;