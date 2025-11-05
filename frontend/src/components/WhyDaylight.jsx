import React from 'react';
import { TrendingUp, Zap, Clock } from 'lucide-react';

const WhyDaylight = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Why Now */}
        <div className="text-center mb-32">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-8 font-semibold">
            Why almost.energy
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
            The C&I solar market is broken.
            <br />
            We're fixing it.
          </h3>
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1627645835237-0743e52b991f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NjIzMjU1NzB8MA&ixlib=rb-4.1.0&q=85"
              alt="Futuristic Energy Technology"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>
        </div>

        {/* Core Problems */}
        <div className="mb-32">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-12 text-center font-semibold">
            Core Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 group">
              <Clock className="w-12 h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">Massive Coordination Cost</h4>
              <p className="text-gray-400 leading-relaxed">
                A 500 KW MSME solar project takes 6-9 months to close, coordinating across 5+ counterparties. 
                The invisible transaction cost makes it unviable.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 group">
              <TrendingUp className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">
                High Cost of Capital
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Traditional CAPEX model requires ₹8-10 crore upfront for 1 MW installation. 
                Most businesses can't afford it or prefer to use capital for core operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
              <Zap className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">
                Fragmented Ecosystem
              </h4>
              <p className="text-gray-400 leading-relaxed">
                EPCs, RESCOs, investors, and consumers operate in silos. 
                No single platform coordinates them efficiently for best pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-8 font-semibold">
            Massive Market Opportunity
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            C&I consumes 45% of India's power
            <br />
            but has only 18.6 GW rooftop
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Less than 3% of potential. RESCO share rising from 30% to 40% — signaling readiness 
            for asset-light orchestration. Capturing just 5% of unpenetrated C&I rooftop solar 
            in Maharashtra, Karnataka, and West Bengal yields ₹1000 crore annual energy sales.
          </p>
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden mt-12">
            <img
              src="https://images.pexels.com/photos/9800005/pexels-photo-9800005.jpeg"
              alt="Solar Market"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="grid grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">127.3 GW</div>
                  <div className="text-sm text-gray-300">Installed Solar Capacity</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">₹1.8/kWh</div>
                  <div className="text-sm text-gray-300">LCOE CAPEX Model</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">22.45 GW</div>
                  <div className="text-sm text-gray-300">Addressable in 3 States</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDaylight;