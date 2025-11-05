import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const FinalCTA = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="get-started"
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1546185058-592ead754d27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjdG9yeXxlbnwwfHx8fDE3NjIzMjUwNTF8MA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <img
              src="https://customer-assets.emergentagent.com/job_436646e3-155e-4674-8b24-c3367a42203c/artifacts/q9p6whd0_2-removebg-preview.png"
              alt="almost.energy Logo"
              className="h-20 w-auto mx-auto"
            />
          </div>

          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-8 font-semibold">
            Ready to transform your energy costs?
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Join India's First
            <br />
            Virtual Clean Utility
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get instant access to the cheapest clean energy. No CAPEX. No coordination hassles. 
            Just guaranteed low-cost power at ₹5.5/kWh delivered to your C&I operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 transition-all rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-orange-500/30 group"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all rounded-full px-8 py-6 text-lg font-semibold group"
            >
              Contact Sales
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">24 hours</div>
              <div className="text-sm text-gray-400">Time to Energy Access</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">₹5.5/kWh</div>
              <div className="text-sm text-gray-400">Fixed OPEX Tariff</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">90%</div>
              <div className="text-sm text-gray-400">Energy Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;