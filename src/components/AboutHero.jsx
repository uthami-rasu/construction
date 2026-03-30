import React from "react";
import { ArrowRight } from "lucide-react";
import abtBg from "../assets/images/abt-rename.jpeg";

const AboutHero = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black font-poppins">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={abtBg}
          alt="About Krrish Construction"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center mt-20">
        {/* Top Badge */}
        <div className="inline-flex items-center bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-full p-1 mb-8 animate-[fadeInDown_1s_ease-out]">
          <span className="bg-[#ffcb0f] text-black text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
            2026
          </span>
          <span className="text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 uppercase tracking-[0.2em]">
            KRRISH CONSTRUCTION
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl mx-auto text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-8 animate-[fadeInScale_1.2s_ease-out] uppercase tracking-tighter">
          Learn More About Krrish Construction<br />
          <span className="text-[#00C2FF]">Let's Bring Your Vision to Life</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/80 mb-12 leading-relaxed animate-[fadeIn_1.5s_ease-out]">
          Krrish Construction combines smart design with reliable building. 
          We handle everything from planning to completion, ensuring quality at every step.
        </p>

        {/* Button */}
        <div className="animate-[fadeInUp_1.8s_ease-out]">
          <button className="group relative bg-[#00C2FF] text-white px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm transition-all hover:bg-[#00A3D9] hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto shadow-2xl rounded-full">
            {/* Sharper shape inspired by the image's button */}
            <span className="relative z-10">OUR SERVICES</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
