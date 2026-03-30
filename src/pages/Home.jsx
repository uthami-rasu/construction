import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectGallery from "../components/ProjectGallery";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <WhyChooseUs />
      <Services />
      <ProjectGallery />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default Home;
