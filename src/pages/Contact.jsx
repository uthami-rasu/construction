import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactFormRefined from "../components/ContactFormRefined";
import ContactInfo from "../components/ContactInfo";
import ContactMap from "../components/ContactMap";
import { motion } from "framer-motion";

const Contact = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <ContactHero />
        
        <ContactFormRefined />
        <ContactInfo />
        <ContactMap />
      </main>
   
    </div>
  );
};

export default Contact;
