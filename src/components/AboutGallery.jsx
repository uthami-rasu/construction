import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";
import gallery1 from "../assets/images/abt-gallery1.jpeg";
import gallery2 from "../assets/images/abt-gallery-2.jpeg";

const AboutGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax offsets for the two columns - reduced/disabled on mobile
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Create mobile-safe versions (effectively 0 on mobile)
  const yLeftSafe = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yRightSafe = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden font-poppins">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Exact Staggered Gallery Grid */}
          <motion.div 
            className="relative flex flex-col md:flex-row gap-6 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Column 1 - Starts Lower with Upward Parallax */}
            <motion.div 
              className="flex-1 flex flex-col gap-6 lg:gap-10 lg:mt-32"
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? yLeft : 0 }}
            >
              {/* 1. Gallery Image (Workers with Blueprint) */}
              <motion.div 
                variants={itemVariants}
                className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] h-[320px] lg:h-[400px]"
              >
                <img 
                  src={gallery1} 
                  alt="Construction Planning" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                />
              </motion.div>

              {/* 2. Ratings Card (Bottom Left) */}
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-50 self-start w-full max-w-[260px] ml-4 lg:ml-12"
              >
                <h4 className="text-[15px] font-bold text-gray-700 mb-3 ml-1">Best ratings</h4>
                <div className="space-y-1.5 mb-5 ml-1">
                  <div className="w-16 h-1 bg-[#ffcb0f]/20 rounded-full"></div>
                  <div className="w-24 h-1 bg-[#ffcb0f]/20 rounded-full"></div>
                </div>
                <div className="flex gap-1.5 justify-between px-1">
                  {['😡', '😑', '😐', '😋', '😊'].map((emoji, idx) => (
                    <div 
                      key={idx} 
                      className={`w-9 h-9 flex items-center justify-center text-xl rounded-full transition-all ${idx === 4 ? 'bg-[#ffcb0f] scale-125 shadow-[0_10px_20px_rgba(255,203,15,0.4)]' : 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100 cursor-pointer'}`}
                    >
                      {idx === 4 ? '😁' : emoji}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Column 2 - Starts Higher with Downward Parallax */}
            <motion.div 
              className="flex-1 flex flex-col gap-6 lg:gap-10 sm:parallax-y-right"
              // Only apply transform on larger screens (logic moved to class or inline style)
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? yRight : 0 }}
            >
              {/* 1. Stats Card (Top Right) */}
              <motion.div 
                variants={itemVariants}
                className="bg-white p-10 rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.07)] border border-gray-50 relative overflow-hidden group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-5xl font-black text-[#1a1a1a] tracking-tighter">30,000+</h3>
                  <div className="p-3 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors">
                    <TrendingUp className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <p className="text-[14px] text-gray-400 font-medium leading-relaxed mb-8">
                  Sales in July 2025 with 5 star ratings and happy clients.
                </p>
                <div className="w-full h-[1.5px] bg-[#ffcb0f] mb-10 opacity-40"></div>
                
                {/* Two rows of avatars for that trendy look */}
                <div className="space-y-5">
                  <div className="flex items-center -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 5}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-[3px] border-white bg-[#ffcb0f] flex items-center justify-center text-[9px] font-black shadow-sm">N</div>
                    {[4].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-[3px] border-white bg-[#ffcb0f] flex items-center justify-center text-[9px] font-black shadow-sm">S</div>
                  </div>
                  <div className="flex items-center -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 22}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-[3px] border-white bg-[#ffcb0f] flex items-center justify-center text-[9px] font-black shadow-sm">JJ</div>
                    {[4].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 33}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-[3px] border-white bg-[#ffcb0f] flex items-center justify-center text-[9px] font-black shadow-sm">CV</div>
                    {[5, 6].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 44}`} alt="user" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* 2. Gallery Image (Handshake) */}
              <motion.div 
                variants={itemVariants}
                className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] h-[280px] lg:h-[350px]"
              >
                <img 
                  src={gallery2} 
                  alt="Reliable Partnership" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            className="lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h4 className="text-sm font-bold tracking-[0.3em] uppercase mb-4">
                CONSTRUCT YOUR <span className="text-[#00C2FF] font-black">DREAM HOME</span>
              </h4>
              <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-8 tracking-tighter uppercase">
                ABOUT US
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We are a leading construction company dedicated to turning your vision into reality. With over a decade of experience in the industry, we specialize in residential and commercial construction projects that exceed expectations.
                </p>
                <p>
                  Our team of skilled professionals combines innovative techniques with traditional craftsmanship to deliver exceptional results. From initial design to final completion, we ensure every detail meets the highest standards of quality and excellence.
                </p>
              </div>
            </div>

            <button className="group relative bg-[#ffcb0f] text-black px-12 py-5 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,203,15,0.3)] skew-x-[-15deg] rounded-sm overflow-hidden">
              <span className="relative z-10 skew-x-[15deg] block">CONTACT US</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
