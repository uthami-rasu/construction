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
} from "lucide-react";

const StatNumber = ({ value, suffix = "+" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  const display = useTransform(springValue, (latest) => Math.round(latest));

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-black text-white flex items-center justify-center"
    >
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

const stats = [
  {
    value: 150,
    label: "Projects Completed",
    icon: Zap,
    iconColor: "#ffcb0f",
    glowColor: "rgba(255,203,15,0.8)",
  },
  {
    value: 10,
    label: "Years Experience",
    icon: History,
    iconColor: "#ffffff",
    glowColor: "rgba(255,255,255,0.6)",
  },
  {
    value: 100,
    label: "Happy Clients",
    icon: Heart,
    iconColor: "#ffcb0f",
    glowColor: "rgba(255,203,15,0.8)",
  },
  {
    value: 50,
    label: "Team Members",
    icon: Users,
    iconColor: "#ffffff",
    glowColor: "rgba(255,255,255,0.6)",
  },
];

const FloatingIcon = ({ Icon, initialX, initialY, delay }) => (
  <motion.div
    initial={{ x: initialX, y: initialY, opacity: 0 }}
    animate={{
      y: [initialY, initialY - 40, initialY],
      opacity: [0.05, 0.15, 0.05],
      rotate: [0, 15, -15, 0],
    }}
    transition={{
      duration: 10,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute pointer-events-none text-white/20"
  >
    <Icon size={140} strokeWidth={0.5} />
  </motion.div>
);

const AboutStats = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-[#006699] font-poppins relative overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Floating Elements */}
      <div className="absolute inset-0 z-0">
        <FloatingIcon
          Icon={Construction}
          initialX="5%"
          initialY="10%"
          delay={0}
        />
        <FloatingIcon Icon={Drill} initialX="85%" initialY="60%" delay={1.5} />
        <FloatingIcon Icon={Ruler} initialX="15%" initialY="70%" delay={3} />
        <FloatingIcon
          Icon={Building2}
          initialX="75%"
          initialY="5%"
          delay={4.5}
        />
        <FloatingIcon Icon={HardHat} initialX="40%" initialY="85%" delay={2} />
        <FloatingIcon Icon={Hammer} initialX="10%" initialY="40%" delay={6} />
      </div>

      {/* Radiant Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-sky-300/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ y: yOffset }}
              className="relative group bg-white/10 backdrop-blur-3xl border border-white/20 p-10 pb-14 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden text-left h-full"
            >
              {/* Elegant Glow-Orb behind icon */}
              <div
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 transition-opacity group-hover:opacity-40"
                style={{ background: stat.iconColor }}
              />

              {/* Glowing Icon Accent - Stroke & Fill Style */}
              <div
                className="absolute top-8 right-8 z-0 transition-transform duration-500 group-hover:scale-110"
                style={{ filter: `drop-shadow(0 0 15px ${stat.glowColor})` }}
              >
                <stat.icon
                  className="w-10 h-10"
                  style={{
                    color: stat.iconColor,
                    strokeWidth: 2.5,
                  }}
                />
              </div>

              <div className="relative z-10 mt-2">
                <StatNumber value={stat.value} />

                <h4 className="text-white font-black text-sm uppercase tracking-[0.25em] mt-6 leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                  {stat.label}
                </h4>
              </div>

              {/* Minimalist Glass Polish Accent */}
              <div className="absolute bottom-10 left-10 w-12 h-[3px] bg-white/30 rounded-full group-hover:w-20 group-hover:bg-[#ffcb0f] transition-all duration-700"></div>

              {/* Crystalline Corner Decor */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
