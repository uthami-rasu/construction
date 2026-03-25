import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import hero1 from "../assets/images/hero-1.jpeg";
import hero2 from "../assets/images/hero-2.jpeg";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070",
    title: "Precision Construction",
  },
  {
    image: hero1,
    title: "Modern Architecture",
  },
  {
    image: hero2,
    title: "Modern Architecture",
  },
  {
    image:
      "https://i.pinimg.com/1200x/d9/07/f5/d907f5a6437fcdcc21bdf193fb6e65be.jpg",
    title: "Sustainable Infrastructure",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black font-poppins">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover animate-[kenburns_10s_linear_infinite]"
              />
              <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center pointer-events-none pb-20 mt-10">
        <div className="max-w-6xl pointer-events-auto">
          {/* Subheading */}
          <p className="text-[#ffcb0f] text-sm md:text-lg font-black uppercase tracking-[0.4em] mb-6 animate-[fadeInDown_1s_ease-out]">
            Turning Ideas into Landmarks
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-7xl font-black text-white mb-10 uppercase leading-[1.1] tracking-tighter animate-[fadeInScale_1.2s_ease-out]">
            CONSTRUCTION <br />
            <span className="text-[#00C2FF]">SERVICES</span>
          </h1>

          {/* Bold Description */}
          <p className="text-sm md:text-xl text-white mb-14 max-w-4xl mx-auto leading-relaxed font-bold opacity-95 animate-[fadeIn_1.5s_ease-out] drop-shadow-xl px-4">
            We don't just build structures—we create spaces that inspire,
            endure, and bring your vision to life. Whether you need a new home,
            a commercial space, or a large-scale project, we ensure top-tier
            craftsmanship from start to finish.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-6 animate-[fadeInUp_1.8s_ease-out]">
            <button className="group bg-[#ffcb0f] text-black px-10 py-4 rounded-full font-black hover:bg-[#ffdb4d] hover:scale-105 transition-all uppercase tracking-widest text-xs flex items-center gap-3">
              KNOW MORE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[3px]" />
            </button>
            <button className="group bg-transparent border-2 border-white/60 text-white px-10 py-4 rounded-full font-black hover:bg-white/10 hover:scale-105 transition-all uppercase tracking-widest text-xs flex items-center gap-3">
              VIEW PROJECT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[3px]" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translateY(0); }
          100% { transform: scale(1.15) translateY(-2%); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
