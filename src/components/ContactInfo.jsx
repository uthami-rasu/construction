import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock 
} from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="bg-[#006699] py-12 md:py-16 font-poppins relative overflow-hidden min-h-[400px] flex items-center">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">
          {/* Architectural Background Ornament */}
          <div className="absolute -left-20 top-0 pointer-events-none select-none overflow-hidden opacity-[0.03] z-0">
            <span className="text-[12rem] font-black font-poppins leading-none tracking-tighter text-white whitespace-nowrap">
              CONTACT
            </span>
          </div>

          {/* Left Column: Heading */}
          <div className="lg:col-span-4 relative z-10 pl-6">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-linear-to-b from-[#00C2FF] via-white/20 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#00C2FF]"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-[0.3em]">
                  Contact Info
                </span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-playfair italic text-white leading-[1.05] tracking-tight mb-0"
            >
              We are always <br />
              <span className="text-[#00C2FF]">happy</span> to assist you
            </motion.h2>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.4fr] gap-x-8 gap-y-10 pt-2">
            {/* Email Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-bold text-base uppercase tracking-wider">Email Address</span>
                <Mail className="w-4 h-4 text-[#00C2FF]" />
              </div>
              <div className="w-16 h-[1px] bg-white/20 mb-6"></div>
              <h4 className="text-white/80 font-bold text-[11px] uppercase tracking-widest mb-2 font-poppins">Send us an email</h4>
              <p className="text-white font-medium text-sm md:text-base break-words">krrishconstruction95@gmail.com</p>
            </motion.div>

            {/* Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-bold text-base uppercase tracking-wider">Number</span>
                <Phone className="w-4 h-4 text-[#00C2FF]" />
              </div>
              <div className="w-16 h-[1px] bg-white/20 mb-6"></div>
              <h4 className="text-white/80 font-bold text-[11px] uppercase tracking-widest mb-2 font-poppins">Give us a call</h4>
              <p className="text-white font-medium text-sm md:text-base whitespace-nowrap">+91 8610813419</p>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-bold text-base uppercase tracking-wider">Address</span>
                <MapPin className="w-4 h-4 text-[#00C2FF]" />
              </div>
              <div className="w-16 h-[1px] bg-white/20 mb-6"></div>
              <h4 className="text-white/80 font-bold text-[11px] uppercase tracking-widest mb-2 font-poppins">Visit our office</h4>
              <p className="text-white font-medium text-sm md:text-base leading-relaxed">
                217/4, Sri Lakshmi Complex, <br />
                Cotton Market, Rajapalayam
              </p>
            </motion.div>
          </div>
        </div>

        {/* New Row: Description (Left) + Business Hours (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-12">
          {/* Description - Left Side (Aligns with Heading) */}
          <div className="lg:col-span-4 pl-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <p className="text-white/60 text-[13px] leading-relaxed font-medium max-w-sm">
                We're here to help and answer any question you might have. We look forward
                to hearing from you! Whether you need support, or just want to say hello, feel free to reach out.
              </p>
            </motion.div>
          </div>

          {/* Business Hours - Right Side (Aligns with Contact Details) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex items-center gap-3 min-w-[180px]">
                  <Clock className="w-5 h-5 text-[#00C2FF]" />
                  <h3 className="text-white font-bold text-lg">Business Hours</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full">
                  <div className="relative">
                    <span className="text-[#00C2FF] text-[10px] uppercase font-bold tracking-widest block mb-1">Monday - Friday</span>
                    <span className="text-white font-medium text-xs">9:00 AM - 6:00 PM</span>
                    <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/10"></div>
                  </div>
                  <div className="relative">
                    <span className="text-[#00C2FF] text-[10px] uppercase font-bold tracking-widest block mb-1">Saturday</span>
                    <span className="text-white font-medium text-xs">10:00 AM - 4:00 PM</span>
                    <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/10"></div>
                  </div>
                  <div className="relative">
                    <span className="text-[#00C2FF] text-[10px] uppercase font-bold tracking-widest block mb-1">Sunday</span>
                    <span className="text-white font-medium text-xs opacity-60">Closed</span>
                    <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/10"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
