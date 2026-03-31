import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-[#135E6D] py-24 px-4 font-poppins">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-10 leading-relaxed max-w-2xl mx-auto">
          Let's bring your construction dreams to life. Contact us today for a free
          consultation.
        </p>
        <button className="bg-[#ffcb0f] hover:bg-[#ffdb4d] text-[#1a5b6e] font-bold py-3 px-7 rounded-md transition-all duration-300 flex items-center justify-center mx-auto gap-2 shadow-lg shadow-yellow-500/20">
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
