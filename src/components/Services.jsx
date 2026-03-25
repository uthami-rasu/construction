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
} from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    description:
      "Custom homes tailored to your lifestyle, built with precision and modern design principles.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Commercial Construction",
    description:
      "State-of-the-art office spaces and retail landmarks that drive business growth and community value.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Project Management",
    description:
      "End-to-end guidance from planning to execution, ensuring timelines and budgets are strictly met.",
    icon: ClipboardList,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Custom Construction",
    description:
      "Unique structural solutions for complex architectural visions, pushing the boundaries of engineering.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Sustainable Building",
    description:
      "Eco-friendly materials and energy-efficient designs for a greener, more sustainable future.",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1518005020950-ec8fa0fa5102?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Renovations & Remodeling",
    description:
      "Transforming existing spaces into modern masterpieces with minimal disruption to your routine.",
    icon: PaintBucket,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-32 bg-white relative overflow-hidden font-poppins"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00C2FF] text-xs font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight max-w-3xl mx-auto"
          >
            Our Comprehensive Construction <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#005a77]">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Delivering quality, efficiency, and excellence in every brick we lay
            and every beam we place.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#f8fbff] rounded-[2.5rem] overflow-hidden border border-blue-50 hover:shadow-[0_40px_80px_-20px_rgba(0,194,255,0.15)] transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent"></div>

                {/* Icon Overlay */}
                <div className="absolute top-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:bg-[#00C2FF] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-10 pb-12">
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#00C2FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-8 opacity-80">
                  {service.description}
                </p>
                <a
                  href={`#${service.title.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center gap-3 text-sm font-black text-[#00C2FF] uppercase tracking-widest hover:gap-5 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#00C2FF] to-[#005a77] group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[150px] -z-10"></div>
    </section>
  );
};

export default Services;
