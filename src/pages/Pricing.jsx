import React from 'react';
import PricingHero from '../components/PricingHero';
import PricingPlans from '../components/PricingPlans';
import CostEstimator from '../components/CostEstimator';
import PricingFactors from '../components/PricingFactors';
import PricingProcess from '../components/PricingProcess';
import PricingFAQ from '../components/PricingFAQ';
import CallToAction from '../components/CallToAction';

const Pricing = () => {
  return (
    <main className="bg-[#0f0f0f]">
      <PricingHero />
      <PricingPlans />
      <CostEstimator />
      <PricingFactors />
      <PricingProcess />
      <PricingFAQ />
     
        <CallToAction />
    
    </main>
  );
};

export default Pricing;
