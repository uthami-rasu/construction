import React from "react";
import { motion } from "framer-motion";
import { Check, Home, Building2, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Basic Construction",
    subtitle: "For small residential projects",
    price: "₹1,500 - ₹2,000",
    unit: "per sq.ft",
    icon: Home,
    features: [
      "Basic materials",
      "Standard design",
      "Limited customization",
      "3-month timeline",
      "Basic warranty",
    ],
    highlight: false,
  },
  {
    name: "Standard Construction",
    subtitle: "Mid-level projects",
    price: "₹2,000 - ₹3,000",
    unit: "per sq.ft",
    icon: Building2,
    features: [
      "Better materials",
      "Custom design options",
      "Project management",
      "4-5 month timeline",
      "Extended warranty",
    ],
    highlight: true,
  },
  {
    name: "Premium Construction",
    subtitle: "High-end projects",
    price: "₹3,000 +",
    unit: "per sq.ft",
    icon: Crown,
    features: [
      "Luxury materials",
      "Full customization",
      "Dedicated project manager",
      "6+ month timeline",
      "Lifetime warranty",
    ],
    highlight: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="py-24 px-6 bg-white font-poppins overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCB0F]/5 blur-[120px] rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFCB0F]/5 blur-[120px] rounded-full translate-y-1/2"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FFB800] text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4"
            >
              Clear & Honest Pricing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 uppercase leading-none tracking-tighter"
            >
              Construction <br />
              <span className="text-[#FFCB0F]">Plan</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed"
          >
            Our pricing is based on project scope and requirements. Select a tier that matches your vision and budget perfectly.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 flex flex-col h-full border ${
                plan.highlight
                  ? "bg-[#FFCB0F] border-transparent shadow-[0_20px_50px_rgba(255,203,15,0.4)]"
                  : "bg-gray-50 border-gray-100 hover:border-[#FFCB0F]/30 hover:shadow-2xl"
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Star className="w-3 h-3 fill-[#FFCB0F] text-[#FFCB0F]" />
                  Most Popular
                </div>
              )}

              {/* Icon & Title */}
              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                  plan.highlight ? "bg-black/10 text-black" : "bg-[#FFCB0F]/10 text-[#FFB800]"
                }`}>
                  <plan.icon size={28} />
                </div>
                <h3 className={`text-xl font-black uppercase mb-2 ${plan.highlight ? "text-black" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-[13px] font-bold uppercase tracking-wider opacity-60 ${plan.highlight ? "text-black" : "text-[#FFB800]"}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className={`mb-8 p-6 rounded-2xl border flex flex-col items-start gap-1 ${
                plan.highlight ? "bg-black/5 border-black/10" : "bg-white border-gray-100 shadow-sm"
              }`}>
                <div className={`text-3xl font-black ${plan.highlight ? "text-black" : "text-gray-900"}`}>
                  {plan.price}
                </div>
                <div className={`text-[11px] font-black uppercase tracking-widest ${plan.highlight ? "text-black/80" : "text-[#FFB800]"}`}>
                  {plan.unit}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 group">
                    <div className={`p-1 rounded-full ${
                      plan.highlight ? "bg-black/10 text-black" : "bg-[#FFCB0F]/10 text-[#FFB800]"
                    }`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className={`text-sm font-semibold opacity-80 ${plan.highlight ? "text-black" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`group relative py-4 px-6 font-black uppercase tracking-widest text-[11px] md:text-xs transition-all duration-300 [transform:skewX(-15deg)] rounded-sm overflow-hidden w-full shadow-xl ${
                  plan.highlight
                    ? "bg-black text-white hover:scale-105 active:scale-95"
                    : "bg-[#FFCB0F] text-black hover:scale-105 active:scale-95"
                }`}
                onClick={() => {
                   const contactSection = document.getElementById('contact-us');
                   if (contactSection) {
                     contactSection.scrollIntoView({ behavior: 'smooth' });
                   } else {
                     window.location.href = '/contact';
                   }
                }}
              >
                <div className="[transform:skewX(15deg)] flex items-center justify-center gap-2">
                  Request Detailed Quote
                </div>
                {/* Glossy sheen effect on hover */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[15deg]"></div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
