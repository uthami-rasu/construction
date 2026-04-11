import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";

const PortfolioCTA = () => {
  const stats = [
    {
      id: 1,
      icon: Trophy,
      value: "50+",
      label: "AWARDS WON",
    },
    {
      id: 2,
      icon: Users,
      value: "500+",
      label: "HAPPY CLIENTS",
    },
    {
      id: 3,
      icon: CheckCircle,
      value: "250+",
      label: "PROJECTS DONE",
    },
    {
      id: 4,
      icon: TrendingUp,
      value: "98%",
      label: "SUCCESS RATE",
    },
  ];

  return (
    <section 
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080229 0%, #120b4a 100%)' }}
    >
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,203,15,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,203,15,0.03)_0%,transparent_50%)]" />

      {/* Architectural Background Ornament */}
      <div className="absolute -right-[-20px] bottom-0 pointer-events-none select-none overflow-hidden opacity-[0.04] z-0">
        <span className="text-[6rem] font-black font-poppins leading-none tracking-tighter text-white whitespace-nowrap">
          FUTURE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content - CTA */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#FFCB0F] rounded-full" />
                <span className="text-xs font-black tracking-[0.4em] uppercase text-[#FFCB0F]">
                  START YOUR PROJECT
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white leading-none mb-8 uppercase tracking-tighter">
                READY TO BUILD <br />
                <span className="text-[#FFCB0F]">SOMETHING GREAT?</span>
              </h2>

              <p className="text-lg text-gray-400 font-medium leading-relaxed mb-12 max-w-xl">
                Let's discuss your vision and create a customized construction solution 
                that exceeds expectations. Our masters of engineering are ready to start.
              </p>

              <button className="group relative bg-[#FFCB0F] text-black px-10 py-5 font-black uppercase tracking-widest text-sm transition-all hover:scale-110 active:scale-95 flex items-center gap-4 shadow-2xl rounded-sm overflow-hidden [transform:skewX(-15deg)]">
                <span className="relative z-10 [transform:skewX(15deg)] flex items-center gap-2">
                  GET FREE QUOTE
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[15deg]" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors duration-500 group"
              >
                <div className="mb-6 p-3 bg-[#FFCB0F] rounded-lg w-fit group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#FFCB0F]/20">
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight group-hover:text-[#FFCB0F] transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
