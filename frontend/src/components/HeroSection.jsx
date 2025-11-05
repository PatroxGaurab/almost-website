import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { TrendingDown, Zap, Clock } from 'lucide-react';

const HeroSection = ({ scrollY }) => {
  const [costSaved, setCostSaved] = useState(5.2);
  const [energyDelivered, setEnergyDelivered] = useState(87);
  const [timeToAccess, setTimeToAccess] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setCostSaved((prev) => {
        const newVal = prev + (Math.random() - 0.5) * 0.2;
        return Math.max(4.5, Math.min(6.5, newVal));
      });
      setEnergyDelivered((prev) => {
        const newVal = prev + (Math.random() - 0.5) * 2;
        return Math.max(85, Math.min(92, newVal));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1726866672851-5b99c837603c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxjb21tZXJjaWFsJTIwc29sYXJ8ZW58MHx8fHwxNzYyMzI1MDQxfDA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-orange-400 mb-4 animate-fade-in">
            India's First AI-Orchestrated Virtual Clean Energy Utility
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Clean Energy for
            <br />
            Your Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Access the cheapest clean energy instantly. No CAPEX. No coordination hassles. 
            Just guaranteed low-cost power for your C&I operations.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Cost per unit</span>
              <TrendingDown className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold">
              ₹{costSaved.toFixed(1)}
              <span className="text-gray-400 text-sm ml-2">/kWh</span>
            </div>
            <div className="text-xs text-green-400 mt-2">
              vs ₹8.5-12 grid power
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Energy guarantee</span>
              <Zap className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-3xl font-bold">
              {Math.round(energyDelivered)}
              <span className="text-gray-400 text-sm ml-2">%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div
                className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${energyDelivered}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Time to access</span>
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-bold">
              {timeToAccess}
              <span className="text-gray-400 text-sm ml-1">hrs</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              vs 6-9 months traditional
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 transition-all rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-orange-500/30"
            onClick={() => window.open('https://calendly.com/patrox/meeting-with-gaurab', '_blank')}
          >
            Schedule a Meeting
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black transition-all rounded-full px-8 py-6 text-lg font-semibold"
            onClick={() => window.open('https://bead-tricorne-c6c.notion.site/Memo-29d908edccd880789e0cc08404255e0d?source=copy_link', '_blank')}
          >
            Read Our Memo
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;