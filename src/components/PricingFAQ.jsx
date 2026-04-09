import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Why is pricing not fixed?",
    answer: "Construction costs vary based on multiple factors like location, material prices, labor availability, and design complexity. We provide price ranges and accurate estimates after understanding your specific requirements to ensure transparency and avoid surprises.",
  },
  {
    question: "Can cost change during the project?",
    answer: "Once we finalize the quote and you approve it, the cost remains fixed unless you request additional changes or upgrades. Any modifications will be discussed and approved by you before implementation, with clear cost implications.",
  },
  {
    question: "Do you provide EMI options?",
    answer: "Yes, we offer flexible payment plans and EMI options through our banking partners. Payment is typically structured in milestones: advance, foundation, structure completion, finishing, and final handover. We can customize payment schedules to suit your financial planning.",
  },
  {
    question: "What's included in the quoted price?",
    answer: "Our quotes include materials, labor, project management, permits, and basic warranties. We provide itemized breakdowns so you know exactly what you're paying for. Optional add-ons like premium finishes or smart home features are quoted separately.",
  },
  {
    question: "How long does it take to get a quote?",
    answer: "After the initial consultation and site visit, we typically provide a detailed quote within 3-5 business days. For simpler projects, we can provide preliminary estimates within 24 hours. Rush quotes are available for urgent projects.",
  },
];

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-white font-poppins relative overflow-hidden">
      {/* Blueprint Grid Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00C2FF 1px, transparent 1px),
            linear-gradient(to bottom, #00C2FF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* SkyBlue Glows (Top and Bottom) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#00C2FF]/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#00C2FF]/10 blur-[120px] rounded-full translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-px bg-[#00C2FF]"></div>
              <span className="text-[#00C2FF] text-xs md:text-sm font-black uppercase tracking-[0.4em]">
                Clear Answers
              </span>
              <div className="w-12 h-px bg-[#00C2FF]"></div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase leading-[0.9] tracking-tighter"
            >
              Frequently <br />
              <span className="text-[#00C2FF]">Asked Questions</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed font-medium"
          >
            From initial consultation to final handover, we follow a structured 
            process that ensures clear communication, transparent pricing, and 
            consistent quality at every stage.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                openIndex === index 
                ? "border-[#00C2FF]/20 bg-[#f8fdff] shadow-xl shadow-[#00C2FF]/5" 
                : "border-gray-50 bg-white hover:border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center gap-6">
                   <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                     openIndex === index ? "border-[#00C2FF] text-[#00C2FF] scale-110" : "border-gray-200 text-gray-400 group-hover:border-[#00C2FF]/30"
                   }`}>
                     <HelpCircle size={16} />
                   </div>
                   <span className={`text-base md:text-lg font-black uppercase tracking-tight transition-all duration-500 ${
                     openIndex === index ? "text-[#00C2FF]" : "text-[#1a1a1a]"
                   }`}>
                     {faq.question}
                   </span>
                </div>
                <div className={`shrink-0 transition-all duration-500 ${openIndex === index ? "rotate-90" : "rotate-0"}`}>
                   {openIndex === index ? (
                     <Minus size={20} className="text-[#00C2FF]" />
                   ) : (
                     <Plus size={20} className="text-gray-300 group-hover:text-[#00C2FF]/50" />
                   )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-10">
                       <div className="pl-14">
                          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
