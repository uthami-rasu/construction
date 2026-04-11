import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="font-poppins">
      <div 
        className="p-10 md:p-14 lg:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #080229 0%, #120b4a 100%)' }}
      >
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFCB0F]/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        {/* Animated Background Grid Pattern - Subtle */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] uppercase">
            Ready to Start <br className="hidden md:block" />
            Your Project?
          </h2>

          <p className="text-white/70 text-[13px] md:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-medium">
            Let's bring your construction dreams to life. Contact us today for a
            free consultation and let's build something exceptional together.
          </p>

          <button className="group relative bg-[#FFCB0F] text-black font-black text-xs md:text-sm uppercase tracking-widest py-4 md:py-5 px-8 md:px-12 transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 flex items-center gap-3 mx-auto [transform:skewX(-15deg)] rounded-sm overflow-hidden">
            <div className="flex items-center gap-2 [transform:skewX(15deg)]">
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
            {/* Glossy sheen effect on hover */}
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[15deg]"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
