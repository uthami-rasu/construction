import React, { useState, useEffect } from "react";
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
  const [showNavigation, setShowNavigation] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth > 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[100svh] w-full overflow-hidden bg-black font-poppins"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={showNavigation ? true : false}
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
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 text-center pointer-events-none pb-16 sm:pb-20 mt-8 sm:mt-10 hero-content-container">
        <div className="w-full max-w-6xl pointer-events-auto">
          {/* Subheading */}
          <p className="text-[#ffcb0f] text-lg sm:text-base md:text-lg font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-4 sm:mb-6 mt-40 sm:mt-0 animate-[fadeInDown_1s_ease-out] hero-subheading">
            Turning Ideas into Landmarks
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-white mb-10 sm:mb-10 uppercase leading-[1.1] tracking-tighter animate-[fadeInScale_1.2s_ease-out] hero-heading">
            CONSTRUCTION <br />
            <span className="text-[#00C2FF]">SERVICES</span>
          </h1>

          {/* Bold Description */}
          <p className="text-lg sm:text-lg md:text-xl text-white mb-6 sm:mb-14 max-w-4xl mx-auto leading-relaxed font-bold opacity-95 animate-[fadeIn_1.5s_ease-out] drop-shadow-xl px-2 sm:px-4 hero-description">
            We don't just build structures—we create spaces that inspire,
            endure, and bring your vision to life. Whether you need a new home,
            a commercial space, or a large-scale project, we ensure top-tier
            craftsmanship from start to finish.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mt-36 sm:mt-0 animate-[fadeInUp_1.8s_ease-out] hero-buttons-container">
            <button className="group bg-[#ffcb0f] text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-black hover:bg-[#ffdb4d] hover:scale-105 transition-all uppercase tracking-widest text-sm sm:text-xs flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              KNOW MORE
              <ArrowRight className="hidden sm:inline-flex w-3 sm:w-5 h-3 sm:h-5 group-hover:translate-x-1 transition-transform stroke-[3px]" />
            </button>
            <button className="group bg-[#ffcb0f] text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-black hover:bg-[#ffdb4d] hover:scale-105 transition-all uppercase tracking-widest text-sm sm:text-xs flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              VIEW PROJECT
              <ArrowRight className="hidden sm:inline-flex w-3 sm:w-5 h-3 sm:h-5 group-hover:translate-x-1 transition-transform stroke-[3px]" />
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

        /* Specific fix for Nest Hub (1024x600) */
        @media (width: 1024px) and (height: 600px) {
          .hero-content-container {
            padding-bottom: 2rem !important;
            margin-top: 3rem !important;
          }
          .hero-subheading {
            font-size: 0.8rem !important;
            margin-bottom: 0.5rem !important;
            letter-spacing: 0.2em !important;
          }
          .hero-heading {
            font-size: 3rem !important;
            margin-bottom: 1.5rem !important;
            line-height: 1.1 !important;
          }
          .hero-description {
            font-size: 0.9rem !important;
            margin-bottom: 2rem !important;
            max-width: 80% !important;
            line-height: 1.4 !important;
          }
          .hero-buttons-container {
            margin-top: 1rem !important;
            gap: 1rem !important;
          }
          .hero-buttons-container button {
            padding: 0.8rem 1.5rem !important;
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
