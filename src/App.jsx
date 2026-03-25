import { useState } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#00C2FF]/30">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Stats />
        <AboutSection />
        <WhyChooseUs />
        <Services />

        {/* Placeholder for future sections */}
        <section className="h-64 bg-gray-50 flex items-center justify-center text-gray-400 font-medium italic">
          More sections coming soon...
        </section>
      </main>
    </div>
  );
}

export default App;
