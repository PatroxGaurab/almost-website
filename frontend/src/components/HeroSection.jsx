import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Zap, Battery, Thermometer } from 'lucide-react';

const HeroSection = ({ scrollY }) => {
  const [kWhGenerated, setKWhGenerated] = useState(8.2);
  const [backupStored, setBackupStored] = useState(75);
  const [temperature, setTemperature] = useState(68);

  useEffect(() => {
    const interval = setInterval(() => {
      setKWhGenerated((prev) => {
        const newVal = prev + (Math.random() - 0.5) * 0.1;
        return Math.max(8.0, Math.min(9.7, newVal));
      });
      setBackupStored((prev) => {
        const newVal = prev + (Math.random() - 0.5) * 2;
        return Math.max(70, Math.min(100, newVal));
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
            'url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc2MjMyNDQxOHww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-orange-400 mb-4 animate-fade-in">
            Power you control
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Join the Daylight
            <br />
            Network
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Save on energy. Earn rewards. Stay powered when the grid goes down.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">kWh generated</span>
              <Zap className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-3xl font-bold">
              {kWhGenerated.toFixed(1)}
              <span className="text-gray-400 text-sm ml-2">kWh</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {kWhGenerated.toFixed(1)} - {(kWhGenerated + 1.3).toFixed(1)} kWh
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Backup stored</span>
              <Battery className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold">
              {Math.round(backupStored)}
              <span className="text-gray-400 text-sm ml-2">%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div
                className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${backupStored}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Thermostat</span>
              <Thermometer className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-bold">
              {temperature}
              <span className="text-gray-400 text-sm ml-1">°F</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 transition-all rounded-full px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection('qualify')}
          >
            See if you qualify
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black transition-all rounded-full px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection('estimate')}
          >
            Get your estimate
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