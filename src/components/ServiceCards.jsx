import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import service1 from "../assets/images/abt-gallery1.jpeg";
import service2 from "../assets/images/about.jpeg";
import service3 from "../assets/images/hero-1.jpeg";
import service4 from "../assets/images/hero-2.jpeg";
import service5 from "../assets/images/service.jpeg";
import service6 from "../assets/images/abt-rename.jpeg";

const services = [
  {
    title: "Residential Construction",
    description: "Building dream homes with precision and care. We specialize in custom residential projects that reflect your lifestyle and vision.",
    image: service1,
  },
  {
    title: "Commercial Building",
    description: "Creating functional and impressive commercial spaces. From offices to retail centers, we deliver projects on time and within budget.",
    image: service2,
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform existing spaces into something extraordinary. We breathe new life into old structures with innovative renovation solutions.",
    image: service3,
  },
  {
    title: "Project Management",
    description: "Expert oversight from start to finish. Our project management services ensure seamless coordination and successful project delivery.",
    image: service4,
  },
  {
    title: "Design & Planning",
    description: "Innovative designs that bring your vision to life. Our architects and designers create functional and aesthetically pleasing spaces.",
    image: service5,
  },
  {
    title: "Consultation Services",
    description: "Expert advice for your construction needs. We provide professional consultation to help you make informed decisions about your project.",
    image: service6,
  },
];

const ServiceCards = () => {
  return (
    <section className="py-32 bg-[#fcfcfc] font-poppins relative overflow-hidden">
      {/* Subtle Background Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,15 50,20 T100,20" fill="none" stroke="black" strokeWidth="0.1" />
          <path d="M0,40 Q25,35 50,40 T100,40" fill="none" stroke="black" strokeWidth="0.1" />
          <path d="M0,60 Q25,55 50,60 T100,60" fill="none" stroke="black" strokeWidth="0.1" />
          <path d="M0,80 Q25,75 50,80 T100,80" fill="none" stroke="black" strokeWidth="0.1" />
          
          <circle cx="20" cy="20" r="15" fill="none" stroke="black" strokeWidth="0.05" />
          <circle cx="80" cy="80" r="25" fill="none" stroke="black" strokeWidth="0.05" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24 max-w-7xl mx-auto">
          <div>
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#00C2FF] font-bold text-sm uppercase tracking-[0.4em] mb-4"
            >
              Professional Services
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-black text-[#1a1a1a] tracking-tighter uppercase"
            >
              What We Do
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium"
          >
            We offer comprehensive construction solutions tailored to your specific needs, 
            covering everything from planning and design to execution and finishing. 
            Our focus is on delivering durable, efficient, and cost-effective results 
            without compromising on quality or timelines.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -15 }}
              className="group relative h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Rich Dark Gradient Mask */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/30"></div>
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 p-10 flex flex-col justify-center z-10 text-center">
                <div className="mb-4">
                  <h3 className="text-white text-3xl font-black mb-4 leading-tight uppercase tracking-tight group-hover:text-[#00C2FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Elements */}
              <div className="absolute bottom-0 left-0 w-full p-10 flex items-center justify-between z-20">
                {/* Skyblue Line Anchor */}
                <div className="h-1 w-20 bg-[#00C2FF] rounded-full group-hover:w-full transition-all duration-700 origin-left"></div>
                
                {/* Action Button */}
                <div className="ml-6 flex-shrink-0 w-14 h-14 bg-[#00C2FF] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-45 transition-all duration-500 cursor-pointer">
                  <ArrowRight className="w-6 h-6 text-white -rotate-45" />
                </div>
              </div>

              {/* Top Reveal Glassy Overlay (Premium Touch) */}
              <div className="absolute top-0 left-0 w-full h-0 bg-white/10 backdrop-blur-sm group-hover:h-full transition-all duration-700 pointer-events-none opacity-0 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
