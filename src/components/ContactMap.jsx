import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="bg-white py-16 md:py-20 font-poppins relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-[#FFCB0F]/40 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFCB0F]/10 flex items-center justify-center text-[#FFCB0F]">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-[#FFB800] font-black text-xs uppercase tracking-[0.4em] mb-1">
                Our Location
              </h4>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] uppercase leading-tight tracking-tighter">
              Find Us Here
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium max-w-md pb-2"
          >
            Visit our office and meet our team in person. We're located in the heart of
            Rajapalayam's commercial district, ready to discuss your next construction project.
          </motion.p>
        </div>

        {/* High-End Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] border-4 border-white group"
        >
          {/* Subtle Glow - matches the map's aesthetic */}
          <div className="absolute inset-0 bg-[#FFCB0F]/5 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"></div>

          {/* Google Maps Embed */}
          <div className="w-full h-[300px] md:h-[400px] bg-gray-100 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.567919465809!2d77.5555514750242!3d9.459231990620282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e93c7f5e98c7%3A0xa844ec3e022a73b6!2sKRRISH%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1746190968174!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krrish Construction Location"
            />
          </div>

          {/* Interactive Legend Badge Overlay */}
          <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20 pointer-events-none translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
            <div className="w-10 h-10 rounded-full bg-[#FFCB0F] flex items-center justify-center text-black">
              <MapPin className="w-5 h-5 fill-black" />
            </div>
            <div>
              <p className="text-gray-900 font-black text-xs uppercase tracking-widest">Rajapalayam Office</p>
              <p className="text-gray-500 text-[10px] font-bold">Tamil Nadu, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
