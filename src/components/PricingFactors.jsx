import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Layers, 
  Users, 
  Palette, 
  Clock, 
  FileText 
} from "lucide-react";

const factors = [
  {
    title: "Location",
    description: "Site accessibility, regional labor costs, and local regulations impact pricing significantly.",
    icon: MapPin,
  },
  {
    title: "Materials",
    description: "The quality and type of materials you choose significantly affect the overall project costs and durability.",
    icon: Layers,
  },
  {
    title: "Labor Cost",
    description: "Availability of a skilled workforce and regional wage rates influence the total project labor expense.",
    icon: Users,
  },
  {
    title: "Design Complexity",
    description: "Custom designs and unique architectural features add complexity and require more specialized skillsets.",
    icon: Palette,
  },
  {
    title: "Timeline",
    description: "Rush projects or extended timelines due to site conditions may affect the overall pricing structure.",
    icon: Clock,
  },
  {
    title: "Permits & Approvals",
    description: "Government approvals and compliance requirements vary by location and project scope.",
    icon: FileText,
  },
];

const PricingFactors = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 font-poppins relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFCB0F]/5 blur-[100px] rounded-full -translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FFB800] text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4"
            >
              4-Step Process & Factors
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 uppercase leading-none tracking-tighter"
            >
              What Affects <br />
              <span className="text-[#FFCB0F]">Your Pricing?</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed"
          >
            From initial consultation to final handover, we follow a structured process that ensures clear communication, transparent pricing, and consistent quality.
          </motion.p>
        </div>

        {/* Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {factors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(255,203,15,0.1)] transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFCB0F]/10 transition-colors duration-500">
                <factor.icon className="text-gray-400 w-8 h-8 group-hover:text-[#FFB800] transition-all duration-500 group-hover:scale-110" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-gray-900 uppercase mb-4 tracking-tight">
                {factor.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                {factor.description}
              </p>
              
              {/* Subtle underline effect on hover */}
              <div className="mt-8 w-12 h-1 bg-gray-100 rounded-full group-hover:w-20 group-hover:bg-[#FFCB0F] transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFactors;
