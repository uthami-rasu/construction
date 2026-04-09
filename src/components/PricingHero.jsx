import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import v1 from "../assets/videos/v5.mp4";

const PricingHero = () => {
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
      {/* Background Video with Parallax and Vignette Shadow */}
      <motion.div style={{ y: bgY }} className="absolute -top-[30%] left-0 h-[130%] w-full z-0">
        <video
          src={v1}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center opacity-60"
        />
        {/* Cinematic Vignette Overlay (Shadow on all 4 sides) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
      </motion.div>

      {/* Content with Parallax */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="container relative z-10 mx-auto px-6 text-center mt-20"
      >
        {/* Top Badge - Multi-color split */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 rounded-full p-1 mb-8 overflow-hidden"
        >
          <span className="bg-[#00C2FF] text-white text-[10px] sm:text-xs font-black px-4 sm:px-6 py-2 rounded-full uppercase tracking-widest shrink-0">
            2026
          </span>
          <span className="text-white text-[10px] sm:text-xs font-bold px-4 sm:px-6 py-2 uppercase tracking-[0.2em] truncate">
            KRRISH CONSTRUCTION
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white leading-[1.05] mb-8 uppercase tracking-tighter"
        >
          Transparent Pricing
          <br />
          <span className="">for Every Project</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-14 leading-relaxed font-medium"
        >
          We deliver reliable construction solutions with quality, precision, and
          on-time execution — from planning to final completion.
        </motion.p>

        {/* Button - Skewed Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact-us');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/contact';
              }
            }}
            className="group relative bg-[#00C2FF] hover:bg-[#00A3D9] text-white px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto shadow-[0_20px_50px_rgba(0,194,255,0.3)] [transform:skewX(-15deg)] rounded-sm overflow-hidden"
          >
            <span className="relative z-10 [transform:skewX(15deg)]">
              CONTACT US
            </span>
            {/* Glossy overlay effect on hover */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[45deg]"></div>
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative Structural Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-[#00C2FF]/40 to-transparent"></div>
    </section>
  );
};

export default PricingHero;
