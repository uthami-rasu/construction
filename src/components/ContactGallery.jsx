import React from "react";
import { motion } from "framer-motion";
import image8 from "../assets/images/gallery/image 8.png";
import image9 from "../assets/images/gallery/image 9.png";
import image10 from "../assets/images/gallery/image 10.png";
import image11 from "../assets/images/gallery/image 11.png";
import image12 from "../assets/images/gallery/image 12.png";
import image13 from "../assets/images/gallery/image 13.png";
import image14 from "../assets/images/gallery/image 14.png";

const ContactGallery = () => {
  const images = [
    { src: image13, title: "Project 1" },
    { src: image12, title: "Project 2" },
    { src: image11, title: "Project 3" },
    { src: image10, title: "Project 4" },
    { src: image9, title: "Project 5" },
    { src: image8, title: "Project 6" },
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

        {/* Gallery Grid - 2fr 1fr 1fr / 1fr 1fr 2fr Layout */}
        <div className="grid grid-cols-4 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Row 1: 2fr 1fr 1fr */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            {/* Profile Badge */}

            <img src={images[0].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            <img src={images[1].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            <img src={images[2].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
          </motion.div>

          {/* Row 2: 1fr 1fr 2fr */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            <img src={images[3].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 relative rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            <img src={images[4].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            <img src={images[5].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactGallery;
