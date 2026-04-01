import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 font-poppins">
      <div className="bg-[#006699] p-10 md:p-14 lg:p-16 flex flex-col items-center text-center relative overflow-hidden shadow-xl">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
            Ready to Start Your Project?
          </h2>

          <p className="text-white/70 text-[13px] md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Let's bring your construction dreams to life. Contact us today for a
            free consultation and let's build something exceptional together.
          </p>

          <button className="group relative bg-white hover:bg-gray-50 text-[#006699] font-black text-xs md:text-sm uppercase tracking-widest py-3 md:py-4 px-6 md:px-10 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 flex items-center gap-3 mx-auto [transform:skewX(-15deg)] rounded-sm overflow-hidden">
            <div className="flex items-center gap-2 [transform:skewX(15deg)]">
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
