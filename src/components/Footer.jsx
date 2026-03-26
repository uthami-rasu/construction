import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
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
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#060e1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,194,255,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,194,255,0.05)_0%,transparent_50%)]" />

      {/* Decorative top border */}
      <div className="relative">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={logo}
                alt="Krrish Construction"
                className="h-20 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We build with expertise and innovation, creating spaces that
              reflect quality, reliability and lasting value.
            </p>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="w-9 h-9 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#00C2FF]" />
              </div>
              <span>Mon - Sat · 9:00 AM to 8:00 PM</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative">
              Explore Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#00C2FF] rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 text-sm hover:text-[#00C2FF] transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-[#00C2FF]/50 group-hover:text-[#00C2FF] group-hover:translate-x-1 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#00C2FF] rounded-full" />
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="https://maps.google.com/?q=Krrish+Construction+Rajapalayam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-gray-400 text-sm hover:text-gray-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#00C2FF]/20 transition-colors">
                    <MapPin className="w-4 h-4 text-[#00C2FF]" />
                  </div>
                  <span className="leading-relaxed">
                    217/4, Sri Lakshmi Complex, Dharmapuram Street, Cotton
                    Market, Rajapalayam - 626 117
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:krrishconstruction95@gmail.com?subject=Message from Client"
                  className="group flex items-center gap-3 text-gray-400 text-sm hover:text-gray-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C2FF]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#00C2FF]" />
                  </div>
                  <span className="break-all">
                    krrishconstruction95@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918610813419"
                  className="group flex items-center gap-3 text-gray-400 text-sm hover:text-gray-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C2FF]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[#00C2FF]" />
                  </div>
                  <span>+91 8610813419</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Locate Us */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative">
              Locate Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#00C2FF] rounded-full" />
            </h4>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.567919465809!2d77.5555514750242!3d9.459231990620282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e93c7f5e98c7%3A0xa844ec3e022a73b6!2sKRRISH%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1746190968174!5m2!1sen!2sin"
                width="100%"
                height="200"
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

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            {[
              {
                icon: Facebook,
                href: "https://www.facebook.com/KrrishConstruction?mibextid=ZbWKwL",
                label: "Facebook",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/krrish_construction/?igsh=MXZ4M2R1YWh5ajlmMg%3D%3D",
                label: "Instagram",
              },
              {
                icon: Youtube,
                href: "https://www.youtube.com/@KrrishConstruction",
                label: "YouTube",
              },
              {
                icon: Mail,
                href: "mailto:krrishconstruction95@gmail.com?subject=Message from Client",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/5 flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white hover:border-[#00C2FF] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
            {/* WhatsApp - using SVG since lucide doesn't have it */}
            <a
              href="https://wa.me/message/CMNBNRISY55ZK1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/5 flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white hover:border-[#00C2FF] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-500 text-sm">
            Made with{" "}
            <Heart className="w-4 h-4 inline text-red-500 fill-red-500 animate-pulse" />{" "}
            by{" "}
            <a
              href="#home"
              className="text-[#00C2FF] hover:text-[#00C2FF]/80 font-semibold transition-colors"
            >
              Krrish Construction
            </a>{" "}
            © 2025. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#00C2FF] text-white shadow-lg shadow-[#00C2FF]/30 flex items-center justify-center hover:bg-[#00C2FF]/90 hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
