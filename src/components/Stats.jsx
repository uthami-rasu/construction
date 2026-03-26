import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";

const StatCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Parse number and suffix (like K+ or +)
    const num = parseFloat(value.replace(/[^\d.]/g, ""));
    const suffix = value.replace(/[\d.]/g, "");

    const controls = animate(0, num, {
      duration: 3.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        // Handle decimals if needed (like 7.8K)
        const formatted =
          latest % 1 === 0 ? latest.toFixed(0) : latest.toFixed(1);
        setDisplayValue(formatted + suffix);
      },
    });

    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}</span>;
};

const stats = [
  {
    number: "8K+",
    label: "PROJECT",
    sublabel: "COMPLETED",
  },
  {
    number: "17.8K+",
    label: "CUSTOMER",
    sublabel: "SATISFIED",
  },
  {
    number: "450+",
    label: "TEAM",
    sublabel: "MEMBERS",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-8 sm:py-12 relative overflow-hidden border-y border-gray-50">
      {/* Background Construction Elements (Lightweight) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg
          className="absolute right-0 top-0 w-64 h-64 text-gray-900"
          viewBox="0 0 100 100"
        >
          {/* Abstract Crane/Blueprint lines */}
          <path
            d="M10 90 L90 90 M20 90 L20 20 L50 10 L80 20 L80 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M20 40 L80 40 M20 60 L80 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
        <div className="absolute left-10 bottom-0 w-full h-full border-l border-gray-900/10"></div>
        <div className="absolute left-0 top-10 w-full h-[1px] bg-gray-900/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-4 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-5 group"
            >
              {/* Number with Counter */}
              <div className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black text-gray-950 tracking-[-0.04em] transition-transform duration-500 group-hover:scale-105 min-w-[90px] sm:min-w-[140px]">
                <StatCounter value={stat.number} />
              </div>

              {/* Minimal Divider */}
              <div className="w-px h-8 sm:h-10 bg-[#00C2FF]/30 relative">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 bg-[#00C2FF] origin-top"
                />
              </div>

              {/* Labels */}
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[10px] font-montserrat font-black text-gray-400 tracking-[0.1em] sm:tracking-[0.2em] uppercase leading-none mb-0.5 sm:mb-1">
                  {stat.label}
                </span>
                <span className="text-[8px] sm:text-[10px] font-montserrat font-black text-gray-400 tracking-[0.1em] sm:tracking-[0.2em] uppercase leading-none">
                  {stat.sublabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
