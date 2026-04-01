import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    if (item.path) {
      // It's a page link
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    const href = item.href;
    const id = href.replace("#", "");

    if (location.pathname !== "/") {
      // If not on home page, navigate to home first then scroll
      navigate("/" + href);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", icon: Home, href: "#home", path: "/" },
    { label: "About Us", icon: Info, href: "#about-us", path: "/about" },
    { label: "Services", icon: Hammer, href: "#services", path: "/services" },
    { label: "Portfolio", icon: Briefcase, href: "#portfolio" },
    { label: "Contact Us", icon: Mail, href: "#contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex flex-col items-start pt-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-xl md:text-3xl font-black text-white leading-none tracking-tighter">
            <span className="text-[#00C2FF]">KRRISH</span> CONSTRUCTION
          </div>
          <div className="text-[10px] md:text-xs text-[#00C2FF] font-black tracking-[0.3em] uppercase mt-1">
            We Build Your Dreams
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
          {navItems.map((item) => (
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className={`group flex items-center gap-1 xl:gap-3 text-xs xl:text-sm font-bold transition-all uppercase tracking-[0.15em] whitespace-nowrap ${
                  location.pathname === item.path ? "text-[#00C2FF]" : "text-white hover:text-[#00C2FF]"
                }`}
              >
                <item.icon className={`w-4 xl:w-5 h-4 xl:h-5 transition-transform group-hover:scale-110 shadow-sm flex-shrink-0 ${
                  location.pathname === item.path ? "text-[#00C2FF]" : "text-[#00C2FF]"
                }`} />
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="group flex items-center gap-1 xl:gap-3 text-xs xl:text-sm font-bold text-white hover:text-[#00C2FF] transition-all uppercase tracking-[0.15em] whitespace-nowrap"
              >
                <item.icon className="w-4 xl:w-5 h-4 xl:h-5 text-[#00C2FF] transition-transform group-hover:scale-110 shadow-sm flex-shrink-0" />
                {item.label}
              </a>
            )
          ))}
          <div className="h-6 w-px bg-white/20 mx-2 xl:mx-4"></div>
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
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-5 text-lg font-black uppercase tracking-widest ${
                    location.pathname === item.path ? "text-[#00C2FF]" : "text-white hover:text-[#00C2FF]"
                  }`}
                >
                  <item.icon className="w-6 h-6 text-[#00C2FF]" />
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center gap-5 text-lg font-black text-white hover:text-[#00C2FF] transition-colors uppercase tracking-widest"
                >
                  <item.icon className="w-6 h-6 text-[#00C2FF]" />
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
