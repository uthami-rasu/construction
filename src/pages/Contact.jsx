import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactFormRefined from "../components/ContactFormRefined";
import ContactInfo from "../components/ContactInfo";
import ContactMap from "../components/ContactMap";
import ContactGallery from "../components/ContactGallery";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const { hash } = useLocation();

  // Scroll to top or to hash on mount/location change
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactFormRefined />
        <ContactGallery />
        <ContactInfo />
        <ContactMap />
      </main>
     
    </div>
  );
};

export default Contact;
