import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronDown, RefreshCcw } from "lucide-react";

const CostEstimator = () => {
  const [landSize, setLandSize] = useState("");
  const [projectType, setProjectType] = useState("Residential");
  const [floors, setFloors] = useState(1);
  const [tier, setTier] = useState("Standard");
  const [estimate, setEstimate] = useState(null);

  const calculateEstimate = () => {
    const size = parseFloat(landSize);
    if (isNaN(size) || size <= 0) return;

    // Average rates per sq.ft
    const rates = {
      Basic: 1750,
      Standard: 2500,
      Premium: 3500,
    };

    // Project type multipliers
    const multipliers = {
      Residential: 1.0,
      Commercial: 1.2,
      Industrial: 1.3,
    };

    const baseRate = rates[tier] || 2500;
    const typeMultiplier = multipliers[projectType] || 1.0;
    const totalArea = size * Number(floors);
    const result = totalArea * baseRate * typeMultiplier;

    setEstimate(result);
  };

  const resetEstimator = (e) => {
    if (e) e.preventDefault();
    setLandSize("");
    setProjectType("Residential");
    setFloors(1);
    setTier("Standard");
    setEstimate(null);
  };

  return (
    <section 
      className="py-24 px-6 font-poppins relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080229 0%, #120b4a 100%)' }}
    >
      {/* Decorative background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-[#FFCB0F] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-[30px] border-[#FFCB0F] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="w-16 h-16 bg-[#FFCB0F]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="text-[#FFCB0F] w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Instant Cost  Estimator
          </h2>
          <p className="text-white/70 text-sm md:text-lg max-w-xl mx-auto font-medium">
            Get a high-level construction estimate for your project in seconds. 
            Select your parameters below to begin.
          </p>
        </motion.div>

        {/* Estimator Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
            {/* Land Size */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-900 text-xs font-black uppercase tracking-widest px-1">
                Land Size (sq.ft)
              </label>
              <input
                type="number"
                placeholder="e.g., 2000"
                value={landSize}
                onChange={(e) => setLandSize(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#FFCB0F]/40 transition-all outline-none"
              />
            </div>

            {/* Project Type */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-900 text-xs font-black uppercase tracking-widest px-1">
                Project Type
              </label>
              <div className="relative">
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-gray-900 font-bold appearance-none focus:outline-none focus:ring-2 focus:ring-[#FFCB0F]/40 transition-all cursor-pointer"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Number of Floors */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-900 text-xs font-black uppercase tracking-widest px-1">
                Number of Floors
              </label>
              <div className="relative">
                <select
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-gray-900 font-bold appearance-none focus:outline-none focus:ring-2 focus:ring-[#FFCB0F]/40 transition-all cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num} Floor{num > 1 ? "s" : ""}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Construction Tier */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-900 text-xs font-black uppercase tracking-widest px-1">
                Construction Tier
              </label>
              <div className="relative">
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-gray-900 font-bold appearance-none focus:outline-none focus:ring-2 focus:ring-[#FFCB0F]/40 transition-all cursor-pointer"
                >
                  <option value="Basic">Basic (₹1,500-2,000/sq.ft)</option>
                  <option value="Standard">Standard (₹2,000-3,000/sq.ft)</option>
                  <option value="Premium">Premium (₹3,000+/sq.ft)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateEstimate}
            className="group relative bg-[#FFCB0F] text-black py-5 px-12 font-black uppercase tracking-[0.2em] text-sm md:text-base transition-all duration-300 [transform:skewX(-15deg)] rounded-sm overflow-hidden w-full md:w-auto shadow-2xl hover:scale-110 active:scale-95"
          >
            <div className="[transform:skewX(15deg)] flex items-center justify-center gap-3">
              Calculate Estimate
            </div>
            {/* Glossy sheen effect on hover */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[15deg]"></div>
          </button>

          {/* Result Display */}
          <AnimatePresence>
            {estimate && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-[#FFCB0F]/5 border-2 border-[#FFCB0F]/20 rounded-2xl p-8 md:p-10 relative group">
                   <div className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-[.3em] mb-4">
                     Estimated Construction Cost
                   </div>
                   <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                      <div className="text-4xl md:text-5xl font-black text-black tracking-tighter">
                        ₹{estimate.toLocaleString('en-IN')}
                      </div>
                      <button 
                        onClick={resetEstimator}
                        className="p-3 bg-white text-black rounded-full shadow-md hover:rotate-180 transition-transform duration-500 border border-gray-100"
                        title="Reset Estimator"
                      >
                        <RefreshCcw size={20} />
                      </button>
                   </div>
                   <p className="mt-6 text-gray-500 text-xs md:text-sm font-medium italic">
                     *This is a high-level estimate. Final pricing may vary based on exact material choices and site conditions.
                   </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CostEstimator;
