import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="py-20 bg-[#006699] font-poppins relative overflow-hidden w-full">
      {/* Decorative Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      <div className="absolute top-0 right-0 w-[600px] h-full bg-[#00C2FF]/5 blur-[120px] rounded-full translate-x-1/2"></div>

      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight"
        >
          Let's Build Something <br className="hidden md:block" />
          Amazing Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-sm md:text-base mb-12 font-medium leading-relaxed max-w-2xl mx-auto uppercase tracking-wider"
        >
          Contact us today to discuss your project and discover how{" "}
          <br className="hidden md:block" />
          we can turn your construction dreams into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="group relative bg-white hover:bg-gray-50 text-[#006699] px-6 md:px-10 py-3 md:py-4 font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:scale-110 active:scale-95 shadow-2xl [transform:skewX(-15deg)] rounded-sm flex items-center gap-3 mx-auto">
            <span className="relative z-10 [transform:skewX(15deg)] flex items-center gap-2">
              View Our Portfolio <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
