import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import houseImg from "../assets/images/abt-g4.jpg"; // Correct requested image

const FeatureItem = ({ title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-start gap-4 mb-14"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-[#ffcb0f]/30 flex items-center justify-center border border-[#ffcb0f]/50 shrink-0 shadow-[0_4px_10px_rgba(255,203,15,0.2)] relative z-20">
        <Check className="w-5 h-5 text-[#ffcb0f] stroke-[5px]" />
      </div>
      <h3 className="text-xl font-black text-gray-950 tracking-tighter uppercase leading-none">{title}</h3>
    </div>
    <p className="text-[14px] text-gray-500 font-medium leading-relaxed max-w-[320px]">
      {description}
    </p>
  </motion.div>
);

const WhyChooseUsRefined = () => {
  return (
    <section className="py-24 bg-white font-poppins relative overflow-visible">
      {/* Background Soft Glow to match photo */}
      <div className="absolute top-[30%] left-[85%] w-[500px] h-[500px] bg-[#ffcb0f]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[85%] w-[500px] h-[500px] bg-[#ffcb0f]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section from Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-32 lg:mb-48 px-[10%]">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[14px] font-black tracking-[0.2em] text-gray-400 mb-4 uppercase"
            >
              WE ARE PROFESSIONAL & <span className="text-[#00C2FF]">CERTIFIED BUILDERS</span>
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-black text-[#1a1a1a] tracking-tighter leading-[0.8] uppercase"
            >
              WHY<br />CHOOSE US
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-8"
          >
            <p className="text-gray-500 font-medium leading-relaxed max-w-sm ml-auto opacity-70">
              We build reliable, high-quality spaces with a strong focus on precision, transparency, and timely delivery. Every project is handled with care, ensuring durable results that stand the test of time.
            </p>
          </motion.div>
        </div>

        {/* Triple Column Layout - Reduced width and gap to bring text closer to image */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_450px_1fr] gap-0 items-center relative">
          
          {/* THE ARCH - Narrower width and raised even further */}
          <div className="absolute -top-[220px] left-1/2 -translate-x-1/2 w-[100%] h-[200px] pointer-events-none z-0 hidden lg:block overflow-visible">
            <svg 
              viewBox="0 0 1000 300" 
              fill="none" 
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 0 400 Q 500 -200 1000 400" 
                stroke="#fac400ff" 
                strokeWidth="2" 
                strokeDasharray="8 8"
                strokeOpacity="0.4"
              />
            </svg>
          </div>

          {/* Left Column - Features */}
          <div className="order-2 lg:order-1 lg:pr-4 relative z-10 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[320px]">
              <FeatureItem 
                title="Expert Team"
                description="Our certified professionals bring years of industry experience to every project."
              />
              <FeatureItem 
                title="Modern Technology"
                description="We utilize the latest construction technology and innovative building methods."
              />
              <FeatureItem 
                title="On-Time Delivery"
                description="We pride ourselves on completing projects within the agreed timeline."
              />
            </div>
          </div>

          {/* Center Column - Taller & Wider Featured Image Card */}
          <div className="order-1 lg:order-2 relative py-2 z-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full max-w-[450px] mx-auto overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.12)] border-[8px] border-white"
              style={{ 
                // CONCAVE TOP AND ROUNDED BOTTOM
                clipPath: "path('M 0 60 Q 225 0 450 60 L 450 540 Q 450 600 390 600 L 60 600 Q 0 600 0 540 Z')",
                background: "linear-gradient(to bottom, #ffcb0f15, #ffcb0f30)"
              }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-[#ffcb0f]/30 via-transparent to-[#ffcb0f]/40 z-10 pointer-events-none"></div>
              <img 
                src={houseImg} 
                alt="Construction Excellence" 
                className="w-full h-full object-contain object-bottom transition-transform duration-1000 hover:scale-110"
              />
            </motion.div>

            {/* Bottom Accent Circle Shape - Adjusted to reach the edge of the image */}
            {/* <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "120px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[98%] border-2 border-t-0 border-[#ffcb0f]/50 rounded-b-[4rem] pointer-events-none z-0"
            ></motion.div> */}
          </div>

          {/* Right Column - Features */}
          <div className="order-3 lg:order-3 lg:pl-4 relative z-10 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-[320px]">
              <FeatureItem 
                title="Budget Friendly"
                description="Transparent pricing with no hidden costs, ensuring value for your investment."
              />
              <FeatureItem 
                title="Safety First"
                description="Our certified professionals bring years of industry experience to every project."
              />
              <FeatureItem 
                title="All In One Partner"
                description="Everything you need for reliable construction, under one roof."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsRefined;
