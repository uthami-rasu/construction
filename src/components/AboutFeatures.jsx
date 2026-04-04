import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import features1 from "../assets/images/abt-gallery1.jpeg";
import features2 from "../assets/images/about.jpeg";
import features3 from "../assets/images/abt-gallery-2.jpeg";

const features = [
  {
    title: "Experienced Engineers",
    description: "Our team consists of highly qualified and experienced engineers who bring expertise to every project.",
    image: features1,
  },
  {
    title: "Quality Construction",
    description: "We never compromise on quality, using only the best materials and construction practices.",
    image: features2,
  },
  {
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority. We work closely with clients to ensure their vision comes to life.",
    image: features3,
  },
];

const AboutFeatures = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax offsets for background shapes
  const yShape1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yShape2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const xShape3 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-24 bg-[#fcfcfc] font-poppins relative overflow-hidden">
      {/* Specific Round Shape Animations from Screenshot with Parallax */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Right Orange/Yellow Shape */}
        <motion.div 
          style={{ y: yShape1 }}
          animate={{ 
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[280px] lg:w-[400px] h-[280px] lg:h-[400px] bg-[#ffcb0f]/20 rounded-full blur-[40px] opacity-60"
        />
        
        {/* Bottom Left Yellow Shape */}
        <motion.div 
          style={{ y: yShape2 }}
          animate={{ 
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[5%] left-[2%] w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] bg-[#ffcb0f]/25 rounded-full blur-[30px] opacity-50"
        />

        {/* Small Skyblue Accent Shape */}
        <motion.div 
          style={{ x: xShape3 }}
          animate={{ 
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[20%] w-[150px] h-[150px] bg-[#00C2FF]/10 rounded-full blur-[20px] opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            // Individual parallax for each card
            const yCard = useTransform(scrollYProgress, [0, 1], [0, (index + 1) * -40]);
            
            return (
              <motion.div
                key={index}
                style={{ y: yCard }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group h-[420px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white border-8 border-white"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <h3 className="text-[#ffcb0f] text-xl font-black mb-3 uppercase tracking-tight leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white text-[13px] font-medium leading-relaxed mb-6 opacity-90">
                    {feature.description}
                  </p>
                  
                  {/* Visual Line Anchor from screenshot */}
                  <div className="w-[80px] h-[3px] bg-[#ffcb0f] rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="group relative bg-[#00C2FF] text-white px-10 py-4.5 font-black uppercase tracking-widest text-xs transition-all hover:bg-[#00A3D9] hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(0,194,255,0.3)] flex items-center gap-3 mx-auto skew-x-[-15deg] rounded-sm overflow-hidden">
            <div className="flex items-center gap-3 skew-x-[15deg]">
              <span>GET A QUOTE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            {/* Glossy sheen effect on hover */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[45deg]"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFeatures;
