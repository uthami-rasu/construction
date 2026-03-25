import React, { useEffect } from "react";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectGallery from "./components/ProjectGallery";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-900 selection:bg-[#00C2FF]/30">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Stats />
        <AboutSection />
        <WhyChooseUs />
        <Services />
        <ProjectGallery />

        {/* Placeholder for future sections */}
        <section className="h-64 bg-gray-50 flex items-center justify-center text-gray-400 font-medium italic">
          More sections coming soon...
        </section>
      </main>
    </div>
  );
}

export default App;
