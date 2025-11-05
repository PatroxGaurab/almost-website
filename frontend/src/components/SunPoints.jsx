import React from 'react';
import { Button } from './ui/button';
import { Sun, Gift, CreditCard, Shirt } from 'lucide-react';

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
            <Sun className="w-16 h-16 text-orange-400 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-6">
            Sun Points
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Power the network. Get rewarded.
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Daylight rewards the people that power it. Earn Sun Points for gift cards, merch, or to pay your Daylight subscription.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 transition-all rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-orange-500/50"
            onClick={() => scrollToSection('qualify')}
          >
            See if your house qualifies
          </Button>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
            <Gift className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold mb-4">Gift Cards</h4>
            <p className="text-gray-400">
              Redeem your Sun Points for gift cards from your favorite brands.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
            <Shirt className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold mb-4">Exclusive Merch</h4>
            <p className="text-gray-400">
              Get exclusive Daylight merchandise with your earned points.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
            <CreditCard className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold mb-4">Pay Subscription</h4>
            <p className="text-gray-400">
              Use your Sun Points to offset your monthly Daylight subscription.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunPoints;