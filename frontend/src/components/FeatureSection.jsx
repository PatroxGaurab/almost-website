import React from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    id: 'zero-capex',
    label: 'ZERO CAPEX',
    title: 'No upfront investment required',
    description:
      'Access clean energy through our RESCO model. Pay only for the power you consume at guaranteed low rates. We coordinate everything — from financing to installation.',
    image:
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc29sYXJ8ZW58MHx8fHwxNzYyMzI1MDQxfDA&ixlib=rb-4.1.0&q=85',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 'instant-access',
    label: 'INSTANT ACCESS',
    title: 'Real-time clean energy subscription',
    description:
      'Traditional solar projects take 6-9 months and involve 5+ counterparties. With our AI-orchestrated marketplace, get clean energy access in days, not months.',
    image:
      'https://images.unsplash.com/photo-1713544123580-12096cc9eb12?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjb21tZXJjaWFsJTIwc29sYXJ8ZW58MHx8fHwxNzYyMzI1MDQxfDA&ixlib=rb-4.1.0&q=85',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    id: 'guaranteed-savings',
    label: 'GUARANTEED SAVINGS',
    title: 'Fixed OPEX tariff with energy guarantee',
    description:
      'Lock in rates at ₹5.5/kWh vs ₹8.5-12 grid power. We guarantee 90% of your energy demand is met by our network. Transparent pricing. Predictable costs.',
    image:
      'https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxjb21tZXJjaWFsJTIwc29sYXJ8ZW58MHx8fHwxNzYyMzI1MDQxfDA&ixlib=rb-4.1.0&q=85',
    color: 'from-blue-500/20 to-cyan-500/20',
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
                <span className="inline-block text-sm uppercase tracking-widest text-orange-400 font-semibold">
                  {feature.label}
                </span>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">{feature.description}</p>
                <button 
                  className="group flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
                  onClick={() => window.open('https://bead-tricorne-c6c.notion.site/Memo-29d908edccd880789e0cc08404255e0d?source=copy_link', '_blank')}
                >
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
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
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