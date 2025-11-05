import React from 'react';
import { Button } from './ui/button';
import { Smartphone, Home, Zap } from 'lucide-react';

const steps = [
  {
    step: 'step 1',
    title: 'Join the network',
    subtitle: 'Two ways to connect',
    description:
      'Subscribe to get solar + battery backup with no upfront costs. Daylight owns the system, you pay for the power it produces. Or buy your panels outright and we\'ll include a battery at no extra cost to you.',
    icon: Smartphone,
  },
  {
    step: 'Step 2',
    title: 'Power up',
    subtitle: 'Your house acts like a mini power plant',
    description:
      'With solar and battery installed, your house produces clean energy and stores surplus.',
    icon: Home,
  },
  {
    step: 'Step 3',
    title: 'Your energy works for you',
    subtitle: 'Daylight trades energy you don\'t use',
    description:
      'Excess energy is traded with the grid through your battery. You stay powered during outages and earn rewards just by being part of the network.',
    icon: Zap,
  },
];

const HowItWorks = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <img
              src="https://images.pexels.com/photos/532571/pexels-photo-532571.jpeg"
              alt="Solar Installation"
              className="w-full max-w-2xl rounded-3xl shadow-2xl"
            />
          </div>
          <div className="space-y-4">
            <p className="text-orange-400 text-sm uppercase tracking-widest">How</p>
            <h2 className="text-6xl md:text-7xl font-bold">
              Daylight
            </h2>
            <p className="text-orange-400 text-sm uppercase tracking-widest">Works</p>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mt-8 mb-6 leading-tight max-w-4xl mx-auto">
            Two ways to power your home. One powerful network.
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose a monthly energy subscription or purchase your system outright. Both options include an oversized backup battery from Daylight at no additional cost. You create enough power for you, and share surplus with the grid.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 transition-all rounded-full px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection('qualify')}
          >
            See if your house qualifies
          </Button>
        </div>

        {/* Steps */}
        <div className="space-y-24 mt-32">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="space-y-6">
                    <span className="inline-block text-sm uppercase tracking-widest text-orange-400">
                      {item.step}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold">{item.title}</h3>
                    <h4 className="text-2xl font-semibold text-orange-400">
                      {item.subtitle}
                    </h4>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-center">
                        <Icon className="w-32 h-32 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
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
    </section>
  );
};

export default HowItWorks;