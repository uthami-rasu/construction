import React, { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  Home,
  Info,
  Hammer,
  Briefcase,
  Mail,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", icon: Home, href: "#home" },
    { label: "About Us", icon: Info, href: "#about-us" },
    { label: "Services", icon: Hammer, href: "#services" },
    { label: "Portfolio", icon: Briefcase, href: "#portfolio" },
    { label: "Contact Us", icon: Mail, href: "#contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-start pt-2">
          <div className="text-xl md:text-3xl font-black text-white leading-none tracking-tighter">
            <span className="text-[#00C2FF]">KRRISH</span> CONSTRUCTION
          </div>
          <div className="text-[10px] md:text-xs text-[#00C2FF] font-black tracking-[0.3em] uppercase mt-1">
            We Build Your Dreams
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex items-center gap-3 text-sm font-bold text-white hover:text-[#00C2FF] transition-all uppercase tracking-[0.15em]"
            >
              <item.icon className="w-5 h-5 text-[#00C2FF] transition-transform group-hover:scale-110 shadow-sm" />
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-white/20 mx-4"></div>
          <button className="text-white hover:text-[#00C2FF] transition-all p-2 hover:bg-white/10 rounded-full">
            <Search className="w-6 h-6" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-white/10 py-10 px-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-5 text-lg font-black text-white hover:text-[#00C2FF] transition-colors uppercase tracking-widest"
              >
                <item.icon className="w-6 h-6 text-[#00C2FF]" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
