import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import abtBg from "../assets/images/service.jpeg";


const ServicesHero = () => {
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
      {/* Background Image with Parallax and Zoom */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src={abtBg}
          alt="Krrish Construction Services"
          animate={typeof window !== 'undefined' && window.innerWidth > 1024 ? {
            scale: [1, 1.15, 1],
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
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
          className="inline-flex items-center bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-full p-1 mb-6 sm:mb-8 max-w-[90vw]"
        >
          <span className="bg-[#00C2FF] text-white text-[9px] sm:text-xs font-black px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-widest shrink-0">
            2026
          </span>
          <span className="text-white text-[9px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 uppercase tracking-[0.1em] sm:tracking-[0.2em] truncate">
            KRRISH CONSTRUCTION
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6 sm:mb-8 uppercase tracking-tighter"
        >
          Learn More About Krrish Construction<br />
          Let's Bring Your Vision to Life
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/90 mb-12 leading-relaxed font-medium"
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
          <button className="group relative bg-[#00C2FF] hover:bg-[#00A3D9] text-white px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest text-sm md:text-base transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto shadow-2xl skew-x-[-15deg] rounded-sm overflow-hidden">
            <span className="relative z-10 skew-x-[15deg]">OUR SERVICES</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
