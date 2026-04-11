import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  useScroll,
} from "framer-motion";
import {
  Zap,
  History,
  Heart,
  Users,
  Construction,
  Drill,
  Ruler,
  Building2,
  HardHat,
  Hammer,
  Trophy,
  Award,
  TrendingUp,
  Briefcase,
} from "lucide-react";

const StatNumber = ({ value, suffix = "+" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 120,
    mass: 0.8,
  });
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  const display = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <span
      ref={ref}
      className="stat-number text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]"
    >
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

const FloatingIcon = ({ Icon, x, y, duration = 12, delay = 0, size = 120 }) => (
  <motion.div
    initial={{ x, y, opacity: 0, rotate: 0 }}
    animate={{
      y: [y, y - 35, y],
      x: [x, x + 12, x - 8, x],
      opacity: [0.03, 0.08, 0.03],
      rotate: [0, 12, -8, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    }}
    className="absolute pointer-events-none text-white/10 z-0"
    style={{ willChange: "transform" }}
  >
    <Icon size={size} strokeWidth={0.6} opacity={0.4} />
  </motion.div>
);

const stats = [
  {
    value: 187,
    label: "Projects Delivered",
    icon: Building2,
    iconColor: "#FFCB0F",
    accent: "#FFCB0F",
    description: "Residential & Commercial",
  },
  {
    value: 14,
    label: "Years Excellence",
    icon: Award,
    iconColor: "#FFCB0F",
    accent: "#FFCB0F",
    description: "Industry Leaders",
  },
  {
    value: 124,
    label: "Happy Partners",
    icon: Heart,
    iconColor: "#FFCB0F",
    accent: "#FFCB0F",
    description: "Long-term clients",
  },
  {
    value: 68,
    label: "Expert Crew",
    icon: Users,
    iconColor: "#FFCB0F",
    accent: "#FFCB0F",
    description: "Skilled professionals",
  },
];

const AboutStats = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-28 md:py-16"
      style={{ background: 'linear-gradient(135deg, #080229 0%, #120b4a 100%)' }}
    >
      {/* Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Structural Lines Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
                            repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px)`,
        }}
      />

      {/* Glowing Orbs for Depth */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[-8%] w-[500px] h-[500px] rounded-full bg-[#FFCB0F]/10 blur-[100px] z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-white/10 blur-[140px] z-0"
      />

      {/* Floating Construction Icons */}
      <FloatingIcon Icon={Construction} x="3%" y="12%" duration={14} delay={0} size={150} />
      <FloatingIcon Icon={Drill} x="88%" y="75%" duration={16} delay={1.2} size={110} />
      <FloatingIcon Icon={Ruler} x="12%" y="78%" duration={18} delay={2.5} size={130} />
      <FloatingIcon Icon={HardHat} x="75%" y="8%" duration={13} delay={0.8} size={140} />
      <FloatingIcon Icon={Hammer} x="45%" y="88%" duration={17} delay={3} size={120} />
      <FloatingIcon Icon={TrendingUp} x="92%" y="22%" duration={15} delay={4} size={100} />
      <FloatingIcon Icon={Briefcase} x="18%" y="42%" duration={19} delay={1.5} size={95} />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FFCB0F] animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
              Built on trust
            </span>
          </div>
        
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: idx * 0.12,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{ y: yOffset }}
              className="relative group rounded-3xl overflow-hidden"
            >
              <div className="rounded-3xl p-7 md:p-8 h-full flex flex-col backdrop-blur-md bg-white/5 border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-white/30">
                {/* Top Row with Icon */}
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FFCB0F]/20 blur-xl rounded-full -z-10 group-hover:blur-2xl transition-all"></div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <stat.icon
                        size={28}
                        strokeWidth={1.8}
                        style={{ color: stat.iconColor }}
                      />
                    </div>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 bg-white/5 px-2 py-1 rounded-full">
                    #{idx + 1}
                  </div>
                </div>

                {/* Stat Number */}
                <div className="mb-3">
                  <StatNumber value={stat.value} />
                </div>

                {/* Label & Description */}
                <h3 className="text-white text-lg font-bold tracking-wide mb-1">
                  {stat.label}
                </h3>
                <p className="text-white/50 text-sm font-medium">
                  {stat.description}
                </p>

                {/* Progress Line */}
                <div className="mt-6 pt-2">
                  <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: idx * 0.15 + 0.5, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: stat.accent, width: "0%" }}
                    />
                  </div>
                </div>

                {/* Subtle Corner Accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#FFCB0F]/5 to-transparent rounded-tl-3xl pointer-events-none"></div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"></div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
};

export default AboutStats;
