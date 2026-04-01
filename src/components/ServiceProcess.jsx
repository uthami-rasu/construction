import React from "react";
import { motion } from "framer-motion";
import { Search, Shapes, Hammer, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Planning",
    description:
      "We begin with a thorough consultation to understand your vision, requirements, and budget. Our team develops a comprehensive plan that outlines every detail of your project.",
    icon: Search,
    color: "bg-[#9d72ff]",
    shadow: "shadow-[#9d72ff]/30",
  },
  {
    title: "Instant Valuation",
    description:
      "Our architects and designers create detailed blueprints and 3D renderings. We work closely with you to refine the design until it perfectly matches your expectations.",
    icon: Shapes,
    color: "bg-[#4cc9f0]",
    shadow: "shadow-[#4cc9f0]/30",
  },
  {
    title: "Construction",
    description:
      "Our skilled team brings the design to life with precision and quality craftsmanship. We maintain open communication and provide regular updates throughout the construction phase.",
    icon: Hammer,
    color: "bg-[#ffcb0f]",
    shadow: "shadow-[#ffcb0f]/30",
  },
  {
    title: "Handover",
    description:
      "After thorough quality checks and final inspections, we hand over your completed project. We ensure everything meets our high standards and your complete satisfaction.",
    icon: CheckCircle,
    color: "bg-[#f72585]",
    shadow: "shadow-[#f72585]/30",
  },
];

const ServiceProcess = () => {
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
              className="text-[#00C2FF] font-bold text-sm uppercase tracking-[0.4em] mb-4"
            >
              How We Work
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tighter uppercase"
            >
              Our Process
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
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] border-t-2 border-dotted border-gray-200 z-0"></div>

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
                  className={`relative mb-8 w-24 h-24 rounded-2xl ${step.color} ${step.shadow} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl`}
                >
                  <step.icon className="w-10 h-10 text-white" />

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-gray-50 flex items-center justify-center font-bold text-xs text-gray-400 shadow-sm">
                    0{index + 1}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
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
            Ready to start your construction project?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="group relative bg-[#00C2FF] hover:bg-[#00A3D9] text-white px-6 md:px-10 py-3 md:py-4 font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:scale-110 active:scale-95 shadow-xl [transform:skewX(-15deg)] rounded-sm inline-flex items-center gap-3 overflow-hidden">
              <span className="relative z-10 [transform:skewX(15deg)] flex items-center gap-2">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
