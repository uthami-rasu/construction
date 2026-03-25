import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Mrs. Princy Anand",
    role: "Homeowner",
    text: "My personal experience for my home was very good and satisfied. My wishes sir, grow more and more in this field.",
    image: "https://i.pravatar.cc/150?img=32",
    isFeatured: false,
  },
  {
    name: "Mr. Jothimani",
    role: "Business Owner",
    text: "A job well done and best wishes for continued growth. Truly a world-class team.",
    image: "https://i.pravatar.cc/150?img=12",
    isFeatured: true,
  },
  {
    name: "Mrs. Anita Mani",
    role: "Client",
    text: "Nice and worthful work. Good quality too. All the Best Krrish Construction!",
    image: "https://i.pravatar.cc/150?img=44",
    isFeatured: false,
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 bg-linear-to-br from-gray-900 via-[#1a1a2e] to-gray-950 relative overflow-hidden font-poppins">
      {/* Subtle blueprint background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      {/* Top and bottom gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#ffcb0f] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#ffcb0f] to-transparent opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#ffcb0f]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
              Testimonials
            </span>
            <div className="w-8 h-px bg-[#ffcb0f]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-montserrat font-black text-white uppercase tracking-tight leading-none"
          >
            Customer{" "}
            <span className="relative inline-block">
              Reviews
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#ffcb0f] origin-left rounded-full"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 font-medium uppercase tracking-[0.3em] mt-5 text-xs"
          >
            What Our Clients Say
          </motion.p>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Speech Bubble */}
              <div
                className={`relative w-full p-8 mb-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                  ${
                    review.isFeatured
                      ? "bg-[#ffcb0f] shadow-lg shadow-[#ffcb0f]/20"
                      : "bg-white/5 shadow-md border border-white/10 backdrop-blur-sm"
                  }`}
              >
                {/* Big quote mark */}
                <span
                  className={`block font-serif text-7xl leading-none mb-3 select-none
                    ${review.isFeatured ? "text-white/40" : "text-white/20"}`}
                >
                  "
                </span>
                <p
                  className={`text-base leading-relaxed font-medium italic -mt-6
                    ${review.isFeatured ? "text-white" : "text-white/60"}`}
                >
                  {review.text}
                </p>

                {/* Bubble tail */}
                <div
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45
                    ${review.isFeatured ? "bg-[#ffcb0f]" : "bg-white/10 border-r border-b border-white/10"}`}
                />
              </div>

              {/* Avatar */}
              <div className="text-center mt-2">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-black text-white tracking-widest uppercase">
                  {review.name}
                </h4>
                <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mt-1">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
