import React from "react";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import imgMain from "../assets/images/service.jpeg";
import imgTop from "../assets/images/abt-gallery1.jpeg";
import imgBottom from "../assets/images/about.jpeg";

const features = [
  {
    title: "Licensed & Insured",
    description: "Fully certified with comprehensive insurance coverage",
  },
  {
    title: "Quality Materials",
    description: "We use only premium, durable construction materials",
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with decades of combined experience",
  },
];

const FeaturedService = () => {
  return (
    <section className="py-24 md:py-32 bg-[#006699] font-poppins relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C2FF]/5 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C2FF]/10 blur-[150px] rounded-full -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <h4 className="text-white font-bold text-xs md:text-sm tracking-[0.4em] uppercase">
                Building Construction{" "}
                <span className="text-[#00C2FF]">Excellence</span>
              </h4>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight"
            >
              Featured <br />
              <span className="text-white">Service</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/95 text-base md:text-lg mb-12 leading-relaxed font-medium"
            >
              With over 20 years of experience in the construction industry, we
              have established ourselves as leaders in building construction.
              Our commitment to quality, safety, and innovation sets us apart
              from the competition.
            </motion.p>

            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 p-2 bg-[#1a2a41] rounded-lg group-hover:bg-[#00C2FF] transition-colors duration-300">
                    <CheckSquare className="w-5 h-5 text-[#00C2FF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h5 className="text-[#00C2FF] font-black text-lg mb-1 uppercase tracking-tight">
                      {feature.title}
                    </h5>
                    <p className="text-white/90 text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <button className="group relative bg-white hover:bg-gray-50 text-[#006699] px-6 md:px-10 py-3 md:py-4 font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:scale-110 active:scale-95 [transform:skewX(-15deg)] rounded-sm overflow-hidden shadow-2xl flex items-center gap-3">
                <span className="relative z-10 [transform:skewX(15deg)]">
                  Get Started Today
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Creative Image Collage */}
          <div className="relative order-first lg:order-last">
            <div className="relative h-[400px] md:h-[550px] w-full max-w-[500px] mx-auto">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[75%] h-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-8 border-white"
              >
                <img
                  src={imgMain}
                  alt="Main Service"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Smaller Top Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute right-0 top-0 w-[45%] h-[40%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-white"
              >
                <img
                  src={imgTop}
                  alt="Construction Process"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Smaller Bottom Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute right-[5%] bottom-[-5%] w-[45%] h-[40%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-white"
              >
                <img
                  src={imgBottom}
                  alt="Expert Planning"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Accent Circle for Flair */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -right-8 -bottom-8 w-24 h-24 border-[12px] border-[#00C2FF]/20 rounded-full z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
