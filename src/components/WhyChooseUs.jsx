import React from "react";
import { motion } from "framer-motion";
import { Leaf, Clock, Heart, BarChart3, Star, Zap, Award } from "lucide-react";

const reasons = [
  {
    title: "WE DELIVER QUALITY",
    description:
      "We use premium materials and cutting-edge techniques to deliver durable and aesthetically superior construction, built to withstand time and elements.",
    icon: Leaf,
    color: "from-[#00C2FF] to-[#005a77]",
  },
  {
    title: "ALWAYS ON TIME",
    description:
      "Your deadlines and budget matter. We ensure timely project completion without compromising on quality, making your vision a seamless reality.",
    icon: Clock,
    color: "from-[#00C2FF] to-[#73C7E7]",
  },
  {
    title: "WE ARE PASSIONATE",
    description:
      "Construction is more than just a profession—it's our passion. We take pride in transforming ideas into strong, lasting, and inspiring structures.",
    icon: Heart,
    color: "from-[#00C2FF] to-[#82d1f0]",
  },
  {
    title: "PROFESSIONAL SERVICES",
    description:
      "With years of industry experience, our skilled professionals bring innovation and precision to every project, ensuring top-notch results.",
    icon: BarChart3,
    color: "from-[#4ebdfa] to-[#01b4e4]",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-4 bg-white relative overflow-hidden font-[poppins]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-[#00C2FF]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#ffcb0f]/5 rounded-full blur-[120px]"></div>

        {/* Subtle Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#00C2FF 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#00C2FF]/5 px-5 py-2 rounded-full border border-[#00C2FF]/10 mb-6"
          >
            <Star className="w-3.5 h-3.5 text-[#00C2FF] fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C2FF]">
              Our Core Values
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-[montserrat] font-black text-gray-900 leading-none capitalize tracking-[-0.02em] mb-10"
          >
            Why Choose <br className="hidden md:block" />
            <span className="text-[#00C2FF]">Krish Construction</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-gray-500 italic font-playfair leading-relaxed relative"
            >
              <span className="text-[#00C2FF] text-6xl absolute -left-10 -top-6 opacity-20 font-serif">
                “
              </span>
              We don't just build structures—we build trust, innovation, and
              lasting impressions.
              <span className="text-[#00C2FF] text-6xl absolute -right-10 -bottom-10 opacity-20 font-serif">
                ”
              </span>
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              className="h-1 bg-linear-to-r from-[#00C2FF] to-[#ffcb0f] mx-auto my-10 rounded-full"
            ></motion.div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -15 }}
              className="relative group p-10 rounded-[3rem] bg-linear-to-b from-gray-50/50 to-white border border-gray-100/50 hover:shadow-[0_40px_80px_-20px_rgba(0,194,255,0.15)] hover:border-[#00C2FF]/30 transition-all duration-500 text-center"
            >
              {/* Icon Container with Concentric Glass Layers */}
              <div className="relative mb-10 flex items-center justify-center">
                {/* Outer concentric shell */}
                <div className="w-32 h-32 rounded-[2.5rem] bg-[#00C2FF]/5 flex items-center justify-center transition-all duration-500 group-hover:rotate-15">
                  {/* Middle concentric shell */}
                  <div className="w-24 h-24 rounded-3xl bg-[#00C2FF]/10 backdrop-blur-sm border border-[#00C2FF]/10 flex items-center justify-center rotate-[-5deg] group-hover:rotate-0 transition-all duration-500">
                    {/* Inner Icon Container */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${reason.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 rotate-10 group-hover:rotate-0`}
                    >
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Decorative floating dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#ffcb0f]/40 blur-[2px] group-hover:animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[#00C2FF]/40 blur-[2px]"></div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-gray-900 mb-5 tracking-tight group-hover:text-[#00C2FF] transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm font-medium text-gray-400 leading-relaxed group-hover:text-gray-500 transition-colors">
                {reason.description}
              </p>

              {/* Bottom Card Accent */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffcb0f]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern 'Glass Pill' CTA - Very Compact & Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 group relative"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-[#00C2FF]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative bg-[#004d66]/95 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* Icon Badge */}
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#00C2FF] to-[#005a77] flex items-center justify-center shadow-lg shadow-[#00C2FF]/20">
                <Zap className="w-8 h-8 text-white animate-pulse" />
              </div>

              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  Ready to transform{" "}
                  <span className="font-playfair italic font-medium text-[#00C2FF]">
                    your vision?
                  </span>
                </h4>
                <p className="text-white/50 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mt-2">
                  Let's build something exceptional together
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center md:items-end gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#004d66] px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#00C2FF] hover:text-white transition-all duration-300"
              >
                Get in Touch
              </motion.button>
              <div className="text-white/20 text-[9px] font-black uppercase tracking-widest">
                500+ Projects Delivered
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
