import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import HowItWorks from '../components/HowItWorks';
import WhyDaylight from '../components/WhyDaylight';
import SunPoints from '../components/SunPoints';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection scrollY={scrollY} />
      <FeatureSection />
      <HowItWorks />
      <WhyDaylight />
      <SunPoints />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default HomePage;