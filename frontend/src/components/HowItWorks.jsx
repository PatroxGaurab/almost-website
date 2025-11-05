import React from 'react';
import { Button } from './ui/button';
import { Network, Cpu, LineChart } from 'lucide-react';

const steps = [
  {
    step: 'Step 1',
    title: 'AI-Powered Demand Origination',
    subtitle: 'Instant site evaluation & underwriting',
    description:
      'Our AI agents evaluate your facility, energy consumption patterns, and rooftop potential in real-time. We underwrite your site and structure the optimal PPA for your business needs.',
    icon: Cpu,
  },
  {
    step: 'Step 2',
    title: 'Ecosystem Coordination',
    subtitle: 'We orchestrate RESCOs, EPCs & investors',
    description:
      'Your business doesn\'t deal with multiple vendors. We coordinate with our curated network of EPCs for installation, investors for financing, and RESCOs for operations — all in the background.',
    icon: Network,
  },
  {
    step: 'Step 3',
    title: 'Performance & Optimization',
    subtitle: 'Guaranteed delivery with AI monitoring',
    description:
      'We monitor energy generation 24/7, manage cashflows, ensure compliance, and optimize your energy costs. You get guaranteed clean energy at fixed OPEX tariff with no operational hassles.',
    icon: LineChart,
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
          <div className="space-y-4">
            <p className="text-orange-400 text-sm uppercase tracking-widest">Our Model</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Orchestrated Clean Energy
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mt-8 mb-6 leading-tight max-w-4xl mx-auto">
              Where AI replaces bureaucracy to deliver the cheapest clean energy
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              We operate as a layer above RESCOs — a virtual utility that coordinates the entire ecosystem. 
              You get fixed OPEX tariff and energy guarantee. We handle demand origination, site underwriting, 
              PPA structuring, performance monitoring, and cashflow management.
            </p>
          </div>
          <div className="inline-block mb-8 mt-12">
            <img
              src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeXxlbnwwfHx8fDE3NjIzMjUwNTF8MA&ixlib=rb-4.1.0&q=85"
              alt="Industrial Solar Installation"
              className="w-full max-w-4xl rounded-3xl shadow-2xl"
            />
          </div>
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
                    <span className="inline-block text-sm uppercase tracking-widest text-orange-400 font-semibold">
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
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 transition-all rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-orange-500/30"
            onClick={() => scrollToSection('get-started')}
          >
            Start Saving Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;