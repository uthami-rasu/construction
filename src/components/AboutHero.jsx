import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import abtBg from "../assets/images/abt-rename.jpeg";

const AboutHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black font-poppins"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src={abtBg}
          alt="About Krrish Construction"
          className="h-full w-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </motion.div>

      {/* Content with Parallax */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="container relative z-10 mx-auto px-6 text-center mt-20"
      >
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-full p-1 mb-8"
        >
          <span className="bg-[#ffcb0f] text-black text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
            2026
          </span>
          <span className="text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 uppercase tracking-[0.2em]">
            KRRISH CONSTRUCTION
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl mx-auto text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter"
        >
          Learn More About Krrish Construction<br />
          <span className="text-[#00C2FF]">Let's Bring Your Vision to Life</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/80 mb-12 leading-relaxed"
        >
          Krrish Construction combines smart design with reliable building. 
          We handle everything from planning to completion, ensuring quality at every step.
        </motion.p>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <button className="group relative bg-[#ffcb0f] text-black px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm transition-all hover:bg-[#ffdb4d] hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto shadow-2xl rounded-full">
            <span className="relative z-10">OUR SERVICES</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
