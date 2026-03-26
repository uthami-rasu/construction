import React from "react";
import { MapPin, Mail, Phone, Clock, Heart, ArrowUp } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "Our Services", href: "#services" },
    { label: "Meet Our Team", href: "#contact-us" },
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* White Background with Grid Pattern */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(209,213,219,0.15)_1px,transparent_1px),linear-gradient(rgba(209,213,219,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Animated Top Border */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_20px_rgba(135,206,235,0.4)]" />

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-12 pb-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Column 1 - Brand & Hours */}
          <div className="group">
            <div className="mb-6 md:mb-8 flex items-center justify-center">
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-sky-100 via-sky-50 to-blue-50 border border-sky-200 shadow-[0_10px_30px_rgba(135,206,235,0.3)] hover:shadow-[0_15px_40px_rgba(135,206,235,0.4)] transition-all duration-300 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.6)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(135,206,235,0.1)_0%,transparent_70%)]" />

                {/* Inner ring border for depth */}
                <div className="absolute inset-4 rounded-xl border border-sky-100/50" />

                {/* Logo */}
                <div className="relative z-10">
                  <img
                    src={logo}
                    alt="Krrish Construction"
                    className="h-32 md:h-48 lg:h-56 w-auto object-contain drop-shadow-md hover:drop-shadow-lg transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-8 text-justify">
              We build with expertise and innovation, creating spaces that
              reflect quality, reliability and lasting value.
            </p>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-sky-100 to-blue-50 border border-sky-300 hover:border-sky-400 shadow-sm transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-sky-200 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-sky-600" />
              </div>
              <span className="text-gray-700 text-xs font-medium">
                Mon - Sat · 9 AM - 8 PM
              </span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sky-500 font-bold text-base mb-6 uppercase tracking-wider relative">
              Quick Links
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full" />
            </h4>
            <ul className="space-y-3 pt-1">
              {quickLinks.map((link, idx) => (
                <li key={link.label} className="overflow-hidden">
                  <a
                    href={link.href}
                    className="group/link flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 font-medium transition-all duration-300 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover/link:translate-x-0" />
                    <span className="group-hover/link:translate-x-1 transition-all duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-sky-500 font-bold text-base mb-6 uppercase tracking-wider relative">
              Get in Touch
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full" />
            </h4>
            <ul className="space-y-4 pt-1">
              <li>
                <a
                  href="https://maps.google.com/?q=Krrish+Construction+Rajapalayam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/contact flex gap-3 text-gray-600 text-xs hover:text-blue-600 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-300 flex items-center justify-center flex-shrink-0 group-hover/contact:bg-sky-200 group-hover/contact:border-blue-500 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="leading-relaxed pt-1">
                    217/4, Sri Lakshmi Complex, Cotton Market, Rajapalayam - 626
                    117
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:krrishconstruction95@gmail.com?subject=Message from Client"
                  className="group/contact flex gap-3 text-gray-600 text-xs hover:text-blue-600 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-300 flex items-center justify-center flex-shrink-0 group-hover/contact:bg-sky-200 group-hover/contact:border-blue-500 transition-all duration-300">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="break-all pt-1">
                    krrishconstruction95@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918610813419"
                  className="group/contact flex gap-3 text-gray-600 text-xs hover:text-blue-600 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-300 flex items-center justify-center flex-shrink-0 group-hover/contact:bg-sky-200 group-hover/contact:border-blue-500 transition-all duration-300">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="pt-1">+91 8610813419</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Map */}
          <div>
            <h4 className="text-sky-500 font-bold text-base mb-6 uppercase tracking-wider relative">
              Find Us
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full" />
            </h4>
            <div className="rounded-lg overflow-hidden border border-sky-300 shadow-lg shadow-sky-200 hover:shadow-sky-300 transition-all duration-300 pt-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.567919465809!2d77.5555514750242!3d9.459231990620282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e93c7f5e98c7%3A0xa844ec3e022a73b6!2sKRRISH%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1746190968174!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Krrish Construction Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mx-4 md:mx-6 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

      {/* Footer Bottom */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-4">
        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/KrrishConstruction?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-lg border border-sky-400 bg-gradient-to-br from-sky-100 to-blue-50 flex items-center justify-center text-sky-600 hover:from-sky-200 hover:to-blue-100 hover:border-sky-600 hover:text-sky-800 hover:scale-110 hover:shadow-lg shadow-sky-200 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/krrish_construction/?igsh=MXZ4M2R1YWh5ajlmMg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-lg border border-sky-400 bg-gradient-to-br from-sky-100 to-blue-50 flex items-center justify-center text-sky-600 hover:from-sky-200 hover:to-blue-100 hover:border-sky-600 hover:text-sky-800 hover:scale-110 hover:shadow-lg shadow-sky-200 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.794.272-1.473.646-2.154 1.327-.682.68-1.055 1.361-1.327 2.154-.27.789-.471 1.659-.54 2.937C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.062 1.277.261 2.148.53 2.913.272.763.646 1.466 1.327 2.147.68.68 1.34 1.025 2.132 1.317.778.272 1.700.478 2.997.538C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.061 2.148-.261 2.913-.53.763-.272 1.466-.646 2.147-1.327.68-.68 1.025-1.34 1.317-2.132.272-.778.478-1.700.538-2.997.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.061-1.277-.261-2.148-.53-2.913-.272-.763-.646-1.466-1.327-2.147-.68-.68-1.34-1.025-2.132-1.317-.778-.272-1.700-.478-2.997-.538C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.06 1.264.07 1.645.07 4.849 0 3.203-.01 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.06-1.645.07-4.849.07-3.203 0-3.585-.01-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.06-1.264-.07-1.645-.07-4.849 0-3.203.01-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.06 1.645-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@KrrishConstruction"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-lg border border-sky-400 bg-gradient-to-br from-sky-100 to-blue-50 flex items-center justify-center text-sky-600 hover:from-sky-200 hover:to-blue-100 hover:border-sky-600 hover:text-sky-800 hover:scale-110 hover:shadow-lg shadow-sky-200 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:krrishconstruction95@gmail.com?subject=Message from Client"
            className="w-10 h-10 rounded-lg border border-sky-400 bg-gradient-to-br from-sky-100 to-blue-50 flex items-center justify-center text-sky-600 hover:from-sky-200 hover:to-blue-100 hover:border-sky-600 hover:text-sky-800 hover:scale-110 hover:shadow-lg shadow-sky-200 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          {/* WhatsApp - using SVG since lucide doesn't have it */}
          <a
            href="https://wa.me/message/CMNBNRISY55ZK1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-lg border border-sky-400 bg-gradient-to-br from-sky-100 to-blue-50 flex items-center justify-center text-sky-600 hover:from-sky-200 hover:to-blue-100 hover:border-sky-600 hover:text-sky-800 hover:scale-110 hover:shadow-lg shadow-sky-200 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-sky-300 pt-4">
          <p className="text-gray-700 text-xs md:text-sm mb-1">
            Made with{" "}
            <Heart className="w-3 h-3 md:w-4 md:h-4 inline text-red-500 fill-red-500 animate-pulse" />{" "}
            by{" "}
            <a
              href="#home"
              className="text-sky-600 hover:text-sky-700 font-semibold transition-colors"
            >
              Krrish Construction
            </a>
          </p>
          <p className="text-gray-600 text-xs">© 2025. All Rights Reserved</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-300 flex items-center justify-center hover:shadow-sky-400 hover:scale-110 hover:from-sky-600 hover:to-sky-700 hover:-translate-y-1 transition-all duration-300 z-50 border border-sky-400"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
