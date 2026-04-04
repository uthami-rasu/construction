import React, { useEffect } from "react";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioGallery from "../components/PortfolioGallery";
import { motion } from "framer-motion";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Portfolio Hero Section */}
      <PortfolioHero />

      {/* Modern Portfolio Gallery Section */}
      <PortfolioGallery />

      {/* SEO Optimized Hidden Content */}
      <section className="sr-only">
        <h1>Krrish Construction Portfolio - Modern Architectural Landscapes</h1>
        <p>
          Explore our diverse range of construction projects, from luxury
          residences to commercial landmarks. We specialize in building
          durable, smart, and precisely engineered structures.
        </p>
      </section>
    </motion.main>
  );
};

export default Portfolio;
