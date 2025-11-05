import React from 'react';
import { TrendingUp, Zap, AlertTriangle } from 'lucide-react';

const WhyDaylight = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Why Daylight */}
        <div className="text-center mb-32">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-8">
            why daylight
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
            Today's grid was built for
            <br />
            yesterday's world
          </h3>
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1614255976202-8ce52bfcb655?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc2MjMyNDQxOHww&ixlib=rb-4.1.0&q=85"
              alt="Modern grid"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>
        </div>

        {/* The Risks */}
        <div className="mb-32">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-12 text-center">
            the risks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 group">
              <TrendingUp className="w-12 h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">Electricity costs are skyrocketing</h4>
              <p className="text-gray-400 leading-relaxed">
                Energy prices continue to rise year over year, putting strain on household budgets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 group">
              <Zap className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">
                Blackouts are 10X more common than in 1980
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Grid instability and extreme weather events lead to frequent power outages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
              <AlertTriangle className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">
                More than 50% of U.S. homes are at risk of outages
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Aging infrastructure puts millions of homes at risk of power disruptions.
              </p>
            </div>
          </div>
        </div>

        {/* One house at a time */}
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-8">
            One house at a time
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Daylight is creating the power we all need
            <br />
            by building the world's largest
            <br />
            decentralized energy network
          </h3>
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden mt-12">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
              alt="Decentralized network"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDaylight;