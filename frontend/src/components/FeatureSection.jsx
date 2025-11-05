import React from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    id: 'save',
    label: 'save',
    title: 'Power your home for less',
    description:
      'Lower your energy bills with clean solar power. Generate your own electricity and reduce dependence on the grid.',
    image:
      'https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjIzMjQ0MTF8MA&ixlib=rb-4.1.0&q=85',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    id: 'protect',
    label: 'protect',
    title: 'Keep the lights on with battery backup',
    description:
      'Stay powered during outages with our oversized battery backup system. Never worry about blackouts again.',
    image:
      'https://images.unsplash.com/photo-1706166987869-5482b5ad8dd5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxiYXR0ZXJ5JTIwZW5lcmd5JTIwc3RvcmFnZXxlbnwwfHx8fDE3NjIzMjQ0MzZ8MA&ixlib=rb-4.1.0&q=85',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'earn',
    label: 'Earn',
    title: 'Get rewarded for using Daylight',
    description:
      'Earn Sun Points for being part of the network. Redeem for gift cards, merch, or to pay your subscription.',
    image:
      'https://images.unsplash.com/photo-1715605569717-494ac7c5656a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwZW5lcmd5JTIwc3RvcmFnZXxlbnwwfHx8fDE3NjIzMjQ0MzZ8MA&ixlib=rb-4.1.0&q=85',
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

const FeatureSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            id={feature.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
              <div className="space-y-6">
                <span className="inline-block text-sm uppercase tracking-widest text-orange-400">
                  {feature.label}
                </span>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-400">{feature.description}</p>
                <button className="group flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
                  <span className="text-lg font-semibold">Learn more</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div
              className={`relative group ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-3xl opacity-50 group-hover:opacity-70 transition-opacity`}
              ></div>
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;