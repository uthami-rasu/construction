import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ProjectGallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Corporate Landmark",
      category: "Commercial",
    },
    {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Luxury Residence",
      category: "Residential",
    },
    {
      url: "https://images.unsplash.com/photo-1503387762-592dea58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Modern Infrastructure",
      category: "Industrial",
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Urban Development",
      category: "Strategic",
    },
  ];

  return (
    <section
      id="project-gallery"
      className="py-32 px-6 w-full relative overflow-hidden bg-linear-to-b from-white via-[#f0f9ff] to-white"
    >
      {/* Light-weight White Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Subtle Sky Blue Glows */}
      <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[#00C2FF]/5 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-[#00C2FF]/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Text Content - Sticky on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-[#00C2FF]"></div>
                <h2 className="text-xs font-black tracking-[0.4em] uppercase text-[#00C2FF]">
                  Project Showcase
                </h2>
              </div>

              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-montserrat font-black mb-8 leading-none tracking-tight text-gray-900 capitalize">
                Built For{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00C2FF] to-[#005a77]">
                  Durability
                </span>
                , <br />
                Powered By Master Skill.
              </h1>

              <p className="text-lg leading-relaxed mb-12 font-medium text-gray-500">
                Every structure is a legacy. Our engineering masters analyze
                every detail to create architectural landmarks that reflect
                strength, innovation, and timeless design.
              </p>

              <div className="p-8 mb-12 backdrop-blur-sm bg-white/40 border-l-4 border-[#00C2FF] rounded-r-2xl shadow-sm border border-[#00C2FF]/10">
                <p className="text-xl font-light italic text-gray-600 leading-relaxed font-playfair">
                  "A building is not just a structure. It's an investment in
                  progress and a testament to architectural vision."
                </p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(0,194,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-linear-to-r from-[#00C2FF] to-[#015e7a] text-white rounded-2xl font-black uppercase tracking-widest overflow-hidden shadow-2xl transition-all"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Full Gallery{" "}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.button>
            </motion.div>
          </div>

          {/* Image Grid - Asymmetric Layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 sm:mt-12 md:mt-24"
            >
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-4xl group shadow-2xl">
                <img
                  src={images[0].url}
                  alt={images[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#00C2FF] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    {images[0].category}
                  </span>
                  <p className="text-white font-montserrat font-black uppercase tracking-widest text-lg">
                    {images[0].title}
                  </p>
                </div>
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-4xl group shadow-2xl">
                <img
                  src={images[1].url}
                  alt={images[1].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#00C2FF] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    {images[1].category}
                  </span>
                  <p className="text-white font-montserrat font-black uppercase tracking-widest text-lg">
                    {images[1].title}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-4xl group shadow-2xl">
                <img
                  src={images[2].url}
                  alt={images[2].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#00C2FF] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    {images[2].category}
                  </span>
                  <p className="text-white font-montserrat font-black uppercase tracking-widest text-lg">
                    {images[2].title}
                  </p>
                </div>
              </div>

              <div className="relative aspect-3/4 w-full overflow-hidden rounded-4xl group shadow-2xl">
                <img
                  src={images[3].url}
                  alt={images[3].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#00C2FF] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    {images[3].category}
                  </span>
                  <p className="text-white font-montserrat font-black uppercase tracking-widest text-lg">
                    {images[3].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
