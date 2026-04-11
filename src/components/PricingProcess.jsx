import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Shapes,
  Hammer,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description:
      "Initial discussion to understand your vision, requirements, and budget expectations. We ensure alignment from day one.",
    icon: Search,
    color: "bg-[#9d72ff]",
    shadow: "shadow-[#9d72ff]/30",
  },
  {
    title: "Site Visit",
    description:
      "Our team inspects the site to assess ground conditions and accessibility. This ensures accurate and efficient project planning.",
    icon: Shapes,
    color: "bg-[#4cc9f0]",
    shadow: "shadow-[#4cc9f0]/30",
  },
  {
    title: "Planning",
    description:
      "Detailed project planning including materials, timeline, and resource allocation. We outline every detail of your future project.",
    icon: Hammer,
    color: "bg-[#ffcb0f]",
    shadow: "shadow-[#ffcb0f]/30",
  },
  {
    title: "Final Quote",
    description:
      "Comprehensive quote with itemized costs and payment milestones. No hidden fees, just transparent and honest pricing.",
    icon: CheckCircle,
    color: "bg-[#f72585]",
    shadow: "shadow-[#f72585]/30",
  },
];

const PricingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white font-poppins relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24 max-w-7xl mx-auto">
          <div>
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FFB800] font-bold text-sm uppercase tracking-[0.4em] mb-4"
            >
              4-Step Process
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase"
            >
              Finalize Your <br />
              <span className="text-[#FFCB0F]">Pricing</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed italic"
          >
            From initial consultation to final handover, we follow a structured
            process that ensures clear communication, transparent pricing, and
            consistent quality at every stage.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-7xl mx-auto">
          {/* Dotted Line Connector (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] border-t-2 border-dotted border-gray-200 z-0">
            {/* Moving Indicator */}
            <motion.div
              className="absolute -top-[9px] w-4 h-4 bg-[#FFCB0F] rounded-full shadow-[0_0_15px_#FFCB0F] z-10 flex items-center justify-center"
              animate={{
                left: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Zap className="w-2 h-2 text-black fill-black" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div
                  className={`relative mb-8 w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center transition-all duration-500 ${
                    index === activeStep
                      ? `${step.shadow} scale-110 rotate-3 ring-4 ring-[#FFCB0F]/20`
                      : "opacity-80 scale-100 rotate-0"
                  } group-hover:scale-110 group-hover:rotate-3 shadow-xl`}
                >
                  {/* Pulsing Glow for Active Step */}
                  {index === activeStep && (
                    <motion.div
                      layoutId="pulsing-glow"
                      className="absolute inset-0 rounded-2xl bg-white/20"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <step.icon
                    className={`w-10 h-10 text-white transition-all duration-500 ${index === activeStep ? "scale-110" : "scale-100"}`}
                  />

                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center font-bold text-xs transition-all duration-500 shadow-sm ${
                      index === activeStep
                        ? "border-[#FFCB0F] text-[#FFCB0F] scale-110"
                        : "border-gray-50 text-gray-400"
                    }`}
                  >
                    0{index + 1}
                  </div>
                </div>

                {/* Text Content */}
                <h3
                  className={`text-xl font-black mb-4 uppercase tracking-tight transition-colors duration-500 ${
                    index === activeStep ? "text-[#FFB800]" : "text-[#1a1a1a]"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 md:mt-32 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base font-medium mb-8"
          >
            Ready to finalize your construction pricing?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button 
              onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-[#FFCB0F] text-black px-6 md:px-10 py-3 md:py-4 font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:scale-110 active:scale-95 shadow-2xl [transform:skewX(-15deg)] rounded-sm inline-flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 [transform:skewX(15deg)] flex items-center gap-2">
                Get Your Final Quote <ArrowRight className="w-4 h-4" />
              </span>
              {/* Glossy sheen effect on hover */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[15deg]"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingProcess;
