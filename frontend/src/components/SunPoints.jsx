import React from 'react';
import { Button } from './ui/button';
import { Brain, Sparkles, BarChart3, Shield } from 'lucide-react';

const SunPoints = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-black via-orange-950/20 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-8">
            <Brain className="w-16 h-16 text-orange-400" />
          </div>
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-6 font-semibold">
            AI-Powered Platform
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Where AI replaces bureaucracy
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Our AI agents orchestrate the entire ecosystem — from demand origination to performance monitoring. 
            This is what makes us 10x faster and cheaper than traditional solar procurement.
          </p>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
            <Sparkles className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold mb-4">Intelligent Demand Origination</h4>
            <p className="text-gray-400 leading-relaxed">
              AI agents outreach and evaluate C&I businesses at scale. Instant project evaluation, 
              site assessment, and company underwriting using computer vision and financial models.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
            <BarChart3 className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold mb-4">Ecosystem Coordination</h4>
            <p className="text-gray-400 leading-relaxed">
              Automated coordination with EPCs for installation, investors for financing, and RESCOs for operations. 
              Real-time project tracking and cashflow management.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
            <Shield className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold mb-4">Proactive Monitoring</h4>
            <p className="text-gray-400 leading-relaxed">
              24/7 energy generation monitoring with AI-powered anomaly detection. 
              Automated collections and performance optimization to guarantee your energy delivery.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
            <Brain className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold mb-4">Market Intelligence</h4>
            <p className="text-gray-400 leading-relaxed">
              Compliance tracking agents scrape and analyze SERC/CERC regulations, competitor moves, 
              and find inter-state arbitrage opportunities for optimal pricing.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 transition-all rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-orange-500/50"
            onClick={() => window.open('https://calendly.com/patrox/meeting-with-gaurab', '_blank')}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SunPoints;