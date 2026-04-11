import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(false);
    }, 1800); // Reduced for snappier experience

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  const blocks = [
    { color: "#FFCB0F", delay: 0 },     // Brand Yellow
    { color: "#FFFFFF", delay: 0.2 },   // White
    { color: "#1a1a1a", delay: 0.4 },   // Black
    { color: "#080229", delay: 0.6, border: true }, // Brand BG Sapphire
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080229] font-poppins"
    >
      {/* 2x2 Building Block Grid */}
      <div className="relative w-24 h-24 mb-10 grid grid-cols-2 gap-2 [transform:skewX(-15deg)]">
        {blocks.map((block, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: block.delay,
              ease: [0.23, 1, 0.32, 1] 
            }}
            className="w-full h-full rounded-sm shadow-2xl"
            style={{ 
              backgroundColor: block.color,
              border: block.border ? '2px solid #FFCB0F' : 'none'
            }}
          />
        ))}

        {/* Central Pulsing structural line */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute inset-0 border border-[#FFCB0F]/20 rounded-lg pointer-events-none"
        />
      </div>

      {/* Brand Name Reveal */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-white font-black text-xs md:text-sm uppercase tracking-[0.5em] mb-2 leading-none">
            Krrish Construction
          </h2>
          <div className="flex items-center justify-center gap-2">
             <div className="h-[1px] w-8 bg-[#FFCB0F]" />
             <span className="text-[#FFCB0F] text-[8px] font-bold uppercase tracking-[0.3em]">
               Building Excellence
             </span>
             <div className="h-[1px] w-8 bg-[#FFCB0F]" />
          </div>
        </motion.div>
      </div>

      {/* Background structural lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
         <div className="absolute top-0 left-0 w-full h-full border-[1px] border-[#FFCB0F] [transform:scale(1.5)_rotate(-15deg)]" />
      </div>
    </motion.div>
  );
};

export default Preloader;
