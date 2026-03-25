import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "MRS. PRINCY ANAND",
    text: "My personal experience for my home was very good and satisfied. My wishes sir grow more and more in this field",
    image: "https://i.pravatar.cc/150?img=32",
    isFeatured: false,
  },
  {
    name: "MR. JOTHIMANI",
    text: "A job well done and best wishes for continued growth",
    image: "https://i.pravatar.cc/150?img=12",
    isFeatured: true,
  },
  {
    name: "MRS. ANITA MANI",
    text: "Nice and worthful work Good quality too.. All the Best KRRISH CONTRUCTION",
    image: "https://i.pravatar.cc/150?img=44",
    isFeatured: false,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden font-poppins">
      {/* Construction Blueprint BG Item */}
      <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none">
        <svg width="400" height="600" viewBox="0 0 100 150">
          <path
            d="M10 140 L90 140 M20 140 L20 40 L80 40 L80 140 M30 40 L30 140 M40 40 L40 140 M50 40 L50 140 M60 40 L60 140 M70 40 L70 140"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-montserrat font-black text-gray-900 tracking-tight uppercase"
          >
            CUSTOMER REVIEWS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium uppercase tracking-[0.2em] mt-4 text-sm"
          >
            What Our Clients Say
          </motion.p>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-end">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Speech Bubble */}
              <div
                className={`relative p-10 rounded-[2.5rem] mb-12 shadow-sm transition-all duration-500 hover:shadow-xl group
                  ${
                    review.isFeatured
                      ? "bg-[#ffcb0f] text-white"
                      : "bg-[#e5e7eb]/50 text-gray-600 border border-gray-100"
                  }`}
              >
                <Quote
                  className={`w-10 h-10 mb-4 opacity-50 ${review.isFeatured ? "text-white" : "text-gray-400"}`}
                />
                <p className="text-lg font-medium leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Bubble Arrow */}
                <div
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rotate-45 
                    ${review.isFeatured ? "bg-[#ffcb0f]" : "bg-[#e5e7eb]/50 border-r border-b border-gray-100"}`}
                ></div>
              </div>

              {/* Avatar & Name */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transform transition-transform group-hover:scale-110">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="text-sm font-black text-gray-900 tracking-widest uppercase">
                  {review.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
