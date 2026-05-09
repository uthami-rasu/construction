import React from "react";
import { motion } from "framer-motion";
import imageCopy from "../assets/images/gallery/image copy.png";
import imageCopy2 from "../assets/images/gallery/image copy 2.png";
import imageCopy3 from "../assets/images/gallery/image copy 3.png";
import imageCopy4 from "../assets/images/gallery/image copy 4.png";
import imageCopy5 from "../assets/images/gallery/image copy 5.png";
import imageMain from "../assets/images/gallery/image.png";

const ContactGallery = () => {
  const images = [
    { src: imageMain, title: "Project 1" },
    { src: imageCopy, title: "Project 2" },
    { src: imageCopy2, title: "Project 3" },
    { src: imageCopy3, title: "Project 4" },
    { src: imageCopy4, title: "Project 5" },
    { src: imageCopy5, title: "Project 6" },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#fffdfa] relative overflow-hidden font-poppins">
      {/* Very Light Engineering Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#FFB800 1px, transparent 1px), linear-gradient(90deg, #FFB800 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#FFCB0F] font-black text-xs uppercase tracking-[0.4em]">
                OUR <span className="text-gray-400">WORK</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] uppercase leading-[0.9] tracking-tighter">
              PROJECT <br />
              GALLERY
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium lg:text-right max-w-lg lg:ml-auto">
              A glimpse of our completed and ongoing construction projects. From residential
              homes to large-scale commercial buildings, we bring every vision to life with
              precision, quality craftsmanship, and a commitment to excellence.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid - Restored original layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Row 1: 2fr 1fr 1fr */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl bg-white group"
          >
            <img src={images[0].src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={images[0].title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-white group"
          >
            <img src={images[1].src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={images[1].title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-white group"
          >
            <img src={images[2].src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={images[2].title} />
          </motion.div>

          {/* Row 2: 1fr 1fr 2fr */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-white group"
          >
            <img src={images[3].src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={images[3].title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-white group"
          >
            <img src={images[4].src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={images[4].title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl bg-white group"
          >
            <img src={images[5].src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={images[5].title} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactGallery;
