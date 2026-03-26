import React, { useEffect, useRef } from "react";
import aboutImg from "../assets/images/about.jpeg";
import { motion, useAnimation, useInView } from "framer-motion";
import { Award, Star, Users, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Floating shapes data
  const floatingShapes = [
    { top: "10%", left: "5%", size: "40px", delay: 0, duration: 8 },
    { top: "70%", left: "10%", size: "60px", delay: 1, duration: 10 },
    { top: "20%", left: "85%", size: "50px", delay: 2, duration: 12 },
    { top: "80%", left: "90%", size: "30px", delay: 3, duration: 9 },
    { top: "40%", left: "95%", size: "45px", delay: 1.5, duration: 11 },
    { top: "60%", left: "3%", size: "55px", delay: 0.5, duration: 13 },
  ];

  return (
    <section
      id="about-us"
      className="w-full  bg-linear-to-br from-[#ffffff] via-[#f8fbff] to-[#eef6ff] py-16 sm:py-24 lg:py-32 relative overflow-hidden font-poppins"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Mesh Gradient */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-linear-to-br from-[#00C2FF]/10 to-transparent rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-linear-to-tl from-[#ffcb0f]/10 to-transparent rounded-full blur-[120px] animate-pulse"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C2FF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Animated Threads */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M 10,50 Q 25,20 40,50 Q 55,80 70,50 Q 85,20 90,50"
              fill="none"
              stroke="url(#aboutGradient1)"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient
                id="aboutGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#00C2FF" />
                <stop offset="100%" stopColor="#3498db" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Shapes */}
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-linear-to-br from-[#00C2FF]/10 to-[#ffcb0f]/10 backdrop-blur-[2px] border border-white/20"
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              left: shape.left,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 px-4 sm:px-6 py-8 sm:py-0 relative z-10"
        ref={ref}
      >
        {/* Content Side */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col justify-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] text-[#00C2FF] bg-[#00C2FF]/5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#00C2FF]/20 shadow-sm">
              Welcome to Our Company
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.2rem,5vw,4rem)] font-montserrat font-black text-gray-900 leading-none capitalize tracking-[-0.02em] mb-6 sm:mb-8"
          >
            Building the Future <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00C2FF] to-[#005a77]">
              with Excellence
            </span>
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="space-y-4 sm:space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-linear-to-b from-[#00C2FF] to-[#ffcb0f] rounded-full"></div>
              <p className="text-gray-600 text-sm sm:text-lg lg:text-xl leading-relaxed font-medium pl-2">
                Founded on a commitment to quality and innovation,{" "}
                <span className="text-[#00C2FF] font-black italic">
                  Krrish Construction
                </span>{" "}
                has been shaping spaces for years. From residential homes to
                commercial landmarks, we bring expertise, precision, and passion
                to every project.
              </p>
            </div>

            <p className="text-gray-500 text-xs sm:text-base lg:text-lg leading-relaxed font-medium opacity-90">
              Our mission is to build structures that blend functionality,
              durability, and aesthetic excellence. We envision a future where
              innovation and sustainability drive every project we undertake.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(0,194,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-linear-to-r from-[#00C2FF] to-[#73C7E7] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                KNOW MORE
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                </div>
              </motion.button>

              <div className="w-full sm:w-auto flex -space-x-3 sm:-space-x-4 items-center pl-0 sm:pl-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-3 sm:border-4 border-white bg-gray-200 overflow-hidden shadow-md"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="client"
                    />
                  </div>
                ))}
                <div className="pl-3 sm:pl-6">
                  <div className="text-xs sm:text-sm font-black text-gray-900 flex items-center gap-1">
                    <Users className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00C2FF]" />
                    500+
                  </div>
                  <div className="text-[7px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                    Global Clients
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8, rotateY: 30 },
            visible: {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              transition: { duration: 1, delay: 0.4 },
            },
          }}
          className="relative perspective-1000"
        >
          <div className="relative z-10">
            {/* Main Image Frame - Slightly smaller to balance */}
            <motion.div
              whileHover={{ y: -5, rotateZ: 0.5 }}
              className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-4 sm:border-8 border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]"
            >
              <img
                src={aboutImg}
                alt="Krrish Construction Projects"
                className="w-full h-[300px] sm:h-[400px] lg:h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-[#1a1a1a]/30 via-transparent to-transparent"></div>
            </motion.div>

            {/* Float Badge 1 (Ratings) - Resized */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-6 rounded-4xl shadow-xl border border-white/20 z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#ffcb0f] to-[#ffaa00] flex items-center justify-center shadow-lg">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900 leading-none">
                    4.9/5
                  </div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                    Client Rating
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Experience Card - Significantly Reduced Size */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-7 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,194,255,0.25)] border border-white z-20 hidden md:block min-w-[200px]"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#00C2FF] to-[#73C7E7] flex items-center justify-center mb-4 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900 mb-0.5 tracking-tighter">
                    15+
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#00C2FF]">
                    Years of
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-900 mt-0.5">
                    Excellence
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="w-10 h-1 bg-[#ffcb0f] rounded-full mt-4"></div>
              </div>
            </motion.div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00C2FF]/10 blur-[100px] -z-10 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
