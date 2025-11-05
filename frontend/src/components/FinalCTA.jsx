import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="qualify"
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBhYnN0cmFjdHxlbnwwfHx8fDE3NjIzMjQ0NDR8MA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <img
              src="https://customer-assets.emergentagent.com/job_436646e3-155e-4674-8b24-c3367a42203c/artifacts/q9p6whd0_2-removebg-preview.png"
              alt="Logo"
              className="h-20 w-auto mx-auto"
            />
          </div>

          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-8">
            The future is bright
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Step into
            <br />
            Daylight
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to take control of your power? It's time to step out of the past, and into a more resilient, rewarding energy future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-all rounded-full px-8 py-6 text-lg font-semibold group"
              onClick={() => scrollToSection('estimate')}
            >
              See if you qualify
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg"
              alt="Energy future"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;