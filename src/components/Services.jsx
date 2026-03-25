import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  ClipboardList,
  HardHat,
  Leaf,
  PaintBucket,
  ArrowRight,
  Heart,
  Users,
  Star,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    subtitle: "Custom Homes & Villas",
    label: "FEATURED",
    rating: "4.9",
    team: "Expert Team",
    timeline: "On Time",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Commercial Construction",
    subtitle: "Office & Retail Spaces",
    label: "NEW",
    rating: "4.8",
    team: "Scale Expert",
    timeline: "Reliable",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Project Management",
    subtitle: "End-to-End Solutions",
    label: "CERTIFIED",
    rating: "5.0",
    team: "Managers",
    timeline: "Efficient",
    icon: ClipboardList,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Custom Solutions",
    subtitle: "Unique Architectural Work",
    label: "PREMIUM",
    rating: "4.9",
    team: "Designers",
    timeline: "Quality",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Sustainable Building",
    subtitle: "Eco-Friendly Design",
    label: "ECO",
    rating: "4.7",
    team: "Green Team",
    timeline: "Eco-Safe",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1518005020950-ec8fa0fa5102?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Renovations",
    subtitle: "Modern Remodeline",
    label: "QUALITY",
    rating: "4.8",
    team: "Specialists",
    timeline: "Fast Track",
    icon: PaintBucket,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-white relative overflow-hidden font-poppins"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-[#00C2FF]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00C2FF]">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter"
          >
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00C2FF] to-[#005a77]">
              Construction
            </span>{" "}
            Solutions
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
            >
              {/* Image Background */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />

              {/* Overlay Gradient - Sophisticated Fade */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-gray-950/20 to-transparent group-hover:from-gray-950/50 transition-all duration-500"></div>

              {/* Top Badges */}
              <div className="absolute top-5 left-5 flex gap-2">
                <span className="bg-[#00C2FF] text-white text-[9px] font-black px-3 py-1 rounded-md shadow-lg italic">
                  {service.label}
                </span>
                <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[9px] font-black px-3 py-1 rounded-md shadow-lg">
                  Q2 2025
                </span>
              </div>

              {/* Wishlist Heart */}
              <button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#00C2FF] transition-colors">
                <Heart className="w-4 h-4" />
              </button>

              {/* Expertise Badge - Moved Up */}
              <div className="absolute top-[40%] left-5 -translate-y-1/2">
                <div className="bg-[#002b3a]/80 backdrop-blur-md border-l-4 border-[#00C2FF] px-5 py-2.5 rounded-r-lg shadow-xl">
                  <span className="text-white text-xs font-black tracking-widest uppercase">
                    Expertise Guaranteed
                  </span>
                </div>
              </div>

              {/* Content Overlay - Shifted Higher */}
              <div className="absolute inset-x-0 bottom-6 px-6 transition-transform duration-500 group-hover:-translate-y-16">
                <div>
                  <h3 className="text-white text-xl font-black tracking-tight mb-1.5">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest opacity-90">
                    <CheckCircle2 className="w-3 h-3 text-[#00C2FF]" />
                    {service.subtitle}
                  </div>
                </div>

                {/* Stats Row - Bolder & More Visible on Hover */}
                <div className="flex justify-between items-center pt-5 mt-5 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex flex-col items-center">
                    <Users className="w-4 h-4 text-[#00C2FF] mb-1" />
                    <span className="text-[9px] text-white font-black tracking-widest uppercase">
                      {service.team}
                    </span>
                  </div>
                  <div className="flex flex-col items-center border-x border-white/20 px-4">
                    <Building2 className="w-4 h-4 text-[#00C2FF] mb-1" />
                    <span className="text-[9px] text-white font-black tracking-widest uppercase">
                      {service.timeline}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-white mb-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                      <span className="text-xs font-black">
                        {service.rating}
                      </span>
                    </div>
                    <span className="text-[9px] text-white font-black tracking-widest uppercase">
                      Rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Button - Floating & Transparent Background */}
              <div className="absolute inset-x-0 bottom-8 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <button className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.3em] bg-linear-to-r from-[#00C2FF] to-[#0088ff] px-8 py-3 rounded-xl shadow-2xl">
                  ENQUIRY NOW
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
